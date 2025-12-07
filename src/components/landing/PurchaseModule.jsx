import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Truck, Shield, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function PurchaseModule() {
  const [selectedSize, setSelectedSize] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1500);
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/d87974faa_brkn1_trans.png"
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
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl font-bold text-white">$XX</span>
                <span className="text-[#6A6A6A] text-sm">AUD</span>
              </div>

              {/* Size selector */}
              <div className="mb-6">
                <label className="text-sm text-[#9A9A9A] mb-3 block font-mono tracking-wide">
                  SELECT SIZE
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full bg-[#0A0A0A] border-[#2A2A2A] text-white h-14 text-lg hover:border-[#6C7A6F]/50 transition-colors">
                    <SelectValue placeholder="Choose your size" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-[#2A2A2A]">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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

              {/* Add to Cart button */}
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize || isAdding}
                className={`
                  w-full h-14 text-base font-medium tracking-wider transition-all duration-300
                  ${selectedSize 
                    ? 'bg-white text-black hover:bg-[#6C7A6F] hover:text-white' 
                    : 'bg-[#2A2A2A] text-[#6A6A6A] cursor-not-allowed'
                  }
                `}
              >
                {isAdding ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                    />
                    ADDING...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    ADD TO CART
                  </span>
                )}
              </Button>

              {/* Shipping note */}
              <div className="mt-6 p-4 bg-[#0A0A0A] rounded-xl">
                <p className="text-[#9A9A9A] text-sm flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#6C7A6F]" />
                  Ships via Tapstitch (Global Fulfilment)
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-[#2A2A2A] grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Shield className="w-5 h-5 text-[#6C7A6F] mx-auto mb-2" />
                  <p className="text-xs text-[#6A6A6A]">Secure Payment</p>
                </div>
                <div className="text-center">
                  <Truck className="w-5 h-5 text-[#6C7A6F] mx-auto mb-2" />
                  <p className="text-xs text-[#6A6A6A]">Global Shipping</p>
                </div>
                <div className="text-center">
                  <Clock className="w-5 h-5 text-[#6C7A6F] mx-auto mb-2" />
                  <p className="text-xs text-[#6A6A6A]">Made to Order</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}