"use client";

import "./clients.css";
import { clients } from "@/data/clients";
import { logos } from "@/components/icons/ClientLogos";

const THRESHOLD = 8; // ≤ 8 clients → single row, > 8 → two-row marquee

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
  const isSingle = clients.length <= THRESHOLD;
  const row1 = isSingle ? clients : clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = isSingle ? [] : clients.slice(Math.ceil(clients.length / 2));

  return (
    <section id="clients" className="cl-section relative pt-10 pb-14 md:pt-14 md:pb-20">
      {/* Ambient glows */}
      <div className="cl-glow cl-glow--1" aria-hidden="true" />
      <div className="cl-glow cl-glow--2" aria-hidden="true" />

      {/* Noise texture */}
      <div className="cl-noise" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-10 text-center">
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

      {/* ── Logo rows ── */}
      {isSingle ? (
        /* Few clients → static centered row, no scroll */
        <div className="cl-static cl-fadeUp [animation-delay:0.65s]">
          {clients.map((client) => (
            <LogoCard key={client.name} {...client} />
          ))}
        </div>
      ) : (
        /* Many clients → two-row marquee */
        <div className="cl-marquee-wrap cl-fadeUp [animation-delay:0.65s]">
          <div className="cl-marquee cl-marquee--left">
            {[...row1, ...row1].map((client, i) => (
              <LogoCard key={`r1-${i}`} {...client} />
            ))}
          </div>
          <div className="cl-marquee cl-marquee--right cl-marquee--inset">
            {[...row2, ...row2].map((client, i) => (
              <LogoCard key={`r2-${i}`} {...client} />
            ))}
          </div>
        </div>
      )}

      {/* ── Stats ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 mt-10">
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
