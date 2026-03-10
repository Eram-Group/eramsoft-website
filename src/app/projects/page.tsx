"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import "./projects-page.css";

export default function ProjectsPage() {
  return (
    <div className="ap-page">
      {/* Ambient glows */}
      <div className="ap-glow ap-glow--1" aria-hidden="true" />
      <div className="ap-glow ap-glow--2" aria-hidden="true" />
      <div className="ap-glow ap-glow--3" aria-hidden="true" />

      {/* Noise texture */}
      <div className="ap-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-24 md:px-12 lg:px-16">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-16 pt-4 ap-fadeUp [animation-delay:0.05s]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={147}
              height={42}
              className="brightness-0 invert opacity-80"
            />
          </Link>
          <Link href="/" className="ap-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* ── Page header ── */}
        <div className="mb-16">
          <p className="ap-label mb-4 text-xs font-bold tracking-[0.35em] uppercase ap-fadeUp [animation-delay:0.1s]">
            Portfolio
          </p>
          <h1 className="ap-title text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl ap-fadeUp [animation-delay:0.2s]">
            All{" "}
            <span className="ap-title-accent">Projects</span>
          </h1>
          <p className="ap-subtitle mt-4 max-w-lg text-base leading-relaxed ap-fadeUp [animation-delay:0.3s]">
            Explore our complete portfolio of engineering work — from mobile apps
            and fintech platforms to AI-powered tools and IoT dashboards.
          </p>
        </div>

        {/* ── Divider line ── */}
        <div className="ap-line mx-auto mb-14 h-px w-full max-w-md ap-lineExpand [animation-delay:0.4s]" />

        {/* ── Bento grid ── */}
        <div className="ap-bento">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`ap-card ap-card--${i + 1} ap-cardReveal`}
              style={{ animationDelay: `${0.45 + i * 0.12}s` }}
            >
              {/* Scan line */}
              <div className="ap-scanline" />

              {/* Glow overlay */}
              <div className="ap-card-glow" />

              {/* Full-bleed background */}
              <div className="ap-card-bg-wrap">
                <div
                  className="ap-card-bg"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="ap-card-bg-overlay" />
              </div>

              {/* Content overlaid */}
              <div className="ap-card-inner">
                <div className="ap-card-top">
                  <span className="ap-card-category">{project.category}</span>
                  <span className="ap-card-year">{project.year}</span>
                </div>
                <div className="ap-card-bottom">
                  <h3 className="ap-card-title">{project.title}</h3>
                  <p className="ap-card-desc">{project.description}</p>
                  <div className="ap-card-footer">
                    <div className="ap-card-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="ap-card-tech-item">{t}</span>
                      ))}
                    </div>
                    <div className="ap-card-link">
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
      </div>
    </div>
  );
}
