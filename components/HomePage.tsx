"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Header } from "./Header";
import { ActionDock } from "./ActionDock";
import { MenuModal } from "./MenuModal";
import { ApplicationModal } from "./ApplicationModal";
import { HeroChapter } from "./chapters/HeroChapter";
import { StartingPointChapter } from "./chapters/StartingPointChapter";
import { FeaturedResearchChapter } from "./chapters/FeaturedResearchChapter";
import { PartnershipChapter } from "./chapters/PartnershipChapter";
import { EvidenceChapter } from "./chapters/EvidenceChapter";
import { OwnershipChapter } from "./chapters/OwnershipChapter";
import { BeforeYouApplyChapter } from "./chapters/BeforeYouApplyChapter";

const CHAPTER_IDS = [
  "hero",
  "starting-point",
  "featured-research",
  "partnership",
  "evidence",
  "ownership",
  "before-you-apply",
];

const CHAPTER_TITLES = [
  "The company",
  "The starting point",
  "The research",
  "The partnership",
  "The evidence",
  "The ownership",
  "Before you apply",
];

export const HomePage: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [viewportReady, setViewportReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const isTransitioningRef = useRef(false);
  const wheelDeltaRef = useRef(0);

  // Check viewport and reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
      setViewportReady(true);
    };
    const syncReducedMotion = () => setReducedMotion(mq.matches);

    syncViewport();
    syncReducedMotion();

    window.addEventListener("resize", syncViewport);
    mq.addEventListener("change", syncReducedMotion);
    return () => {
      window.removeEventListener("resize", syncViewport);
      mq.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  // Hash synchronization on mount and change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      const idx = CHAPTER_IDS.indexOf(hash);
      if (idx !== -1) {
        setCurrentChapter(idx);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Update hash when chapter changes
  const navigateToChapter = useCallback(
    (index: number) => {
      if (index < 0 || index >= CHAPTER_IDS.length) return;
      setCurrentChapter(index);
      const targetHash = `#${CHAPTER_IDS[index]}`;
      if (window.location.hash !== targetHash) {
        history.replaceState(null, "", targetHash);
      }

      // If on mobile, scroll smoothly to section
      if (!isDesktop) {
        const el = document.getElementById(CHAPTER_IDS[index]);
        if (el) {
          el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
        }
      }
    },
    [isDesktop, reducedMotion]
  );

  // Desktop wheel / trackpad gesture listener with lock & threshold
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if menu or modals are open
      if (isMenuOpen || isApplyOpen) return;

      // Check if target is inside an overflow-y scrollable element that has remaining scroll
      let targetEl = e.target as HTMLElement | null;
      while (targetEl && targetEl !== document.body) {
        if (
          targetEl.scrollHeight > targetEl.clientHeight &&
          (targetEl.style.overflowY === "auto" ||
            targetEl.style.overflowY === "scroll" ||
            window.getComputedStyle(targetEl).overflowY === "auto")
        ) {
          const isAtTop = targetEl.scrollTop <= 0;
          const isAtBottom =
            Math.ceil(targetEl.scrollTop + targetEl.clientHeight) >=
            targetEl.scrollHeight;

          if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
            // Let the internal element consume vertical scroll
            return;
          }
        }
        targetEl = targetEl.parentElement;
      }

      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      // Evaluate horizontal deltaX or deliberate vertical deltaY
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      wheelDeltaRef.current += delta;

      const threshold = 60;

      if (wheelDeltaRef.current > threshold) {
        if (currentChapter < CHAPTER_IDS.length - 1) {
          e.preventDefault();
          isTransitioningRef.current = true;
          navigateToChapter(currentChapter + 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
            wheelDeltaRef.current = 0;
          }, 600);
        }
      } else if (wheelDeltaRef.current < -threshold) {
        if (currentChapter > 0) {
          e.preventDefault();
          isTransitioningRef.current = true;
          navigateToChapter(currentChapter - 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
            wheelDeltaRef.current = 0;
          }, 600);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isDesktop, currentChapter, isMenuOpen, isApplyOpen, navigateToChapter]);

  // Keyboard navigation when focused on page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMenuOpen || isApplyOpen) return;
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (currentChapter < CHAPTER_IDS.length - 1) {
          e.preventDefault();
          navigateToChapter(currentChapter + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (currentChapter > 0) {
          e.preventDefault();
          navigateToChapter(currentChapter - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentChapter, isMenuOpen, isApplyOpen, navigateToChapter]);

  // Mobile IntersectionObserver to sync indicators with vertical scroll.
  // Wait until the viewport has been measured so it never runs against the
  // initial (pre-measurement) layout and clobber the URL fragment.
  useEffect(() => {
    if (!viewportReady || isDesktop) return;

    const observers: IntersectionObserver[] = [];
    CHAPTER_IDS.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
              setCurrentChapter(index);
              const targetHash = `#${id}`;
              if (window.location.hash !== targetHash) {
                history.replaceState(null, "", targetHash);
              }
            }
          });
        },
        { threshold: [0.45, 0.7] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [viewportReady, isDesktop]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-chalk text-ink font-sans">
      {/* Global Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        currentChapter={currentChapter}
      />

      {/* Chapter Container: Horizontal slide on desktop, vertical stack on mobile */}
      {isDesktop ? (
        <main
          role="region"
          aria-label="Homepage presentation chapters"
          className="relative w-full h-[100dvh] overflow-hidden"
        >
          <div
            className="flex h-full w-[700vw] transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(-${currentChapter * (100 / 7)}%)`,
              transitionProperty: reducedMotion ? "none" : "transform",
            }}
          >
            <div className="w-[100vw] h-full flex-shrink-0">
              <HeroChapter isActive={currentChapter === 0} />
            </div>
            <div className="w-[100vw] h-full flex-shrink-0">
              <StartingPointChapter isActive={currentChapter === 1} />
            </div>
            <div className="w-[100vw] h-full flex-shrink-0">
              <FeaturedResearchChapter isActive={currentChapter === 2} />
            </div>
            <div className="w-[100vw] h-full flex-shrink-0">
              <PartnershipChapter isActive={currentChapter === 3} />
            </div>
            <div className="w-[100vw] h-full flex-shrink-0">
              <EvidenceChapter isActive={currentChapter === 4} />
            </div>
            <div className="w-[100vw] h-full flex-shrink-0">
              <OwnershipChapter isActive={currentChapter === 5} />
            </div>
            <div className="w-[100vw] h-full flex-shrink-0">
              <BeforeYouApplyChapter isActive={currentChapter === 6} />
            </div>
          </div>
        </main>
      ) : (
        <main
          role="region"
          aria-label="Homepage presentation chapters"
          className="relative w-full flex flex-col"
        >
          <HeroChapter isActive={currentChapter === 0} />
          <StartingPointChapter isActive={currentChapter === 1} />
          <FeaturedResearchChapter isActive={currentChapter === 2} />
          <PartnershipChapter isActive={currentChapter === 3} />
          <EvidenceChapter isActive={currentChapter === 4} />
          <OwnershipChapter isActive={currentChapter === 5} />
          <BeforeYouApplyChapter isActive={currentChapter === 6} />
        </main>
      )}

      {/* Action Dock (Only on homepage) */}
      <ActionDock
        currentChapter={currentChapter}
        totalChapters={CHAPTER_IDS.length}
        chapterTitles={CHAPTER_TITLES}
        onNavigateChapter={navigateToChapter}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* Menu Overlay */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigateChapter={navigateToChapter}
        onOpenApply={() => {
          setIsMenuOpen(false);
          setIsApplyOpen(true);
        }}
      />

      {/* Application Dialog Modal */}
      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
};
