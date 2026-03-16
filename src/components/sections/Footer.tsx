import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "#" },
  ],
  services: [
    { label: "Mobile Development", href: "/#services" },
    { label: "Web Development", href: "/#services" },
    { label: "UI/UX Design", href: "/#services" },
    { label: "DevOps & Cloud", href: "/#services" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="ft-footer relative overflow-hidden">
      <div className="ft-noise" aria-hidden="true" />
      <div className="ft-glow ft-glow--1" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ── Top section ── */}
        <div className="ft-top">
          {/* Brand */}
          <div className="ft-brand">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Eram Soft"
                width={140}
                height={40}
                className="brightness-0 invert opacity-80"
              />
            </Link>
            <p className="ft-brand-desc">
              We craft exceptional digital experiences — from mobile apps to
              scalable platforms — helping businesses thrive in the digital age.
            </p>

            {/* Social links */}
            <div className="ft-socials">
              <SocialLinks linkClassName="ft-social-link" />
            </div>


            <a href="/Eram-Soft-Portfolio.pdf" download className="ft-download">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Company Profile
            </a>
          </div>

          {/* Link columns */}
          <div className="ft-links-grid">
            <div className="ft-links-col">
              <h4 className="ft-links-heading">Company</h4>
              {footerLinks.company.map((link) => (
                <Link key={link.label} href={link.href} className="ft-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ft-links-col">
              <h4 className="ft-links-heading">Services</h4>
              {footerLinks.services.map((link) => (
                <Link key={link.label} href={link.href} className="ft-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="ft-links-col">
              <h4 className="ft-links-heading">Support</h4>
              {footerLinks.support.map((link) => (
                <Link key={link.label} href={link.href} className="ft-link">
                  {link.label}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <p className="ft-copyright">
            &copy; {new Date().getFullYear()} Eram Soft. All rights reserved.
          </p>
          <p className="ft-credit">
            Crafted with precision & passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
