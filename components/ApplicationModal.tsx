"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Mail } from "lucide-react";
import { CloseIcon, ArrowRightIcon } from "./icons/BrandIcons";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="app-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-lg bg-chalk text-ink rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-ink/10 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-ink/5 transition-colors focus:outline-none focus:ring-2 focus:ring-ink"
            >
              <CloseIcon className="w-6 h-6 text-ink" />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-citron text-ink text-xs font-semibold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-4 h-4" />
              <span>Partnership Discussions</span>
            </div>

            <h3
              id="app-modal-title"
              className="font-display-title text-2xl sm:text-3xl font-extrabold tracking-display mb-4 text-ink"
            >
              Apply to Synvo
            </h3>

            <p className="font-body-text text-base sm:text-lg text-ink/85 mb-6 leading-relaxed">
              We co-build software companies with exceptional creators. Synvo funds product development, puts an operating team in place, and shares long-term equity.
            </p>

            <div className="bg-white/80 rounded-2xl p-4 sm:p-5 border border-ink/10 mb-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/60">
                <span>Application Notice</span>
              </div>
              <p className="text-sm sm:text-base text-ink/80 leading-normal">
                Partnership submissions are reviewed on rolling basis. Equity, role allocation, and financial commitments are fully agreed before development begins.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:partner@synvo.com?subject=Synvo%20Creator%20Partnership%20Inquiry"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-ink text-chalk font-semibold text-base sm:text-lg hover:bg-ink/90 transition-all shadow-md group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Founding Team</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 text-center text-sm font-medium text-ink/60 hover:text-ink transition-colors"
              >
                Close and continue exploring
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
