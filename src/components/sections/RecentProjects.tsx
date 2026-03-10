"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import "./recent-projects.css";

const recentProjects = projects.slice(0, 3);

export default function RecentProjects() {
  const [featured, ...rest] = recentProjects;

  return (
    <section id="projects" className="rp-section relative py-14 md:py-20">
      {/* Ambient glows */}
      <div className="rp-glow rp-glow--1" aria-hidden="true" />
      <div className="rp-glow rp-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="rp-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="rp-label mb-4 text-xs font-bold tracking-[0.35em] uppercase rp-fadeUp [animation-delay:0.1s]">
              Our Work
            </p>
            <h2 className="rp-title text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl rp-fadeUp [animation-delay:0.25s]">
              Recent{" "}
              <span className="rp-title-accent">Projects</span>
            </h2>
            <p className="rp-subtitle mt-4 max-w-md text-base leading-relaxed rp-fadeUp [animation-delay:0.35s]">
              A look at our latest engineering work across industries.
            </p>
          </div>
        </div>

        {/* ── Divider line ── */}
        <div className="rp-line mx-auto mb-14 h-px w-full max-w-md rp-lineExpand [animation-delay:0.45s]" />

        {/* ── Featured project — full-width horizontal card ── */}
        <div className="rp-featured rp-cardReveal [animation-delay:0.5s]">
          <div className="rp-scanline" />
          <div className="rp-card-glow" />

          <div className="rp-featured-image">
            <div
              className="rp-featured-img"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className="rp-featured-img-overlay" />
            <span className="rp-card-category">{featured.category}</span>
          </div>

          <div className="rp-featured-body">
            <span className="rp-featured-year">{featured.year}</span>
            <h3 className="rp-featured-title">{featured.title}</h3>
            <p className="rp-featured-desc">{featured.description}</p>
            <div className="rp-featured-tech">
              {featured.tech.map((t) => (
                <span key={t} className="rp-card-tech-item">{t}</span>
              ))}
            </div>
            <div className="rp-featured-link">
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Two smaller cards side by side ── */}
        <div className="rp-pair">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className="rp-card rp-cardReveal"
              style={{ animationDelay: `${0.7 + i * 0.15}s` }}
            >
              <div className="rp-scanline" />
              <div className="rp-card-glow" />

              {/* Full-bleed image background with content overlaid */}
              <div className="rp-card-bg-wrap">
                <div
                  className="rp-card-bg"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="rp-card-bg-overlay" />
              </div>

              <div className="rp-card-inner">
                <div className="rp-card-top">
                  <span className="rp-card-category">{project.category}</span>
                  <span className="rp-card-year">{project.year}</span>
                </div>
                <div className="rp-card-bottom">
                  <h3 className="rp-card-title">{project.title}</h3>
                  <p className="rp-card-desc">{project.description}</p>
                  <div className="rp-card-footer">
                    <div className="rp-card-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="rp-card-tech-item">{t}</span>
                      ))}
                    </div>
                    <div className="rp-card-link">
                      <span>View</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All button ── */}
        <div className="mt-16 flex justify-center rp-fadeUp [animation-delay:1s]">
          <Link href="/projects" className="rp-view-all">
            <span>View All Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
