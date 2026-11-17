"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function BackToTopButton() {
  const scope = useRef(null);
  const { contextSafe } = useGSAP({ scope });

  const scrollToTop = contextSafe(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const proxy = { y: window.scrollY };
    let expectedY = proxy.y;

    const tween = gsap.to(proxy, {
      y: 0,
      duration: 0.85,
      ease: "power3.inOut",
      overwrite: "auto",
      onUpdate: () => {
        if (Math.abs(window.scrollY - expectedY) > 16) {
          tween.kill();
          return;
        }
        expectedY = proxy.y;
        window.scrollTo({ top: expectedY, behavior: "instant" });
      },
    });
  });

  return (
    <button
      ref={scope}
      type="button"
      onClick={scrollToTop}
      className="group inline-flex cursor-pointer items-center gap-2.5 self-start font-display text-sm font-semibold uppercase tracking-[0.04em] text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:self-auto"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/60 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 12.5V3.5M4 7.5 8 3.5l4 4" />
        </svg>
      </span>
      <span>Back to top</span>
    </button>
  );
}
