"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroMinimal() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#f5f3f0] pb-20">
      {/* Large background text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span className="text-[18vw] font-black leading-none tracking-tighter text-[#1a1a1a]/[0.03]">
          DIGITAL
        </span>
      </div>

      {/* Thin accent line */}
      <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#e8853b] to-transparent ml-12 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16">
        <div className="mb-16 animate-fadeInUp">
          <Image src="/logo.svg" alt="Logo" width={147} height={42} className="mb-6 brightness-0" />
          <p className="mb-6 text-xs font-semibold tracking-[0.4em] text-[#e8853b] uppercase">
            Est. 2024
          </p>
        </div>

        <h1 className="mb-8 text-6xl font-extralight leading-[0.95] tracking-tight text-[#1a1a1a] md:text-8xl lg:text-[9rem] animate-fadeInUp [animation-delay:0.15s]">
          Digital
          <br />
          <span className="font-bold italic text-[#e8853b]">Backbone</span>
        </h1>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between animate-fadeInUp [animation-delay:0.3s]">
          <p className="max-w-md text-lg leading-relaxed text-[#6b7280] md:text-xl">
            Crafting exceptional digital experiences through
            hardware, software, and engineering excellence.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#about"
              className="group flex items-center gap-3 text-sm font-bold tracking-widest text-[#1a1a1a] uppercase"
            >
              Explore
              <span className="inline-block h-[1px] w-12 bg-[#1a1a1a] transition-all duration-300 group-hover:w-20 group-hover:bg-[#e8853b]" />
            </Link>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="mt-20 flex gap-16 border-t border-[#1a1a1a]/10 pt-8 animate-fadeInUp [animation-delay:0.45s]">
          {[
            { num: "50+", label: "Projects" },
            { num: "12", label: "Team Members" },
            { num: "99%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-[#1a1a1a]">{stat.num}</p>
              <p className="text-xs tracking-widest text-[#6b7280] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
