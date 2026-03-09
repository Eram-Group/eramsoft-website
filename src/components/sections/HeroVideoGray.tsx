"use client";

import Link from "next/link";

export const PALETTES = [
  {
    name: "Emerald",
    bg: "#0F1212",
    bgRgb: "15,18,18",
    color: "#10B981",
    rgb: "16,185,129",
    shimmer:
      "linear-gradient(90deg, #059669 0%, #10B981 20%, #34D399 40%, #6EE7B7 50%, #34D399 60%, #10B981 80%, #059669 100%)",
    svcBg: "linear-gradient(180deg, #131717 0%, #101414 50%, #131717 100%)",
    svcShimmer: "linear-gradient(90deg, #059669, #10B981, #34D399, #10B981)",
  },
  {
    name: "Sapphire",
    bg: "#0A1628",
    bgRgb: "10,22,40",
    color: "#3B82F6",
    rgb: "59,130,246",
    shimmer:
      "linear-gradient(90deg, #1D4ED8 0%, #3B82F6 20%, #60A5FA 40%, #93C5FD 50%, #60A5FA 60%, #3B82F6 80%, #1D4ED8 100%)",
    svcBg: "linear-gradient(180deg, #0E1B30 0%, #0B1726 50%, #0E1B30 100%)",
    svcShimmer: "linear-gradient(90deg, #1D4ED8, #3B82F6, #60A5FA, #3B82F6)",
  },
  {
    name: "Amber",
    bg: "#1C1917",
    bgRgb: "28,25,23",
    color: "#D97706",
    rgb: "217,119,6",
    shimmer:
      "linear-gradient(90deg, #B45309 0%, #D97706 20%, #F59E0B 40%, #FCD34D 50%, #F59E0B 60%, #D97706 80%, #B45309 100%)",
    svcBg: "linear-gradient(180deg, #201D1A 0%, #1C1917 50%, #201D1A 100%)",
    svcShimmer: "linear-gradient(90deg, #B45309, #D97706, #F59E0B, #D97706)",
  },
];

interface Props {
  paletteIndex: number;
  onPaletteChange: (index: number) => void;
}

export default function HeroVideoGray({ paletteIndex, onPaletteChange }: Props) {
  const p = PALETTES[paletteIndex];

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ perspective: "1400px", background: p.bg, transition: "background 0.8s ease" }}
    >
      {/* ── Video ── */}
      <div className="absolute inset-[-15%] animate-videoPerspective">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-[0.15]"
          style={{ filter: "saturate(0.1) contrast(1.1)" }}
        >
          <source src="/121885-724720140_small.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlays ── */}
      <div
        className="absolute inset-0 animate-overlayReveal"
        style={{ background: `rgba(${p.bgRgb},0.5)`, transition: "background 0.8s ease" }}
      />
      <div
        className="absolute inset-0 animate-overlayReveal"
        style={{
          background: `linear-gradient(to top, rgba(${p.bgRgb},0.85) 0%, rgba(${p.bgRgb},0.15) 50%, rgba(${p.bgRgb},0.45) 100%)`,
          transition: "background 0.8s ease",
        }}
      />
      <div
        className="absolute inset-0 animate-overlayReveal"
        style={{
          background: `linear-gradient(to right, rgba(${p.bgRgb},0.55) 0%, transparent 50%, rgba(${p.bgRgb},0.35) 100%)`,
          transition: "background 0.8s ease",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" />

      {/* ── Floating bokeh ── */}
      <div className="absolute inset-0 overflow-hidden animate-overlayReveal">
        <div
          className="absolute top-[12%] left-[8%] h-72 w-72 rounded-full blur-[100px]"
          style={{
            background: `radial-gradient(circle, rgba(${p.rgb},0.1) 0%, transparent 70%)`,
            animation: "floatBokeh 14s ease-in-out infinite",
            transition: "background 0.8s ease",
          }}
        />
        <div
          className="absolute top-[55%] right-[6%] h-56 w-56 rounded-full blur-[80px]"
          style={{
            background: `radial-gradient(circle, rgba(${p.rgb},0.08) 0%, transparent 70%)`,
            animation: "floatBokeh 18s ease-in-out 3s infinite",
            transition: "background 0.8s ease",
          }}
        />
      </div>

      {/* ── Grain ── */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Accent vignette ── */}
      <div
        className="absolute inset-0 animate-overlayReveal"
        style={{
          opacity: 0.07,
          background: `radial-gradient(ellipse at 35% 65%, rgba(${p.rgb},0.25) 0%, transparent 55%)`,
          transition: "background 0.8s ease",
        }}
      />

      {/* ── Corner marks ── */}
      <div className="absolute inset-0 z-10 pointer-events-none animate-contentReveal [animation-delay:2.8s]">
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="h-10 w-px" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
          <div className="absolute top-0 left-0 h-px w-10" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
        </div>
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="h-10 w-px ml-auto" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
          <div className="absolute top-0 right-0 h-px w-10" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
        </div>
        <div className="absolute bottom-20 left-8 md:bottom-24 md:left-12">
          <div className="h-10 w-px" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
          <div className="absolute bottom-0 left-0 h-px w-10" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
        </div>
        <div className="absolute bottom-20 right-8 md:bottom-24 md:right-12">
          <div className="h-10 w-px ml-auto" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
          <div className="absolute bottom-0 right-0 h-px w-10" style={{ backgroundColor: `${p.color}18`, transition: "background-color 0.8s ease" }} />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-8 pt-36 pb-40 text-center md:px-16">

        {/* Eyebrow */}
        <div className="mb-16 animate-contentReveal [animation-delay:2s]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 animate-lineDraw [animation-delay:2.1s]" style={{ background: `linear-gradient(90deg, transparent, ${p.color}40)`, transition: "background 0.8s ease" }} />
            <span
              className="h-1 w-1 rotate-45"
              style={{ backgroundColor: `${p.color}45`, transition: "background-color 0.8s ease" }}
            />
            <span className="h-px w-10 animate-lineDraw [animation-delay:2.1s]" style={{ background: `linear-gradient(90deg, ${p.color}40, transparent)`, transition: "background 0.8s ease" }} />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-7">
          <span className="block text-[clamp(1.6rem,3.5vw,2.6rem)] font-extralight leading-[1.2] tracking-[0.06em] text-white/30 uppercase animate-contentReveal [animation-delay:2.15s]">
            We build the
          </span>
          <span className="block my-2 animate-contentReveal [animation-delay:2.3s]">
            <span
              className="text-[clamp(4rem,11vw,9rem)] font-extralight leading-[0.9] tracking-[-0.04em] bg-clip-text text-transparent animate-goldShimmer"
              style={{
                backgroundImage: p.shimmer,
                backgroundSize: "200% auto",
              }}
            >
              Software
            </span>
          </span>
          <span className="block text-[clamp(1.6rem,3.5vw,2.6rem)] font-extralight leading-[1.2] tracking-[0.06em] text-white/30 uppercase animate-contentReveal [animation-delay:2.4s]">
            your business runs on
          </span>
        </h1>

        {/* Double accent line */}
        <div className="mb-10 flex flex-col items-center gap-[3px] animate-lineDraw [animation-delay:2.55s]">
          <div
            className="h-px w-20"
            style={{ background: `linear-gradient(90deg, transparent, ${p.color}45, transparent)`, transition: "background 0.8s ease" }}
          />
          <div
            className="h-px w-12"
            style={{ background: `linear-gradient(90deg, transparent, ${p.color}25, transparent)`, transition: "background 0.8s ease" }}
          />
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-md text-[12.5px] font-light leading-[2] tracking-[0.03em] text-white/30 animate-contentReveal [animation-delay:2.6s]">
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
            className="group flex items-center gap-2.5 text-[10px] font-normal tracking-[0.25em] text-white/35 uppercase transition-all duration-400 hover:text-white/60"
          >
            <span>Our Services</span>
            <span
              className="inline-block h-px w-5 transition-all duration-500 group-hover:w-8"
              style={{ backgroundColor: `${p.color}60` }}
            />
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-contentReveal [animation-delay:3.2s]"
        aria-label="Scroll to content"
      >
        <span className="flex h-7 w-[15px] items-start justify-center rounded-full pt-1.5"
          style={{ border: `1px solid ${p.color}15` }}
        >
          <span
            className="h-1.5 w-px animate-bounce rounded-full"
            style={{ backgroundColor: `${p.color}50`, transition: "background-color 0.8s ease" }}
          />
        </span>
      </a>

      {/* ── Theme switcher ── */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex items-center gap-3 animate-contentReveal [animation-delay:3.4s]">
        {PALETTES.map((palette, i) => (
          <button
            key={palette.name}
            onClick={() => onPaletteChange(i)}
            className="group relative flex items-center justify-center"
            aria-label={`Switch to ${palette.name} theme`}
          >
            <span
              className="block h-2.5 w-2.5 rounded-full transition-all duration-500"
              style={{
                backgroundColor: palette.color,
                opacity: i === paletteIndex ? 1 : 0.3,
                transform: i === paletteIndex ? "scale(1.3)" : "scale(1)",
                boxShadow: i === paletteIndex ? `0 0 12px ${palette.color}60` : "none",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
