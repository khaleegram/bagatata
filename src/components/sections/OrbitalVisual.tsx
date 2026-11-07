"use client";

import { useEffect, useRef, useState } from "react";
import { OrbitalStage } from "@/components/ui/OrbitalStage";

export function OrbitalVisual() {
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(true);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    let inView = true;
    const update = () => setActive(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(visual);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div
      className="hero-visual"
      ref={visualRef}
      data-paused={paused}
      data-idle={!active}
    >
      <div
        className="orbital-art"
        role="img"
        aria-label="The gold Bagatata ribbon B"
      >
        <OrbitalStage
          priority
          sizes="(max-width: 700px) 180px, (max-width: 1100px) 200px, 260px"
        />
        <div className="orbital-caption caption-top">
          <span className="orbital-caption-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
            </svg>
          </span>
          <div>
            <span className="mono">The ambition</span>
            <strong>Make it matter.</strong>
          </div>
        </div>
        <div className="orbital-caption caption-bottom">
          <span className="orbital-caption-symbol" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path d="m5 16 5-5 4 4 5-8M13 7h6v6" />
            </svg>
          </span>
          <div>
            <span className="mono">The approach</span>
            <strong>Build. Ship. Evolve.</strong>
          </div>
        </div>
      </div>
      <div className="orbital-control-row">
        <span className="orbital-signature">
          <span aria-hidden="true">✳</span> Ideas. Products. Real impact.
        </span>
        <button
          type="button"
          className="hero-motion-toggle"
          aria-label={paused ? "Resume animation" : "Pause animation"}
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          <svg
            viewBox="0 0 20 20"
            width="14"
            height="14"
            fill="none"
            aria-hidden="true"
          >
            {paused ? (
              <path d="m7 4 9 6-9 6V4Z" />
            ) : (
              <path d="M7 4v12m6-12v12" />
            )}
          </svg>
          <span>{paused ? "Resume motion" : "Pause motion"}</span>
        </button>
      </div>
    </div>
  );
}
