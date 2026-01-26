import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { OPS01 } from './ops01Config';

export default function PurchaseConfirmModal({ isOpen, onClose, selectedSize }) {
  const handleProceed = () => {
    window.open(OPS01.tapstitchUrl, '_blank');
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

          {/* Modal - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:bottom-auto w-full sm:max-w-md z-50"
          >
            <div 
              className="bg-[#111] border-t-2 sm:border-2 border-[#2A2A2A] rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 relative mx-4 sm:mx-0"
              style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}
            >
              {/* Pull indicator - mobile only */}
              <div className="sm:hidden flex justify-center -mt-2 mb-3">
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#6C7A6F]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ExternalLink className="w-7 h-7 sm:w-8 sm:h-8 text-[#6C7A6F]" />
              </div>

              {/* Content */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Continue to Checkout
                </h3>
                <p className="text-[#BBBBBB] text-[13px] sm:text-sm leading-relaxed mb-4">
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
              <div className="space-y-2.5 sm:space-y-3">
                <Button
                  onClick={handleProceed}
                  className="w-full h-12 sm:h-13 bg-white text-black active:bg-[#6C7A6F] active:text-white sm:hover:bg-[#6C7A6F] sm:hover:text-white transition-all font-medium text-[15px] sm:text-base"
                >
                  Proceed to Tapstitch
                </Button>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full h-12 sm:h-13 bg-transparent border-[#2A2A2A] text-white active:bg-[#2A2A2A] sm:hover:bg-[#2A2A2A] transition-all text-[15px] sm:text-base"
                >
                  Go Back
                </Button>
              </div>

              {/* Trust note */}
              <p className="text-[#6A6A6A] text-[11px] sm:text-xs text-center mt-5 sm:mt-6">
                Secure checkout powered by Tapstitch
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}