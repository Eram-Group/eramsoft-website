"use client";

import "./hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f0f2f7]">
      {/* ── Tech background SVG ── */}
      <svg
        className="hero-tech-bg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="glowOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8853b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e8853b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowSoft" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8853b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#e8853b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e8853b" stopOpacity="0" />
            <stop offset="30%" stopColor="#e8853b" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#e8853b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e8853b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradR" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#e8853b" stopOpacity="0" />
            <stop offset="30%" stopColor="#e8853b" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#e8853b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#e8853b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── Large arc segments — top left ── */}
        <g className="hero-arc-group hero-arc-tl">
          <path d="M -60 320 A 320 320 0 0 1 260 0" stroke="#e8853b" strokeWidth="3" strokeOpacity="0.12" fill="none" />
          <path d="M -40 280 A 280 280 0 0 1 240 0" stroke="#e8853b" strokeWidth="1.5" strokeOpacity="0.18" fill="none" />
          <path d="M -20 240 A 240 240 0 0 1 220 0" stroke="#1a1a1a" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
          <path d="M -80 360 A 360 360 0 0 1 280 0" stroke="#e8853b" strokeWidth="6" strokeOpacity="0.06" fill="none" />
        </g>

        {/* ── Large arc segments — bottom right ── */}
        <g className="hero-arc-group hero-arc-br">
          <path d="M 1500 580 A 320 320 0 0 1 1180 900" stroke="#e8853b" strokeWidth="3" strokeOpacity="0.12" fill="none" />
          <path d="M 1480 620 A 280 280 0 0 1 1200 900" stroke="#e8853b" strokeWidth="1.5" strokeOpacity="0.18" fill="none" />
          <path d="M 1460 660 A 240 240 0 0 1 1220 900" stroke="#1a1a1a" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
          <path d="M 1520 540 A 360 360 0 0 1 1160 900" stroke="#e8853b" strokeWidth="6" strokeOpacity="0.06" fill="none" />
        </g>

        {/* ── Small arc — bottom center-left ── */}
        <g className="hero-arc-group hero-arc-bc">
          <path d="M 280 900 A 140 140 0 0 1 420 760" stroke="#e8853b" strokeWidth="2" strokeOpacity="0.15" fill="none" />
          <path d="M 300 900 A 110 110 0 0 1 410 790" stroke="#e8853b" strokeWidth="1" strokeOpacity="0.1" fill="none" />
        </g>

        {/* ── Horizontal capsule lines — flowing left to right ── */}
        <g className="hero-capsules">
          <rect x="80" y="180" width="180" height="6" rx="3" fill="#e8853b" fillOpacity="0.08" className="hero-capsule" style={{ animationDelay: "0.2s" }} />
          <rect x="300" y="180" width="120" height="6" rx="3" fill="#e8853b" fillOpacity="0.05" className="hero-capsule" style={{ animationDelay: "0.35s" }} />
          <line x1="200" y1="183" x2="500" y2="183" stroke="url(#lineGrad)" strokeWidth="0.8" />

          <rect x="900" y="240" width="220" height="6" rx="3" fill="#e8853b" fillOpacity="0.07" className="hero-capsule" style={{ animationDelay: "0.5s" }} />
          <rect x="1160" y="240" width="140" height="6" rx="3" fill="#e8853b" fillOpacity="0.05" className="hero-capsule" style={{ animationDelay: "0.6s" }} />
          <line x1="850" y1="243" x2="1350" y2="243" stroke="url(#lineGrad)" strokeWidth="0.8" />

          <rect x="100" y="700" width="160" height="5" rx="2.5" fill="#e8853b" fillOpacity="0.06" className="hero-capsule" style={{ animationDelay: "0.7s" }} />
          <rect x="300" y="700" width="100" height="5" rx="2.5" fill="#e8853b" fillOpacity="0.04" className="hero-capsule" style={{ animationDelay: "0.8s" }} />
          <line x1="60" y1="702.5" x2="450" y2="702.5" stroke="url(#lineGrad)" strokeWidth="0.6" />

          <rect x="1000" y="660" width="200" height="5" rx="2.5" fill="#e8853b" fillOpacity="0.07" className="hero-capsule" style={{ animationDelay: "0.4s" }} />
          <rect x="1240" y="660" width="80" height="5" rx="2.5" fill="#e8853b" fillOpacity="0.04" className="hero-capsule" style={{ animationDelay: "0.55s" }} />
          <line x1="950" y1="662.5" x2="1380" y2="662.5" stroke="url(#lineGradR)" strokeWidth="0.6" />
        </g>

        {/* ── Circuit paths with glow junctions ── */}
        <g className="hero-circuit">
          <polyline
            points="350,520 420,520 450,490 550,490 580,520 680,520"
            stroke="#e8853b" strokeWidth="1" strokeOpacity="0.18"
            fill="none" strokeLinejoin="round"
          />
          <polyline
            points="760,380 830,380 860,410 960,410 990,380 1090,380"
            stroke="#e8853b" strokeWidth="1" strokeOpacity="0.15"
            fill="none" strokeLinejoin="round"
          />
          {/* Glow dots at circuit junctions */}
          {[[450, 490], [580, 520], [860, 410], [990, 380]].map(([cx, cy], i) => (
            <g key={`junc-${i}`}>
              <circle cx={cx} cy={cy} r="12" fill="url(#glowOrange)" className="hero-glow-dot" style={{ animationDelay: `${0.8 + i * 0.2}s` }} />
              <circle cx={cx} cy={cy} r="2.5" fill="#e8853b" fillOpacity="0.5" />
            </g>
          ))}
        </g>

        {/* ── Dot grid patterns (small squares in grid) ── */}
        <g className="hero-dotgrid-pat" opacity="0.4">
          {/* Top-left dot grid */}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <rect
                key={`dg1-${row}-${col}`}
                x={340 + col * 8}
                y={80 + row * 8}
                width="3" height="3" rx="0.5"
                fill="#e8853b" fillOpacity="0.2"
              />
            ))
          )}
          {/* Top-right dot grid */}
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <rect
                key={`dg2-${row}-${col}`}
                x={1100 + col * 8}
                y={120 + row * 8}
                width="3" height="3" rx="0.5"
                fill="#e8853b" fillOpacity="0.15"
              />
            ))
          )}
          {/* Bottom-left dot grid */}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => (
              <rect
                key={`dg3-${row}-${col}`}
                x={120 + col * 8}
                y={760 + row * 8}
                width="3" height="3" rx="0.5"
                fill="#1a1a1a" fillOpacity="0.08"
              />
            ))
          )}
          {/* Bottom-right dot grid */}
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <rect
                key={`dg4-${row}-${col}`}
                x={1200 + col * 8}
                y={780 + row * 8}
                width="3" height="3" rx="0.5"
                fill="#e8853b" fillOpacity="0.18"
              />
            ))
          )}
          {/* Mid-left dot grid */}
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <rect
                key={`dg5-${row}-${col}`}
                x={60 + col * 8}
                y={420 + row * 8}
                width="3" height="3" rx="0.5"
                fill="#1a1a1a" fillOpacity="0.06"
              />
            ))
          )}
        </g>

        {/* ── Floating small squares ── */}
        <g className="hero-floats">
          {[
            [160, 260, 5, 0.15], [520, 140, 4, 0.12], [780, 100, 6, 0.1],
            [1280, 180, 5, 0.14], [1350, 340, 4, 0.1], [200, 580, 5, 0.12],
            [680, 760, 4, 0.1], [1100, 800, 5, 0.13], [900, 140, 3, 0.08],
            [440, 820, 4, 0.1], [1050, 520, 3, 0.08], [60, 160, 4, 0.12],
          ].map(([x, y, s, o], i) => (
            <rect
              key={`float-${i}`}
              x={x as number} y={y as number}
              width={s as number} height={s as number}
              rx="1"
              fill="#e8853b"
              fillOpacity={o as number}
              className="hero-float-sq"
              style={{ animationDelay: `${0.5 + i * 0.12}s` }}
            />
          ))}
        </g>

        {/* ── Glow circles at key points ── */}
        <g className="hero-glows">
          {[
            [350, 520, 20], [680, 520, 16], [760, 380, 14], [1090, 380, 18],
            [260, 183, 12], [1100, 243, 14], [420, 760, 16],
          ].map(([cx, cy, r], i) => (
            <circle
              key={`glow-${i}`}
              cx={cx} cy={cy} r={r}
              fill="url(#glowSoft)"
              className="hero-glow-pulse"
              style={{ animationDelay: `${1 + i * 0.15}s` }}
            />
          ))}
        </g>

        {/* ── Decorative circles (hollow) ── */}
        <circle cx="620" cy="580" r="18" stroke="#e8853b" strokeWidth="1" strokeOpacity="0.12" fill="none" />
        <circle cx="620" cy="580" r="8" stroke="#e8853b" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
        <circle cx="620" cy="580" r="3" fill="#e8853b" fillOpacity="0.15" />

        <circle cx="850" cy="200" r="14" stroke="#e8853b" strokeWidth="1" strokeOpacity="0.1" fill="none" />
        <circle cx="850" cy="200" r="5" stroke="#e8853b" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
        <circle cx="850" cy="200" r="2" fill="#e8853b" fillOpacity="0.2" />

        <circle cx="300" cy="650" r="10" stroke="#1a1a1a" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
        <circle cx="300" cy="650" r="4" fill="#e8853b" fillOpacity="0.1" />
      </svg>

      {/* ── Ambient warm glow behind content ── */}
      <div className="hero-center-warmth" aria-hidden="true" />

      {/* ── Top fade for navbar ── */}
      <div className="absolute top-0 left-0 right-0 z-[1] h-24 bg-gradient-to-b from-[#f0f2f7] via-[#f0f2f7]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f2f7] to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-[#e8853b] uppercase animate-subtitleSlideIn [animation-delay:0.2s]">
          Engineering Excellence
        </p>

        <h1 className="mb-5 text-5xl font-bold leading-[1.05] text-[#1a1a1a] md:text-6xl lg:text-[5.5rem] animate-clipReveal [animation-delay:0.45s]">
          Digital{" "}
          <span className="animate-shimmer">Backbone</span>
        </h1>

        <p className="mb-6 text-lg font-medium tracking-[0.2em] text-[#1a1a1a]/50 uppercase md:text-xl animate-categoryFade [animation-delay:0.7s]">
          Hardware &middot; Software &middot; Engineering
        </p>

        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#6b7280] md:text-lg animate-fadeInUp [animation-delay:0.9s]">
          End-to-end technical expertise and engineering support
          to power your most ambitious projects.
        </p>

        <div className="flex items-center justify-center gap-5 animate-btnScaleIn [animation-delay:1.1s]">
          <Link
            href="#about"
            className="rounded-full bg-[#e8853b] px-10 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#d4752f] hover:shadow-xl hover:-translate-y-0.5"
          >
            GET STARTED
          </Link>

          <Link
            href="#services"
            className="rounded-full border-2 border-[#1a1a1a]/20 px-10 py-4 text-sm font-bold tracking-wide text-[#1a1a1a] transition-all duration-300 hover:border-[#e8853b] hover:text-[#e8853b]"
          >
            OUR SERVICES
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-2 animate-scrollReveal [animation-delay:1.4s]"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] text-[#6b7280] uppercase">
          Scroll
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#1a1a1a]/20 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-[#e8853b]" />
        </span>
      </a>
    </section>
  );
}
