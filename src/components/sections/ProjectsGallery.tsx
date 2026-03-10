"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-gallery.css";

const galleryProjects = projects;

export default function ProjectsGallery() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const current = galleryProjects[active];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? "next" : "prev");
      setActive(index);
    },
    [active],
  );

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection("next");
      setActive((prev) => (prev + 1) % galleryProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="pg-section relative py-14 md:py-20">
      <div className="pg-glow pg-glow--1" aria-hidden="true" />
      <div className="pg-glow pg-glow--2" aria-hidden="true" />
      <div className="pg-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Header ── */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="pg-label mb-4 text-xs font-bold tracking-[0.35em] uppercase pg-fadeUp [animation-delay:0.1s]">
              Portfolio
            </p>
            <h2 className="pg-heading text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl pg-fadeUp [animation-delay:0.2s]">
              Recent{" "}
              <span className="pg-heading-accent">Works</span>
            </h2>
          </div>
          <Link href="/projects" className="pg-browse pg-fadeUp [animation-delay:0.3s]">
            <span>All Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* ── Showcase ── */}
        <div
          className="pg-showcase pg-fadeUp [animation-delay:0.4s]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ── Large image panel ── */}
          <div className="pg-panel">
            {galleryProjects.map((p, i) => (
              <div
                key={p.title}
                className={`pg-panel-slide ${
                  i === active
                    ? "pg-panel-slide--active"
                    : ""
                }`}
                style={{ backgroundImage: `url(${p.image})` }}
              />
            ))}
            <div className="pg-panel-overlay" />

            {/* Info overlay on image */}
            <div className="pg-panel-info" key={`info-${active}`}>
              <span className="pg-panel-cat pg-anim-slideUp" style={{ animationDelay: "0.05s" }}>
                {current.category}
              </span>
              <h3 className="pg-panel-title pg-anim-slideUp" style={{ animationDelay: "0.12s" }}>
                {current.title}
              </h3>
              <p className="pg-panel-desc pg-anim-slideUp" style={{ animationDelay: "0.2s" }}>
                {current.description}
              </p>
              <div className="pg-panel-tags pg-anim-slideUp" style={{ animationDelay: "0.28s" }}>
                {current.tech.map((t) => (
                  <span key={t} className="pg-panel-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="pg-panel-progress">
              <div
                className={`pg-panel-progress-bar ${!paused ? "pg-panel-progress-bar--animate" : ""}`}
                key={`progress-${active}-${paused}`}
                style={{
                  width: paused
                    ? `${((active + 1) / galleryProjects.length) * 100}%`
                    : undefined,
                }}
              />
            </div>

            {/* Nav arrows */}
            <div className="pg-panel-nav">
              <button
                className="pg-panel-arrow"
                aria-label="Previous"
                onClick={() => goTo((active - 1 + galleryProjects.length) % galleryProjects.length)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="pg-panel-arrow"
                aria-label="Next"
                onClick={() => goTo((active + 1) % galleryProjects.length)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Selector tabs ── */}
          <div className="pg-tabs">
            {galleryProjects.map((project, i) => (
              <button
                key={project.title}
                className={`pg-tab ${i === active ? "pg-tab--active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="pg-tab-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pg-tab-text">
                  <span className="pg-tab-title">{project.title}</span>
                  <span className="pg-tab-cat">{project.category}</span>
                </div>
                <div className="pg-tab-indicator" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
