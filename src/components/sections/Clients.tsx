"use client";

import "./clients.css";
import { clients } from "@/data/clients";
import { logos } from "@/components/icons/ClientLogos";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";

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
    <section id="clients" className="cl-section dark-section section-top-glow relative pt-10 pb-14 md:pt-14 md:pb-20">
      <AmbientEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Section header ── */}
        <SectionHeader
          label="Trusted By"
          title="Clients &"
          accentWord="Partners"
          subtitle="We partner with forward-thinking companies across industries to deliver solutions that drive real impact."
        />
      </div>

      {/* ── Logo rows ── */}
      {isSingle ? (
        /* Few clients → static centered row, no scroll */
        <div className="cl-static animate-section-fadeUp [animation-delay:0.65s]">
          {clients.map((client) => (
            <LogoCard key={client.name} {...client} />
          ))}
        </div>
      ) : (
        /* Many clients → two-row marquee */
        <div className="cl-marquee-wrap animate-section-fadeUp [animation-delay:0.65s]">
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
        <div className="cl-stats animate-section-fadeUp [animation-delay:0.85s]">
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
