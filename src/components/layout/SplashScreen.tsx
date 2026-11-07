"use client";

import { useEffect, useState } from "react";
import { OrbitalStage } from "@/components/ui/OrbitalStage";
import "@/styles/splash.css";

/** Shared with the hero so both surfaces request one optimised image file. */
const MARK_SIZES =
  "(max-width: 700px) 180px, (max-width: 1100px) 200px, 260px";

/** Long enough to read the motion, short enough not to feel like waiting. */
const MIN_VISIBLE_MS = 1200;
const MAX_VISIBLE_MS = 2600;
/** Reduced-motion visitors still get a moment, but not an animation. */
const REDUCED_MIN_VISIBLE_MS = 350;
const REDUCED_MAX_VISIBLE_MS = 800;
const EXIT_MS = 620;

type Phase = "visible" | "leaving" | "done";

/**
 * First-load splash built from the hero's orbital ribbon B.
 *
 * It is server-rendered so the first paint is the brand, then dismissed once
 * the page has loaded (or after a hard cap) and removed from the DOM.
 */
export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minVisible = reduceMotion ? REDUCED_MIN_VISIBLE_MS : MIN_VISIBLE_MS;
    const maxVisible = reduceMotion ? REDUCED_MAX_VISIBLE_MS : MAX_VISIBLE_MS;
    const hash = window.location.hash;

    let dismissed = false;
    let minTimer = 0;
    let maxTimer = 0;
    let exitTimer = 0;

    const restoreHashTarget = () => {
      if (!hash) return;
      try {
        document.querySelector(hash)?.scrollIntoView({ block: "start" });
      } catch {
        // A malformed hash must never break the first paint.
      }
    };

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
      setPhase("leaving");
      requestAnimationFrame(restoreHashTarget);
      exitTimer = window.setTimeout(() => setPhase("done"), EXIT_MS);
    };

    const dismissWhenLoaded = () => {
      if (document.readyState === "complete") {
        dismiss();
      } else {
        window.addEventListener("load", dismiss, { once: true });
      }
    };

    minTimer = window.setTimeout(dismissWhenLoaded, minVisible);
    maxTimer = window.setTimeout(dismiss, maxVisible);

    return () => {
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
      window.clearTimeout(exitTimer);
      window.removeEventListener("load", dismiss);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      id="site-splash"
      className="splash"
      data-state={phase}
      aria-hidden="true"
    >
      <div className="splash-inner">
        <div className="splash-art">
          <OrbitalStage priority sizes={MARK_SIZES} />
        </div>
        <div className="splash-caption">
          <span className="splash-wordmark">Bagatata</span>
          <span className="splash-meter">
            <span className="splash-meter-fill" />
          </span>
        </div>
      </div>
    </div>
  );
}
