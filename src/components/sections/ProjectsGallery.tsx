"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-gallery.css";

const FEATURED_COUNT = projects.length;
const featuredProjects = projects;

export default function ProjectsGallery() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const current = featuredProjects[active] ?? featuredProjects[0];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? "next" : "prev");
      setActive(index);
    },
    [active],
  );

  // Track section visibility
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll active tab into view within the tabs container only
  useEffect(() => {
    const tab = tabRefs.current[active];
    const container = tabsContainerRef.current;
    if (!tab || !container) return;

    const isHorizontal = window.innerWidth <= 900;
    if (isHorizontal) {
      const scrollLeft = tab.offsetLeft - container.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    } else {
      const scrollTop = tab.offsetTop - container.offsetTop - container.clientHeight / 2 + tab.clientHeight / 2;
      container.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  }, [active]);

  // Auto-play only when section is visible
  useEffect(() => {
    if (paused || !isVisible) return;
    const timer = setInterval(() => {
      setDirection("next");
      setActive((prev) => (prev + 1) % FEATURED_COUNT);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, isVisible]);

  return (
    <section ref={sectionRef} className="pg-section relative py-14 md:py-20">
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
          <Link href={`/projects/${current.slug}`} className="pg-panel" style={{ textDecoration: "none" }}>
            {featuredProjects.map((p, i) => (
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
                    ? `${((active + 1) / FEATURED_COUNT) * 100}%`
                    : undefined,
                }}
              />
            </div>

            {/* Nav arrows */}
            <div className="pg-panel-nav">
              <button
                className="pg-panel-arrow"
                aria-label="Previous"
                onClick={(e) => { e.preventDefault(); goTo((active - 1 + FEATURED_COUNT) % FEATURED_COUNT); }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="pg-panel-arrow"
                aria-label="Next"
                onClick={(e) => { e.preventDefault(); goTo((active + 1) % FEATURED_COUNT); }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </Link>

          {/* ── Selector tabs ── */}
          <div className="pg-tabs-wrapper">
            <div ref={tabsContainerRef} className="pg-tabs">
              {featuredProjects.map((project, i) => (
                <button
                  key={project.title}
                  ref={(el) => { tabRefs.current[i] = el; }}
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
            <Link href="/projects" className="pg-show-all-btn">
              <span>View All Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
