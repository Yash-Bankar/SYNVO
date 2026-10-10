"use client";
import { useEffect, useRef } from "react";

export default function SyRibbonVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // shows the poster (final logo) only
    v.muted = true; // React doesn't always apply the muted attribute, and autoplay needs it
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster="/assets/sy-video/sy-ribbon-poster.png"
      muted
      playsInline
      preload="auto"
    >
      <source src="/assets/sy-video/sy-ribbon.mp4" type="video/mp4" />
      <source src="/assets/sy-video/sy-ribbon.webm" type="video/webm" />
    </video>
  );
}