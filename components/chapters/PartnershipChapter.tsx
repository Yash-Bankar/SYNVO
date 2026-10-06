"use client";

import React from "react";
import { motion } from "framer-motion";

interface PartnershipChapterProps {
  isActive: boolean;
}

/**
 * Rounded hexagon path using pointy-top orientation.
 * Uses quadratic bezier curves at each corner for smooth rounding.
 */
function roundedHexPath(
  cx: number,
  cy: number,
  r: number,
  cornerR: number = 28
): string {
  // Pointy-top hexagon angles
  const angles = [90, 30, 330, 270, 210, 150];
  const pts = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  });

  const n = pts.length;
  let d = "";

  for (let i = 0; i < n; i++) {
    const curr = pts[i];
    const prev = pts[(i + n - 1) % n];
    const next = pts[(i + 1) % n];

    // Vectors from curr toward prev and next
    const dx1 = prev[0] - curr[0];
    const dy1 = prev[1] - curr[1];
    const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

    const dx2 = next[0] - curr[0];
    const dy2 = next[1] - curr[1];
    const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

    const t1 = Math.min(cornerR / len1, 0.45);
    const t2 = Math.min(cornerR / len2, 0.45);

    // Approach point from previous edge
    const ap = [curr[0] + t1 * dx1, curr[1] + t1 * dy1];
    // Departure point toward next edge
    const dp = [curr[0] + t2 * dx2, curr[1] + t2 * dy2];

    if (i === 0) {
      d += `M ${ap[0].toFixed(1)},${ap[1].toFixed(1)} `;
    } else {
      d += `L ${ap[0].toFixed(1)},${ap[1].toFixed(1)} `;
    }
    // Quadratic bezier through the corner
    d += `Q ${curr[0].toFixed(1)},${curr[1].toFixed(1)} ${dp[0].toFixed(1)},${dp[1].toFixed(1)} `;
  }
  d += "Z";
  return d;
}

export const PartnershipChapter: React.FC<PartnershipChapterProps> = ({
  isActive,
}) => {
  // Large radius hexagons that fill the right panel
  const R = 210; // petal radius — large to fill the right side
  const Rc = 98; // Company center hex radius

  // Triangle arrangement — tight overlap so Company sits in the center gap
  // Spacing = R * sqrt(3)/2 ≈ R * 0.866 for tight hex packing
  const gap = R * 0.78; // slightly less than tight to create good overlap

  // You (top-left), Synvo (top-right), Operating team (bottom-center)
  const youCx = 250;
  const youCy = 215;
  const synvoCx = 250 + gap * 2;
  const synvoCy = 215;
  const teamCx = 250 + gap;
  const teamCy = 215 + gap * 1.73;

  // Company sits at centroid
  const companyCx = (youCx + synvoCx + teamCx) / 3;
  const companyCy = (youCy + synvoCy + teamCy) / 3;

  // ViewBox sized to contain the diagram
  const vbW = synvoCx + R + 20;
  const vbH = teamCy + R + 20;

  const petalVariants = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="partnership"
      aria-label="Chapter 4: The partnership"
      className="relative w-full h-full min-h-[100dvh] bg-citron text-ink flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 md:pt-32 pb-24 md:pb-28 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full h-full flex-1 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1360px] mx-auto my-auto">
        {/* Left Column: Headline and note */}
        <div className="w-full md:w-[44%] flex flex-col justify-center h-full z-20">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero-title text-ink font-extrabold tracking-display leading-[1.02] mb-1"
          >
            Your
            <br />
            understanding
            <br />
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
            Equity, time, responsibilities, decision rights and financial
            commitments are agreed before development.
          </motion.p>
        </div>

        {/* Right Column: 3-Hex Venn Diagram — large, fills the right panel */}
        <div className="w-full md:w-[54%] h-[60vh] md:h-[80vh] flex items-center justify-center md:justify-end select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full max-w-[620px]"
          >
            <svg
              viewBox={`0 0 ${vbW} ${vbH}`}
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Partnership diagram: You, Synvo, and Operating team overlap to form a Company"
            >
              {/* YOU hex — top-left, persimmon */}
              <motion.path
                d={roundedHexPath(youCx, youCy, R)}
                fill="#EE6747"
                custom={0}
                variants={petalVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              {/* SYNVO hex — top-right, ink */}
              <motion.path
                d={roundedHexPath(synvoCx, synvoCy, R)}
                fill="#262139"
                custom={1}
                variants={petalVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              {/* OPERATING TEAM hex — bottom-center, lavender */}
              <motion.path
                d={roundedHexPath(teamCx, teamCy, R)}
                fill="#C8C2D8"
                custom={2}
                variants={petalVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              {/* COMPANY center hex — chalk with ink border */}
              <motion.path
                d={roundedHexPath(companyCx, companyCy, Rc, 14)}
                fill="#F6F4EE"
                stroke="#262139"
                strokeWidth="4"
                custom={3}
                variants={petalVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              {/* YOU label — positioned in upper-left of You petal */}
              <text
                x={youCx - R * 0.6}
                y={youCy - R * 0.32}
                fontFamily="Manrope, sans-serif"
                fontSize="32"
                fontWeight="800"
                fill="#262139"
              >
                You
              </text>
              <text
                x={youCx - R * 0.65}
                y={youCy - R * 0.05}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#262139"
              >
                Audience
              </text>
              <text
                x={youCx - R * 0.65}
                y={youCy + R * 0.13}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#262139"
              >
                understanding.
              </text>
              <text
                x={youCx - R * 0.65}
                y={youCy + R * 0.31}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#262139"
              >
                Product direction.
              </text>

              {/* SYNVO label — positioned in upper-right of Synvo petal */}
              <text
                x={synvoCx + R * 0.08}
                y={synvoCy - R * 0.32}
                fontFamily="Manrope, sans-serif"
                fontSize="32"
                fontWeight="800"
                fill="#F6F4EE"
              >
                Synvo
              </text>
              <text
                x={synvoCx + R * 0.08}
                y={synvoCy - R * 0.05}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#F6F4EE"
              >
                Development
              </text>
              <text
                x={synvoCx + R * 0.08}
                y={synvoCy + R * 0.13}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#F6F4EE"
              >
                funding. Product
              </text>
              <text
                x={synvoCx + R * 0.08}
                y={synvoCy + R * 0.31}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#F6F4EE"
              >
                and company build.
              </text>

              {/* OPERATING TEAM label — bottom of the team petal */}
              <text
                x={teamCx}
                y={teamCy + R * 0.45}
                fontFamily="Manrope, sans-serif"
                fontSize="26"
                fontWeight="800"
                fill="#262139"
                textAnchor="middle"
              >
                Operating team
              </text>
              <text
                x={teamCx}
                y={teamCy + R * 0.63}
                fontFamily="Manrope, sans-serif"
                fontSize="17"
                fontWeight="500"
                fill="#262139"
                textAnchor="middle"
              >
                Daily operation.
              </text>

              {/* COMPANY label */}
              <text
                x={companyCx}
                y={companyCy + 11}
                fontFamily="Manrope, sans-serif"
                fontSize="24"
                fontWeight="800"
                fill="#262139"
                textAnchor="middle"
              >
                Company
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
