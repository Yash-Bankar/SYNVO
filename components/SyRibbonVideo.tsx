"use client";
import { useEffect, useRef } from "react";

// Playback speed of the ribbon fly-in animation. 1 = original, 1.25 = 25%
// faster (kept professional: still smooth, just a touch snappier). The asset
// itself is never re-encoded — this only changes the element's playback rate.
const PLAYBACK_RATE = 1.25;

export default function SyRibbonVideo({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // shows the poster (final logo) only
    v.muted = true; // React doesn't always apply the muted attribute, and autoplay needs it
    try {
      v.playbackRate = PLAYBACK_RATE;
    } catch {
      // some browsers throw if the media isn't ready yet; safe to ignore
    }
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
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