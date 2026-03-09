"use client";

import { useEffect, useRef, useState } from "react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Web Applications",
    description:
      "Custom platforms, dashboards, and SaaS products built with modern frameworks for speed and scale.",
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Native and cross-platform apps for iOS and Android — from concept to App Store launch.",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Scalable infrastructure, CI/CD pipelines, and cloud-native architecture on AWS, GCP, and Azure.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Research-driven interfaces that are beautiful, intuitive, and built to convert.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function AboutGray() {
  const hero = useInView(0.1);
  const grid = useInView(0.08);

  return (
    <section id="about" className="relative overflow-hidden bg-[#ebedf0]">
      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Top half: intro text ── */}
      <div ref={hero.ref} className="mx-auto max-w-6xl px-8 pt-28 pb-20 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          {/* Left — label + headline */}
          <div>
            <div
              className="mb-6 flex items-center gap-3 transition-all duration-700"
              style={{
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span className="h-px w-8 bg-[#5A96B8]/40" />
              <span className="text-[9px] font-medium tracking-[0.45em] text-[#1a1a1a]/30 uppercase">
                About Us
              </span>
            </div>
            <h2
              className="text-[clamp(2rem,4vw,3.2rem)] font-extralight leading-[1.15] tracking-[-0.02em] text-[#1a1a1a]/75 transition-all duration-700 delay-100"
              style={{
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              Engineering software
              <br />
              that moves businesses
              <br />
              <span className="text-[#5A96B8]/80">forward</span>
            </h2>
          </div>

          {/* Right — body text */}
          <div
            className="flex flex-col justify-end transition-all duration-700 delay-200"
            style={{
              opacity: hero.visible ? 1 : 0,
              transform: hero.visible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <p className="mb-6 text-[14px] font-light leading-[1.9] text-[#1a1a1a]/50">
              We are a team of engineers, designers, and strategists who build custom
              software for companies that refuse to settle for off-the-shelf. Every
              line of code we write serves a purpose — performance, clarity, and
              long-term value.
            </p>
            <p className="text-[14px] font-light leading-[1.9] text-[#1a1a1a]/50">
              From early-stage startups shipping their first product to enterprises
              modernizing legacy systems, we bring the same rigor and craft to every
              engagement.
            </p>

            {/* Subtle divider */}
            <div className="mt-10 h-px w-16 bg-gradient-to-r from-[#5A96B8]/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Bottom half: capabilities grid ── */}
      <div ref={grid.ref} className="border-t border-[#1a1a1a]/[0.06]">
        <div className="mx-auto max-w-6xl px-8 py-20 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.number}
                className="group relative flex flex-col border-b border-[#1a1a1a]/[0.05] px-6 py-10 transition-all duration-700 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-8"
                style={{
                  opacity: grid.visible ? 1 : 0,
                  transform: grid.visible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Number */}
                <span className="mb-5 text-[11px] font-light tracking-[0.15em] text-[#5A96B8]/50">
                  {cap.number}
                </span>

                {/* Title */}
                <h3 className="mb-3 text-[15px] font-medium tracking-[0.01em] text-[#1a1a1a]/70">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] font-light leading-[1.8] text-[#1a1a1a]/40">
                  {cap.description}
                </p>

                {/* Hover accent line */}
                <div className="mt-6 h-px w-0 bg-[#5A96B8]/30 transition-all duration-500 group-hover:w-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
