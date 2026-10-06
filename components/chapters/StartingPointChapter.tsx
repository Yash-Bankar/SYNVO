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
      className="relative w-full h-full min-h-[100dvh] bg-citron text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-12 xl:gap-16 max-w-[1320px] mx-auto my-auto">
        {/* Left Column: Heading and Bottom Summary */}
        <div className="w-full lg:w-[48%] flex flex-col justify-between h-full max-h-[520px]">
          {/* Main Display Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-6"
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
            className="font-body-text text-ink text-lg sm:text-xl md:text-[22px] font-normal leading-snug max-w-[460px]"
          >
            Together, we investigate whether<br className="hidden sm:inline" />
            a better answer could become<br className="hidden sm:inline" />
            a software company worth owning.
          </motion.p>
        </div>

        {/* Right Column: Bracketed Observations + Geometric Shape Artwork */}
        <div className="w-full lg:w-[52%] flex flex-col justify-between h-full max-h-[520px] pt-4 lg:pt-0">
          {/* Top: 3 Observations with SVG Curly Bracket */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 sm:gap-6 mb-6 lg:mb-10"
          >
            {/* Elegant SVG Curly Bracket */}
            <svg
              viewBox="0 0 26 150"
              className="w-5 sm:w-6 h-28 sm:h-36 flex-shrink-0 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M 22 4 C 12 4, 6 18, 6 38 L 6 60 C 6 72, 2 75, 0 75 C 2 75, 6 78, 6 90 L 6 112 C 6 132, 12 146, 22 146" />
            </svg>

            {/* 3 Observation Lines */}
            <div className="space-y-3 sm:space-y-4 font-body-text text-ink text-base sm:text-lg md:text-xl font-medium leading-snug">
              {observations.map((obs) => (
                <p key={obs}>{obs}</p>
              ))}
            </div>
          </motion.div>

          {/* Bottom: Geometric Vector Illustration matching Reference Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-start"
          >
            <svg
              viewBox="0 0 420 220"
              className="w-full max-w-[420px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outlined Square */}
              <rect
                x="8"
                y="18"
                width="180"
                height="180"
                stroke="#262139"
                strokeWidth="4.5"
                fill="none"
              />

              {/* Solid Ink Block */}
              <rect
                x="240"
                y="18"
                width="160"
                height="180"
                fill="#262139"
              />

              {/* Sweeping Arch Curve through the shapes */}
              <path
                d="M 115 198 C 145 75, 235 75, 290 145 L 290 198 L 235 198 C 195 130, 155 130, 140 198 Z"
                fill="#262139"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
