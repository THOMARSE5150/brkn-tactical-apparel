import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import Stripe from 'npm:stripe@17.5.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

// Price IDs for each currency
const PRICE_IDS = {
  USD: 'price_1StlwVD4SjCXjnRXXKcCrQPE',
  AUD: 'price_1StlwVD4SjCXjnRXCNpiPjUn',
  EUR: 'price_1StlwVD4SjCXjnRXEPT1m8ed',
  GBP: 'price_1StlwVD4SjCXjnRXP2QuEU3i',
  CAD: 'price_1StlwVD4SjCXjnRXumQvMCUY',
  NZD: 'price_1StlwVD4SjCXjnRXtXZ52TDO'
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { size, currency = 'USD', successUrl, cancelUrl } = await req.json();

    if (!size) {
      return Response.json({ error: 'Size is required' }, { status: 400 });
    }

    if (!successUrl || !cancelUrl) {
      return Response.json({ error: 'Success and cancel URLs are required' }, { status: 400 });
    }

    const priceId = PRICE_IDS[currency] || PRICE_IDS.USD;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
        size: size,
        product: 'OPS/01'
      },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'PT', 'FI', 'GR', 'CH', 'SE', 'NO', 'DK', 'PL', 'CZ', 'HU', 'JP', 'SG']
      }
    });

    return Response.json({ url: session.url });

  } catch (error) {
    console.error('Stripe checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});