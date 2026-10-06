"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface BeforeYouApplyChapterProps {
  isActive: boolean;
  defaultExpandedIndex?: number;
}

export const BeforeYouApplyChapter: React.FC<BeforeYouApplyChapterProps> = ({
  isActive,
  defaultExpandedIndex = -1,
}) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    [defaultExpandedIndex]: true,
  });

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
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="before-you-apply"
      aria-label="Chapter 7: Before you apply"
      className="relative w-full h-full min-h-[100dvh] bg-chalk text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1360px] mx-auto my-auto">
        {/* Left Column: Folded paper artwork + sy + mission text */}
        <div className="w-full md:w-[42%] flex flex-col justify-between h-full max-h-[660px] z-20">
          {/* Origami / folded paper illustration with circle+crosshair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[380px]"
          >
            <svg
              viewBox="0 0 380 280"
              className="w-full h-auto overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Thin background circle */}
              <circle
                cx="210"
                cy="140"
                r="100"
                stroke="#262139"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              {/* Vertical crosshair */}
              <line x1="210" y1="10" x2="210" y2="270" stroke="#262139" strokeWidth="1" strokeOpacity="0.3" />
              {/* Horizontal crosshair */}
              <line x1="80" y1="140" x2="340" y2="140" stroke="#262139" strokeWidth="1" strokeOpacity="0.3" />
              {/* Persimmon accent dot */}
              <circle cx="290" cy="140" r="6" fill="#EE6747" />

              {/* Persimmon left folded shape */}
              <polygon
                points="20,70 190,20 190,240 20,240"
                fill="#EE6747"
              />
              {/* Citron right folded shape */}
              <polygon
                points="190,20 280,110 360,260 190,240"
                fill="#EEE99D"
              />
            </svg>
          </motion.div>

          {/* sy brand + mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 mt-6"
          >
            <span className="font-serif italic font-extrabold text-5xl text-persimmon leading-none block select-none">
              sy
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight max-w-[380px] leading-tight">
              Help exceptional creators build and own enduring companies.
            </h3>
            <p className="text-base text-ink font-normal leading-snug max-w-[340px]">
              Synvo is a company-building partner for creators.
            </p>
          </motion.div>
        </div>

        {/* Right Column: "Before you apply" Heading + 5 Line Accordions */}
        <div className="w-full md:w-[54%] max-w-[600px] h-full max-h-[660px] flex flex-col justify-center z-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-10"
          >
            Before you<br />
            apply
          </motion.h2>

          {/* 5 Minimalist Underline Disclosures */}
          <div className="divide-y divide-ink/20 border-t border-b border-ink/20">
            {faqs.map((faq, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div key={faq.q} className="py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between text-left font-semibold text-base sm:text-lg text-ink hover:opacity-70 transition-opacity focus:outline-none"
                  >
                    <span className="pr-6">{faq.q}</span>
                    <span className="flex-shrink-0 text-ink">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2]" />
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
