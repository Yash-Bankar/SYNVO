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
      className="relative w-full h-full min-h-[100dvh] bg-chalk text-ink flex flex-col overflow-hidden select-none"
    >
      {/* Absolute Full-Bleed Graphic Background */}
      {/* Changed to w-full to prevent the hard vertical clipping in the middle of the screen */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* 
            SVG Ribbon Vectors 
            ViewBox expanded to 2000 width so the left half is empty space, 
            allowing the yellow ribbon to sweep off-screen smoothly without hitting a bounding box.
          */}
          <svg
            viewBox="0 0 2000 1000"
            className="absolute inset-0 w-full h-full object-cover"
            preserveAspectRatio="xMaxYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* 1. Bottom Orange Block (Background depth on bottom right) */}
            <polygon points="1100,1200 2100,750 2100,1200" fill="#EE6747" />

            {/* 2. Bottom Yellow Swoosh - Sweeps massively out to x=-1000 for a smooth, endless edge */}
            <polygon points="-1000,1400 2100,550 2100,1200 -1000,2000" fill="#EEE99D" />

            {/* 3. Top Yellow Fold */}
            <polygon points="1250,150 1500,450 2100,250 2100,350" fill="#DFD773" />

            {/* 4. Middle Orange Big Ribbon - Fatter bezier curve pulling out */}
            <path
              d="M 2100,150 L 1500,350 C 1200,450 1150,700 1450,800 L 2100,1100 Z"
              fill="#EE6747"
            />

            {/* 5. Top Orange Parallelogram (Foreground top) */}
            <polygon points="1500,-100 2100,-100 2100,250 1250,150" fill="#EE6747" />
          </svg>

          {/* Typography Overlay "sy" - Moved significantly up to clear the footer & Details link */}
          <div className="absolute right-[4%] lg:right-[6%] bottom-[18%] md:bottom-[22%] z-20 mix-blend-normal">
            <h2
              className="text-ink font-extrabold m-0 p-0"
              style={{
                fontSize: "clamp(10rem, 20vw, 20rem)", // Slightly capped so it doesn't break wide screens
                lineHeight: "0.75",
                letterSpacing: "-0.07em",
              }}
            >
              sy
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Foreground Content Container - Constrained for Typography */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 max-w-[1360px] mx-auto my-auto pointer-events-auto">
        
        {/* Left Column: Headline, Process Flowchart, Epigram */}
        <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-10 text-5xl md:text-7xl lg:text-[88px]"
          >
            Build when
            <br />
            there is a
            <br />
            reason to.
          </motion.h2>

          {/* 4-Step Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-8 w-full overflow-x-auto pb-24 scrollbar-hide"
          >
            <div className="flex items-center gap-2 md:gap-3 flex-nowrap w-max">
              
              {/* Step 1 */}
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#D6D0E4] text-ink text-sm font-medium flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-ink flex-shrink-0" />
                <span className="leading-tight whitespace-nowrap">
                  Understand
                  <br />
                  the problem
                </span>
              </div>
              <span className="text-ink font-bold text-lg flex-shrink-0">→</span>

              {/* Step 2 + Centered Downward Branch */}
              <div className="relative flex flex-col items-center flex-shrink-0">
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#EEE99D] text-ink text-sm font-medium flex-shrink-0">
                  <span className="w-3.5 h-3.5 rounded-full bg-ink flex-shrink-0" />
                  <span className="leading-tight whitespace-nowrap">
                    Test the
                    <br />
                    opportunity
                  </span>
                </div>

                {/* Branch: Arrow & Stop pill */}
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 flex flex-col items-center z-10 pointer-events-auto">
                  <span className="text-ink font-bold text-lg leading-none mb-2 select-none">↓</span>
                  <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#EE6747] text-chalk text-sm font-medium whitespace-nowrap flex-shrink-0">
                    <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-chalk bg-transparent flex-shrink-0" />
                    <span className="leading-tight">
                      Stop if
                      <br />
                      evidence is weak.
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-ink font-bold text-lg flex-shrink-0">→</span>

              {/* Step 3 */}
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#D6D0E4] text-ink text-sm font-medium flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-ink flex-shrink-0" />
                <span className="leading-tight whitespace-nowrap">
                  Agree on
                  <br />
                  the partnership
                </span>
              </div>
              <span className="text-ink font-bold text-lg flex-shrink-0">→</span>

              {/* Step 4 */}
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-ink text-chalk text-sm font-medium flex-shrink-0">
                <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-chalk bg-transparent flex-shrink-0" />
                <span className="leading-tight whitespace-nowrap">
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
      </div>
    </section>
  );
};