"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

interface FeaturedResearchChapterProps {
  isActive: boolean;
}

export const FeaturedResearchChapter: React.FC<FeaturedResearchChapterProps> = ({
  isActive,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="featured-research"
      aria-label="Chapter 3: The research"
      className="relative w-full h-full min-h-[100dvh] bg-chalk text-ink flex flex-col px-6 sm:px-10 md:px-16 pt-20 md:pt-32 pb-28 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-center gap-4 md:gap-12 xl:gap-16 max-w-[1320px] mx-auto">
        {/* Left Column: Heading, Deck, Underline CTA, and Note */}
        <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col justify-start md:justify-between h-auto md:h-full max-h-none md:max-h-[520px] pt-1 md:pt-0 z-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-title text-ink font-extrabold tracking-display mb-6 md:mb-8"
            >
              The Business<br />
              Beyond the<br />
              Next Post
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-body-text text-ink text-lg sm:text-xl md:text-[22px] font-normal leading-snug max-w-[440px] mb-8"
            >
              What creators earned, what ownership changed, and where a software company can begin.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block space-y-4"
          >
            <div>
              <Link
                href="/research/the-business-beyond-the-next-post"
                className="inline-flex items-center gap-2 text-xl font-bold text-ink hover:opacity-75 transition-opacity group"
              >
                {/* Continuous underline using border-bottom with spacing */}
                <span className="border-b-2 border-ink pb-0.5">Read the essay</span>
                <span className="text-2xl leading-none font-bold">→</span>
              </Link>
            </div>

            <p className="text-base font-normal text-ink/75">
              Independent cases. Original sources.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Folded Book Artwork (Made bigger) */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full md:w-[50%] lg:w-[52%] max-w-[760px] h-[32vh] min-h-[210px] md:h-[82vh] flex items-center justify-center md:justify-end select-none"
        >
          <motion.div
            style={
              prefersReducedMotion
                ? {}
                : {
                    rotateX,
                    rotateY,
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative w-full h-full flex items-center justify-end"
          >
            <div className="relative w-full h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/svg-elements-2026-10-08/folded-book.svg"
                alt="The Business Beyond the Next Post artwork"
                className="w-full h-full object-contain object-center md:object-right drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA + note — mobile places them below the artwork */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden space-y-3"
        >
          <div>
            <Link
              href="/research/the-business-beyond-the-next-post"
              className="inline-flex items-center gap-2 text-xl font-bold text-ink hover:opacity-75 transition-opacity group"
            >
              <span className="border-b-2 border-ink pb-0.5">Read the essay</span>
              <span className="text-2xl leading-none font-bold">→</span>
            </Link>
          </div>
          <p className="text-base font-normal text-ink/75">
            Independent cases. Original sources.
          </p>
        </motion.div>
      </div>
    </section>
  );
};