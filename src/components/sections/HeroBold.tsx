"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroBold() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e8853b, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, #e8853b, transparent 70%)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Image src="/logo.svg" alt="Logo" width={147} height={42} className="mx-auto mb-6" />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm animate-fadeInUp">
          <span className="h-2 w-2 rounded-full bg-[#e8853b] animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
            Available for Projects
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-black leading-[1] tracking-tight text-white md:text-7xl lg:text-[6.5rem] animate-fadeInUp [animation-delay:0.12s]">
          WE BUILD THE
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #e8853b 0%, #f0a060 50%, #e8853b 100%)",
            }}
          >
            FUTURE
          </span>
          <br />
          OF TECH
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/50 animate-fadeInUp [animation-delay:0.24s]">
          From concept to deployment, we engineer solutions that
          push boundaries and redefine what&apos;s possible.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp [animation-delay:0.36s]">
          <Link
            href="#about"
            className="rounded-full bg-[#e8853b] px-10 py-4 text-sm font-bold tracking-wider text-white shadow-[0_0_40px_rgba(232,133,59,0.3)] transition-all duration-300 hover:bg-[#d4752f] hover:shadow-[0_0_60px_rgba(232,133,59,0.4)]"
          >
            START YOUR PROJECT
          </Link>
          <Link
            href="#services"
            className="rounded-full border border-white/20 px-10 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:border-[#e8853b] hover:text-[#e8853b]"
          >
            VIEW WORK
          </Link>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 bg-white/[0.02] py-4">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "AWS", "FIGMA", "TAILWIND", "DOCKER"].map(
                (tech) => (
                  <span key={tech} className="text-sm font-medium tracking-widest text-white/20">
                    {tech}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
