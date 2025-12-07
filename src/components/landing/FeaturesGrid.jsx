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
            <div className="h-full bg-[#111] border-2 border-[#2A2A2A] p-8 lg:p-10 rounded-2xl hover:border-[#6C7A6F] hover:shadow-xl hover:shadow-[#6C7A6F]/10 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A6F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6C7A6F]/20 to-[#6C7A6F]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-[#6C7A6F]/30 group-hover:to-[#6C7A6F]/10 transition-all duration-300 border border-[#6C7A6F]/20">
                  <Shield className="w-8 h-8 text-[#6C7A6F]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#6C7A6F] transition-colors duration-300">
                  {features[0].title}
                </h3>
                <p className="text-[#AAAAAA] text-lg leading-relaxed">
                  {features[0].description}
                </p>
                <div className="mt-10 flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-[#6C7A6F] to-transparent" />
                  <span className="text-[#6C7A6F] text-xs font-mono tracking-widest">01</span>
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
              <div className="h-full bg-[#111] border-2 border-[#2A2A2A] p-6 lg:p-8 rounded-2xl hover:border-[#6C7A6F] hover:shadow-lg hover:shadow-[#6C7A6F]/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A6F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6C7A6F]/20 to-[#6C7A6F]/5 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[#6C7A6F]/30 group-hover:to-[#6C7A6F]/10 transition-all duration-300 border border-[#6C7A6F]/20">
                    <feature.icon className="w-6 h-6 text-[#6C7A6F]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6C7A6F] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#AAAAAA] text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-0.5 w-10 bg-gradient-to-r from-[#6C7A6F] to-transparent" />
                    <span className="text-[#6C7A6F] text-xs font-mono tracking-widest">0{index + 2}</span>
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
              <div className="h-full bg-[#111] border-2 border-[#2A2A2A] p-6 rounded-2xl hover:border-[#6C7A6F] hover:shadow-lg hover:shadow-[#6C7A6F]/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C7A6F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6C7A6F]/20 to-[#6C7A6F]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-[#6C7A6F]/30 group-hover:to-[#6C7A6F]/10 transition-all duration-300 border border-[#6C7A6F]/20">
                    <feature.icon className="w-5 h-5 text-[#6C7A6F]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#6C7A6F] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#AAAAAA] text-sm leading-relaxed">
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