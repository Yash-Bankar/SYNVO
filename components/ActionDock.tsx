"use client";

import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons/BrandIcons";

interface ActionDockProps {
  currentChapter: number;
  totalChapters?: number;
  onNavigateChapter: (index: number) => void;
  onOpenApply: () => void;
  chapterTitles?: string[];
}

export const ActionDock: React.FC<ActionDockProps> = ({
  currentChapter,
  totalChapters = 7,
  onNavigateChapter,
  onOpenApply,
  chapterTitles = [
    "The company",
    "The starting point",
    "The research",
    "The partnership",
    "The evidence",
    "The ownership",
    "Before you apply",
  ],
}) => {
  const isFirst = currentChapter === 0;
  const isLast = currentChapter === totalChapters - 1;

  const handlePrev = () => {
    if (!isFirst) {
      onNavigateChapter(currentChapter - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      onNavigateChapter(currentChapter + 1);
    }
  };

  const handleDetailsClick = () => {
    onNavigateChapter(totalChapters - 1);
  };

  return (
    <>
      {/* Mobile Right-Edge Vertical Indicator Dots */}
      <aside
        aria-label="Chapter progress"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-30 flex md:hidden flex-col items-center py-2 pr-1.5"
      >
        {Array.from({ length: totalChapters }).map((_, index) => {
          const isActive = currentChapter === index;
          return (
            <button
              key={`mob-ch-${index}`}
              onClick={() => onNavigateChapter(index)}
              aria-label={`Jump to chapter ${index + 1}: ${chapterTitles[index] || ""}`}
              aria-current={isActive ? "step" : undefined}
              className="w-11 h-11 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-ink/40 group"
            >
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3.5 h-3.5 bg-ink"
                    : "w-3.5 h-3.5 border-[1.5px] border-ink/45 group-hover:border-ink"
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* Desktop Bottom Navigation: Left Counter/Arrows + Right Action Dock */}
      <nav
        aria-label="Page controls"
        className="fixed bottom-5 sm:bottom-8 left-0 right-0 z-30 pl-4 pr-12 sm:px-10 md:px-16 pointer-events-none flex items-center justify-between"
      >
        {/* Left Side: Chapter Navigation (Arrows + 1 / 7) */}
        <div className="hidden md:flex items-center gap-6 pointer-events-auto">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            aria-label="Previous chapter"
            className={`p-2 -ml-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ink ${
              isFirst
                ? "opacity-20 cursor-not-allowed text-ink"
                : "hover:scale-110 active:scale-95 text-ink cursor-pointer"
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          <span
            aria-live="polite"
            className="text-base font-bold text-ink tracking-widest select-none min-w-[50px] text-center"
          >
            {currentChapter + 1} / {totalChapters}
          </span>

          <button
            onClick={handleNext}
            disabled={isLast}
            aria-label="Next chapter"
            className={`p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ink ${
              isLast
                ? "opacity-20 cursor-not-allowed text-ink"
                : "hover:scale-110 active:scale-95 text-ink cursor-pointer"
            }`}
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Action Dock (Apply to Synvo + Details) */}
        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-6 ml-auto">
          <button
            onClick={onOpenApply}
            aria-label="Apply to Synvo"
            className="h-[46px] sm:h-[52px] md:h-[56px] px-4 sm:px-7 md:px-9 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-ink text-chalk font-bold text-xs sm:text-sm md:text-base tracking-tight whitespace-nowrap hover:bg-ink/90 active:scale-98 transition-all shadow-xl group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
          >
            <span className="whitespace-nowrap">Apply to Synvo</span>
            <span className="text-sm sm:text-lg leading-none transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={handleDetailsClick}
            aria-label="Jump to Before you apply FAQs"
            className="text-xs sm:text-base font-bold text-ink hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-ink rounded px-1 sm:px-1.5 py-1 whitespace-nowrap"
          >
            Details
          </button>
        </div>
      </nav>
    </>
  );
};
