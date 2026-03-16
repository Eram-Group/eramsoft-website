"use client";

import { useState, useEffect } from "react";
import "./hero2.css";
import Link from "next/link";

const words = ["scalable", "reliable", "innovative", "powerful", "modern"];

export default function Hero2() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFade(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h2-surface relative flex min-h-screen flex-col overflow-hidden">
      {/* ── Grain texture ── */}
      <div className="h2-grain" aria-hidden="true" />

      {/* ── Neon glow orbs ── */}
      <div className="h2-glow h2-glow--cyan" aria-hidden="true" />
      <div className="h2-glow h2-glow--blue" aria-hidden="true" />
      <div className="h2-glow h2-glow--white" aria-hidden="true" />

      {/* ── Bright diagonal light streak ── */}
      <div className="h2-streak" aria-hidden="true" />

      {/* ── Neon arc rings ── */}
      <svg
        className="h2-rings"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="h2Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64c8ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#50aaff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#64c8ff" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="h2Grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#82d2ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#50a0ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <ellipse
          cx="950" cy="380" rx="320" ry="220"
          stroke="url(#h2Grad1)" strokeWidth="1.8"
          strokeDasharray="2000"
          className="h2-ring h2-ring--1"
        />
        <ellipse
          cx="930" cy="400" rx="440" ry="300"
          stroke="url(#h2Grad2)" strokeWidth="1"
          strokeDasharray="2800"
          className="h2-ring h2-ring--2"
        />
      </svg>

      {/* ── Top fade for navbar blend ── */}
      <div className="h2-top-fade" />

      {/* ── Main content area — split layout ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-8 pt-28 pb-8 lg:px-16">
        {/* Left — Text content */}
        <div className="relative z-10 w-full max-w-xl">
          <p className="h2-subtitle mb-5 text-sm font-semibold tracking-[0.3em] uppercase h2-subtitleIn [animation-delay:0.1s]">
            Engineering Excellence
          </p>

          <h1 className="h2-heading mb-6 text-5xl font-bold leading-[1.08] md:text-6xl lg:text-[4.5rem] h2-clipReveal [animation-delay:0.2s]">
            EramSoft build<br />
            <span className={`h2-shimmer h2-word ${fade ? "h2-word--out" : ""}`}>
              {words[index]}
            </span>{" "}
            software.
          </h1>

          <p className="h2-body mb-10 max-w-md text-base leading-relaxed md:text-lg h2-fadeUp [animation-delay:0.35s]">
            Custom web apps, mobile platforms, and cloud
            infrastructure — architected for performance
            and built to grow with your business.
          </p>

          <div className="flex items-center gap-4 h2-btnIn [animation-delay:0.45s]">
            <Link
              href="/contact"
              className="h2-cta-primary inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#50aaff] to-[#3b8de8] px-8 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              GET STARTED
            </Link>

            <Link
              href="/projects"
              className="h2-cta-secondary rounded-full border-2 px-8 py-3.5 text-sm font-bold tracking-wide backdrop-blur-sm transition-all duration-300"
            >
              OUR WORK
            </Link>
          </div>
        </div>

        {/* Right — Premium App Showcase */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="h2-showcase">

            {/* ── Browser window — Web App ── */}
            <div className="h2-browser h2-fadeUp [animation-delay:0.25s]">
              <div className="h2-browser-bar">
                <div className="h2-browser-dots">
                  <span className="h2-bdot h2-bdot--r" />
                  <span className="h2-bdot h2-bdot--y" />
                  <span className="h2-bdot h2-bdot--g" />
                </div>
                <div className="h2-browser-url">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h2-lock-icon">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>app.clientproject.io</span>
                </div>
              </div>

              <div className="h2-webapp">
                <div className="h2-webapp-side">
                  <div className="h2-side-nav">
                    <div className="h2-side-item h2-side-item--active" />
                    <div className="h2-side-item" />
                    <div className="h2-side-item" />
                    <div className="h2-side-item" />
                  </div>
                  <div className="h2-side-bottom" />
                </div>
                <div className="h2-webapp-main">
                  <div className="h2-webapp-topbar">
                    <div className="h2-topbar-title" />
                    <div className="h2-topbar-actions">
                      <div className="h2-topbar-search" />
                      <div className="h2-topbar-avatar" />
                    </div>
                  </div>
                  <div className="h2-webapp-cards">
                    <div className="h2-wcard">
                      <div className="h2-wcard-icon h2-wcard-icon--blue" />
                      <div className="h2-wcard-lines">
                        <div className="h2-wcard-line h2-wcard-line--w60" />
                        <div className="h2-wcard-line h2-wcard-line--w80" />
                      </div>
                    </div>
                    <div className="h2-wcard">
                      <div className="h2-wcard-icon h2-wcard-icon--cyan" />
                      <div className="h2-wcard-lines">
                        <div className="h2-wcard-line h2-wcard-line--w70" />
                        <div className="h2-wcard-line h2-wcard-line--w50" />
                      </div>
                    </div>
                    <div className="h2-wcard">
                      <div className="h2-wcard-icon h2-wcard-icon--green" />
                      <div className="h2-wcard-lines">
                        <div className="h2-wcard-line h2-wcard-line--w50" />
                        <div className="h2-wcard-line h2-wcard-line--w90" />
                      </div>
                    </div>
                  </div>
                  <div className="h2-webapp-chart">
                    <svg viewBox="0 0 280 60" className="h2-wchart-svg" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="h2WchartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#50aaff" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#50aaff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,50 C30,45 50,30 80,28 C110,26 130,40 160,22 C190,4 210,15 240,10 C260,7 275,5 280,4 L280,60 L0,60 Z" fill="url(#h2WchartFill)" />
                      <path d="M0,50 C30,45 50,30 80,28 C110,26 130,40 160,22 C190,4 210,15 240,10 C260,7 275,5 280,4" fill="none" stroke="#50aaff" strokeWidth="2" strokeLinecap="round" className="h2-wchart-line" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Mobile Phone ── */}
            <div className="h2-phone h2-fadeUp [animation-delay:0.35s]">
              <div className="h2-phone-notch" />
              <div className="h2-phone-screen">
                <div className="h2-phone-status">
                  <span className="h2-phone-time">9:41</span>
                  <div className="h2-phone-icons">
                    <div className="h2-phone-signal" />
                    <div className="h2-phone-wifi" />
                    <div className="h2-phone-battery" />
                  </div>
                </div>
                <div className="h2-app-header">
                  <div className="h2-app-greeting" />
                  <div className="h2-app-subtitle" />
                </div>
                <div className="h2-app-card">
                  <div className="h2-app-card-top">
                    <div className="h2-app-card-circle" />
                    <div className="h2-app-card-info">
                      <div className="h2-app-card-line1" />
                      <div className="h2-app-card-line2" />
                    </div>
                  </div>
                  <div className="h2-app-card-bar">
                    <div className="h2-app-card-progress" />
                  </div>
                </div>
                <div className="h2-app-list">
                  <div className="h2-app-list-item" />
                  <div className="h2-app-list-item" />
                  <div className="h2-app-list-item" />
                </div>
                <div className="h2-app-nav">
                  <div className="h2-app-nav-item h2-app-nav-item--active" />
                  <div className="h2-app-nav-item" />
                  <div className="h2-app-nav-item" />
                  <div className="h2-app-nav-item" />
                </div>
              </div>
            </div>

            {/* ── Terminal ── */}
            <div className="h2-terminal h2-fadeUp [animation-delay:0.45s]">
              <div className="h2-term-bar">
                <span className="h2-term-dot" />
                <span className="h2-term-title">Terminal</span>
              </div>
              <div className="h2-term-body">
                <div className="h2-term-line">
                  <span className="h2-term-prompt">$</span>
                  <span className="h2-term-cmd">deploy --prod</span>
                </div>
                <div className="h2-term-line">
                  <span className="h2-term-ok">&#10003;</span>
                  <span className="h2-term-text">Build successful</span>
                </div>
                <div className="h2-term-line">
                  <span className="h2-term-ok">&#10003;</span>
                  <span className="h2-term-text">Tests passed (142)</span>
                </div>
                <div className="h2-term-line">
                  <span className="h2-term-ok">&#10003;</span>
                  <span className="h2-term-text">Deployed to production</span>
                </div>
                <div className="h2-term-line">
                  <span className="h2-term-cursor" />
                </div>
              </div>
            </div>

            {/* ── Tech badge ── */}
            <div className="h2-tech-badge h2-fadeUp [animation-delay:0.55s]">
              <span className="h2-tech-dot" />
              <span className="h2-tech-text">Next.js &middot; React &middot; Node</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
