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
      className="relative w-full h-full min-h-[100dvh] bg-persimmon text-ink flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 pt-24 md:pt-32 pb-28 md:pb-[150px] overflow-hidden select-none"
    >
      {/* Full-bleed artwork layer: chalk ribbon sweeping behind a giant ink "sy" */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sweeping curved chalk ribbon band: shallow -> steep -> shallow swoosh */}
          <path
            d="M 260 820
               C 750 760, 700 180, 1470 70
               L 1470 196
               C 700 306, 750 886, 260 946
               Z"
            fill="#F6F4EE"
            opacity="0.96"
          />

          {/* Giant lowercase "sy" in ink, overlapping the ribbon */}
          <text
            x="720"
            y="690"
            fontSize="700"
            fontWeight="800"
            letterSpacing="-0.05em"
            fill="#262139"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            sy
          </text>
        </svg>
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1360px] mx-auto my-auto">
        {/* Left Column: Heading, Pillars, and Call to Action */}
        <div className="w-full md:w-[56%] flex flex-col justify-center h-full z-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-1"
          >
            A company<br />
            you help shape.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-8"
          >
            A stake you own.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-text text-ink text-base sm:text-lg md:text-[20px] font-normal leading-snug max-w-[460px] mb-8"
          >
            <p>A product customers keep choosing.</p>
            <p>A team responsible for serving them.</p>
            <p>Equity in a company you help build.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
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
      </div>
    </section>
  );
};
