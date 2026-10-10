"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon } from "./icons/BrandIcons";

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Keep focus inside the dialog while the menu is open.
      if (e.key === "Tab" && containerRef.current) {
        const focusables = containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    // Move focus into the menu on open.
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      // Restore focus to whatever opened the menu.
      previouslyFocusedRef.current?.focus?.();
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
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex items-center gap-2 text-chalk hover:text-citron text-base sm:text-lg font-bold tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-citron rounded"
            >
              <span>Close</span>
              <CloseIcon className="w-5 h-5" />
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/svg-elements-2026-10-08/sy-monogram-persimmon.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain object-center md:object-right drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
