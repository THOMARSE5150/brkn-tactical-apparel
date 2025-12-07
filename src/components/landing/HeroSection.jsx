import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection({ onViewDetails, onAddToCart }) {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A0A0A]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6C7A6F 1px, transparent 1px), linear-gradient(90deg, #6C7A6F 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Drop code badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1.5 bg-[#1A1A1A] border border-[#2A2A2A] text-[#6C7A6F] text-xs font-mono tracking-widest">
                OPS/01
              </span>
              <span className="text-[#4A4A4A] text-xs font-mono">LIMITED DROP</span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-[#6C7A6F]">BRKN</span> Tactical
              <br />
              <span className="text-[#E6E6E6]">Hoodie</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-[#9A9A9A] max-w-md leading-relaxed mb-4"
            >
              Oversized police-cut hoodie built for the broken & the unbreakable.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm text-[#6C7A6F] font-mono tracking-wide mb-10"
            >
              "Impossible is just something you do."
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onViewDetails}
                variant="outline"
                className="px-8 py-6 bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest font-medium"
              >
                VIEW DETAILS
                <ChevronDown className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={onAddToCart}
                className="px-8 py-6 bg-white text-black hover:bg-[#6C7A6F] hover:text-white transition-all duration-300 text-sm tracking-widest font-medium"
              >
                <ShoppingBag className="mr-2 w-4 h-4" />
                ADD TO CART
              </Button>
            </motion.div>

            {/* Brand code */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex items-center gap-6"
            >
              <span className="text-[#3A3A3A] text-xs font-mono">B///C1</span>
              <div className="h-px w-12 bg-[#2A2A2A]" />
              <span className="text-[#3A3A3A] text-xs font-mono">TACTICAL SERIES</span>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-[#6C7A6F]/10 to-transparent blur-3xl" />
              
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/3551d08d3_brkn1.png"
                alt="BRKN Tactical Hoodie OPS/01"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#6C7A6F]/30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#6C7A6F]/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#4A4A4A] text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4 text-[#4A4A4A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}