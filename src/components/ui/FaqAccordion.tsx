"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({
  items,
  classPrefix = "faq",
}: {
  items: FaqItem[];
  classPrefix?: string;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={`${classPrefix}-list`}>
      {items.map((f, i) => {
        const isOpen = openFaq === i;
        return (
          <div
            key={i}
            className={`${classPrefix}-item ${isOpen ? `${classPrefix}-item--open` : ""}`}
          >
            <button
              className={`${classPrefix}-trigger`}
              onClick={() => setOpenFaq(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`${classPrefix}-q`}>{f.q}</span>
              <span className={`${classPrefix}-icon`}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div className={`${classPrefix}-body`}>
              <p className={`${classPrefix}-a`}>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
