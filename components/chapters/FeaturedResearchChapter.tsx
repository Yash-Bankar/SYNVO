"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    setPrefersReducedMotion(mq.matches);
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
      className="relative w-full h-full min-h-[100dvh] bg-chalk text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 xl:gap-16 max-w-[1320px] mx-auto my-auto">
        {/* Left Column: Heading, Deck, Underline CTA, and Note */}
        <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col justify-between h-full max-h-[520px] z-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-6 md:mb-8"
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
            className="space-y-4"
          >
            <div>
              <Link
                href="/research/the-business-beyond-the-next-post"
                className="inline-flex items-center gap-2 text-xl font-bold text-ink underline underline-offset-8 decoration-2 hover:opacity-75 transition-opacity"
              >
                <span>Read the essay</span>
                <span className="text-2xl leading-none font-normal">→</span>
              </Link>
            </div>

            <p className="text-base font-normal text-ink/75">
              Independent cases. Original sources.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Folded Book Artwork positioned adjacent to text */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full md:w-[50%] lg:w-[52%] max-w-[660px] h-[50vh] md:h-[72vh] flex items-center justify-center md:justify-end select-none"
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
              <Image
                src="/assets/folded-book.png"
                alt="The Business Beyond the Next Post artwork"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 45vw"
                className="object-contain object-right drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
