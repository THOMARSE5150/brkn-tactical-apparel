import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, Shield, Clock, Loader2, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { base44 } from "@/api/base44Client";
import PriceDisplay from './PriceDisplay';

export default function PurchaseModule() {
  const [selectedSize, setSelectedSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [localizedPrice, setLocalizedPrice] = useState({ currency: 'USD' });
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
    fetchLocalizedPrice();
  }, []);

  const fetchLocalizedPrice = async () => {
    try {
      const response = await base44.functions.invoke('getLocalizedPrice', { priceUSD: 75 });
      setLocalizedPrice(response.data);
    } catch (err) {
      setLocalizedPrice({ currency: 'USD' });
    }
  };

  const handleAddToCart = async () => {
    if (!selectedSize) return;
    
    if (isInIframe) {
      setError('Checkout must be opened from the published app, not the preview.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const origin = window.location.origin;
      const response = await base44.functions.invoke('createCheckout', {
        size: selectedSize,
        currency: localizedPrice.currency,
        successUrl: `${origin}/?payment=success`,
        cancelUrl: `${origin}/?payment=cancelled`
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        setError('Failed to create checkout session');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="purchase" className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-[#111] rounded-2xl overflow-hidden relative">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/4c7d1fdb3_OversizeFleecedHoodie-gallery-2.png"
                alt="BRKN Tactical Hoodie"
                className="w-full h-full object-contain p-8"
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#6C7A6F]/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#6C7A6F]/40" />
            </div>
          </motion.div>

          {/* Purchase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-[#111] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10">
              {/* Limited badge */}
              <Badge className="bg-[#6C7A6F]/20 text-[#6C7A6F] border-[#6C7A6F]/30 mb-6 font-mono text-xs tracking-wider">
                LIMITED DROP — OPS/01
              </Badge>

              {/* Product name */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                BRKN Tactical Hoodie
              </h2>
              <p className="text-[#9A9A9A] mb-6">
                Oversized Fleece · OPS/01
              </p>

              {/* Price */}
              <PriceDisplay baseUSD={75} className="mb-8" />

              {/* Pricing explanation */}
              <div className="mb-8 p-6 bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl">
                <h4 className="text-[#E6E6E6] text-sm font-mono tracking-wider uppercase mb-4">
                  Why it costs what it costs
                </h4>
                <ul className="space-y-2.5 text-[#BBBBBB] text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Heavyweight fabric, built to last</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Small-batch production, not mass volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Intentional design, no excess branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#6C7A6F] mt-1">•</span>
                    <span>Fair pricing — premium without exploitation</span>
                  </li>
                </ul>
              </div>

              {/* Size selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm text-[#CCCCCC] font-mono tracking-wide uppercase">
                    SELECT SIZE
                  </label>
                  <a 
                    href="#sizing" 
                    className="text-xs text-[#6C7A6F] hover:text-white transition-colors font-mono tracking-wider"
                  >
                    SIZE GUIDE →
                  </a>
                </div>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full bg-[#0A0A0A] border-2 border-[#3A3A3A] text-[#E6E6E6] h-14 text-lg hover:border-[#6C7A6F] transition-colors">
                    <SelectValue placeholder="Choose your size" className="text-[#E6E6E6]" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-[#3A3A3A]">
                    {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                      <SelectItem 
                        key={size} 
                        value={size}
                        className="text-white hover:bg-[#2A2A2A] focus:bg-[#2A2A2A] cursor-pointer"
                      >
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Error message */}
              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* Add to Cart button */}
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize || isLoading}
                className={`
                  w-full h-14 text-base font-medium tracking-wider transition-all duration-300
                  ${selectedSize && !isLoading
                    ? 'bg-white text-black hover:bg-[#6C7A6F] hover:text-white' 
                    : 'bg-[#2A2A2A] text-[#6A6A6A] cursor-not-allowed'
                  }
                `}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    CHECKOUT NOW
                  </span>
                )}
              </Button>

              {/* Shipping note */}
              <div className="mt-6 p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl">
                <p className="text-[#BBBBBB] text-sm flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#6C7A6F]" />
                  Secure checkout via Stripe • Global shipping available
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-[#2A2A2A] grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-[#6C7A6F]/10 flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 text-[#6C7A6F]" />
                  </div>
                  <p className="text-xs text-[#AAAAAA] font-medium">Secure Payment</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-[#6C7A6F]/10 flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-5 h-5 text-[#6C7A6F]" />
                  </div>
                  <p className="text-xs text-[#AAAAAA] font-medium">Global Shipping</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-[#6C7A6F]/10 flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-5 h-5 text-[#6C7A6F]" />
                  </div>
                  <p className="text-xs text-[#AAAAAA] font-medium">Made to Order</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
        </section>
        );
        }