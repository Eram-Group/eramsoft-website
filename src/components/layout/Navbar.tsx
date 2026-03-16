"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT US", href: "/about" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#141c2a] shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
      style={{ textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.6)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={147} height={42} className="brightness-0 invert opacity-80" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-[13px] font-medium tracking-widest transition-colors hover:text-[#50aaff] ${
                isActive(link.href)
                  ? "text-[#50aaff] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#50aaff] after:rounded-full"
                  : "text-white/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: social + phone */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex gap-2">
            <SocialLinks linkClassName="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:text-[#50aaff] text-white/40" />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 transition-transform bg-white/70 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 transition-opacity bg-white/70 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 transition-transform bg-white/70 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-foreground/10 bg-navy/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`relative text-[13px] font-medium tracking-widest transition-colors hover:text-[#50aaff] ${
                  isActive(link.href)
                    ? "text-[#50aaff]"
                    : "text-white/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
