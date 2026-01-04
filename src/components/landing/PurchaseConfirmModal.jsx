import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function PurchaseConfirmModal({ isOpen, onClose, selectedSize }) {
  const handleProceed = () => {
    window.open('https://www.tapstitch.com/custom/r00286-oversize-fleeced-hoodie', '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-6"
          >
            <div className="bg-[#111] border-2 border-[#2A2A2A] rounded-2xl p-8 relative">
              {/* Pull indicator - mobile only */}
              <div className="sm:hidden flex justify-center mb-2 -mt-2">
                <div className="w-10 h-1 bg-[#3A3A3A] rounded-full" />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#2A2A2A] active:bg-[#3A3A3A] sm:hover:bg-[#3A3A3A] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#6C7A6F]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-8 h-8 text-[#6C7A6F]" />
              </div>

              {/* Content */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Continue to Checkout
                </h3>
                <p className="text-[#BBBBBB] text-sm leading-relaxed mb-4">
                  You'll be redirected to our fulfillment partner, Tapstitch, to complete your purchase securely.
                </p>

                {/* Selected size confirmation */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C7A6F]/10 border border-[#6C7A6F]/30 rounded-lg">
                  <Check className="w-4 h-4 text-[#6C7A6F]" />
                  <span className="text-[#E6E6E6] text-sm font-medium">
                    Size {selectedSize} selected
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  onClick={handleProceed}
                  className="w-full h-12 bg-white text-black hover:bg-[#6C7A6F] hover:text-white transition-all font-medium"
                >
                  Proceed to Tapstitch
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full h-12 bg-transparent border-[#2A2A2A] text-white hover:bg-[#2A2A2A] transition-all"
                >
                  Go Back
                </Button>
              </div>

              {/* Trust note */}
              <p className="text-[#6A6A6A] text-xs text-center mt-6">
                Secure checkout powered by Tapstitch
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}