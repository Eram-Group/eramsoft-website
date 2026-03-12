"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import "./projects-v3.css";

export default function ProjectsV3Page() {
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
    const els = document.querySelectorAll(".ap3-reveal:not(.ap3-revealed)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("ap3-revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="ap3-page">
      {/* ── Ambient ── */}
      <div className="ap3-glow ap3-glow--1" aria-hidden="true" />
      <div className="ap3-glow ap3-glow--2" aria-hidden="true" />
      <div className="ap3-glow ap3-glow--3" aria-hidden="true" />
      <div className="ap3-noise" aria-hidden="true" />
      <div className="ap3-grid-bg" aria-hidden="true" />
      <div className="ap3-orb ap3-orb--1" aria-hidden="true" />
      <div className="ap3-orb ap3-orb--2" aria-hidden="true" />
      <div className="ap3-orb ap3-orb--3" aria-hidden="true" />

      {/* ── Floating Contact Button ── */}
      <Link href="#contact" className="ap3-fab">
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
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="ap3-fab-label">Contact Us</span>
      </Link>

      <div className="ap3-container">
        {/* ── Header ── */}
        <header className="ap3-header ap3-reveal">
          <div className="ap3-header-row">
            <div className="ap3-header-text">
              <span className="ap3-header-label">Portfolio</span>
              <h1 className="ap3-heading">
                <span className="ap3-heading-line">
                  <span className="ap3-heading-thin">Selected</span>
                  <span className="ap3-heading-bold">Works</span>
                </span>
              </h1>
            </div>
            <div className="ap3-header-counter">
              <span className="ap3-count-num">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="ap3-count-sep" />
              <span className="ap3-count-text">
                Projects
                <br />
                Delivered
              </span>
            </div>
          </div>
          <div className="ap3-header-rule" />
          <p className="ap3-subtitle">
            A curated collection of digital products we&apos;ve crafted — from
            concept through launch and beyond.
          </p>
        </header>

        {/* ── Filters ── */}
        <nav className="ap3-filters ap3-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ap3-filter-btn${
                activeFilter === cat ? " ap3-filter-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* ── Editorial Rows ── */}
        <div className="ap3-rows">
          {filtered.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`ap3-row ap3-reveal${
                i % 2 === 1 ? " ap3-row--flipped" : ""
              }`}
            >
              <div className="ap3-row-img-wrap">
                <div
                  className="ap3-row-img"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="ap3-row-img-overlay" />
              </div>

              <div className="ap3-row-content">
                <div className="ap3-row-meta">
                  <span className="ap3-row-cat">{project.category}</span>
                  <span className="ap3-row-dot" />
                  <span className="ap3-row-yr">{project.year}</span>
                  <span className="ap3-row-dot" />
                  <span className="ap3-row-platform">{project.platform}</span>
                </div>

                <h2 className="ap3-row-title">{project.title}</h2>
                <p className="ap3-row-desc">{project.description}</p>

                <div className="ap3-row-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="ap3-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="ap3-row-cta">
                  View Case Study
                  <svg
                    className="ap3-cta-arrow"
                    width="24"
                    height="8"
                    viewBox="0 0 24 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="0" y1="4" x2="20" y2="4" />
                    <polyline points="17 1 20 4 17 7" />
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
