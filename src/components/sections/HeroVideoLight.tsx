"use client";

import { useState } from "react";
import Link from "next/link";

const PALETTES = [
  {
    name: "Aged Gold",
    color: "#b8963e",
    rgb: "184,150,62",
    shimmer:
      "linear-gradient(90deg, #9a7a2e 0%, #b8963e 20%, #d4b85a 40%, #f0dfa0 50%, #d4b85a 60%, #b8963e 80%, #9a7a2e 100%)",
  },
  {
    name: "Charcoal Bronze",
    color: "#6b5d4f",
    rgb: "107,93,79",
    shimmer:
      "linear-gradient(90deg, #524840 0%, #6b5d4f 20%, #9a8a7a 40%, #c4b8aa 50%, #9a8a7a 60%, #6b5d4f 80%, #524840 100%)",
  },
];

export default function HeroVideoLight() {
  const [active, setActive] = useState(0);
  const p = PALETTES[active];

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e8e4df]"
      style={{ perspective: "1400px" }}
    >
      {/* ── Video with 3D perspective entry ── */}
      <div className="absolute inset-[-15%] animate-videoPerspective">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-30"
        >
          <source src="/121885-724720140_small.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-[#e8e4df]/60 animate-overlayReveal" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#dedad5] via-[#e8e4df]/25 to-[#e8e4df]/55 animate-overlayReveal" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#e8e4df]/70 via-transparent to-[#e8e4df]/45 animate-overlayReveal" />

      {/* ── Floating bokeh ── */}
      <div className="absolute inset-0 overflow-hidden animate-overlayReveal">
        <div
          className="absolute top-[12%] left-[8%] h-72 w-72 rounded-full blur-[90px] transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(${p.rgb},0.12) 0%, transparent 70%)`,
            animation: "floatBokeh 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[55%] right-[6%] h-56 w-56 rounded-full blur-[80px] transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, rgba(${p.rgb},0.10) 0%, transparent 70%)`,
            animation: "floatBokeh 18s ease-in-out 3s infinite",
          }}
        />
      </div>

      {/* ── Grain ── */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Accent vignette ── */}
      <div
        className="absolute inset-0 animate-overlayReveal transition-all duration-1000"
        style={{
          opacity: 0.08,
          background: `radial-gradient(ellipse at 35% 65%, rgba(${p.rgb},0.25) 0%, transparent 55%)`,
        }}
      />

      {/* ── Architectural corner marks ── */}
      <div className="absolute inset-0 z-10 pointer-events-none animate-contentReveal [animation-delay:2.8s]">
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="h-10 w-px" style={{ backgroundColor: `${p.color}20` }} />
          <div className="absolute top-0 left-0 h-px w-10" style={{ backgroundColor: `${p.color}20` }} />
        </div>
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="h-10 w-px ml-auto" style={{ backgroundColor: `${p.color}20` }} />
          <div className="absolute top-0 right-0 h-px w-10" style={{ backgroundColor: `${p.color}20` }} />
        </div>
        <div className="absolute bottom-20 left-8 md:bottom-24 md:left-12">
          <div className="h-10 w-px" style={{ backgroundColor: `${p.color}20` }} />
          <div className="absolute bottom-0 left-0 h-px w-10" style={{ backgroundColor: `${p.color}20` }} />
        </div>
        <div className="absolute bottom-20 right-8 md:bottom-24 md:right-12">
          <div className="h-10 w-px ml-auto" style={{ backgroundColor: `${p.color}20` }} />
          <div className="absolute bottom-0 right-0 h-px w-10" style={{ backgroundColor: `${p.color}20` }} />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-8 pt-36 pb-40 text-center md:px-16">

        {/* Eyebrow */}
        <div className="mb-16 animate-contentReveal [animation-delay:2s]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 animate-lineDraw [animation-delay:2.1s]" style={{ background: `linear-gradient(90deg, transparent, ${p.color}45)` }} />
            <span
              className="h-1 w-1 rotate-45 transition-all duration-700"
              style={{ backgroundColor: `${p.color}50` }}
            />
            <span className="h-px w-10 animate-lineDraw [animation-delay:2.1s]" style={{ background: `linear-gradient(90deg, ${p.color}45, transparent)` }} />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-7">
          <span className="block text-[clamp(1.6rem,3.5vw,2.6rem)] font-extralight leading-[1.2] tracking-[0.06em] text-[#1a1a1a]/40 uppercase animate-contentReveal [animation-delay:2.15s]">
            We build the
          </span>
          <span className="block my-2 animate-contentReveal [animation-delay:2.3s]">
            <span
              className="text-[clamp(4rem,11vw,9rem)] font-extralight leading-[0.9] tracking-[-0.04em] bg-clip-text text-transparent animate-goldShimmer transition-all duration-700"
              style={{
                backgroundImage: p.shimmer,
                backgroundSize: "200% auto",
              }}
            >
              Software
            </span>
          </span>
          <span className="block text-[clamp(1.6rem,3.5vw,2.6rem)] font-extralight leading-[1.2] tracking-[0.06em] text-[#1a1a1a]/45 uppercase animate-contentReveal [animation-delay:2.4s]">
            your business runs on
          </span>
        </h1>

        {/* Double accent line */}
        <div className="mb-10 flex flex-col items-center gap-[3px] animate-lineDraw [animation-delay:2.55s]">
          <div
            className="h-px w-20 transition-all duration-700"
            style={{ background: `linear-gradient(90deg, transparent, ${p.color}50, transparent)` }}
          />
          <div
            className="h-px w-12 transition-all duration-700"
            style={{ background: `linear-gradient(90deg, transparent, ${p.color}30, transparent)` }}
          />
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-md text-[12.5px] font-light leading-[2] tracking-[0.03em] text-[#1a1a1a]/40 animate-contentReveal [animation-delay:2.6s]">
          From concept to deployment — custom web, mobile, and cloud
          applications engineered for startups &amp; enterprises.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-7 animate-contentReveal [animation-delay:2.7s]">
          <Link
            href="#about"
            className="group relative overflow-hidden rounded-sm px-10 py-3.5 text-[10px] font-medium tracking-[0.25em] text-white uppercase transition-all duration-500"
            style={{
              backgroundColor: p.color,
              boxShadow: `0 0 20px rgba(${p.rgb}, 0)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 30px rgba(${p.rgb}, 0.35)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px rgba(${p.rgb}, 0)`;
            }}
          >
            <span className="relative z-10">Get a Quote</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="#services"
            className="group flex items-center gap-2.5 text-[10px] font-normal tracking-[0.25em] text-[#1a1a1a]/45 uppercase transition-all duration-400 hover:text-[#1a1a1a]/70"
          >
            <span>Our Services</span>
            <span
              className="inline-block h-px w-5 transition-all duration-500 group-hover:w-8"
              style={{ backgroundColor: `${p.color}70` }}
            />
          </Link>
        </div>
      </div>

      {/* ── Bottom border — double line ── */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[2px] animate-contentReveal [animation-delay:3.1s]">
        <div
          className="h-px transition-all duration-700"
          style={{ background: `linear-gradient(90deg, transparent 5%, ${p.color}20 50%, transparent 95%)` }}
        />
        <div
          className="h-px transition-all duration-700"
          style={{ background: `linear-gradient(90deg, transparent 15%, ${p.color}10 50%, transparent 85%)` }}
        />
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-contentReveal [animation-delay:3.2s]"
        aria-label="Scroll to content"
      >
        <span className="flex h-7 w-[15px] items-start justify-center rounded-full pt-1.5"
          style={{ border: `1px solid ${p.color}15` }}
        >
          <span
            className="h-1.5 w-px animate-bounce rounded-full transition-colors duration-700"
            style={{ backgroundColor: `${p.color}55` }}
          />
        </span>
      </a>

      {/* ── Accent Switcher ── */}
      <div className="absolute right-5 top-1/2 z-20 -translate-y-1/2 flex flex-col items-center gap-3 animate-contentReveal [animation-delay:3.3s]">
        <span className="mb-1 text-[7px] font-normal tracking-[0.3em] text-[#1a1a1a]/20 uppercase [writing-mode:vertical-lr] rotate-180">
          Tone
        </span>
        {PALETTES.map((palette, i) => (
          <button
            key={palette.name}
            onClick={() => setActive(i)}
            className="group relative flex items-center justify-center"
            aria-label={palette.name}
            title={palette.name}
          >
            <span
              className="block h-3 w-3 rounded-full border-[1.5px] transition-all duration-300"
              style={{
                backgroundColor: i === active ? palette.color : "transparent",
                borderColor: i === active ? palette.color : `${palette.color}35`,
                transform: i === active ? "scale(1.25)" : "scale(1)",
                boxShadow: i === active ? `0 0 10px ${palette.color}30` : "none",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
