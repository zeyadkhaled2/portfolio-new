"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Scroll-triggered entrance powered by GSAP + ScrollTrigger.
 * Respects `prefers-reduced-motion` and keeps animations calm (transform + opacity only).
 */
export default function Reveal({
  children,
  variant = "rise",
  delay = 0,
  y = 22,
  className = "",
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const trigger = { trigger: el, start: "top 88%", once: true };

        if (variant === "rule") {
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.75,
              delay,
              ease: "power3.out",
              clearProps: "transform",
              scrollTrigger: trigger,
            }
          );
          return;
        }

        gsap.fromTo(
          el,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: trigger,
          }
        );
      });
    },
    { scope: ref, dependencies: [variant, delay, y] }
  );

  if (variant === "rule") {
    return <div ref={ref} className={`h-px w-full bg-line ${className}`} aria-hidden="true" />;
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Orchestrated GSAP entrance for the Hero section.
 */
export function HeroTimeline({ children, className = "" }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();

        tl.fromTo(
          "[data-hero='badge']",
          { opacity: 0, y: 12, rotation: -14 },
          {
            opacity: 1,
            y: 0,
            rotation: -9,
            duration: 0.55,
            ease: "power3.out",
            clearProps: "opacity",
          }
        )
          .fromTo(
            "[data-hero='headline']",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            "-=0.35"
          )
          .fromTo(
            "[data-hero='desc']",
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            "-=0.38"
          )
          .fromTo(
            "[data-hero='cta']",
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
            "-=0.35"
          );
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
