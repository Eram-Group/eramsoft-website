"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "./hero-algoriza.css";

/* ── Data ── */

const NAV_ITEMS = [
  { num: "01", label: "Home", href: "#" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Works", href: "#works" },
  { num: "04", label: "Services", href: "#services" },
  { num: "05", label: "Blog", href: "#blog" },
];

const SPECIALTIES = [
  "Cyber Security",
  "Web Development",
  "Cloud Solutions",
  "AI & Machine Learning",
  "Mobile Apps",
];

/*
  Topographic SVG — complex flowing curves with loops and spirals
  modeled after the Algoriza reference (organic circuit-board aesthetic)
*/
const SVG_PATHS = [
  // Main flowing arteries
  "M -20 100 C 60 70, 140 160, 260 130 C 380 100, 420 220, 520 190 C 620 160, 680 260, 780 230 C 880 200, 940 140, 1000 160",
  "M -20 280 C 100 240, 200 360, 340 320 C 480 280, 540 410, 680 370 C 820 330, 900 270, 1000 290",
  "M -20 480 C 120 440, 240 560, 380 520 C 520 480, 580 620, 720 580 C 860 540, 930 480, 1000 500",
  "M -20 680 C 140 640, 280 760, 420 720 C 560 680, 620 800, 760 760 C 900 720, 960 660, 1000 680",
  "M -20 860 C 160 820, 300 920, 440 880 C 580 840, 640 940, 780 900 C 920 860, 970 810, 1000 830",
  // Vertical flowing paths (crossing the horizontals)
  "M 100 -20 C 120 80, 80 200, 160 300 C 240 400, 140 520, 220 640 C 300 760, 200 880, 280 1000 C 360 1100, 260 1140, 300 1200",
  "M 380 -20 C 400 100, 340 220, 420 340 C 500 460, 400 560, 480 680 C 560 800, 460 900, 540 1020 C 620 1100, 520 1140, 560 1200",
  "M 640 -20 C 660 120, 600 260, 680 380 C 760 500, 660 600, 740 720 C 820 840, 720 940, 800 1060 C 880 1140, 780 1180, 820 1200",
  // Spiral/loop accent paths
  "M 240 260 C 280 220, 340 220, 360 260 C 380 300, 340 340, 300 340 C 260 340, 220 300, 240 260",
  "M 520 480 C 560 440, 620 440, 640 480 C 660 520, 620 560, 580 560 C 540 560, 500 520, 520 480",
  "M 160 660 C 200 620, 260 620, 280 660 C 300 700, 260 740, 220 740 C 180 740, 140 700, 160 660",
  "M 700 300 C 740 260, 800 260, 820 300 C 840 340, 800 380, 760 380 C 720 380, 680 340, 700 300",
];

/* Dashed accent paths (orange) — connecting loops to main arteries */
const ACCENT_PATHS = [
  "M 0 180 C 120 140, 280 260, 440 220 C 600 180, 720 300, 880 260 C 960 240, 1000 220, 1000 210",
  "M 0 580 C 160 540, 320 660, 480 620 C 640 580, 780 700, 920 660 C 980 640, 1000 620, 1000 610",
  "M 300 0 C 320 140, 260 280, 340 420 C 420 560, 320 700, 400 840 C 440 920, 420 1000, 440 1080",
];

/* Glow nodes — positioned at intersections and curve peaks */
const GLOW_NODES = [
  { cx: 260, cy: 130, delay: 0, size: "lg" },
  { cx: 520, cy: 190, delay: 0.5, size: "md" },
  { cx: 780, cy: 230, delay: 1.0, size: "sm" },
  { cx: 340, cy: 320, delay: 0.3, size: "lg" },
  { cx: 680, cy: 370, delay: 0.8, size: "md" },
  { cx: 160, cy: 300, delay: 0.6, size: "sm" },
  { cx: 380, cy: 520, delay: 1.2, size: "lg" },
  { cx: 720, cy: 580, delay: 0.4, size: "md" },
  { cx: 420, cy: 720, delay: 0.9, size: "sm" },
  { cx: 760, cy: 760, delay: 1.4, size: "lg" },
  { cx: 220, cy: 640, delay: 0.7, size: "md" },
  { cx: 580, cy: 560, delay: 1.1, size: "sm" },
  { cx: 440, cy: 880, delay: 0.2, size: "md" },
  { cx: 300, cy: 340, delay: 1.3, size: "sm" },
  { cx: 820, cy: 300, delay: 0.5, size: "sm" },
];

const NODE_RADIUS = { lg: 4.5, md: 3.5, sm: 2.5 };

/* ── Component ── */

export default function HeroAlgoriza() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Typewriter effect */
  const tick = useCallback(() => {
    const currentWord = SPECIALTIES[wordIndex];
    if (!isDeleting) {
      setDisplayText(currentWord.slice(0, displayText.length + 1));
    } else {
      setDisplayText(currentWord.slice(0, displayText.length - 1));
    }
  }, [displayText, wordIndex, isDeleting]);

  useEffect(() => {
    const currentWord = SPECIALTIES[wordIndex];
    let delay: number;

    if (!isDeleting && displayText === currentWord) {
      delay = 2200;
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    } else if (isDeleting && displayText === "") {
      delay = 500;
      const t = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % SPECIALTIES.length);
      }, delay);
      return () => clearTimeout(t);
    }

    delay = isDeleting ? 30 : 60;
    const t = setTimeout(tick, delay);
    return () => clearTimeout(t);
  }, [displayText, wordIndex, isDeleting, tick]);

  useEffect(() => {
    const t = setTimeout(() => setDisplayText("C"), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-grain hero-vignette relative min-h-screen overflow-hidden bg-[#0b0b0d]">
      {/* ── Ambient light spots ── */}
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        {/* Primary warm glow — top left */}
        <div
          className="animate-ambient-pulse absolute -left-[10%] -top-[10%] h-[70vh] w-[70vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,133,59,0.07) 0%, rgba(232,133,59,0.02) 40%, transparent 70%)",
          }}
        />
        {/* Secondary glow — center */}
        <div
          className="animate-ambient-pulse absolute left-[30%] top-[25%] h-[50vh] w-[50vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,133,59,0.04) 0%, transparent 60%)",
            animationDelay: "3s",
          }}
        />
        {/* Deep glow — bottom */}
        <div
          className="animate-ambient-pulse absolute -bottom-[15%] left-[20%] h-[60vh] w-[80vh] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,133,59,0.05) 0%, transparent 60%)",
            animationDelay: "1.5s",
          }}
        />
      </div>

      {/* ── Topographic SVG Art ── */}
      <svg
        className="pointer-events-none absolute left-0 top-0 z-[3] h-full w-[65%] select-none"
        viewBox="0 0 1000 1100"
        preserveAspectRatio="xMinYMin slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter for nodes */}
          <filter id="nodeGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Soft glow for rings */}
          <filter id="ringGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Main structural paths */}
        {SVG_PATHS.map((d, i) => (
          <path
            key={`main-${i}`}
            d={d}
            stroke={
              i >= 8
                ? `rgba(255,255,255,${0.04 + (i - 8) * 0.005})`
                : `rgba(255,255,255,${0.025 + i * 0.006})`
            }
            strokeWidth={i >= 8 ? 0.8 : 1.0}
            className="animate-draw-line"
            style={{ animationDelay: `${0.15 + i * 0.2}s` }}
          />
        ))}

        {/* Orange dashed accent paths */}
        {ACCENT_PATHS.map((d, i) => (
          <path
            key={`accent-${i}`}
            d={d}
            stroke={`rgba(232,133,59,${0.06 + i * 0.02})`}
            strokeWidth={0.8}
            strokeDasharray="6 16"
            className="animate-draw-line"
            style={{ animationDelay: `${0.8 + i * 0.4}s` }}
          />
        ))}

        {/* Expanding rings around major nodes */}
        {GLOW_NODES.filter((n) => n.size === "lg").map((node, i) => (
          <circle
            key={`ring-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={6}
            fill="none"
            stroke="rgba(232,133,59,0.25)"
            strokeWidth={1}
            filter="url(#ringGlow)"
            className="animate-ring-expand"
            style={{ animationDelay: `${2 + node.delay}s` }}
          />
        ))}

        {/* Glow nodes */}
        {GLOW_NODES.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Outer halo */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={NODE_RADIUS[node.size as keyof typeof NODE_RADIUS] * 2.5}
              fill={`rgba(232,133,59,${node.size === "lg" ? 0.06 : 0.03})`}
              className="animate-node-glow"
              style={{ animationDelay: `${1.8 + node.delay}s` }}
            />
            {/* Core dot */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={NODE_RADIUS[node.size as keyof typeof NODE_RADIUS]}
              fill="#e8853b"
              filter="url(#nodeGlow)"
              className="animate-node-glow"
              style={{ animationDelay: `${1.8 + node.delay}s` }}
            />
          </g>
        ))}
      </svg>

      {/* ── Watermark ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[4] flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="animate-watermark-drift whitespace-nowrap text-[22vw] font-black italic leading-none tracking-tighter text-white/[0.018]">
          EramSoft
        </span>
      </div>

      {/* ── Navigation ── */}
      <nav className="animate-fade-down absolute top-0 left-0 right-0 z-50" style={{ animationDelay: "0.2s" }}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-10">
          {/* Logo */}
          <Image src="/logo.svg" alt="Logo" width={140} height={40} priority />

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 lg:flex">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.num}
                href={item.href}
                className="group relative py-2 transition-colors"
              >
                <span
                  className={`text-[13px] font-medium tracking-[0.14em] uppercase transition-colors ${
                    i === 0 ? "text-white" : "text-white/40 group-hover:text-white/80"
                  }`}
                >
                  {item.label}
                </span>
                {i === 0 && (
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-[#e8853b]/50" />
                )}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="group hidden items-center border border-white/15 px-7 py-2.5 text-[12px] font-medium tracking-[0.18em] text-white/60 uppercase transition-all duration-300 hover:border-[#e8853b]/60 hover:text-[#e8853b] hover:shadow-[0_0_20px_rgba(232,133,59,0.1)] lg:flex"
          >
            Contact
          </a>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute inset-x-0 top-full border-t border-white/5 bg-[#0b0b0d]/97 px-6 py-8 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  className="block"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-lg font-medium tracking-wider text-white/60">
                    {item.label}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 inline-block border border-white/15 px-6 py-3 text-center text-sm font-medium tracking-wider text-white/60 uppercase"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>


      {/* ── Main Heading ── */}
      <div className="relative z-20 flex min-h-screen items-center justify-end px-6 lg:px-0">
        <div className="mt-16 w-full text-right lg:mt-0 lg:mr-[4%] lg:max-w-[65%]">
          <h1>
            <span
              className="animate-clip-reveal block text-[clamp(2.4rem,6.5vw,6.5rem)] font-bold leading-[1.08] text-[#e8853b]"
              style={{ animationDelay: "0.5s" }}
            >
              We&rsquo;re
            </span>
            <span
              className="animate-clip-reveal block text-[clamp(2.4rem,6.5vw,6.5rem)] font-bold leading-[1.08] text-[#e8853b]"
              style={{ animationDelay: "0.65s" }}
            >
              a software company
            </span>
            <span
              className="animate-clip-reveal block text-[clamp(2.4rem,6.5vw,6.5rem)] font-bold leading-[1.08] text-[#e8853b]"
              style={{ animationDelay: "0.8s" }}
            >
              specializes in
            </span>
            <span
              className="animate-clip-reveal mt-2 block text-[clamp(2.4rem,6.5vw,6.5rem)] font-bold leading-[1.08] text-[#e8853b]"
              style={{ animationDelay: "0.95s" }}
            >
              <span className="relative">
                {displayText}
                <span className="animate-cursor-blink ml-[1px] inline-block text-[#e8853b]">
                  |
                </span>
              </span>
            </span>
          </h1>
        </div>
      </div>


      {/* ── Bottom-right Arrow ── */}
      <div
        className="animate-fadeInUp absolute bottom-10 right-6 z-20 lg:bottom-12 lg:right-[5%]"
        style={{ animationDelay: "1.3s" }}
      >
        <a
          href="#about"
          className="group relative flex h-12 w-12 items-center justify-center border border-white/8 text-white/25 transition-all duration-300 hover:border-[#e8853b]/50 hover:text-[#e8853b] hover:shadow-[0_0_24px_rgba(232,133,59,0.1)]"
        >
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
