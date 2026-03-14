"use client";

import { motion } from "framer-motion";
import "./clients.css";
import { clients } from "@/data/clients";
import { logos } from "@/components/icons/ClientLogos";
import SectionHeader from "@/components/ui/SectionHeader";
import AmbientEffects from "@/components/ui/AmbientEffects";

const THRESHOLD = 8; // ≤ 8 clients → single row, > 8 → two-row marquee

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            label="Trusted By"
            title="Clients &"
            accentWord="Partners"
            subtitle="We partner with forward-thinking companies across industries to deliver solutions that drive real impact."
          />
        </motion.div>
      </div>

      {/* ── Logo rows ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {isSingle ? (
          <div className="cl-static">
            {clients.map((client) => (
              <LogoCard key={client.name} {...client} />
            ))}
          </div>
        ) : (
          <div className="cl-marquee-wrap">
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
      </motion.div>

      {/* ── Stats ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 mt-10">
        <motion.div
          className="cl-stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div className="cl-stat" variants={statItem} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="cl-stat-number">50<span>+</span></div>
            <div className="cl-stat-label">Clients Served</div>
          </motion.div>
          <motion.div className="cl-stat" variants={statItem} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="cl-stat-number">120<span>+</span></div>
            <div className="cl-stat-label">Projects Delivered</div>
          </motion.div>
          <motion.div className="cl-stat" variants={statItem} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="cl-stat-number">98<span>%</span></div>
            <div className="cl-stat-label">Retention Rate</div>
          </motion.div>
          <motion.div className="cl-stat" variants={statItem} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="cl-stat-number">12<span>+</span></div>
            <div className="cl-stat-label">Industries</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
