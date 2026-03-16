"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import "./projects-v5.css";
import "./projects-hero.css";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".p5-reveal:not(.p5-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("p5-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="p5-page">
      {/* Ambient */}
      <div className="p5-grain" aria-hidden="true" />
      <div className="p5-orb p5-orb--1" aria-hidden="true" />
      <div className="p5-orb p5-orb--2" aria-hidden="true" />
      <div className="p5-orb p5-orb--3" aria-hidden="true" />

      <div className="p5-container">
        {/* ── Hero Header ── */}
        <section className="ph-hero p5-reveal">
          <div className="ph-hero-bg" aria-hidden="true" />

          <div className="ph-hero-content">
            <div className="ph-hero-left">
              <div className="ph-label">
                <span className="ph-label-line" />
                <span>Our Portfolio</span>
              </div>
              <h1 className="ph-title">
                <span className="ph-title-thin">Selected</span>
                <span className="ph-title-bold">Works</span>
              </h1>
              <p className="ph-desc">
                A curated collection of digital products we&apos;ve crafted — from
                concept through launch and beyond.
              </p>
            </div>

            <div className="ph-hero-right">
              <div className="ph-stat">
                <span className="ph-stat-num">{String(projects.length).padStart(2, "0")}</span>
                <span className="ph-stat-label">Projects Delivered</span>
              </div>
              <div className="ph-stat">
                <span className="ph-stat-num">{String(categories.length - 1).padStart(2, "0")}</span>
                <span className="ph-stat-label">Industries Served</span>
              </div>
            </div>
          </div>

          <div className="ph-rule" />

          {/* ── Filters ── */}
          <nav className="ph-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ph-filter${activeFilter === cat ? " ph-filter--on" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {activeFilter === cat && <span className="ph-filter-dot" />}
                {cat}
              </button>
            ))}
          </nav>
        </section>

        {/* ═══ PROJECT ROWS ═══ */}
        <div className="p5-rows">
          {filtered.map((project, i) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className={`p5-row p5-reveal ${i % 2 === 1 ? "p5-row--flip" : ""}`}
              style={{ "--delay": `${0.05}s` } as React.CSSProperties}
            >
              {/* Animated border glow */}
              <span className="p5-row-border-glow" aria-hidden="true" />

              {/* Image side */}
              <div className="p5-row-img-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 55vw"
                  className="p5-row-img"
                />
                <div className="p5-row-img-dim" />
                <div className="p5-row-img-vignette" />

                <span className="p5-row-idx" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content side */}
              <div className="p5-row-content">
                <div className="p5-row-top">
                  <span className="p5-chip">{project.category}</span>
                  <span className="p5-chip p5-chip--year">{project.year}</span>
                  <span className="p5-row-status-pill">
                    <span
                      className={`p5-status-dot ${
                        project.status === "Live"
                          ? "p5-dot--live"
                          : project.status === "Beta"
                          ? "p5-dot--beta"
                          : "p5-dot--dev"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                <h2 className="p5-row-title">{project.title}</h2>
                <p className="p5-row-desc">{project.description}</p>

                <div className="p5-row-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="p5-tech">{t}</span>
                  ))}
                </div>

                <div className="p5-row-footer">
                  <div className="p5-row-meta">
                    <span className="p5-row-meta-item">
                      <span className="p5-row-meta-label">Platform</span>
                      {project.platform}
                    </span>
                  </div>
                </div>

                <span className="p5-row-cta">
                  View Case Study
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="9" x2="15" y2="9" />
                    <polyline points="11 5 15 9 11 13" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="p5-bottom p5-reveal">
          <span className="p5-bottom-glow" aria-hidden="true" />
          <span className="p5-bottom-border" aria-hidden="true" />
          <div className="p5-bottom-inner">
            <span className="p5-bottom-tag">
              <span className="p5-bottom-tag-dot" />
              Available for work
            </span>
            <h3 className="p5-bottom-heading">Have a project in mind?</h3>
            <p className="p5-bottom-sub">Let&apos;s craft something exceptional together.</p>
            <Link href="/contact" className="p5-bottom-btn">
              <span>Start a Conversation</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="15" x2="15" y2="3" />
                <polyline points="7 3 15 3 15 11" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
