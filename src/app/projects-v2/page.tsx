"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-v2.css";

export default function ProjectsV2Page() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const els = document.querySelectorAll(".ap2-reveal:not(.ap2-revealed)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ap2-revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="ap2-page">
      {/* ── Ambient ── */}
      <div className="ap2-glow ap2-glow--1" aria-hidden="true" />
      <div className="ap2-glow ap2-glow--2" aria-hidden="true" />
      <div className="ap2-glow ap2-glow--3" aria-hidden="true" />
      <div className="ap2-noise" aria-hidden="true" />
      <div className="ap2-grid-bg" aria-hidden="true" />
      <div className="ap2-orb ap2-orb--1" aria-hidden="true" />
      <div className="ap2-orb ap2-orb--2" aria-hidden="true" />
      <div className="ap2-orb ap2-orb--3" aria-hidden="true" />

      <div className="ap2-container">
        {/* ── Header ── */}
        <header className="ap2-header ap2-reveal">
          <div className="ap2-header-row">
            <div className="ap2-header-text">
              <span className="ap2-header-label">Portfolio</span>
              <h1 className="ap2-heading">
                <span className="ap2-heading-line">
                  <span className="ap2-heading-thin">Selected</span>
                </span>
                <span className="ap2-heading-line">
                  <span className="ap2-heading-bold">Works</span>
                </span>
              </h1>
            </div>
            <div className="ap2-header-counter">
              <span className="ap2-count-num">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="ap2-count-sep" />
              <span className="ap2-count-text">
                Projects
                <br />
                Delivered
              </span>
            </div>
          </div>
          <div className="ap2-header-rule" />
          <p className="ap2-subtitle">
            A curated collection of digital products we&apos;ve crafted — from
            concept through launch and beyond.
          </p>
        </header>

        {/* ── Filters ── */}
        <nav className="ap2-filters ap2-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ap2-filter-btn${
                activeFilter === cat ? " ap2-filter-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* ── Showcase: overlapping cards ── */}
        <div className="ap2-showcase">
          {filtered.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className={`ap2-card${i % 2 === 1 ? " ap2-card--flip" : ""} ap2-reveal`}
            >
              {/* ── Full-bleed image side ── */}
              <div className="ap2-card-visual">
                <div
                  className="ap2-card-img"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="ap2-card-shade" />
                <div className="ap2-card-badges">
                  <span className="ap2-badge ap2-badge--cat">
                    {project.category}
                  </span>
                  <span className="ap2-badge ap2-badge--yr">{project.year}</span>
                </div>
              </div>

              {/* ── Overlapping info panel ── */}
              <div className="ap2-card-info">
                <span className="ap2-card-edge" aria-hidden="true" />

                <div className="ap2-card-meta">
                  <span>{project.platform}</span>
                  <span className="ap2-dot" />
                  <span className="ap2-live">{project.status}</span>
                </div>

                <h2 className="ap2-card-title">{project.title}</h2>
                <p className="ap2-card-desc">{project.description}</p>

                <div className="ap2-card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="ap2-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="ap2-card-cta">
                  MORE
                  <svg
                    width="28"
                    height="10"
                    viewBox="0 0 28 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="0" y1="5" x2="24" y2="5" />
                    <polyline points="20 1 24 5 20 9" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
