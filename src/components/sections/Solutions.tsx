"use client";

import { useState } from "react";
import "./solutions.css";
import { services as solutions } from "@/data/services";

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="solutions" className="sl-section relative py-28 md:py-36">
      {/* Ambient glows */}
      <div className="sl-glow sl-glow--1" aria-hidden="true" />
      <div className="sl-glow sl-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="sl-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="sl-label mb-4 text-xs font-bold tracking-[0.35em] uppercase">
            What We Build
          </p>
          <h2 className="sl-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Our{" "}
            <span className="sl-title-accent">Solutions</span>
          </h2>
          <div className="sl-line mx-auto mb-6 h-px w-24" />
          <p className="sl-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg">
            Industry-focused products engineered to solve real problems,
            from startups to enterprise scale.
          </p>
        </div>

        {/* ── Accordion + Preview ── */}
        <div className="sl-showcase">
          {/* Left: Image preview */}
          <div className="sl-preview">
            {solutions.map((solution, i) => (
              <div
                key={solution.number}
                className={`sl-preview-img ${i === activeIndex ? "sl-preview-img--active" : ""}`}
                style={{ backgroundImage: `url(${solution.image})` }}
              />
            ))}
            <div className="sl-preview-overlay" />
          </div>

          {/* Right: Accordion items */}
          <div className="sl-accordion">
            {solutions.map((solution, i) => (
              <div
                key={solution.number}
                className={`sl-item ${i === activeIndex ? "sl-item--active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="sl-item-header">
                  <h3 className="sl-item-title">{solution.title}</h3>
                  <div className="sl-item-toggle">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" className="sl-toggle-v" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                <div className="sl-item-body">
                  <p className="sl-item-desc">{solution.description}</p>
                  <div className="sl-item-tags">
                    {solution.tags.map((tag) => (
                      <span key={tag} className="sl-item-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
