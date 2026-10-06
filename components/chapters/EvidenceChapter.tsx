"use client";

import React from "react";
import { motion } from "framer-motion";

interface EvidenceChapterProps {
  isActive: boolean;
}

export const EvidenceChapter: React.FC<EvidenceChapterProps> = ({
  isActive,
}) => {
  return (
    <section
      id="evidence"
      aria-label="Chapter 5: The evidence"
      className="relative w-full h-full min-h-[100dvh] bg-chalk text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1360px] mx-auto my-auto">
        {/* Left Column: Headline, Process Flowchart, Epigram */}
        <div className="w-full md:w-[50%] flex flex-col justify-center h-full z-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-8"
          >
            Build when
            <br />
            there is a
            <br />
            reason to.
          </motion.h2>

          {/* 4-Step Process Flow — reference 05-evidence.png layout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-28 sm:mb-32"
          >
            {/* Horizontal flow — 4-step row with centered branch under Step 2 */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Step 1 */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#D6D0E4] text-ink text-sm font-semibold">
                <span className="w-4 h-4 rounded-full bg-ink flex-shrink-0" />
                <span>
                  Understand
                  <br />
                  the problem
                </span>
              </div>
              <span className="text-ink font-bold text-lg">→</span>

              {/* Step 2 + Centered Downward Branch */}
              <div className="relative flex flex-col items-center">
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-citron text-ink text-sm font-semibold">
                  <span className="w-4 h-4 rounded-full bg-ink flex-shrink-0" />
                  <span>
                    Test the
                    <br />
                    opportunity
                  </span>
                </div>

                {/* Branch: Arrow & Stop pill centered directly under Step 2 */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 flex flex-col items-center z-10 pointer-events-auto">
                  <span className="text-ink font-bold text-xl leading-none mb-1 select-none">↓</span>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-persimmon text-chalk text-sm font-bold whitespace-nowrap">
                    <span className="w-4 h-4 rounded-full border-2 border-chalk flex-shrink-0" />
                    <span>
                      Stop if
                      <br />
                      evidence is weak.
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-ink font-bold text-lg">→</span>

              {/* Step 3 */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#D6D0E4] text-ink text-sm font-semibold">
                <span className="w-4 h-4 rounded-full bg-ink flex-shrink-0" />
                <span>
                  Agree on
                  <br />
                  the partnership
                </span>
              </div>
              <span className="text-ink font-bold text-lg">→</span>

              {/* Step 4 */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-ink text-chalk text-sm font-semibold">
                <span className="w-4 h-4 rounded-full border-2 border-chalk flex-shrink-0" />
                <span>
                  Build the
                  <br />
                  company
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-text text-ink text-lg sm:text-xl md:text-[22px] font-normal leading-snug max-w-[440px]"
          >
            An audience can reveal a need.
            <br />
            A company has to earn its customers.
          </motion.p>
        </div>

        {/* Right Column: Diagonal chevron arrow artwork + "sy" — matching 05-evidence.png */}
        <div className="w-full md:w-[46%] h-[50vh] md:h-full pointer-events-none select-none z-10 flex items-stretch justify-end overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full min-h-[480px]"
          >
            <svg
              viewBox="0 0 480 800"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMaxYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/*
                Reference shows a zigzag/chevron arrow shape on the right side.
                Three large diagonal bands — persimmon / citron / persimmon — 
                arranged as pointed arrow-chevron shapes pointing right.
                The "sy" text is large and overlaps at the bottom-right.
              */}

              {/* Top persimmon arrow-chevron */}
              <polygon
                points="0,0 480,0 480,200 240,310 0,200"
                fill="#EE6747"
              />

              {/* Citron middle band — wedge/arrow shape */}
              <polygon
                points="0,240 480,140 480,390 240,500 0,390"
                fill="#EEE99D"
              />

              {/* Bottom persimmon section */}
              <polygon
                points="0,430 480,330 480,800 0,800"
                fill="#EE6747"
              />

              {/* Giant "sy" in ink */}
              <text
                x="30"
                y="790"
                fontFamily="Manrope, sans-serif"
                fontSize="360"
                fontWeight="800"
                fill="#262139"
                opacity="0.92"
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
