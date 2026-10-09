"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PlusIcon, MinusIcon } from "../icons/BrandIcons";

interface BeforeYouApplyChapterProps {
  isActive: boolean;
  defaultExpandedIndex?: number;
}

export const BeforeYouApplyChapter: React.FC<BeforeYouApplyChapterProps> = ({
  isActive,
  defaultExpandedIndex = -1,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultExpandedIndex >= 0 ? defaultExpandedIndex : null
  );

  const faqs = [
    {
      q: "Do I need an idea?",
      a: "No finished idea is required. Start with a problem you understand, a repeated question or a workaround your audience relies on.",
    },
    {
      q: "Who pays for development?",
      a: "Synvo funds product development. Any fees, payments or other financial commitments are agreed before development begins.",
    },
    {
      q: "What will I own?",
      a: "Equity in the company we build together. The percentage and terms are agreed before you commit to the partnership.",
    },
    {
      q: "Will I have to run the company?",
      a: "The model is built around a team responsible for daily operation. Your contribution includes audience understanding and product direction. Your time, responsibilities and decision rights are agreed before development begins.",
    },
    {
      q: "What if the idea does not hold up?",
      a: "We stop when the evidence does not support proceeding. Investigating an opportunity is not a commitment to build it.",
    },
  ];

  const toggleFaq = (index: number) => {
    // Only one disclosure may be open at a time.
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="before-you-apply"
      aria-label="Chapter 7: Before you apply"
      className="relative w-full h-full min-h-[100dvh] bg-chalk text-ink flex flex-col px-6 sm:px-10 md:px-16 pt-24 md:pt-28 pb-28 md:pb-28 overflow-hidden select-none"
    >
      {/* Background artwork: authentic folded ribbon + technical crosshairs bleeding from left edge.
          Reveals left-to-right like a ribbon being drawn in. */}
      <motion.div
        initial={
          prefersReducedMotion
            ? { opacity: 1 }
            : { clipPath: "inset(0 100% 0 0)", x: -60, opacity: 0.5 }
        }
        animate={
          isActive
            ? prefersReducedMotion
              ? { opacity: 1 }
              : { clipPath: "inset(0 0% 0 0)", x: 0, opacity: 1 }
            : {}
        }
        transition={{ duration: 1.25, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-12%] bottom-[4%] w-[66vw] sm:w-[52vw] h-[30vh] sm:h-[38vh] md:left-0 md:right-auto md:top-[5%] md:bottom-auto md:w-[58vw] lg:w-[54vw] md:h-[62vh] max-w-[890px] md:max-h-[640px] pointer-events-none select-none z-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/before-you-apply-artwork.png"
          alt="SYNVO folded ribbon and technical diagram"
          className="w-full h-full object-contain object-right-bottom md:object-left-top"
          draggable={false}
        />
      </motion.div>

      <div className="relative z-10 w-full h-full flex-1 flex flex-col-reverse md:flex-row items-start md:items-center justify-start md:justify-between gap-8 md:gap-0 max-w-[1400px] mx-auto">
        {/* Left Column: bottom mission statement and sy wordmark */}
        <div className="w-full md:w-[44%] lg:w-[40%] flex flex-col justify-end h-auto md:h-full min-h-0 md:min-h-[580px] z-20 pb-2 md:pb-6">
          {/* sy brand + mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/svg-elements-2026-10-08/sy-monogram-persimmon.svg"
              alt=""
              aria-hidden="true"
              className="w-[74px] sm:w-[92px] h-auto mb-4 select-none"
            />
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-ink tracking-tight max-w-[420px] leading-[1.18]">
              Help exceptional creators build and own enduring companies.
            </h3>
            <p className="text-sm sm:text-base md:text-[17px] text-ink/80 font-normal leading-normal max-w-[360px] pt-1">
              Synvo is a company-building partner for creators.
            </p>
          </motion.div>
        </div>

        {/* Right Column: "Before you apply" Heading + 5 Line Accordions */}
        <div className="w-full md:w-[52%] lg:w-[50%] max-w-[620px] flex flex-col justify-center z-20 md:pl-4 lg:pl-8">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] mb-8 md:mb-12"
          >
            Before you<br />
            apply
          </motion.h2>

          {/* 5 Minimalist Underline Disclosures */}
          <div className="divide-y divide-ink/20 border-t border-b border-ink/20">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.q} className="py-3.5 sm:py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between text-left font-normal text-base sm:text-lg md:text-[19px] text-ink hover:opacity-75 transition-opacity focus:outline-none cursor-pointer"
                  >
                    <span className="pr-6">{faq.q}</span>
                    <span className="flex-shrink-0 text-ink/80">
                      {isOpen ? (
                        <MinusIcon className="w-5 h-5" />
                      ) : (
                        <PlusIcon className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="pt-2 pb-1 text-sm sm:text-base text-ink/75 leading-relaxed font-normal pr-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
