"use client";

import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#1c1d21]"
      style={{ perspective: "1400px" }}
    >
      {/* ── Video with 3D perspective entry ── */}
      <div className="absolute inset-[-15%] animate-videoPerspective">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40"
        >
          <source src="/121885-724720140_small.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlays (fade in after video settles) ── */}
      <div className="absolute inset-0 bg-[#1c1d21]/55 animate-overlayReveal" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d21] via-[#1c1d21]/25 to-[#1c1d21]/50 animate-overlayReveal" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d21]/60 via-transparent to-[#1c1d21]/30 animate-overlayReveal" />

      {/* ── Grain ── */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Warm vignette ── */}
      <div
        className="absolute inset-0 animate-overlayReveal"
        style={{
          opacity: 0.06,
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(232,133,59,0.3) 0%, transparent 60%)",
        }}
      />

      {/* ── Main content (delayed until video settles) ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-8 py-32 text-center md:px-16">

        {/* Eyebrow pill */}
        <div className="mb-12 animate-contentReveal [animation-delay:2s]">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8853b]/50" />
            <span className="text-[10px] font-normal tracking-[0.4em] text-white/25 uppercase">
              Software House
            </span>
          </span>
        </div>

        {/* Headline — two lines with mixed weight */}
        <h1 className="mb-8">
          <span className="block text-[clamp(2rem,5.5vw,4rem)] font-light leading-[1.2] tracking-[-0.01em] text-white/40 animate-contentReveal [animation-delay:2.1s]">
            Your vision, our code
          </span>
          <span className="block text-[clamp(2.4rem,6.5vw,5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-white/90 animate-contentReveal [animation-delay:2.25s]">
            Software that <span className="bg-gradient-to-r from-[#e8853b] to-[#f0a060] bg-clip-text text-transparent">delivers</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-md text-[14px] font-light leading-[1.8] text-white/25 animate-contentReveal [animation-delay:2.4s]">
          We design, develop, and deploy custom web &amp; mobile
          applications for startups and enterprises.
        </p>

        {/* CTAs — stacked with clear hierarchy */}
        <div className="flex items-center gap-5 animate-contentReveal [animation-delay:2.55s]">
          <Link
            href="#about"
            className="group relative overflow-hidden rounded-sm bg-[#e8853b] px-8 py-3.5 text-[11px] font-medium tracking-[0.2em] text-white uppercase transition-all duration-500 hover:shadow-[0_4px_30px_rgba(232,133,59,0.25)]"
          >
            <span className="relative z-10">Get a Quote</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="#services"
            className="group rounded-sm border border-white/[0.08] bg-white/[0.02] px-8 py-3.5 text-[11px] font-normal tracking-[0.2em] text-white/35 uppercase backdrop-blur-sm transition-all duration-400 hover:border-white/[0.15] hover:text-white/60"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* ── Bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8853b]/10 to-transparent animate-contentReveal [animation-delay:2.6s]" />

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 animate-contentReveal [animation-delay:2.8s]"
        aria-label="Scroll to content"
      >
        <span className="text-[8px] font-normal tracking-[0.4em] text-white/[0.12] uppercase">
          Explore
        </span>
        <span className="flex h-8 w-[18px] items-start justify-center rounded-full border border-white/[0.06] pt-1.5">
          <span className="h-1.5 w-0.5 animate-bounce rounded-full bg-[#e8853b]/40" />
        </span>
      </a>
    </section>
  );
}
