import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">BRKN</span>
              <span className="text-[#6C7A6F] text-sm ml-2 font-mono">// B///C1</span>
            </div>
            <p className="text-[#6A6A6A] text-sm leading-relaxed max-w-xs">
              Tactical apparel for the broken & the unbreakable. 
              Pressure creates strength.
            </p>
            <div className="mt-6">
              <span className="text-[#3A3A3A] text-xs font-mono tracking-wider">OPS/01</span>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:justify-self-center"
          >
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider">NAVIGATE</h4>
            <nav className="flex flex-col gap-3">
              <a href="#about" className="text-[#6A6A6A] hover:text-white transition-colors text-sm">About</a>
              <a href="#contact" className="text-[#6A6A6A] hover:text-white transition-colors text-sm">Contact</a>
              <a href="#shipping" className="text-[#6A6A6A] hover:text-white transition-colors text-sm">Shipping</a>
              <a href="#returns" className="text-[#6A6A6A] hover:text-white transition-colors text-sm">Returns</a>
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:justify-self-end"
          >
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider">CONNECT</h4>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#6A6A6A] hover:text-white transition-colors text-sm group"
            >
              <Instagram className="w-5 h-5" />
              <span>@brkn.apparel</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#4A4A4A] text-xs">
            © {new Date().getFullYear()} BRKN. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#3A3A3A] text-xs font-mono">B///C1</span>
            <div className="h-3 w-px bg-[#2A2A2A]" />
            <span className="text-[#3A3A3A] text-xs font-mono">OPS/01</span>
            <div className="h-3 w-px bg-[#2A2A2A]" />
            <span className="text-[#3A3A3A] text-xs font-mono">TACTICAL SERIES</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}