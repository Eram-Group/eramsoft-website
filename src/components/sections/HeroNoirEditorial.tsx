'use client';

import Image from 'next/image';
import './hero-noir-editorial.css';

export default function HeroNoirEditorial() {
  return (
    <section className="noir">
      {/* ── Left column: Text ── */}
      <div className="noir__text-col">
        <span className="noir__eyebrow">Strategic Intelligence</span>

        <h1 className="noir__headline">
          <span className="noir__headline-line">AI</span>
          <span className="noir__headline-line noir__headline-line--indent">
            Consulting
          </span>
          <span className="noir__headline-line">Services</span>
        </h1>

        <hr className="noir__rule" />

        <p className="noir__subtitle">
          We architect intelligent systems that elevate your enterprise —
          merging deep technical expertise with strategic vision to unlock
          transformative outcomes.
        </p>

        <div className="noir__cta-group">
          <a href="#quote" className="noir__cta-primary">
            <span>Request a Consultation</span>
            <span className="noir__cta-primary-arrow">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <a href="#services" className="noir__cta-secondary">
            View Our Work
          </a>
        </div>
      </div>

      {/* ── Right column: Image ── */}
      <div className="noir__image-col">
        <div className="noir__image-wrapper">
          <Image
            src="/26-1-1024x538.jpg"
            alt="AI consulting — cinematic editorial"
            fill
            priority
            className="noir__image"
          />
          <div className="noir__image-duotone" />
          <div className="noir__image-vignette" />
          <div className="noir__image-fade" />
        </div>
      </div>

      {/* ── Film grain overlay ── */}
      <div className="noir__grain" aria-hidden="true" />

      {/* ── Editorial mark (magazine detail) ── */}
      <div className="noir__editorial-mark" aria-hidden="true">
        <span className="noir__editorial-issue">Issue No. 11</span>
        <span className="noir__editorial-date">MMXXVI</span>
      </div>

      {/* ── Vertical side text ── */}
      <span className="noir__vertical-text" aria-hidden="true">
        Noir Editorial — Artificial Intelligence
      </span>

      {/* ── Scroll indicator ── */}
      <div className="noir__scroll">
        <div className="noir__scroll-line" />
        <span className="noir__scroll-label">Scroll</span>
      </div>
    </section>
  );
}
