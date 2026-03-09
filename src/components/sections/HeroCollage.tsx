'use client';

import './hero-collage.css';

export default function HeroCollage() {
  return (
    <section className="mono">
      {/* Grid background */}
      <div className="mono__grid" aria-hidden="true" />

      <div className="mono__container">
        {/* Left: content */}
        <div className="mono__content">
          <div className="mono__eyebrow">
            <span className="mono__eyebrow-line" />
            <span className="mono__eyebrow-text">Software Development</span>
          </div>

          <h1 className="mono__headline">
            We build software<br />
            that <em>scales</em> with you
          </h1>

          <hr className="mono__divider" />

          <p className="mono__subtitle">
            From web and mobile apps to complex enterprise platforms — we design,
            engineer, and ship production-ready software for startups and enterprises.
          </p>

          <div className="mono__ctas">
            <a href="#quote" className="mono__cta">
              <span>Start a Project</span>
              <span className="mono__cta-arrow">&rarr;</span>
            </a>
            <a href="#work" className="mono__cta-ghost">
              View Our Work
            </a>
          </div>
        </div>

        {/* Right: geometric composition */}
        <div className="mono__visual" aria-hidden="true">
          {/* Corner brackets */}
          <div className="mono__corner mono__corner--tl" />
          <div className="mono__corner mono__corner--tr" />
          <div className="mono__corner mono__corner--bl" />
          <div className="mono__corner mono__corner--br" />

          {/* Layered shapes */}
          <div className="mono__frame" />
          <div className="mono__block" />
          <div className="mono__accent" />
          <div className="mono__circle" />

          {/* Stat badges */}
          <div className="mono__badge mono__badge--1">
            <span className="mono__badge-num">200+</span>
            <span className="mono__badge-label">Projects Shipped</span>
          </div>

          <div className="mono__badge mono__badge--2">
            <span className="mono__badge-num">14+</span>
            <span className="mono__badge-label">Years Experience</span>
          </div>

          {/* Diagonal accent */}
          <div className="mono__diagonal" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mono__bottom">
        <div className="mono__bottom-inner">
          <span className="mono__bottom-text">Web &middot; Mobile &middot; Cloud &middot; AI</span>
          <div className="mono__bottom-dots">
            <div className="mono__bottom-dot mono__bottom-dot--active" />
            <div className="mono__bottom-dot" />
            <div className="mono__bottom-dot" />
          </div>
          <span className="mono__bottom-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
