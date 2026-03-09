'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './footer.css';

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const COMPANY = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Careers', href: '#careers' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const INDUSTRIES = [
  'FinTech',
  'Healthcare',
  'E-Commerce',
  'Education',
  'Real Estate',
  'Logistics',
];


export default function Footer() {
  const { ref: mainRef, visible: mainVisible } = useScrollReveal(0.1);

  return (
    <footer className="footer">
      {/* ── Main Footer ── */}
      <div
        ref={mainRef}
        className={`footer__main${mainVisible ? ' footer__main--visible' : ''}`}
      >
        <div className="footer__layout">
          {/* Left: Brand */}
          <div className="footer__left">
            <div className="footer__brand">
              <Link href="/" className="footer__logo-link">
                <Image
                  src="/logo.svg"
                  alt="Eramsoft"
                  width={130}
                  height={38}
                  className="footer__logo"
                />
              </Link>
              <p className="footer__brand-desc">
                We are a leading software house specializing in AI-powered solutions,
                custom development, and digital transformation for enterprises worldwide.
              </p>
            </div>
          </div>

          {/* Center: Link columns */}
          <div className="footer__center">
            <div className="footer__cols">
              <div className="footer__col">
                <h3 className="footer__col-title">Company</h3>
                <ul className="footer__list">
                  {COMPANY.map((c) => (
                    <li key={c.label}>
                      <a href={c.href} className="footer__link">{c.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer__col">
                <h3 className="footer__col-title">Industries</h3>
                <ul className="footer__list">
                  {INDUSTRIES.map((ind) => (
                    <li key={ind}>
                      <a href="#industries" className="footer__link">{ind}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Contact icons */}
          <div className="footer__right">
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn" className="footer__social">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="tel:+12345678900" aria-label="Call" className="footer__social">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a href="mailto:hello@eramsoft.com" aria-label="Email" className="footer__social">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            &copy; 2026 Eramsoft. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#privacy" className="footer__bottom-link">Privacy Policy</a>
            <a href="#terms" className="footer__bottom-link">Terms of Service</a>
            <a href="#cookies" className="footer__bottom-link">Cookies</a>
          </div>
        </div>
      </div>

      <div className="footer__grain" aria-hidden="true" />
      <div className="footer__dot-pattern" aria-hidden="true" />
      <div className="footer__glow" aria-hidden="true" />
    </footer>
  );
}
