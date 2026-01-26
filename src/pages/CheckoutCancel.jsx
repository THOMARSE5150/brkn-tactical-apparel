import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Cancel icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-[#3A3A3A]/50 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <XCircle className="w-12 h-12 text-[#6A6A6A]" />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Checkout Aborted
        </h1>

        {/* Message */}
        <p className="text-lg text-[#BBBBBB] mb-8">
          Your order was not completed.
        </p>

        {/* Divider */}
        <div className="w-32 h-px bg-[#3A3A3A] mx-auto mb-8" />

        {/* Code */}
        <div className="mb-10">
          <p className="text-xs text-[#6A6A6A] font-mono tracking-widest mb-2">
            STATUS
          </p>
          <p className="text-sm text-[#6A6A6A] font-mono">
            NO TRANSACTION PROCESSED
          </p>
        </div>

        {/* Return home */}
        <Button
          onClick={() => window.location.href = '/'}
          className="bg-white text-black hover:bg-[#6C7A6F] hover:text-white h-12 px-8 font-medium tracking-wider"
        >
          <span className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            RETURN TO OPERATION
          </span>
        </Button>
      </motion.div>
    </div>
  );
}