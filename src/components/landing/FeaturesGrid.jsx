import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Snowflake, Eye, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Oversized Tactical Fit",
    description: "Inspired by police training gear",
    size: "large"
  },
  {
    icon: Layers,
    title: "Triple-Stitched",
    description: "Construction for durability",
    size: "medium"
  },
  {
    icon: Snowflake,
    title: "Heavyweight Fleece",
    description: "Engineered for brutal winter environments",
    size: "medium"
  },
  {
    icon: Eye,
    title: "Stealth Branding",
    description: "BRKN // B///C1 tonal black",
    size: "small"
  },
  {
    icon: Award,
    title: "Premium Manufacture",
    description: "Tapstitch AU/EU fulfilment",
    size: "small"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function FeaturesGrid() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#6C7A6F] text-xs font-mono tracking-widest mb-4 block">
            SPECIFICATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built Different
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Large card - spans 2 columns */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-2 group"
          >
            <div className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-[#2A2A2A] p-8 lg:p-10 rounded-2xl hover:border-[#6C7A6F]/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A6F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#6C7A6F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6C7A6F]/20 transition-colors duration-300">
                  <Shield className="w-7 h-7 text-[#6C7A6F]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {features[0].title}
                </h3>
                <p className="text-[#9A9A9A] text-lg leading-relaxed">
                  {features[0].description}
                </p>
                <div className="mt-8 flex items-center gap-2">
                  <div className="h-px w-8 bg-[#6C7A6F]/50" />
                  <span className="text-[#4A4A4A] text-xs font-mono">01</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium cards */}
          {features.slice(1, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-[#111] border border-[#2A2A2A] p-6 lg:p-8 rounded-2xl hover:border-[#6C7A6F]/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A6F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#6C7A6F]/10 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-[#6C7A6F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#9A9A9A] text-sm">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px w-6 bg-[#6C7A6F]/30" />
                    <span className="text-[#3A3A3A] text-xs font-mono">0{index + 2}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Small cards in a row */}
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full bg-[#111] border border-[#2A2A2A] p-6 rounded-2xl hover:border-[#6C7A6F]/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A6F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6C7A6F]/10 transition-colors duration-300">
                    <feature.icon className="w-4 h-4 text-[#6C7A6F]" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#9A9A9A] text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}