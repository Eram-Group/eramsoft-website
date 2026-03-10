import "./footer.css";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "#" },
  ],
  services: [
    { label: "Mobile Development", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "DevOps & Cloud", href: "#services" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
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
              <a href="#" aria-label="Facebook" className="ft-social-link">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="ft-social-link">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="ft-social-link">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
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
