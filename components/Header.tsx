"use client";

import React from "react";
import Link from "next/link";

interface HeaderProps {
  onOpenMenu: () => void;
  textColor?: "ink" | "chalk" | "current";
  currentChapter?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  textColor = "ink",
}) => {
  const colorClass =
    textColor === "chalk" ? "text-chalk" : "text-ink";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 md:px-16 pt-5 pb-3 sm:pt-8 pointer-events-none transition-colors duration-300 ${colorClass}`}
    >
      {/* Top Left Menu Trigger with Two Parallel Bars */}
      <button
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="pointer-events-auto inline-flex items-center gap-2.5 py-1.5 px-3 -ml-2 rounded-full bg-inherit backdrop-blur-md hover:bg-black/5 active:scale-95 transition-all text-base sm:text-lg font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-current shadow-xs md:shadow-none"
      >
        <div className="flex flex-col gap-[4px] w-4 justify-center">
          <span className="h-[2px] w-full bg-current rounded-full" />
          <span className="h-[2px] w-full bg-current rounded-full" />
        </div>
        <span>Menu</span>
      </button>

      {/* Top Right SYNVO Wordmark */}
      <Link
        href="/"
        aria-label="SYNVO homepage"
        className="pointer-events-auto font-wordmark uppercase tracking-tight py-1 px-3 rounded-full bg-inherit backdrop-blur-md hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-current shadow-xs md:shadow-none"
      >
        SYNVO
      </Link>
    </header>
  );
};
