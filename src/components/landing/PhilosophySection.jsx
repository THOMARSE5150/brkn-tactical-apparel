import React from 'react';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C7A6F]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-[#6C7A6F] text-xs font-mono tracking-[0.3em]">
              THE PHILOSOPHY
            </span>
          </motion.div>

          {/* Main quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Quote marks */}
            <span className="absolute -top-8 -left-4 text-6xl text-[#6C7A6F]/20 font-serif">"</span>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-[#E6E6E6] leading-relaxed font-light">
              BRKN is built on the idea that everyone carries fractures — but pressure creates strength. 
              This hoodie is a reminder: you don't wait for permission. You move. You act. You adapt. 
              <span className="text-white font-medium"> You do the impossible.</span>
            </p>

            <span className="absolute -bottom-8 -right-4 text-6xl text-[#6C7A6F]/20 font-serif">"</span>
          </motion.blockquote>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#6C7A6F]/50" />
            <span className="text-[#6C7A6F] text-xs font-mono tracking-widest">B///C1</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#6C7A6F]/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}