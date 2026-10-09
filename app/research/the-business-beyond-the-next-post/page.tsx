"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { MenuModal } from "@/components/MenuModal";
import { ApplicationModal } from "@/components/ApplicationModal";
import { ReadingProgress } from "@/components/ReadingProgress";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@/components/icons/BrandIcons";
import {
  Download,
  FileText,
  ExternalLink,
  Info,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function FlagshipArticlePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [contentsOpen, setContentsOpen] = useState(false);

  const sections = [
    { id: "the-audience-is-already-buying", title: "The audience is already buying" },
    {
      id: "a-relationship-can-reveal-more-than-a-view-count",
      title: "A relationship can reveal more than a view count",
    },
    {
      id: "the-work-that-continues-after-the-lesson",
      title: "The work that continues after the lesson",
    },
    {
      id: "there-are-companies-behind-the-idea",
      title: "There are companies behind the idea",
    },
    {
      id: "what-owning-the-company-felt-like",
      title: "What owning the company felt like",
    },
    {
      id: "investors-are-seeing-businesses-around-creators",
      title: "Investors are seeing businesses around creators",
    },
    {
      id: "a-company-needs-room-for-the-creators-best-work",
      title: "A company needs room for the creator's best work",
    },
    { id: "a-different-next-chapter", title: "A different next chapter" },
    { id: "research-notes", title: "Research notes" },
  ];

  return (
    <div className="min-h-screen bg-chalk text-ink selection:bg-persimmon selection:text-chalk">
      {/* Reading progress */}
      <ReadingProgress />

      {/* Universal Header */}
      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Article Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-28 md:pt-36 pb-24">
        {/* Backlink Navigation */}
        <div className="mb-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-ink/70 hover:text-ink transition-colors group"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Research Library</span>
          </Link>
        </div>

        {/* Article Header Hero */}
        <header className="mb-14 border-b border-ink/10 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-persimmon/15 text-persimmon text-xs font-bold uppercase tracking-wider mb-5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Flagship Research Essay</span>
              </div>

              <h1 className="font-display-title text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-display text-ink mb-6">
                The Business Beyond the Next Post
              </h1>

              <p className="font-body-text text-ink/80 text-xl sm:text-2xl font-normal leading-relaxed mb-6">
                What creators earned, what ownership changed, and where a software company can begin.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-ink/60">
                <span>5 October 2026</span>
                <span>·</span>
                <span>14 min read</span>
                <span>·</span>
                <span>Verified Records & Original Sources</span>
              </div>
            </div>

            {/* Folded Book Artwork */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 sm:w-60 md:w-72 aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/svg-elements-2026-10-08/folded-book.svg"
                  alt="The Business Beyond the Next Post illustration"
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Layout Grid: Sidebar TOC + Main Article Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-3xl bg-white/70 border border-ink/10 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-ink/50 border-b border-ink/10 pb-2">
                Contents
              </div>
              <nav className="flex flex-col space-y-2.5 text-sm">
                {sections.map((section, idx) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-ink/70 hover:text-persimmon transition-colors leading-snug line-clamp-2"
                  >
                    <span className="font-mono text-xs text-ink/40 mr-1.5">
                      0{idx + 1}
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-ink/10">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-2.5 px-4 rounded-full bg-ink text-chalk text-xs font-bold hover:bg-ink/90 transition-all text-center"
                >
                  Apply to Synvo →
                </button>
              </div>
            </div>
          </aside>

          {/* Main 680px Readable Article Column */}
          <article className="lg:col-span-8 max-w-[680px] w-full text-ink font-sans space-y-8 leading-relaxed">
            {/* Mobile "In this article" disclosure */}
            <div className="lg:hidden border-y border-ink/20">
              <button
                type="button"
                onClick={() => setContentsOpen((v) => !v)}
                aria-expanded={contentsOpen}
                aria-controls="article-contents-mobile"
                className="w-full flex items-center justify-between py-3 text-left font-bold text-ink focus:outline-none"
              >
                <span className="underline underline-offset-4">In this article</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${contentsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {contentsOpen && (
                <nav
                  id="article-contents-mobile"
                  className="flex flex-col space-y-2.5 pb-4 text-sm"
                >
                  {sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setContentsOpen(false)}
                      className="text-ink/70 hover:text-persimmon transition-colors leading-snug"
                    >
                      <span className="font-mono text-xs text-ink/40 mr-1.5">
                        0{idx + 1}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              )}
            </div>

            {/* Opening Thesis Statement */}
            <div className="p-6 sm:p-8 rounded-3xl bg-citron/40 border border-ink/10">
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-snug">
                A creator’s expertise can become a company when it serves work customers keep needing done.
              </p>
              <p className="mt-3 text-base sm:text-lg text-ink/80 leading-normal">
                That possibility depends on the customer’s reason to pay and the people who can keep delivering—not audience size alone.
              </p>
            </div>

            <p className="text-lg text-ink/90">
              Thomas Frank had built a successful creator business. In a December 2023 interview, he described video revenue that had reached roughly $50,000 a month, mostly from sponsorships. He also described burning out.
            </p>

            <blockquote className="border-l-4 border-persimmon pl-5 py-2 my-4 text-xl sm:text-2xl font-bold italic text-ink">
              “I felt that I had to keep it up to pay my team.”
            </blockquote>

            <p className="text-lg text-ink/90">
              He began selling Notion templates. By the interview, two templates had brought in a reported{" "}
              <strong className="font-extrabold text-ink">
                $2.1 million in sales over about two years
              </strong>
              . He was also building Flylighter, a software product. The next business grew from work he already understood.{" "}
              <a
                href="https://www.starterstory.com/stories/thomas-frank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
              >
                <span>His original interview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>

            <p className="text-lg text-ink/90">
              Frank’s December 2023 account separates three questions: whether a channel earns, whether its owner wants to keep working that way, and whether customers need another product. His reported template sales established purchases of those offers; they did not establish demand or retention for Flylighter. A successful creator business can fund investigation without proving what should come next.
            </p>

            <p className="text-lg text-ink/90">
              The important question is what that company could make possible—for its customers, and for the person who owns it.
            </p>

            {/* SECTION 1 */}
            <section id="the-audience-is-already-buying" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                The audience is already buying
              </h2>

              <p className="text-lg text-ink/90">
                Digital products have already made that possibility tangible.
              </p>

              <p className="text-lg text-ink/90">
                Stan reports that more than{" "}
                <strong className="font-extrabold text-ink">
                  59,000 creators earned money on its platform in 2025
                </strong>
                . It recorded{" "}
                <strong className="font-extrabold text-ink">2.2 million digital-download units</strong>{" "}
                and <strong className="font-extrabold text-ink">300,000 course units</strong> sold that year. Those are platform-reported sales counts, not a measure of every creator&apos;s earnings.{" "}
                <a
                  href="https://stan.store/blog/state-of-the-creator-economy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Stan&apos;s 2026 report</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              {/* Figure 1 Container */}
              <figure className="my-8 rounded-3xl bg-white/80 border border-ink/15 p-5 sm:p-7 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                  <span>FIGURE 01 · Stan Platform Units</span>
                  <span>July 2026 Report</span>
                </div>
                <h3 className="text-xl font-extrabold text-ink tracking-tight mb-2">
                  People are already paying for expertise
                </h3>
                <p className="text-sm text-ink/75 mb-5 font-medium">
                  Downloads: 2.2 million units; courses: 300,000 units. Bars share a zero baseline. More than 59,000 creators earned.
                </p>

                {/* SVG embedding */}
                <div className="w-full my-4 flex justify-center bg-chalk/40 rounded-2xl p-4">
                  <picture className="w-full flex justify-center">
                    <source media="(min-width: 640px)" srcSet="/assets/article-figures/demand-desktop.svg" />
                    <img
                      src="/assets/article-figures/demand-mobile.svg"
                      alt="Chart showing 2.2 million downloads and 300,000 courses sold on Stan with 59,000+ creators earning"
                      className="w-full max-w-lg h-auto"
                    />
                  </picture>
                </div>

                <figcaption className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/60 leading-relaxed font-figure-note">
                  Source: Stan’s report, updated July 2026, covering 2025. Platform-reported rounded counts; units are not unique customers. No global earnings or typical-income claim. Bars share a zero baseline; the creator count is a separate measure.
                </figcaption>
              </figure>

              <p className="text-lg text-ink/90">
                One recent case makes the money personal. Nina Fuji, an emergency-room nurse, created a $45 Japan travel guide from the questions her audience kept asking. Stan&apos;s August 2026 account reports{" "}
                <strong className="font-extrabold text-ink">
                  more than $100,000 in sales within three weeks
                </strong>{" "}
                and says she used the business to pay down student debt. Sales are not net profit; the case does not supply a full financial account.{" "}
                <a
                  href="https://stan.store/blog/nina-fuji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Original case</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <blockquote className="border-l-4 border-persimmon pl-5 py-2 my-4 text-xl font-bold italic text-ink">
                “I’m just so incredibly grateful that so many people trust me enough to spend their hard-earned money on something that I created.”
              </blockquote>

              <p className="text-lg text-ink/90">
                Her audience had a specific reason to listen: knowledge that could help them plan a trip. Their purchases gave that knowledge a business form.
              </p>

              <p className="text-lg text-ink/90">
                A useful digital product can be a substantial business in its own right. It can also open a new question: after customers buy the knowledge, what do they keep needing help to do?
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="a-relationship-can-reveal-more-than-a-view-count" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                A relationship can reveal more than a view count
              </h2>

              <p className="text-lg text-ink/90">
                There is evidence that creators themselves are asking for a different kind of success.
              </p>

              <p className="text-lg text-ink/90">
                In Patreon&apos;s 2025 State of Create report, surveyed creators ranked creative quality, fan relationships and financial stability as their leading current priorities. When recalling their priorities five years earlier, follower count, engagement and views came first. The U.S. survey took place in{" "}
                <strong className="font-extrabold text-ink">August 2024</strong>, with{" "}
                <strong className="font-extrabold text-ink">1,007 creators and 2,002 fans</strong>. It is a retrospective account, not two measurements of the same group over five years.{" "}
                <a
                  href="https://stateofcreate.co/en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Report and methodology</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              {/* Figure 2 Container */}
              <figure className="my-8 rounded-3xl bg-white/80 border border-ink/15 p-5 sm:p-7 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                  <span>FIGURE 02 · Creator Priority Rankings</span>
                  <span>Patreon Survey</span>
                </div>
                <h3 className="text-xl font-extrabold text-ink tracking-tight mb-2">
                  The priorities creators reported
                </h3>
                <p className="text-sm text-ink/75 mb-5 font-medium">
                  Two ranked lists from Patreon: recalled priorities vs. survey-time priorities. Circle size does not encode amounts.
                </p>

                {/* SVG embedding */}
                <div className="w-full my-4 flex justify-center bg-chalk/40 rounded-2xl p-4">
                  <picture className="w-full flex justify-center">
                    <source media="(min-width: 640px)" srcSet="/assets/article-figures/priorities-desktop.svg" />
                    <img
                      src="/assets/article-figures/priorities-mobile.svg"
                      alt="Diagram comparing creator recalled priorities (followers, engagement, views) vs current priorities (creative quality, fan relationships, financial stability)"
                      className="w-full max-w-lg h-auto"
                    />
                  </picture>
                </div>

                <figcaption className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/60 leading-relaxed font-figure-note">
                  Source: Patreon State of Create 2025. U.S. survey, August 2024: 1,007 creators and 2,002 fans; these rankings concern creators. Earlier priorities are recalled, not separately measured. Sponsored research; no causal effect on purchases is established.
                </figcaption>
              </figure>

              <p className="text-lg text-ink/90">
                For a business, the distinction is practical. Reach helps people discover a creator. Conversations can reveal the questions they ask, the work they repeat and the tools they find frustrating. Purchases reveal something more specific again: an offer someone was willing to pay for.
              </p>

              <p className="text-lg text-ink/90">
                Those are different pieces of information. A large audience does not make them interchangeable.
              </p>

              <p className="text-lg text-ink/90">
                A creator who spends years explaining a subject may become familiar with where people get stuck. That familiarity becomes commercially useful when it leads to a better answer to a real customer problem.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="the-work-that-continues-after-the-lesson" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                The work that continues after the lesson
              </h2>

              <p className="text-lg text-ink/90">
                A course teaches someone how to do the work. A template gives them a structure. Software can handle part of the task as new information arrives.
              </p>

              <p className="text-lg text-ink/90">
                Consider Frank&apos;s products. Ultimate Brain is a ready-made Notion system. Flylighter is a separate tool for capturing web material into Notion. A workspace can be set up once; new articles, links and ideas keep arriving.{" "}
                <a
                  href="https://thomasjfrank.com/brain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Ultimate Brain</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                ,{" "}
                <a
                  href="https://flylighter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Flylighter</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                The opportunity is in that continuing work. A creator&apos;s contribution can be understanding the workflow closely enough to see what a tool should make easier. Engineers, designers and operators bring other essential skills.
              </p>

              <p className="text-lg text-ink/90">
                MacroFactor provides a current example. Its September 2026 report describes a workout app launched in January, into which customers can import purchased Jeff Nippard programs. The app then supports logging and adaptation as training continues. The company&apos;s owners bring different expertise, including science communication, engineering and marketing.{" "}
                <a
                  href="https://macrofactor.com/annual-report-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Annual report</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                ,{" "}
                <a
                  href="https://macrofactor.com/team/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Owner roles</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              {/* Figure 3 Container - Qualitative lanes COURSE, RESOURCE, SOFTWARE with equal visual status */}
              <figure className="my-8 rounded-3xl bg-white/80 border border-ink/15 p-5 sm:p-7 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                  <span>FIGURE 03 · Customer Help Models</span>
                  <span>Qualitative Comparison</span>
                </div>
                <h3 className="text-xl font-extrabold text-ink tracking-tight mb-2">
                  What is the customer still doing?
                </h3>
                <p className="text-sm text-ink/75 mb-5 font-medium">
                  Course: instruction and practice. Resource: a structure to use. Software: service as work returns. Qualitative comparison, not a ladder or measured ranking.
                </p>

                {/* SVG embedding */}
                <div className="w-full my-4 flex justify-center bg-chalk/40 rounded-2xl p-4">
                  <picture className="w-full flex justify-center">
                    <source media="(min-width: 640px)" srcSet="/assets/article-figures/work-desktop.svg" />
                    <img
                      src="/assets/article-figures/work-mobile.svg"
                      alt="Qualitative lanes showing Course, Resource, and Software with equal visual status"
                      className="w-full max-w-lg h-auto"
                    />
                  </picture>
                </div>

                <figcaption className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/60 leading-relaxed font-figure-note">
                  Source: Synvo’s qualitative comparison, illustrated by Ultimate Brain and Flylighter. Not a measured product ranking or required progression; courses, resources and newsletters can also provide ongoing value.
                </figcaption>
              </figure>

              <p className="text-lg text-ink/90">
                This comparison is about the help a customer needs. Courses can be updated, templates can be used repeatedly, and newsletters can deliver continuing value. Software becomes interesting where an ongoing service can do useful work that those offers leave with the customer.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="there-are-companies-behind-the-idea" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                There are companies behind the idea
              </h2>

              <p className="text-lg text-ink/90">
                MacroFactor&apos;s report includes a history of its reported user count, from{" "}
                <strong className="font-extrabold text-ink">
                  35,000 in September 2022 to 600,000 in September 2026
                </strong>
                . It does not define those counts as paying or active subscribers. They show the company&apos;s reported growth; they cannot be multiplied by a subscription price to calculate revenue.
              </p>

              {/* Figure 4 Container - MacroFactor growth */}
              <figure className="my-8 rounded-3xl bg-white/80 border border-ink/15 p-5 sm:p-7 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                  <span>FIGURE 04 · Growth History</span>
                  <span>MacroFactor Annual Report</span>
                </div>
                <h3 className="text-xl font-extrabold text-ink tracking-tight mb-2">
                  One company’s reported growth
                </h3>
                <p className="text-sm text-ink/75 mb-5 font-medium">
                  MacroFactor reported users, September 2022 to September 2026: 35k; 90k; 185k; 400k; 600k users respectively.
                </p>

                {/* SVG embedding */}
                <div className="w-full my-4 flex justify-center bg-chalk/40 rounded-2xl p-4">
                  <img
                    src="/assets/article-figures/macrofactor-reported-users.svg"
                    alt="Bar chart showing MacroFactor user growth from 35k in Sep 2022 to 600k in Sep 2026"
                    className="w-full max-w-lg h-auto"
                  />
                </div>

                <figcaption className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/60 leading-relaxed font-figure-note">
                  Source: MacroFactor annual report, September 2026. Historical September counts restated by the company. “Users” is not defined here as active or paying; no subscriber count or revenue is inferred. This is one business, not an industry adoption curve.
                </figcaption>
              </figure>

              <p className="text-lg text-ink/90">
                There is financial evidence from other founders, too.
              </p>

              <p className="text-lg text-ink/90">
                Nathan Barry reported{" "}
                <strong className="font-extrabold text-ink">
                  $518,000 in monthly recurring revenue at the end of 2016
                </strong>{" "}
                for ConvertKit, now Kit, and{" "}
                <strong className="font-extrabold text-ink">
                  more than $1 million in company profit that year
                </strong>
                . Monthly recurring revenue describes a month&apos;s recurring revenue base; it is neither annual cash collected nor his personal pay.{" "}
                <a
                  href="https://nathanbarry.com/2016-review/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>His 2016 account</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                But Kit&apos;s history also records missed early goals and stalled growth. Barry invested another $50,000, narrowed the customer focus to professional bloggers, hired a team and began direct sales. Customers were moved from their previous tools by hand.{" "}
                <a
                  href="https://kit.com/handbook/our-story"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Company history</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                In Kit’s account of its early growth, helping professional bloggers switch was part of delivering the product. A better email tool still required customers to move their existing work. The practical lesson is to investigate both the result a customer wants and the effort required to reach it; a feature comparison can miss the reason a promising offer goes unused.
              </p>

              {/* Figure 5 Container - Outcomes and Choices */}
              <figure className="my-8 rounded-3xl bg-white/80 border border-ink/15 p-5 sm:p-7 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                  <span>FIGURE 05 · Founder Outcomes</span>
                  <span>Cross-Case Analysis</span>
                </div>
                <h3 className="text-xl font-extrabold text-ink tracking-tight mb-2">
                  Different businesses. Different forms of choice.
                </h3>
                <p className="text-sm text-ink/75 mb-5 font-medium">
                  Selected reports shown separately: Kit 2016, Transistor 2019, MeetEdgar, Carrd 2021. Financial measures differ.
                </p>

                {/* SVG embedding */}
                <div className="w-full my-4 flex justify-center bg-chalk/40 rounded-2xl p-4">
                  <picture className="w-full flex justify-center">
                    <source media="(min-width: 640px)" srcSet="/assets/article-figures/outcomes-desktop.svg" />
                    <img
                      src="/assets/article-figures/outcomes-mobile.svg"
                      alt="Cards showing outcomes for Kit ($518k MRR), Transistor ($19k MRR), MeetEdgar (millions ARR), and Carrd (> $1m ARR)"
                      className="w-full max-w-lg h-auto"
                    />
                  </picture>
                </div>

                <figcaption className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/60 leading-relaxed font-figure-note">
                  Source: Selected historical reports, not comparable bars or typical results. MRR is monthly recurring revenue; ARR is an annualized recurring run rate. Neither is personal income. Except Barry’s, currencies are not explicit in these sources. Carrd is an adjacent designer/developer case. Life changes are attributed, not isolated causal effects. Sources: Barry, Jackson, Roeder, Carrd interview.
                </figcaption>
              </figure>

              <p className="text-lg text-ink/90">
                These are selected outcomes from different businesses and years. They establish that substantial creator and maker software companies exist. They do not establish typical earnings or that software always produces more profit than a course.
              </p>

              <p className="text-lg text-ink/90">
                The financial opportunity becomes clearer when it is attached to a service customers need repeatedly—and a company capable of supplying it.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="what-owning-the-company-felt-like" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                What owning the company felt like
              </h2>

              <p className="text-lg text-ink/90">
                Revenue becomes meaningful in the life around it.
              </p>

              <p className="text-lg text-ink/90">
                Justin Jackson&apos;s Transistor account describes the company reaching{" "}
                <strong className="font-extrabold text-ink">
                  $19,000 in monthly recurring revenue in July 2019
                </strong>
                . Later that year, he said both founders could pay themselves the equivalent of their former tech incomes. He reported less financial strain, rebuilt family savings and more time with his wife and children. He also closed other projects and reduced commitments.{" "}
                <a
                  href="https://justinjackson.ca/2019-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>His 2019 review</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <blockquote className="border-l-4 border-persimmon pl-5 py-2 my-4 text-xl font-bold italic text-ink">
                “For the first time in years, it feels like I&apos;m not juggling multiple plates.”
              </blockquote>

              <p className="text-lg text-ink/90">
                For Laura Roeder, the change was the choice to work. She had taught social-media marketing before building MeetEdgar. Her biography reports millions in annual revenue, without specifying the exact year. Her account of its end-2021 sale describes a profitable company already run by a team with little of her time needed. The sale price is private.{" "}
                <a
                  href="https://www.lauraroeder.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Her background</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                ,{" "}
                <a
                  href="https://www.lauraroeder.com/exactly-how-i-cold-emailed-my-way-to-a-life-changing-exit-and-you-can-too-165d8eaf8306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Her exit account</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <blockquote className="border-l-4 border-persimmon pl-5 py-2 my-4 text-xl font-bold italic text-ink">
                “I no longer need to work for money.”
              </blockquote>

              <p className="text-lg text-ink/90">
                She chose to continue building Paperbell. Ownership had given her an option; her ambition determined what she did with it.
              </p>

              <p className="text-lg text-ink/90">
                Barry’s account records a different kind of growth. It describes becoming a company leader and handing work to other people. He called the experience exciting, challenging and stressful. His ownership involved a larger organization, not a smaller working life.
              </p>

              <p className="text-lg text-ink/90">
                There is also the option to change roles later. In December 2024, Fathom co-founder Jack Ellis announced buying Paul Jarvis&apos;s interest as Jarvis was ready to retire. Jarvis would still do some freelance design work. The transaction price was not disclosed.{" "}
                <a
                  href="https://usefathom.com/blog/acquired"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Original announcement</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                These experiences matter because creators can want different futures. Paying down debt. Being present with family. Choosing the next project. Leading a team. Eventually stepping out of ownership.
              </p>

              <p className="text-lg text-ink/90">
                A company worth owning should be considered in that context. The goal is to make something useful enough to support customers and a business meaningful enough to fit its owners&apos; ambitions.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="investors-are-seeing-businesses-around-creators" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                Investors are seeing businesses around creators
              </h2>

              <p className="text-lg text-ink/90">
                Capital is entering some of those businesses as well.
              </p>

              <p className="text-lg text-ink/90">
                In January 2026, Bitmine announced a{" "}
                <strong className="font-extrabold text-ink">
                  $200 million equity investment in Beast Industries
                </strong>
                . The announcement pointed to MrBeast&apos;s reach and engagement and described a company spanning entertainment and consumer products. It expected the transaction to close later that month; the announcement alone does not confirm completion.{" "}
                <a
                  href="https://www.prnewswire.com/in/news-releases/bitmine-immersion-technologies-bmnr-announces-200-million-investment-in-beast-industries-302662106.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Original investor release</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                That is company capital, not creator income or software revenue. At a different level, Creator Ventures announced a{" "}
                <strong className="font-extrabold text-ink">$45 million consumer-internet fund</strong> in May 2025. That is a fund raise, not money earned by creators.{" "}
                <a
                  href="https://www.consumeourinternet.com/p/announcing-creator-ventures-fund-ii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Founders&apos; announcement</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                These examples make the wider territory visible: creators can participate in business as owners and investors as well as publishers. A single large deal does not measure the whole market. Nor does a creator need that scale of funding to investigate a useful software business.
              </p>

              <p className="text-lg text-ink/90">
                The company still needs customers, a reason to exist and people able to run it.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="a-company-needs-room-for-the-creators-best-work" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                A company needs room for the creator&apos;s best work
              </h2>

              <p className="text-lg text-ink/90">
                The operating question is part of the opportunity.
              </p>

              <p className="text-lg text-ink/90">
                Frank’s December 2023 interview describes slower content output while he worked on programming, unprofitable months as he invested in Flylighter, and hiring an operations director. Building a product can compete with the work that brings customers to it. His account makes role allocation an economic choice: the business needs both useful software and a route to customers, even when the founder prefers one kind of work.
              </p>

              <p className="text-lg text-ink/90">
                Transistor&apos;s April 2026 interview describes six people covering engineering, growth and customer help. Its smaller team is another example of a company with ongoing work divided among people.{" "}
                <a
                  href="https://saas.transistor.fm/episodes/customer-service/transcript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persimmon font-bold hover:underline"
                >
                  <span>Original interview, 15:44</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>

              <p className="text-lg text-ink/90">
                Owning a software company includes an ownership stake and decisions about the business. Building it, running it and being its public voice are roles to allocate. The arrangement needs to say who carries the work after launch, pays ongoing costs, makes decisions and serves customers.
              </p>

              <p className="text-lg text-ink/90">
                The service still needs maintenance, customer support and someone accountable when it fails. Hosting and people cost money after launch. Recurring revenue depends on customers continuing to pay; a subscription does not make that automatic.
              </p>

              <p className="text-lg text-ink/90">
                This is why the choice is larger than a product format. It includes the customer problem, the team and the role the creator wants to keep.
              </p>

              {/* Figure 6 Container - Forces around a company decision */}
              <figure className="my-8 rounded-3xl bg-white/80 border border-ink/15 p-5 sm:p-7 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/50 mb-3">
                  <span>FIGURE 06 · Decision Framework</span>
                  <span>Forces of Progress Adaptation</span>
                </div>
                <h3 className="text-xl font-extrabold text-ink tracking-tight mb-2">
                  The forces around a company decision
                </h3>
                <p className="text-sm text-ink/75 mb-5 font-medium">
                  Illustrative questions adapted from the Forces of Progress diagram: Push, Pull, Habit, Anxiety, and What still needs evidence.
                </p>

                {/* SVG embedding */}
                <div className="w-full my-4 flex justify-center bg-chalk/40 rounded-2xl p-4">
                  <picture className="w-full flex justify-center">
                    <source media="(min-width: 640px)" srcSet="/assets/article-figures/opportunity-desktop.svg" />
                    <img
                      src="/assets/article-figures/opportunity-mobile.svg"
                      alt="Diagram illustrating Push, Pull, Habit, Anxiety, and three evidence questions"
                      className="w-full max-w-lg h-auto"
                    />
                  </picture>
                </div>

                <figcaption className="mt-4 pt-3 border-t border-ink/10 text-xs text-ink/60 leading-relaxed font-figure-note">
                  Source: Synvo’s illustrative adaptation of the Forces of Progress model in the user-supplied Christensen Institute diagram. These are questions to investigate, not measured psychology, a forecast or partner eligibility. The three evidence questions preserve the article’s investigation framework.
                </figcaption>
              </figure>

              <p className="text-lg text-ink/90">
                Apply those questions to Frank’s Notion products. Ultimate Brain supplies a system; Flylighter addresses the continuing task of capturing new material. To investigate a similar opportunity, watch how a customer captures material today, identify where the current clipper fails, and test whether the proposed service is worth switching to and paying for. Then examine continued use and the cost of supporting it. This is an investigation method, not observed Flylighter customer research; template sales alone cannot establish Flylighter earnings or retention.
              </p>

              <p className="text-lg text-ink/90">
                A travel guide presents a different situation. It may fully answer a customer&apos;s planning questions. That can be an excellent offer. Software deserves investigation only if there is additional work a service could handle well, with enough reason for customers to choose it.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="a-different-next-chapter" className="pt-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink border-t border-ink/10 pt-8">
                A different next chapter
              </h2>

              <p className="text-lg text-ink/90">
                The strongest possibility in these stories is a wider choice of what a creator&apos;s work can become.
              </p>

              <p className="text-lg text-ink/90">
                Years spent explaining a subject can produce knowledge of real customer problems. A useful product can give that knowledge a business form. Software can carry some of it into work customers repeat. A team can give the company capabilities beyond one person&apos;s output.
              </p>

              <p className="text-lg text-ink/90">
                For its owner, that can mean income, responsibility, pride, a different working role or an eventual ownership transition. The founders above describe different versions of that life.
              </p>

              <p className="text-lg text-ink/90">
                The next chapter begins with a concrete question: what do the people who trust your work still need help doing?
              </p>

              <p className="text-lg text-ink/90">
                There may be a company worth owning in that answer. The next question is what role its owner wants to play.
              </p>
            </section>

            {/* RESEARCH NOTES SECTION */}
            <section id="research-notes" className="pt-10 border-t-2 border-ink/15 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink/50">
                <Info className="w-4 h-4" />
                <span>Methodology & Notes</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                Research notes
              </h2>

              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                This is a cross-case essay using original founder accounts, company records and commercially sponsored platform research. It is not an original survey, a representative earnings study or evidence that creator software outperforms digital products. The argument about expertise and continuing customer work is Synvo&apos;s interpretation. Independent examples are not Synvo portfolio results.
              </p>

              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                Financial figures are reported, not independently audited. Template sales, annual revenue, monthly recurring revenue, annual recurring revenue, company profit, investment and fund size are different measures. Figures are presented separately, with their periods. Dollars in Barry&apos;s account are U.S. dollars; several other founder/platform sources do not specify currency explicitly. Roeder&apos;s annual-revenue year, exit price and personal wealth remain undisclosed. Carrd is an adjacent designer/developer example, not an audience educator. No Flylighter or MacroFactor revenue, or Fathom transaction price, is estimated.
              </p>

              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                Stan&apos;s 2026 report uses aggregated platform data and a first-party survey; its case stories are selected commercial accounts. Nina&apos;s guide case reports sales and debt reduction without a complete profit account. Patreon&apos;s 2025 report is sponsored U.S. research with NewtonX, fielded in August 2024. Its earlier-priority rankings are respondents&apos; recollections. MacroFactor&apos;s September 2026 report restates its user history without defining active or paying status. None supplies the probability of a new creator achieving these outcomes.
              </p>

              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                Founder experiences are attributed accounts, not measurements of a psychological effect. Jackson changed other commitments as well as his business. Roeder had a team before selling. Barry took on leadership. Frank&apos;s interview shows opportunity costs alongside ambition. Beast&apos;s investment announcement is not evidence of SaaS earnings or a confirmed sector-wide funding trend. The illustrative opportunity screen is an editorial method, not an approved Synvo eligibility test.
              </p>

              {/* Data Downloads */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="/assets/article-reference/evidence.csv"
                  download="evidence.csv"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-chalk text-xs font-bold hover:bg-ink/90 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>evidence.csv</span>
                </a>

                <a
                  href="/assets/article-reference/source-map.csv"
                  download="source-map.csv"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink/10 text-ink text-xs font-bold hover:bg-ink/20 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>source-map.csv</span>
                </a>

                <a
                  href="/assets/article-reference/blog.md"
                  download="the-business-beyond-the-next-post.md"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink/10 text-ink text-xs font-bold hover:bg-ink/20 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>blog.md</span>
                </a>
              </div>

              <div className="text-xs text-ink/50 pt-2">
                Original source records inspected 2 October 2026. Prose refreshed 5 October 2026: Frank’s interview and MacroFactor’s report freshly retrieved; other unchanged claims rechecked against preserved original records.
              </div>
            </section>

            {/* Bottom Partnership Invitation Banner */}
            <div className="mt-14 p-8 rounded-3xl bg-persimmon text-chalk shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink text-chalk text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>The Synvo Partnership</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-chalk">
                Build something worth owning
              </h3>

              <p className="text-base sm:text-lg text-chalk/90 leading-relaxed">
                Synvo is a company-building partner for creators pursuing software businesses. Its model is to build and co-own software, with Synvo funding product development and leading the build, an operating team handling daily business, and the creator contributing problem understanding and product direction. Equity, time, responsibilities, decision rights and financial commitments are agreed before development.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-chalk text-ink font-bold text-base sm:text-lg hover:bg-white active:scale-98 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-chalk"
                >
                  <span>Apply to Synvo</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-ink/10 py-8 px-6 sm:px-10 md:px-16 text-center text-xs text-ink/50">
        <p>© 2026 SYNVO. Independent cases and original sources. No fabricated metrics.</p>
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
