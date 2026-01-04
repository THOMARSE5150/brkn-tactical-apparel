import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection({ onViewDetails, onAddToCart }) {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Full-width lifestyle image */}
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68878505f4453e0cc2ffa7c2/623b0b28b_OversizeFleecedHoodie-gallery-3.png"
          alt="BRKN Tactical Hoodie OPS/01"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl py-20"
        >
          {/* Drop code badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-[#6C7A6F] text-xs font-mono tracking-widest">
              OPS/01
            </span>
            <span className="text-[#6A6A6A] text-xs font-mono">LIMITED DROP</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-[#6C7A6F]">BRKN</span> Tactical
            <br />
            <span className="text-white">Hoodie</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-[#CCCCCC] max-w-xl leading-relaxed mb-4"
          >
            Oversized tactical hoodie built for the broken & the unbreakable.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm md:text-base text-[#6C7A6F] font-mono tracking-wide mb-12"
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
              onClick={onAddToCart}
              className="px-8 py-6 bg-white text-black hover:bg-[#6C7A6F] hover:text-white transition-all duration-300 text-sm tracking-widest font-medium"
            >
              <ShoppingBag className="mr-2 w-4 h-4" />
              ADD TO CART
            </Button>
            <Button
              onClick={onViewDetails}
              variant="outline"
              className="px-8 py-6 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest font-medium backdrop-blur-sm"
            >
              VIEW DETAILS
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Brand code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex items-center gap-6"
          >
            <span className="text-[#4A4A4A] text-xs font-mono">B///C1</span>
            <div className="h-px w-12 bg-[#3A3A3A]" />
            <span className="text-[#4A4A4A] text-xs font-mono">TACTICAL SERIES</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#6A6A6A] text-xs font-mono tracking-widest">SCROLL</span>
          <ChevronDown className="w-4 h-4 text-[#6A6A6A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}