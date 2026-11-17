"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/**
 * Scroll-triggered entrance powered by GSAP + ScrollTrigger.
 * Respects `prefers-reduced-motion` and keeps animations compositor-only (transform + autoAlpha).
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
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
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
 * Coordinates grouped cards/rows via a single ScrollTrigger.batch() pass instead of
 * creating separate ScrollTriggers with manual delays on every item.
 */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.09,
  y = 24,
  as: Tag = "div",
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const container = scope.current;
      if (!container) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray("[data-reveal-item]", container);
        if (items.length === 0) return;

        gsap.set(items, { autoAlpha: 0, y });

        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          interval: 0.08,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.68,
              stagger,
              ease: "power3.out",
              overwrite: true,
              clearProps: "transform,opacity,visibility",
            });
          },
        });
      });

      let cancelled = false;
      document.fonts?.ready?.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
      };
    },
    { scope, dependencies: [stagger, y] }
  );

  return (
    <Tag ref={scope} className={className}>
      {children}
    </Tag>
  );
}

/**
 * Orchestrated GSAP + SplitText entrance for the Hero section.
 */
export function HeroTimeline({ children, className = "" }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const headlineEl = scope.current?.querySelector("[data-hero='headline']");
        const ruleEl = scope.current?.querySelector("[data-hero='rule']");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          "[data-hero='badge']",
          { autoAlpha: 0, y: 10, rotation: -14 },
          {
            autoAlpha: 1,
            y: 0,
            rotation: -9,
            duration: 0.45,
            clearProps: "opacity,visibility",
          }
        );

        let split;
        if (headlineEl) {
          split = SplitText.create(headlineEl, {
            type: "lines,words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.words, {
                yPercent: 110,
                autoAlpha: 0,
                duration: 0.62,
                stagger: 0.032,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              });
            },
          });
        }

        tl.fromTo(
          "[data-hero='desc']",
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            clearProps: "transform,opacity,visibility",
          },
          0.26
        ).fromTo(
          "[data-hero='cta']",
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            clearProps: "transform,opacity,visibility",
          },
          0.36
        );

        if (ruleEl) {
          tl.fromTo(
            ruleEl,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.75,
              ease: "power3.out",
              clearProps: "transform",
            },
            0.38
          );
        }

        return () => {
          split?.revert();
        };
      });

      let cancelled = false;
      document.fonts?.ready?.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
      };
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}

/**
 * Compositor-only scroll progress indicator anchored along the Navbar bottom border.
 */
export function ScrollProgressBar() {
  const barRef = useRef(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(bar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
        },
      });
    });
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-accent/85"
      />
    </div>
  );
}

/**
 * Subtle desktop-only scroll-scrubbed depth drift for layered showcase mockups.
 */
export function ParallaxFloat({ children, offset = 10, className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { y: -offset },
          {
            y: offset,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          }
        );
      });
    },
    { scope: ref, dependencies: [offset] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
