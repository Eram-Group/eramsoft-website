"use client";

import "./clients.css";
import { clients } from "@/data/clients";
import { logos } from "@/components/icons/ClientLogos";

const row1 = clients.slice(0, 8);
const row2 = clients.slice(8);

function LogoCard({
  name,
  type,
  color,
}: {
  name: string;
  type: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="cl-logo">
      <div className={`cl-logo-icon cl-logo-icon--${color}`}>
        {logos[name] ?? name[0]}
      </div>
      <div>
        <div className="cl-logo-name">{name}</div>
        <div className="cl-logo-type">{type}</div>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="cl-section relative pt-12 pb-28 md:pt-16 md:pb-36">
      {/* Ambient glows */}
      <div className="cl-glow cl-glow--1" aria-hidden="true" />
      <div className="cl-glow cl-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="cl-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="cl-label mb-4 text-xs font-bold tracking-[0.35em] uppercase cl-fadeUp [animation-delay:0.1s]">
            Trusted By
          </p>
          <h2 className="cl-title mb-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl cl-fadeUp [animation-delay:0.25s]">
            Clients &{" "}
            <span className="cl-title-accent">Partners</span>
          </h2>
          <div className="cl-line mx-auto mb-6 h-px w-24 cl-lineExpand [animation-delay:0.45s]" />
          <p className="cl-subtitle mx-auto max-w-lg text-base leading-relaxed md:text-lg cl-fadeUp [animation-delay:0.5s]">
            We partner with forward-thinking companies across industries
            to deliver solutions that drive real impact.
          </p>
        </div>
      </div>

      {/* ── Marquee rows ── */}
      <div className="cl-marquee-wrap cl-fadeUp [animation-delay:0.65s]">
        {/* Row 1 — scrolls left */}
        <div className="cl-marquee cl-marquee--left">
          {[...row1, ...row1].map((client, i) => (
            <LogoCard key={`r1-${i}`} {...client} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="cl-marquee cl-marquee--right">
          {[...row2, ...row2].map((client, i) => (
            <LogoCard key={`r2-${i}`} {...client} />
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 mt-20">
        <div className="cl-stats cl-fadeUp [animation-delay:0.85s]">
          <div className="cl-stat">
            <div className="cl-stat-number">50<span>+</span></div>
            <div className="cl-stat-label">Clients Served</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-number">120<span>+</span></div>
            <div className="cl-stat-label">Projects Delivered</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-number">98<span>%</span></div>
            <div className="cl-stat-label">Retention Rate</div>
          </div>
          <div className="cl-stat">
            <div className="cl-stat-number">12<span>+</span></div>
            <div className="cl-stat-label">Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
