"use client";

import { useRef, useEffect } from "react";

export function useReveal() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    requestAnimationFrame(() => {
      targets.forEach((t) => obs.observe(t));
    });

    return () => obs.disconnect();
  }, []);

  return root;
}
