"use client";

import React from "react";
import { motion } from "framer-motion";

interface StartingPointChapterProps {
  isActive: boolean;
}

export const StartingPointChapter: React.FC<StartingPointChapterProps> = ({
  isActive,
}) => {
  const observations = [
    "The question your audience keeps asking.",
    "The workaround they keep using.",
    "The tool that almost solves the problem.",
  ];

  return (
    <section
      id="starting-point"
      aria-label="Chapter 2: The starting point"
      className="relative w-full h-full min-h-[100dvh] bg-citron text-ink flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12 xl:gap-16 max-w-[1440px] mx-auto my-auto">
        {/* Left Column: Heading and Bottom Summary */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col justify-between h-full min-h-[480px] md:min-h-[560px] lg:min-h-[620px] pb-2 md:pb-6">
          {/* Main Display Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[92px] 2xl:text-[98px]"
          >
            The product<br />
            you wish you<br />
            could<br />
            recommend.
          </motion.h2>

          {/* Bottom Investigation Note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-text text-ink text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-[1.38] max-w-[460px] pt-6 lg:pt-0"
          >
            Together, we investigate whether<br className="hidden sm:inline" />
            a better answer could become<br className="hidden sm:inline" />
            a software company worth owning.
          </motion.p>
        </div>

        {/* Right Column: Bracketed Observations + Geometric Shape Artwork */}
        <div className="w-full lg:w-[50%] xl:w-[52%] flex flex-col justify-between h-full min-h-[480px] md:min-h-[560px] lg:min-h-[620px] pt-2 lg:pt-0 pb-2 md:pb-6">
          {/* Top: 3 Observations with SVG Curly Bracket */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-8 lg:mb-12 xl:mb-16 pt-2 lg:pt-4"
          >
            {/* Elegant Tall SVG Curly Bracket */}
            <svg
              viewBox="0 0 26 150"
              className="w-6 sm:w-7 md:w-8 h-44 sm:h-52 md:h-60 lg:h-[230px] flex-shrink-0 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M 22 4 C 12 4, 6 18, 6 38 L 6 60 C 6 72, 2 75, 0 75 C 2 75, 6 78, 6 90 L 6 112 C 6 132, 12 146, 22 146" />
            </svg>

            {/* 3 Observation Lines - 2-line wraps */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 font-body-text text-ink text-base sm:text-lg md:text-xl lg:text-[21px] font-normal leading-[1.3]">
              <p>
                The question your audience<br className="hidden sm:inline" />
                keeps asking.
              </p>
              <p>
                The workaround they<br className="hidden sm:inline" />
                keep using.
              </p>
              <p>
                The tool that almost<br className="hidden sm:inline" />
                solves the problem.
              </p>
            </div>
          </motion.div>

          {/* Bottom: Geometric Vector Illustration matching Reference Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-end"
          >
            <svg
              viewBox="0 0 642 302"
              className="w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[640px] h-auto select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outlined Square */}
              <rect
                x="3"
                y="3"
                width="294"
                height="294"
                stroke="#262139"
                strokeWidth="5.5"
                fill="none"
              />

              {/* Solid Ink Block + Sweeping Arch Shape */}
              <path
                d="M 379 3 L 639 3 L 639 297 L 473 297 L 473 126 C 385 126, 298 220, 288 297 L 181 297 C 181 235, 260 130, 379 120 Z"
                fill="#262139"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
