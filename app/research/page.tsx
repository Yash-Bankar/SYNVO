"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { MenuModal } from "@/components/MenuModal";
import { ApplicationModal } from "@/components/ApplicationModal";
import { ArrowRight, Download, FileText } from "lucide-react";

export default function ResearchIndexPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-chalk text-ink flex flex-col justify-between selection:bg-persimmon selection:text-chalk">
      {/* Header */}
      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Main Research Content matching 10-research-index.png */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-16 pt-28 md:pt-36 pb-24">
        {/* Page Title & Subtitle */}
        <div className="mb-10">
          <h1 className="font-display-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-display mb-3">
            Research
          </h1>
          <p className="font-body-text text-ink text-xl sm:text-2xl md:text-3xl font-light">
            The work, money and choices behind creator companies.
          </p>
        </div>

        {/* 2-Column Grid matching 10-research-index.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Featured Essay (Persimmon card with folded book artwork) */}
          <div className="lg:col-span-8 rounded-3xl bg-persimmon text-ink p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-md">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-chalk/90 mb-6 block">
              FEATURED ESSAY
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-display leading-tight text-ink mb-10 max-w-md">
              The Business<br />
              Beyond the<br />
              Next Post
            </h2>

            <div>
              <Link
                href="/research/the-business-beyond-the-next-post"
                className="inline-flex items-center gap-2 text-xl font-bold text-ink underline underline-offset-8 decoration-2 hover:opacity-75 transition-opacity"
              >
                <span>Read the essay→</span>
              </Link>
            </div>

            {/* Right side artwork inside card */}
            <div className="absolute right-[-4%] bottom-[-8%] w-[50%] max-w-[360px] aspect-square pointer-events-none select-none">
              <Image
                src="/assets/folded-book.png"
                alt="The Business Beyond the Next Post"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Other Research Articles list with geometric thumbnail cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 pt-2">
            <div className="divide-y divide-ink/15 border-t border-b border-ink/15">
              {/* Row 1: The Economics of a Loyal Audience */}
              <div className="py-6 flex items-center justify-between gap-4 group cursor-pointer">
                <div className="flex items-center gap-4">
                  {/* Geometric Thumbnail: Citron, Persimmon, Ink split */}
                  <div className="w-16 h-14 rounded bg-citron relative overflow-hidden flex-shrink-0 border border-ink/10">
                    <div className="absolute right-0 top-0 w-8 h-14 bg-persimmon rounded-l-full" />
                    <div className="absolute left-0 bottom-0 w-7 h-7 bg-ink" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-ink leading-snug group-hover:opacity-75">
                    The Economics of<br />a Loyal Audience
                  </h4>
                </div>
                <ArrowRight className="w-5 h-5 text-ink group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </div>

              {/* Row 2: What Makes a Product Worth Paying for Again */}
              <div className="py-6 flex items-center justify-between gap-4 group cursor-pointer">
                <div className="flex items-center gap-4">
                  {/* Geometric Thumbnail: Citron top, Persimmon bottom-left, Ink bottom-right */}
                  <div className="w-16 h-14 rounded bg-citron relative overflow-hidden flex-shrink-0 border border-ink/10">
                    <div className="absolute left-0 bottom-0 w-16 h-8 bg-persimmon rounded-tr-full" />
                    <div className="absolute right-0 top-0 w-7 h-7 bg-ink" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-ink leading-snug group-hover:opacity-75">
                    What Makes a Product<br />Worth Paying for Again
                  </h4>
                </div>
                <ArrowRight className="w-5 h-5 text-ink group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#all"
                className="text-base font-bold text-ink underline underline-offset-4 hover:opacity-75"
              >
                Explore all research →
              </a>
            </div>
          </div>
        </div>

        {/* Open Research Data Downloads Section */}
        <div className="mt-16 rounded-3xl bg-white/60 border border-ink/10 p-8">
          <h3 className="text-xl font-bold mb-4">Research Data & Sources</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/assets/article-reference/evidence.csv"
              download="synvo-evidence.csv"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-chalk text-sm font-semibold hover:bg-ink/90 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>evidence.csv</span>
            </a>
            <a
              href="/assets/article-reference/source-map.csv"
              download="synvo-source-map.csv"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink/10 text-ink text-sm font-semibold hover:bg-ink/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>source-map.csv</span>
            </a>
            <a
              href="/assets/article-reference/blog.md"
              download="the-business-beyond-the-next-post.md"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink/10 text-ink text-sm font-semibold hover:bg-ink/20 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>blog.md</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-ink/10 py-6 px-6 sm:px-10 md:px-16 text-center text-xs text-ink/50">
        <p>© 2026 SYNVO. Independent cases and original sources.</p>
      </footer>

      {/* Menu Overlay */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
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
}
