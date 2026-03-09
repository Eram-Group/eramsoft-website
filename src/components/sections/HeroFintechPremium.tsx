"use client";

import "./hero-fintech-premium.css";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

/* ── Tech stack ticker data ── */
const TICKER = [
  { sym: "React", val: "Next.js", chg: "+Frontend" },
  { sym: "Node", val: "Python", chg: "+Backend" },
  { sym: "AWS", val: "Azure", chg: "+Cloud" },
  { sym: "Flutter", val: "Swift", chg: "+Mobile" },
  { sym: "Figma", val: "UI/UX", chg: "+Design" },
  { sym: "CI/CD", val: "DevOps", chg: "+Infra" },
];

/* ── Background particle positions ── */
const PARTICLES = [
  { x: "14%", y: "22%", s: 3, anim: "p-drift-a", dur: "16s", delay: "0s" },
  { x: "82%", y: "18%", s: 2, anim: "p-drift-b", dur: "20s", delay: "-5s" },
  { x: "50%", y: "75%", s: 3, anim: "p-drift-c", dur: "18s", delay: "-9s" },
  { x: "30%", y: "65%", s: 2, anim: "p-drift-a", dur: "22s", delay: "-3s" },
  { x: "70%", y: "50%", s: 2, anim: "p-drift-b", dur: "17s", delay: "-11s" },
  { x: "90%", y: "70%", s: 3, anim: "p-drift-c", dur: "21s", delay: "-7s" },
];

/* ── Gyroscope orbit dots ── */
const ORBITS = [
  { r: "160px", dur: "14s", s: 5, delay: "0s", o: 0.35 },
  { r: "190px", dur: "20s", s: 3, delay: "-7s", o: 0.2 },
  { r: "140px", dur: "16s", s: 4, delay: "-4s", o: 0.25 },
];

export default function HeroFintechPremium() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a1c20]">
      {/* ══════════════════════════════════════════
          BACKGROUND LAYERS
          ══════════════════════════════════════════ */}

      {/* Aurora gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            top: "10%",
            left: "20%",
            background:
              "radial-gradient(circle, rgba(160,160,170,1) 0%, transparent 70%)",
            animation: "aurora-drift 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            top: "30%",
            right: "10%",
            background:
              "radial-gradient(circle, rgba(232,133,59,1) 0%, transparent 70%)",
            animation: "aurora-drift 25s ease-in-out infinite",
            animationDelay: "-8s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.025]"
          style={{
            bottom: "5%",
            left: "50%",
            background:
              "radial-gradient(circle, rgba(160,160,170,1) 0%, transparent 70%)",
            animation: "aurora-drift 22s ease-in-out infinite",
            animationDelay: "-14s",
          }}
        />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,180,190,0.2) 30%, rgba(180,180,190,0.35) 50%, rgba(180,180,190,0.2) 70%, transparent)",
          animation: "scan-sweep 8s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      {/* Drifting particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-[#9a9aa0] pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
            animation: `${p.anim} ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ══════════════════════════════════════════
          3D GYROSCOPE
          ══════════════════════════════════════════ */}
      <div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ perspective: "800px" }}
      >
        <div
          className="relative"
          style={{ width: 280, height: 280, transformStyle: "preserve-3d" }}
        >
          {/* Ring 1 — outer (silver), rotates around X axis */}
          <div
            className="absolute rounded-full"
            style={{
              width: 260,
              height: 260,
              top: "50%",
              left: "50%",
              marginTop: -130,
              marginLeft: -130,
              border: "1px solid rgba(180,180,190,0.15)",
              boxShadow:
                "0 0 20px rgba(180,180,190,0.04), inset 0 0 20px rgba(180,180,190,0.02)",
              animation: "gyro-ring-x 22s linear infinite",
            }}
          >
            <div
              className="absolute rounded-full bg-[#b0b0b8]"
              style={{
                width: 5,
                height: 5,
                top: -2.5,
                left: "calc(50% - 2.5px)",
                boxShadow: "0 0 10px 2px rgba(180,180,190,0.5)",
              }}
            />
            <div
              className="absolute rounded-full bg-[#b0b0b8]"
              style={{
                width: 5,
                height: 5,
                bottom: -2.5,
                left: "calc(50% - 2.5px)",
                boxShadow: "0 0 10px 2px rgba(180,180,190,0.5)",
              }}
            />
          </div>

          {/* Ring 2 — middle (lighter silver), rotates around Y axis */}
          <div
            className="absolute rounded-full"
            style={{
              width: 210,
              height: 210,
              top: "50%",
              left: "50%",
              marginTop: -105,
              marginLeft: -105,
              border: "1px solid rgba(160,160,170,0.12)",
              boxShadow:
                "0 0 15px rgba(160,160,170,0.03), inset 0 0 15px rgba(160,160,170,0.015)",
              animation: "gyro-ring-y 28s linear infinite",
            }}
          >
            <div
              className="absolute rounded-full bg-[#a0a0a8]/60"
              style={{
                width: 4,
                height: 4,
                top: -2,
                left: "calc(50% - 2px)",
                boxShadow: "0 0 8px 2px rgba(160,160,170,0.3)",
              }}
            />
            <div
              className="absolute rounded-full bg-[#a0a0a8]/60"
              style={{
                width: 4,
                height: 4,
                bottom: -2,
                left: "calc(50% - 2px)",
                boxShadow: "0 0 8px 2px rgba(160,160,170,0.3)",
              }}
            />
          </div>

          {/* Ring 3 — inner (orange accent), rotates around Z axis */}
          <div
            className="absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              top: "50%",
              left: "50%",
              marginTop: -80,
              marginLeft: -80,
              border: "1px solid rgba(232,133,59,0.18)",
              boxShadow:
                "0 0 20px rgba(232,133,59,0.05), inset 0 0 20px rgba(232,133,59,0.02)",
              animation: "gyro-ring-z 18s linear infinite",
            }}
          >
            <div
              className="absolute rounded-full bg-[#e8853b]"
              style={{
                width: 4,
                height: 4,
                top: -2,
                left: "calc(50% - 2px)",
                boxShadow: "0 0 8px 2px rgba(232,133,59,0.5)",
              }}
            />
            <div
              className="absolute rounded-full bg-[#e8853b]"
              style={{
                width: 4,
                height: 4,
                bottom: -2,
                left: "calc(50% - 2px)",
                boxShadow: "0 0 8px 2px rgba(232,133,59,0.5)",
              }}
            />
          </div>

          {/* Core — pulsing silver sphere */}
          <div
            className="absolute rounded-full bg-[#a0a0a8]"
            style={{
              width: 12,
              height: 12,
              top: "calc(50% - 6px)",
              left: "calc(50% - 6px)",
              animation: "core-pulse-silver 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Orbiting dots around gyroscope */}
      {ORBITS.map((dot, i) => (
        <div
          key={`orb-${i}`}
          className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{ width: 280, height: 280 }}
        >
          <div
            className="absolute top-1/2 left-1/2"
            style={
              {
                "--orbit-r": dot.r,
                animation: `orbit-premium ${dot.dur} linear infinite`,
                animationDelay: dot.delay,
              } as React.CSSProperties
            }
          >
            <div
              className="rounded-full bg-[#b0b0b8]"
              style={{
                width: dot.s,
                height: dot.s,
                opacity: dot.o,
                boxShadow: `0 0 10px rgba(180,180,190,${dot.o * 0.6})`,
              }}
            />
          </div>
        </div>
      ))}

      {/* ══════════════════════════════════════════
          FLOATING DATA CARDS
          ══════════════════════════════════════════ */}

      {/* Card 1 — Projects Delivered (top-left) */}
      <div className="absolute left-[3%] top-[16%] hidden xl:block animate-fadeInUp [animation-delay:0.7s]">
        <div
          className="w-56 rounded-xl border border-white/[0.07] bg-[#24262b]/80 p-5 backdrop-blur-xl shadow-2xl"
          style={{ animation: "float-premium-a 7s ease-in-out infinite" }}
        >
          <div className="mb-1 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#8a8a92] uppercase">
              Projects Delivered
            </span>
            <span className="font-mono text-[10px] text-emerald-400/70">
              +23%
            </span>
          </div>
          <p className="mb-0.5 font-mono text-2xl font-bold text-white/85">
            150<span className="ml-1 text-sm font-normal text-[#6a6a72]">+</span>
          </p>
          <p className="font-mono text-[11px] text-emerald-400/70">
            12 active <span className="text-[#6a6a72]">this quarter</span>
          </p>

          {/* Mini sparkline */}
          <svg
            className="mt-3 h-10 w-full"
            viewBox="0 0 200 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="areaGradSilver" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8a8a92" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#8a8a92" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points="0,40 0,35 20,30 40,32 60,20 80,22 100,15 120,18 140,8 160,12 180,5 200,2 200,40"
              fill="url(#areaGradSilver)"
            />
            <polyline
              points="0,35 20,30 40,32 60,20 80,22 100,15 120,18 140,8 160,12 180,5 200,2"
              stroke="#8a8a92"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Card 2 — Client Satisfaction (top-right) */}
      <div className="absolute right-[2%] top-[14%] hidden xl:block animate-fadeInUp [animation-delay:0.9s]">
        <div
          className="w-52 rounded-xl border border-white/[0.07] bg-[#24262b]/80 p-5 backdrop-blur-xl shadow-2xl"
          style={{ animation: "float-premium-b 8.5s ease-in-out infinite" }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#8a8a92] uppercase">
              Client Satisfaction
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
              <svg className="h-3 w-3 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <p className="mb-1 font-mono text-2xl font-bold text-white/85">
            98.7<span className="text-base text-[#6a6a72]">%</span>
          </p>

          {/* Satisfaction bar */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[98.7%] rounded-full bg-gradient-to-r from-[#6a6a72]/60 to-emerald-400/40" />
          </div>
          <p className="mt-2 font-mono text-[10px] text-emerald-400/70">
            +4.2% <span className="text-[#55555d]">vs last year</span>
          </p>
        </div>
      </div>

      {/* Card 3 — Code Quality (bottom-left) */}
      <div className="absolute left-[5%] bottom-[20%] hidden xl:block animate-fadeInUp [animation-delay:1.1s]">
        <div
          className="w-48 rounded-xl border border-white/[0.07] bg-[#24262b]/80 p-5 backdrop-blur-xl shadow-2xl"
          style={{ animation: "float-premium-c 6.5s ease-in-out infinite" }}
        >
          <span className="font-mono text-[10px] tracking-[0.15em] text-[#8a8a92] uppercase">
            On-Time Delivery
          </span>
          <p className="mt-2 font-mono text-2xl font-bold text-white/85">
            96<span className="text-base text-[#6a6a72]">%</span>
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <svg className="h-3 w-3 text-emerald-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="font-mono text-xs text-emerald-400/70">+8% this year</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
          ══════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:text-left lg:pl-16">
        {/* Headline */}
        <h1 className="mb-6 text-5xl font-black leading-[0.92] tracking-tight md:text-6xl lg:text-[5.5rem] animate-fadeInUp [animation-delay:0.15s]">
          <span className="block text-[#d0d0d6]">We Build</span>
          <span
            className={`block bg-clip-text text-transparent ${playfair.className}`}
            style={{
              backgroundImage:
                "linear-gradient(135deg, #e8e8ee 0%, #a0a0a8 40%, #c8c8d0 70%, #909098 100%)",
            }}
          >
            Software
          </span>
          <span className="block text-[#d0d0d6]">That Scales</span>
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-[#6a6a72] lg:mx-0 lg:text-lg animate-fadeInUp [animation-delay:0.3s]">
          From concept to launch, we design and develop custom web &amp; mobile
          applications that drive growth &mdash; backed by a world-class
          engineering team.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 max-lg:justify-center animate-fadeInUp [animation-delay:0.45s]">
          <Link
            href="#about"
            className="group relative overflow-hidden rounded-lg bg-[#e8853b] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_50px_rgba(232,133,59,0.25)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              START A PROJECT
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="#services"
            className="rounded-lg border border-[#3a3c42] bg-[#24262b]/50 px-8 py-4 text-sm font-bold tracking-wider text-[#a0a0a8] backdrop-blur-sm transition-all duration-300 hover:border-[#50525a] hover:text-[#d0d0d6]"
          >
            OUR WORK
          </Link>
        </div>

        {/* Trust metrics */}
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 max-lg:justify-center animate-fadeInUp [animation-delay:0.6s]">
          {[
            { num: "150+", label: "Projects" },
            { num: "50+", label: "Clients" },
            { num: "8+", label: "Years" },
            { num: "30+", label: "Engineers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-mono text-lg font-bold text-[#c0c0c8]">
                {stat.num}
              </p>
              <p className="font-mono text-[10px] tracking-widest text-[#55555d] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM TICKER BAR
          ══════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#2a2c32] bg-[#1e2024]/80 backdrop-blur-sm">
        <div className="flex overflow-hidden">
          <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...TICKER, ...TICKER].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 border-r border-[#2a2c32] px-8 py-3.5"
              >
                <span className="font-mono text-xs font-bold tracking-wider text-[#8a8a92]">
                  {item.sym}
                </span>
                <span className="font-mono text-xs text-[#55555d]">
                  {item.val}
                </span>
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
