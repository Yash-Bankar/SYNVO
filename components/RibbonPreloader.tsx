"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { HeroSyRibbon } from "./chapters/HeroSyRibbon";

interface RibbonPreloaderProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const RibbonPreloader: React.FC<RibbonPreloaderProps> = ({
  onComplete,
  forceShow = false,
}) => {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    if (forceShow) return true;
    try {
      const seen = sessionStorage.getItem("synvo_preloader_seen");
      return seen !== "true";
    } catch {
      return true;
    }
  });

  const [progressPercent, setProgressPercent] = useState(0);
  const [ribbonFinished, setRibbonFinished] = useState(false);
  const completedRef = useRef(false);

  // If already not visible on mount, notify parent
  useEffect(() => {
    if (!visible || prefersReduced) {
      onComplete();
    }
  }, [visible, prefersReduced, onComplete]);

  // Finish and dismiss the preloader
  const handleDismiss = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      sessionStorage.setItem("synvo_preloader_seen", "true");
    } catch {
      // ignore in incognito/restricted storage
    }
    setVisible(false);
    setTimeout(() => {
      onComplete();
    }, 650);
  }, [onComplete]);

  // Listen for Escape key to skip immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleDismiss]);

  const handleRibbonProgress = useCallback((p: number) => {
    setProgressPercent(Math.round(p * 100));
  }, []);

  const handleRibbonComplete = useCallback(() => {
    setRibbonFinished(true);
    setProgressPercent(100);
    // Pause to allow the specular light sheen to sweep across the mark
    setTimeout(() => {
      handleDismiss();
    }, 450);
  }, [handleDismiss]);

  if (!visible && prefersReduced) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ribbon-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(6px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#14111D] text-chalk p-6 md:p-12 overflow-hidden select-none"
          role="status"
          aria-live="polite"
          aria-label="Website loading screen with flowing ribbon logo animation"
        >
          {/* Subtle warm ambient radial lighting in the background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 48%, rgba(238, 103, 71, 0.18) 0%, rgba(238, 233, 157, 0.08) 35%, rgba(20, 17, 29, 0) 70%)",
            }}
          />

          {/* Floating subtle silk threads / atmospheric accents */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-persimmon/10 blur-[90px]" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-citron/10 blur-[90px]" />
          </div>

          {/* Top Bar: Brand Monogram & Skip Button */}
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2.5"
            >
              <span className="font-bold text-sm tracking-[0.22em] text-chalk/90 uppercase">
                SYNVO
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-persimmon" />
              <span className="text-xs text-chalk/50 font-normal tracking-wider hidden sm:inline">
                STUDIO
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={handleDismiss}
              type="button"
              className="text-xs font-mono tracking-widest text-chalk/60 hover:text-citron transition-colors duration-200 px-3 py-1.5 rounded-full border border-chalk/10 hover:border-citron/30 bg-chalk/5 flex items-center gap-1.5 cursor-pointer backdrop-blur-sm"
              aria-label="Skip preloader animation"
            >
              <span>SKIP</span>
              <kbd className="text-[10px] px-1 py-0.5 rounded bg-chalk/10 text-chalk/60 font-sans hidden sm:inline">
                ESC
              </kbd>
            </motion.button>
          </div>

          {/* Center Stage: The Flowing Ribbon Sculpture */}
          <div className="relative z-10 w-full max-w-[620px] aspect-[768/512] flex items-center justify-center my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
            >
              <HeroSyRibbon
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full"
                autoPlay={true}
                duration={2400}
                onProgress={handleRibbonProgress}
                onComplete={handleRibbonComplete}
              />
            </motion.div>
          </div>

          {/* Bottom Bar: Progress Indicator & Refined Typography */}
          <div className="w-full max-w-md mx-auto flex flex-col items-center text-center z-20 pb-2">
            {/* Minimal Progress Bar */}
            <div className="w-full max-w-[220px] h-[2px] bg-chalk/10 rounded-full overflow-hidden mb-3.5 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-citron via-[#FFF275] to-citron rounded-full shadow-[0_0_8px_rgba(238,233,157,0.7)]"
                style={{ width: `${progressPercent}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Percentage & Status Text */}
            <div className="flex items-center justify-center gap-3 text-xs font-mono mb-2">
              <span className="text-citron tracking-wider font-semibold">
                {String(progressPercent).padStart(2, "0")}%
              </span>
              <span className="text-chalk/30 font-sans">•</span>
              <span className="text-chalk/60 font-sans text-xs tracking-normal">
                {ribbonFinished ? "Logo formed" : "Flowing ribbon into mark"}
              </span>
            </div>

            {/* Brand Motto */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xs text-chalk/50 font-sans tracking-wide max-w-xs"
            >
              Co-building software companies with creators
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
