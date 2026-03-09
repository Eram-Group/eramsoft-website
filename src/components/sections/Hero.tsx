"use client";

import "./hero.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f0f2f7]">
      {/* ── Soft strip behind Navbar ── */}
      <div className="absolute top-0 left-0 right-0 z-[1] h-24 bg-gradient-to-b from-[#f0f2f7] via-[#f0f2f7]/60 to-transparent" />

      {/* ── Hexagonal pattern background ── */}
      <Image
        src="/hex-pattern.svg"
        alt=""
        fill
        className="pointer-events-none object-cover animate-bgZoomFade"
        priority
        aria-hidden="true"
      />

      {/* ── Gradient overlays for depth ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f2f7]/70 via-transparent to-[#f0f2f7]/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f2f7] to-transparent" />

      {/* ── Accent glow ── */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] rounded-full animate-glowPulseIn"
        style={{ background: "radial-gradient(circle, #e8853b 0%, transparent 70%)" }}
      />

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
