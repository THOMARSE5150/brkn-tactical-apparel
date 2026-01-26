import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import Stripe from 'npm:stripe@17.5.0';

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  
  try {
    const signature = req.headers.get('stripe-signature');
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    
    if (!signature || !webhookSecret) {
      console.error('Missing signature or webhook secret');
      return Response.json({ error: 'Webhook authentication failed' }, { status: 400 });
    }

    const body = await req.text();
    
    let event;
    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return Response.json({ error: 'Invalid signature' }, { status: 400 });
    }

    console.log('Webhook event received:', event.type);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      console.log('Processing checkout session:', session.id);

      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;
      const shippingAddress = session.shipping_details?.address;
      
      const metadata = session.metadata || {};
      const size = metadata.size;
      const currency = session.currency?.toUpperCase();
      const amount = session.amount_total / 100;

      const orderData = {
        customer_email: customerEmail,
        customer_name: customerName,
        size: size,
        currency: currency,
        amount: amount,
        stripe_session_id: session.id,
        stripe_payment_intent: session.payment_intent,
        status: 'paid',
        shipping_address: shippingAddress ? {
          line1: shippingAddress.line1,
          line2: shippingAddress.line2,
          city: shippingAddress.city,
          state: shippingAddress.state,
          postal_code: shippingAddress.postal_code,
          country: shippingAddress.country
        } : null
      };

      const order = await base44.asServiceRole.entities.Order.create(orderData);
      console.log('Order created:', order.id);

      try {
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: customerEmail,
          from_name: 'BRKN',
          subject: 'OPS/01 — Order Confirmed',
          body: `
ORDER CONFIRMED

${customerName},

Your OPS/01 order has been confirmed and is now in production.

ORDER DETAILS:
- Product: BRKN OPS/01 Tactical Hoodie
- Size: ${size}
- Amount: ${currency === 'JPY' ? '¥' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$'}${amount}
- Order ID: ${order.id}

WHAT HAPPENS NEXT:
Your hoodie will be produced and shipped within 7-14 business days.
You'll receive tracking information once it ships.

${shippingAddress ? `
SHIPPING TO:
${shippingAddress.line1}
${shippingAddress.line2 || ''}
${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postal_code}
${shippingAddress.country}
` : ''}

Questions? Reply to this email.

— BRKN
B///C1 — TACTICAL SERIES
          `.trim()
        });
        console.log('Confirmation email sent');
      } catch (emailError) {
        console.error('Failed to send email:', emailError.message);
      }
    }

    return Response.json({ received: true });

  } catch (error) {
    console.error('Webhook handler error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});