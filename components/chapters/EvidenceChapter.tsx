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
            Build when<br />
            there is a<br />
            reason to.
          </motion.h2>

          {/* 4-Step Process Flow matching 05-evidence.png — horizontal single row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            {/* Horizontal flow — single row on desktop */}
            <div className="flex items-center gap-2 flex-nowrap">
              {/* Step 1 */}
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-[#D6D0E4] text-ink text-xs sm:text-sm font-semibold flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-ink flex-shrink-0" />
                <span className="whitespace-nowrap">Understand the problem</span>
              </div>
              <span className="text-ink font-bold text-lg flex-shrink-0">→</span>

              {/* Step 2 */}
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-citron text-ink text-xs sm:text-sm font-semibold flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-ink flex-shrink-0" />
                <span className="whitespace-nowrap">Test the opportunity</span>
              </div>
              <span className="text-ink font-bold text-lg flex-shrink-0">→</span>

              {/* Step 3 */}
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-[#D6D0E4] text-ink text-xs sm:text-sm font-semibold flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-ink flex-shrink-0" />
                <span className="whitespace-nowrap">Agree on the partnership</span>
              </div>
              <span className="text-ink font-bold text-lg flex-shrink-0">→</span>

              {/* Step 4 */}
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-ink text-chalk text-xs sm:text-sm font-semibold flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-chalk flex-shrink-0" />
                <span className="whitespace-nowrap">Build the company</span>
              </div>
            </div>

            {/* Branch: Stop if evidence is weak — below Step 2 */}
            <div className="mt-3 flex items-start gap-0">
              {/* Spacer to align under Step 2 */}
              <div className="flex-shrink-0" style={{ width: "calc(140px + 2rem)" }} />
              <div className="flex flex-col items-center">
                <span className="text-ink font-bold text-xl leading-none">↓</span>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-persimmon text-chalk text-xs sm:text-sm font-bold shadow-sm mt-1">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-chalk flex-shrink-0" />
                  <span className="whitespace-nowrap">Stop if evidence is weak.</span>
                </div>
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
            An audience can reveal a need.<br />
            A company has to earn its customers.
          </motion.p>
        </div>

        {/* Right Column: Abstract arrow/ribbon artwork + "sy" like 05-evidence.png */}
        <div className="w-full md:w-[46%] h-[50vh] md:h-full pointer-events-none select-none z-10 flex items-stretch justify-end overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full min-h-[420px]"
          >
            <svg
              viewBox="0 0 480 720"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top persimmon parallelogram (diagonal top-right to center-left) */}
              <polygon points="80,0 480,0 480,260 0,180" fill="#EE6747" />

              {/* Middle citron band (diagonal) */}
              <polygon points="0,180 480,260 480,440 0,360" fill="#EEE99D" />

              {/* Bottom persimmon section */}
              <polygon points="0,360 480,440 480,720 0,720" fill="#EE6747" />

              {/* Giant "sy" in ink */}
              <text
                x="10"
                y="700"
                fontFamily="Manrope, sans-serif"
                fontSize="380"
                fontWeight="800"
                fill="#262139"
                opacity="0.9"
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
