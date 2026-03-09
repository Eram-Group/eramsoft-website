"use client";

import "./hero3d-fintech.css";
import Link from "next/link";

/* ── Mock data for floating metric cards ── */
const METRICS = [
  { label: "PROJECTS DELIVERED", value: "150", unit: "+", change: "+23%", positive: true },
  { label: "CLIENT SATISFACTION", value: "98.7", unit: "%", change: "+4.2%", positive: true },
  { label: "CODE QUALITY", value: "A+", unit: "grade", change: "Top 1%", positive: true },
];

const TICKER_DATA = [
  { sym: "React", val: "Next.js", chg: "+Frontend" },
  { sym: "Node", val: "Python", chg: "+Backend" },
  { sym: "AWS", val: "Azure", chg: "+Cloud" },
  { sym: "Flutter", val: "Swift", chg: "+Mobile" },
  { sym: "Figma", val: "UI/UX", chg: "+Design" },
  { sym: "CI/CD", val: "DevOps", chg: "+Infra" },
];

export default function Hero3DFintech() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a1c20]">
      {/* ── Deep background layers ── */}

      {/* Radial gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(160,160,170,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(120,120,130,0.05) 0%, transparent 50%)",
        }}
      />

      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%] opacity-[0.06]"
        style={{
          perspective: "500px",
          perspectiveOrigin: "50% 0%",
        }}
      >
        <div
          className="h-full w-full"
          style={{
            transform: "rotateX(55deg)",
            transformOrigin: "top center",
            backgroundImage:
              "linear-gradient(rgba(180,180,190,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(180,180,190,0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── 3D Wireframe Cube (center-right) ── */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ perspective: "600px" }}
      >
        <div
          className="relative h-[220px] w-[220px]"
          style={{
            transformStyle: "preserve-3d",
            animation: "spin-cube 25s linear infinite",
          }}
        >
          {/* 6 cube faces – wireframe style */}
          {[
            { transform: "translateZ(110px)", label: "front" },
            { transform: "rotateY(180deg) translateZ(110px)", label: "back" },
            { transform: "rotateY(90deg) translateZ(110px)", label: "right" },
            { transform: "rotateY(-90deg) translateZ(110px)", label: "left" },
            { transform: "rotateX(90deg) translateZ(110px)", label: "top" },
            { transform: "rotateX(-90deg) translateZ(110px)", label: "bottom" },
          ].map((face) => (
            <div
              key={face.label}
              className="absolute inset-0 border border-[#9a9aa0]/[0.15] rounded-sm"
              style={{ transform: face.transform, backfaceVisibility: "visible" }}
            />
          ))}

          {/* Inner glow core */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full"
            style={{
              background: "#a0a0a8",
              boxShadow: "0 0 60px 20px rgba(180,180,190,0.12), 0 0 120px 60px rgba(160,160,170,0.05)",
              transformStyle: "preserve-3d",
              transform: "translateZ(0px)",
            }}
          />
        </div>
      </div>

      {/* ── Orbiting dots around cube ── */}
      {[
        { radius: "160px", duration: "12s", size: "6px", delay: "0s", opacity: 0.4 },
        { radius: "190px", duration: "18s", size: "4px", delay: "-6s", opacity: 0.2 },
        { radius: "130px", duration: "15s", size: "5px", delay: "-3s", opacity: 0.3 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={
            {
              "--orbit-radius": dot.radius,
              width: 220,
              height: 220,
            } as React.CSSProperties
          }
        >
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              animation: `orbit-dot ${dot.duration} linear infinite`,
              animationDelay: dot.delay,
            }}
          >
            <div
              className="rounded-full bg-[#b0b0b8]"
              style={{
                width: dot.size,
                height: dot.size,
                opacity: dot.opacity,
                boxShadow: `0 0 10px rgba(180,180,190,${dot.opacity * 0.5})`,
              }}
            />
          </div>
        </div>
      ))}

      {/* ── Pulsing concentric rings (behind content) ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[280, 400, 540].map((size, i) => (
          <div
            key={size}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#808088]"
            style={{
              width: size,
              height: size,
              opacity: 0.04 - i * 0.008,
              animation: `pulse-ring ${4 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* ── Floating 3D metric cards ── */}
      <div className="absolute left-[4%] top-[18%] hidden xl:block animate-fadeInUp [animation-delay:0.6s]">
        <div
          className="w-52 rounded-xl border border-white/[0.07] bg-[#24262b]/80 p-4 backdrop-blur-md shadow-lg"
          style={{ animation: "float3d-a 7s ease-in-out infinite" }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-[#8a8a92] uppercase">
              {METRICS[0].label}
            </span>
            <span className="font-mono text-[10px] text-emerald-400/70">
              {METRICS[0].change}
            </span>
          </div>
          <p className="font-mono text-2xl font-bold text-white/85">
            {METRICS[0].value}
            <span className="ml-1 text-sm font-normal text-[#6a6a72]">{METRICS[0].unit}</span>
          </p>
          {/* Mini sparkline */}
          <svg className="mt-3 h-8 w-full" viewBox="0 0 200 40" fill="none">
            <polyline
              points="0,35 20,30 40,32 60,20 80,22 100,15 120,18 140,8 160,12 180,5 200,2"
              stroke="#8a8a92"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8a8a92" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#8a8a92" stopOpacity="0" />
            </linearGradient>
            <polygon
              points="0,40 0,35 20,30 40,32 60,20 80,22 100,15 120,18 140,8 160,12 180,5 200,2 200,40"
              fill="url(#sparkGrad)"
            />
          </svg>
        </div>
      </div>

      <div className="absolute right-[3%] top-[15%] hidden xl:block animate-fadeInUp [animation-delay:0.8s]">
        <div
          className="w-48 rounded-xl border border-white/[0.07] bg-[#24262b]/80 p-4 backdrop-blur-md shadow-lg"
          style={{ animation: "float3d-b 8s ease-in-out infinite" }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-[#8a8a92] uppercase">
              {METRICS[1].label}
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
              <svg className="h-3 w-3 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <p className="font-mono text-2xl font-bold text-white/85">
            {METRICS[1].value}
            <span className="ml-1 text-sm font-normal text-[#6a6a72]">{METRICS[1].unit}</span>
          </p>
          {/* Status bar */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[99.99%] rounded-full bg-gradient-to-r from-[#6a6a72]/60 to-emerald-400/40" />
          </div>
        </div>
      </div>

      <div className="absolute left-[6%] bottom-[22%] hidden xl:block animate-fadeInUp [animation-delay:1s]">
        <div
          className="w-44 rounded-xl border border-white/[0.07] bg-[#24262b]/80 p-4 backdrop-blur-md shadow-lg"
          style={{ animation: "float3d-c 6.5s ease-in-out infinite" }}
        >
          <div className="mb-3">
            <span className="font-mono text-[10px] tracking-widest text-[#8a8a92] uppercase">
              {METRICS[2].label}
            </span>
          </div>
          <p className="font-mono text-2xl font-bold text-white/85">
            {METRICS[2].value}
            <span className="ml-1 text-sm font-normal text-[#6a6a72]">{METRICS[2].unit}</span>
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <svg className="h-3 w-3 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" style={{ transform: "rotate(180deg)", transformOrigin: "center" }} />
            </svg>
            <span className="font-mono text-xs text-emerald-400/70">{METRICS[2].change}</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:text-left lg:pl-16">
        {/* Status chip */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#24262b]/60 px-5 py-2.5 backdrop-blur-xl animate-fadeInUp">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] tracking-widest text-[#8a8a92] uppercase">
            Accepting New Projects &mdash; Let&apos;s Build Together
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-[5.5rem] animate-fadeInUp [animation-delay:0.15s]">
          <span className="block text-[#d0d0d6]">We Build</span>
          <span className="block text-[#d0d0d6]">Software</span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #e8e8ee 0%, #a0a0a8 40%, #c8c8d0 70%, #909098 100%)",
            }}
          >
            That Scales
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-[#6a6a72] lg:mx-0 lg:text-lg animate-fadeInUp [animation-delay:0.3s]">
          From concept to launch, we design and develop custom web &amp; mobile
          applications that drive growth &mdash; backed by a world-class engineering team.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4 max-lg:justify-center animate-fadeInUp [animation-delay:0.45s]">
          <Link
            href="#about"
            className="group relative overflow-hidden rounded-lg bg-[#e8853b] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_50px_rgba(232,133,59,0.25)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              START A PROJECT
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Shimmer effect */}
            <div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>

          <Link
            href="#services"
            className="rounded-lg border border-[#3a3c42] bg-[#24262b]/50 px-8 py-4 text-sm font-bold tracking-wider text-[#a0a0a8] backdrop-blur-sm transition-all duration-300 hover:border-[#50525a] hover:text-[#d0d0d6]"
          >
            OUR WORK
          </Link>
        </div>

        {/* Trust row */}
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 max-lg:justify-center animate-fadeInUp [animation-delay:0.6s]">
          {[
            { num: "150+", label: "Projects" },
            { num: "50+", label: "Clients" },
            { num: "8+", label: "Years" },
            { num: "30+", label: "Engineers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-mono text-lg font-bold text-[#c0c0c8]">{stat.num}</p>
              <p className="font-mono text-[10px] tracking-widest text-[#55555d] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom ticker bar ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#2a2c32] bg-[#1e2024]/80 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[...TICKER_DATA, ...TICKER_DATA].map((item, i) => (
              <div key={i} className="flex items-center gap-6 border-r border-[#2a2c32] px-8 py-3.5">
                <span className="font-mono text-xs font-bold tracking-wider text-[#8a8a92]">
                  {item.sym}
                </span>
                <span className="font-mono text-xs text-[#55555d]">{item.val}</span>
                <span className="font-mono text-xs text-[#e8853b]/60">
                  {item.chg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
