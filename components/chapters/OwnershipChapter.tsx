"use client";

import React from "react";
import { motion } from "framer-motion";

interface OwnershipChapterProps {
  isActive: boolean;
}

export const OwnershipChapter: React.FC<OwnershipChapterProps> = ({
  isActive,
}) => {
  return (
    <section
      id="ownership"
      aria-label="Chapter 6: The ownership"
      className="relative w-full h-full min-h-[100dvh] bg-persimmon text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1360px] mx-auto my-auto">
        {/* Left Column: Heading, Pillars, and Call to Action */}
        <div className="w-full md:w-[46%] flex flex-col justify-center h-full z-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-1"
          >
            A company<br />
            you help shape.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-8"
          >
            A stake you own.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-text text-ink text-base sm:text-lg md:text-[20px] font-normal leading-snug max-w-[460px] mb-8"
          >
            <p>A product customers keep choosing.</p>
            <p>A team responsible for serving them.</p>
            <p>Equity in a company you help build.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <p className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
              Bring the understanding.<br />
              Be ready to build.
            </p>
            <p className="text-base sm:text-lg text-ink font-normal leading-snug max-w-[400px]">
              Make time to shape a product, share decisions and follow the evidence.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Giant "sy" on persimmon with sweeping chalk curved band — matching 06-ownership.png */}
        <div className="w-full md:w-[52%] h-[50vh] md:h-[85vh] pointer-events-none select-none z-10 flex items-center justify-end overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <svg
              viewBox="0 0 560 700"
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sweeping chalk/cream curved ribbon band diagonal from bottom-left to top-right */}
              <path
                d="M -80 750 C 100 580, 320 300, 700 60 L 700 140 C 320 380, 100 660, -80 830 Z"
                fill="#F6F4EE"
                opacity="0.95"
              />

              {/* Giant bold "sy" text in ink color */}
              <text
                x="40"
                y="640"
                fontFamily="Manrope, sans-serif"
                fontSize="400"
                fontWeight="800"
                fill="#262139"
        >
                sy
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
