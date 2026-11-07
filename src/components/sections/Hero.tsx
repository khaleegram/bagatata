import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { OrbitalVisual } from "./OrbitalVisual";
import { heroCopy } from "@/content/home";
import "@/styles/hero.css";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="hero-status-dot" aria-hidden="true" />
            {heroCopy.eyebrow}
          </div>
          <h1 id="hero-heading">
            <span className="hero-heading-line">Build what</span>
            <span className="hero-heading-line hero-heading-accent">
              Should exist<span className="hero-period">.</span>
            </span>
          </h1>
          <p className="hero-description">{heroCopy.description}</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="#products">
              {heroCopy.primaryAction}{" "}
              <span className="hero-action-icon">
                <Arrow />
              </span>
            </Link>
            <Link className="hero-secondary" href="#contact">
              {heroCopy.secondaryAction} <Arrow />
            </Link>
          </div>
          <p className="hero-project-note">{heroCopy.projectNote}</p>
        </div>
        <OrbitalVisual />
      </div>
      <div className="container hero-bottom">
        <div className="hero-origin">
          <span className="origin-symbol" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2" />
            </svg>
          </span>
          <span>
            Abuja, Nigeria{" "}
            <span className="origin-divider" aria-hidden="true">
              /
            </span>{" "}
            <span className="origin-established">Est. 2026</span>
          </span>
        </div>
        <span className="hero-bottom-note">
          Independent thinking. Tangible products.
        </span>
        <Link href="#products" className="hero-scroll">
          <span>Discover our work</span>
          <span className="hero-scroll-icon">
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              aria-hidden="true"
            >
              <path d="M7.5 1v18m-6-6 6 6 6-6" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
