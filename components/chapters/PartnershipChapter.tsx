"use client";

import React from "react";
import { motion } from "framer-motion";

interface PartnershipChapterProps {
  isActive: boolean;
}

// Helper: Returns SVG path for a hexagon centered at (cx, cy) with radius r
// Flat-top orientation (first vertex at top)
function hexPath(cx: number, cy: number, r: number, rounded: number = 0): string {
  // Pointy-top hexagon: vertices at 0°, 60°, 120°, 180°, 240°, 300°
  const angles = [30, 90, 150, 210, 270, 330];
  const pts = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  });
  return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + " Z";
}

export const PartnershipChapter: React.FC<PartnershipChapterProps> = ({
  isActive,
}) => {
  // Three petal hexagons + center company hex
  // Layout: You (top-left), Synvo (top-right), Operating team (bottom-center)
  // They overlap in the center where Company sits
  const R = 150; // petal hex radius
  const Rc = 75;  // company hex radius (smaller, centered)

  // Center positions arranged in a triangle pattern
  // top-left center: You
  const youCx = 195;
  const youCy = 170;
  // top-right: Synvo
  const synvoCx = 375;
  const synvoCy = 170;
  // bottom-center: Operating team
  const teamCx = 285;
  const teamCy = 330;
  // Company center = centroid of the 3
  const companyCx = (youCx + synvoCx + teamCx) / 3;
  const companyCy = (youCy + synvoCy + teamCy) / 3;

  return (
    <section
      id="partnership"
      aria-label="Chapter 4: The partnership"
      className="relative w-full h-full min-h-[100dvh] bg-citron text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1320px] mx-auto my-auto">
        {/* Left Column: Headline and Agreement condition note */}
        <div className="w-full md:w-[44%] flex flex-col justify-center h-full z-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-1"
          >
            Your<br />
            understanding<br />
            shapes it.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-8"
          >
            A team runs it.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-text text-ink text-base sm:text-lg md:text-[20px] font-normal leading-snug max-w-[480px]"
          >
            Equity, time, responsibilities, decision rights and financial commitments are agreed before development.
          </motion.p>
        </div>

        {/* Right Column: 3-Hex Venn Diagram */}
        <div className="w-full md:w-[52%] h-[52vh] md:h-[72vh] flex items-center justify-center md:justify-end select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[520px] h-full max-h-[500px]"
          >
            <svg
              viewBox="0 0 570 490"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* YOU hex — top-left, persimmon */}
              <path d={hexPath(youCx, youCy, R)} fill="#EE6747" />

              {/* SYNVO hex — top-right, ink */}
              <path d={hexPath(synvoCx, synvoCy, R)} fill="#262139" />

              {/* OPERATING TEAM hex — bottom-center, lavender */}
              <path d={hexPath(teamCx, teamCy, R)} fill="#C8C2D8" />

              {/* COMPANY center hex — chalk with ink border */}
              <path
                d={hexPath(companyCx, companyCy, Rc)}
                fill="#F6F4EE"
                stroke="#262139"
                strokeWidth="4.5"
              />

              {/* YOU label */}
              <text x={youCx - 55} y={youCy - 50} fontFamily="Manrope, sans-serif" fontSize="28" fontWeight="800" fill="#262139">You</text>
              <text x={youCx - 72} y={youCy - 18} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#262139">Audience</text>
              <text x={youCx - 72} y={youCy + 4} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#262139">understanding.</text>
              <text x={youCx - 72} y={youCy + 26} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#262139">Product direction.</text>

              {/* SYNVO label */}
              <text x={synvoCx - 10} y={synvoCy - 50} fontFamily="Manrope, sans-serif" fontSize="28" fontWeight="800" fill="#F6F4EE">Synvo</text>
              <text x={synvoCx - 10} y={synvoCy - 18} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#F6F4EE">Development</text>
              <text x={synvoCx - 10} y={synvoCy + 4} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#F6F4EE">funding. Product</text>
              <text x={synvoCx - 10} y={synvoCy + 26} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#F6F4EE">and company build.</text>

              {/* OPERATING TEAM label */}
              <text x={teamCx - 90} y={teamCy + 42} fontFamily="Manrope, sans-serif" fontSize="22" fontWeight="800" fill="#262139">Operating team</text>
              <text x={teamCx - 60} y={teamCy + 66} fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="500" fill="#262139">Daily operation.</text>

              {/* COMPANY label */}
              <text x={companyCx} y={companyCy + 9} fontFamily="Manrope, sans-serif" fontSize="20" fontWeight="800" fill="#262139" textAnchor="middle">Company</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
