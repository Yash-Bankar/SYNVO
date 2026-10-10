"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SyRibbonVideo from "../SyRibbonVideo";

interface HeroChapterProps {
  isActive: boolean;
}

export const HeroChapter: React.FC<HeroChapterProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse tilt spring values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero"
      aria-label="Chapter 1: The company"
      className="relative w-full h-full min-h-[100dvh] bg-persimmon text-ink flex flex-col px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-28 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-center gap-2 md:gap-6 lg:gap-10 xl:gap-16 max-w-[1360px] mx-auto">
        {/* Left Column: Exact Typography */}
        <div className="w-full md:w-[48%] lg:w-[46%] flex flex-col justify-start md:justify-center pt-2 md:py-0 z-20">
          <div className="mb-6 md:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-1"
            >
              Build what<br />
              your audience<br />
              needs.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-hero-title text-citron font-extrabold tracking-display leading-[1.02]"
            >
              Own what<br />
              it becomes.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-text text-ink text-lg sm:text-xl md:text-[22px] max-w-[460px] font-normal leading-snug mb-6"
          >
            We co-build software companies with creators. Synvo funds development and puts an operating team in place.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl font-normal text-ink"
          >
            No finished idea required.
          </motion.p>
        </div>

        {/* Right Column: "sy" Ribbon Sculpture positioned adjacent to the text */}
        <div className="w-full md:w-[72%] lg:w-[84%] h-[42vh] md:h-[84vh] min-h-[280px] md:min-h-[620px] pointer-events-none select-none z-10 flex items-center justify-center md:justify-end mt-2 md:mt-0 ml-0 md:ml-20">
          <motion.div
            style={
              prefersReducedMotion
                ? {}
                : {
                    rotateX,
                    rotateY,
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative w-full h-full flex items-center justify-end"
          >
            {/* Smooth Left-to-Right Handwriting / Calligraphy Stroke Reveal */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
                  : {
                      clipPath: "inset(0 100% 0 0)",
                      opacity: 0.7,
                    }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
                  : {
                      clipPath: "inset(0 0% 0 0)",
                      opacity: 1,
                    }
              }
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative w-full h-full flex items-center justify-end"
            >
              {/* Continuous Gentle Float */}
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [-8, 8, -8],
                        rotate: [-1, 1, -1],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-center justify-end"
              >
                <div className="relative w-full h-full">
                  {/* SY logo — pre-rendered ribbon video, replacing hero-sy.png.
                      .sy-video-frame (see globals.css) makes it ~2.2x the old
                      logo, centers it on the same point, applies the edge mask,
                      and keeps it behind the text (z-index / pointer-events). */}
                  <div className="sy-video-frame aspect-video">
                    <SyRibbonVideo className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
