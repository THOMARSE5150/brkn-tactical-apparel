import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, AlertCircle } from 'lucide-react';

const sizes = [
  { size: 'S', chest: '118', length: '70', shoulder: '62', sleeve: '56' },
  { size: 'M', chest: '124', length: '72', shoulder: '64', sleeve: '57' },
  { size: 'L', chest: '130', length: '74', shoulder: '66', sleeve: '58' },
  { size: 'XL', chest: '136', length: '76', shoulder: '68', sleeve: '59' },
  { size: 'XXL', chest: '142', length: '78', shoulder: '70', sleeve: '60' },
];

export default function SizingTable() {
  return (
    <section className="bg-[#111] py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Ruler className="w-5 h-5 text-[#6C7A6F]" />
            <span className="text-[#6C7A6F] text-xs font-mono tracking-widest">
              SIZE GUIDE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sizing & Fit
          </h2>
        </motion.div>

        {/* Sizing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 p-4 bg-[#6C7A6F]/10 border border-[#6C7A6F]/20 rounded-xl flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-[#6C7A6F] flex-shrink-0 mt-0.5" />
          <p className="text-[#E6E6E6] text-sm">
            <span className="font-semibold">Oversized cut</span> — if you prefer a standard fit, size down.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                <th className="py-4 px-4 text-left text-xs font-mono tracking-widest text-[#6C7A6F] uppercase">Size</th>
                <th className="py-4 px-4 text-center text-xs font-mono tracking-widest text-[#6C7A6F] uppercase">Chest</th>
                <th className="py-4 px-4 text-center text-xs font-mono tracking-widest text-[#6C7A6F] uppercase">Length</th>
                <th className="py-4 px-4 text-center text-xs font-mono tracking-widest text-[#6C7A6F] uppercase">Shoulder</th>
                <th className="py-4 px-4 text-center text-xs font-mono tracking-widest text-[#6C7A6F] uppercase">Sleeve</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((row, index) => (
                <motion.tr
                  key={row.size}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A]/50 transition-colors"
                >
                  <td className="py-5 px-4">
                    <span className="text-white font-semibold text-lg">{row.size}</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-[#E6E6E6]">{row.chest}</span>
                    <span className="text-[#6A6A6A] text-sm ml-1">cm</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-[#E6E6E6]">{row.length}</span>
                    <span className="text-[#6A6A6A] text-sm ml-1">cm</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-[#E6E6E6]">{row.shoulder}</span>
                    <span className="text-[#6A6A6A] text-sm ml-1">cm</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-[#E6E6E6]">{row.sleeve}</span>
                    <span className="text-[#6A6A6A] text-sm ml-1">cm</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Measurement note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-[#6A6A6A] text-sm text-center"
        >
          All measurements in centimeters. Measured flat.
        </motion.p>
      </div>
    </section>
  );
}