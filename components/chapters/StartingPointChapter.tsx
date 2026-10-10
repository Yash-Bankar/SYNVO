"use client";

import React from "react";
import { motion } from "framer-motion";

interface StartingPointChapterProps {
  isActive: boolean;
}

export const StartingPointChapter: React.FC<StartingPointChapterProps> = ({
  isActive,
}) => {
  return (
    <section
      id="starting-point"
      aria-label="Chapter 2: The starting point"
      className="relative w-full h-full min-h-[100dvh] bg-citron text-ink flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-[136px] pb-28 md:pb-[150px] overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 max-w-[1440px] mx-auto">
        {/* Left Column: Heading and Summary */}
        <div className="w-full lg:w-[47%] flex flex-col justify-start">
          {/* Main Display Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-title text-ink font-extrabold tracking-display"
          >
            The product<br />
            you wish you<br />
            could<br />
            recommend.
          </motion.h2>

          {/* Investigation Note — sits directly beneath the headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block font-body-text text-ink text-base sm:text-lg md:text-xl lg:text-[27px] font-normal leading-[1.38] max-w-[560px] mt-10 lg:mt-12"
          >
            Together, we investigate whether<br className="hidden sm:inline" />{" "}
            a better answer could become<br className="hidden sm:inline" />{" "}
            a software company worth owning.
          </motion.p>
        </div>

        {/* Right Column: Bracketed Observations + Geometric Shape Artwork */}
        <div className="w-full lg:w-[51%] flex flex-col justify-between gap-6 lg:gap-[62px]">
          {/* Top: 3 Observations with SVG Curly Bracket */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 sm:gap-6 md:gap-8 lg:pl-[118px] xl:pl-[132px]"
          >
            {/* Tall curly bracket */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/svg-elements-2026-10-08/observation-brace.svg"
              alt=""
              aria-hidden="true"
              className="w-auto h-44 sm:h-52 md:h-60 lg:h-[248px] flex-shrink-0 select-none"
            />

            {/* 3 Observation Lines */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 font-body-text text-ink text-base sm:text-lg md:text-xl lg:text-[26px] font-normal leading-[1.32]">
              <p>
                The question your audience<br className="hidden sm:inline" />{" "}
                keeps asking.
              </p>
              <p>
                The workaround they<br className="hidden sm:inline" />{" "}
                keep using.
              </p>
              <p>
                The tool that almost<br className="hidden sm:inline" />{" "}
                solves the problem.
              </p>
            </div>
          </motion.div>

          {/* Investigation Note — mobile places it below the observations */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden font-body-text text-ink text-base sm:text-lg font-normal leading-[1.38]"
          >
            Together, we investigate whether a better answer could become a
            software company worth owning.
          </motion.p>

          {/* Bottom: Geometric Vector Illustration matching Reference Artwork */}
          <div className="w-full flex justify-end lg:translate-x-[33px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={isActive ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-end"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/svg-elements-2026-10-08/starting-point.svg"
              alt=""
              aria-hidden="true"
              className="w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[600px] h-auto select-none"
            />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
