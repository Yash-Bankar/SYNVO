"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateChapter?: (chapterIndex: number) => void;
  onOpenApply?: () => void;
}

interface MenuItem {
  label: string;
  href: string;
  chapter?: number;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onNavigateChapter,
  onOpenApply,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const menuItems: MenuItem[] = [
    { label: "How it works", chapter: 1, href: "/#starting-point" },
    { label: "The partnership", chapter: 3, href: "/#partnership" },
    { label: "About", chapter: 6, href: "/#before-you-apply" },
    { label: "Before you apply", chapter: 6, href: "/#before-you-apply" },
    { label: "Research", href: "/research" },

  ];

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: MenuItem
  ) => {
    onClose();
    // On the homepage, animate to the target panel in place so the fragment
    // and horizontal sequence stay in sync without a full navigation.
    if (isHome && item.chapter !== undefined && onNavigateChapter) {
      e.preventDefault();
      onNavigateChapter(item.chapter);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.35,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-ink text-chalk flex flex-col justify-between overflow-hidden"
        >
          {/* Top Bar matching header */}
          <header className="relative z-20 w-full flex items-center justify-between px-6 sm:px-10 md:px-16 pt-6 sm:pt-8">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex items-center gap-2 text-chalk hover:text-citron text-base sm:text-lg font-bold tracking-tight transition-colors focus:outline-none"
            >
              <span>Close</span>
              <X className="w-5 h-5 stroke-[2]" />
            </button>

            <Link
              href="/"
              onClick={onClose}
              className="font-wordmark tracking-tight text-chalk hover:text-citron transition-colors uppercase"
            >
              SYNVO
            </Link>
          </header>

          {/* Body Content: Left Navigation Links + Right Giant Outline sy Sculpture matching 09-menu.png */}
          <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 xl:gap-16 max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 py-8">
            {/* Left Column: Big Display Menu Links + Citron Apply Button */}
            <div className="w-full md:w-[48%] lg:w-[46%] flex flex-col justify-center space-y-8 z-20 my-auto">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                {menuItems.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <Link
                      href={item.href}
                      scroll={item.chapter === undefined}
                      onClick={(e) => handleItemClick(e, item)}
                      className="block text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-display text-chalk hover:text-citron transition-all"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div>
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenApply) onOpenApply();
                  }}
                  className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-citron text-ink font-bold text-lg sm:text-xl hover:brightness-105 active:scale-98 transition-all shadow-xl"
                >
                  <span>Apply to Synvo</span>
                  <span className="text-2xl leading-none">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Giant sy brand sculpture */}
            <div className="w-full md:w-[52%] lg:w-[54%] h-[50vh] md:h-[84vh] pointer-events-none select-none z-10 flex items-center justify-center md:justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/hero-sy.png"
                  alt="SYNVO brand sculpture"
                  priority
                  fill
                  sizes="(max-width: 768px) 90vw, 55vw"
                  className="object-contain object-right drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
