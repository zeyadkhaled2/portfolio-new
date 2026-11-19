"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Ambient 3D hero atmosphere: blends a live architectural perspective grid,
 * drifting volumetric depth orbs, and a desktop cursor spotlight smoothly
 * down into `--canvas` so there is zero hard cutoff before Selected Work.
 */
export default function HeroBackdrop() {
  const wrapRef = useRef(null);
  const orbPrimaryRef = useRef(null);
  const orbSecondaryRef = useRef(null);
  const spotlightRef = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const wrap = wrapRef.current;
      const orb1 = orbPrimaryRef.current;
      const orb2 = orbSecondaryRef.current;
      const spot = spotlightRef.current;
      if (!wrap || !orb1 || !orb2 || !spot) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(orb1, {
          x: 34,
          y: -18,
          scale: 1.07,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(orb2, {
          x: -28,
          y: 22,
          scale: 0.94,
          duration: 11.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Gently recede atmospheric layer as user scrolls down into Selected Work
        gsap.to(wrap, {
          y: -28,
          autoAlpha: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });

      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const host = wrap.parentElement;
        if (!host) return;

        gsap.set(spot, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
        const xTo = gsap.quickTo(spot, "x", { duration: 0.55, ease: "power3.out" });
        const yTo = gsap.quickTo(spot, "y", { duration: 0.55, ease: "power3.out" });

        const onEnter = contextSafe((e) => {
          const rect = host.getBoundingClientRect();
          xTo(e.clientX - rect.left);
          yTo(e.clientY - rect.top);
          gsap.to(spot, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
        });

        const onMove = contextSafe((e) => {
          const rect = host.getBoundingClientRect();
          xTo(e.clientX - rect.left);
          yTo(e.clientY - rect.top);
        });

        const onLeave = contextSafe(() => {
          gsap.to(spot, { autoAlpha: 0, duration: 0.45, ease: "power2.out" });
        });

        host.addEventListener("pointerenter", onEnter);
        host.addEventListener("pointermove", onMove);
        host.addEventListener("pointerleave", onLeave);

        return () => {
          host.removeEventListener("pointerenter", onEnter);
          host.removeEventListener("pointermove", onMove);
          host.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: wrapRef }
  );

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Subtle 3D tilted perspective grid dissolving cleanly into --canvas */}
      <div
        className="hero-grid absolute inset-x-[-10%] -top-16 bottom-6 origin-top"
        style={{ transform: "perspective(900px) rotateX(18deg)" }}
      />

      {/* Primary volumetric glacial-teal depth orb */}
      <div
        ref={orbPrimaryRef}
        className="absolute -top-24 left-[14%] h-[340px] w-[520px] rounded-full opacity-55 blur-[96px] sm:h-[420px] sm:w-[680px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 26%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Secondary horizon sky-blue depth orb near bottom-right outline */}
      <div
        ref={orbSecondaryRef}
        className="absolute right-[8%] bottom-6 h-[280px] w-[420px] rounded-full opacity-45 blur-[92px] sm:h-[340px] sm:w-[540px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--mint) 22%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Interactive desktop specular glow */}
      <div
        ref={spotlightRef}
        className="invisible absolute top-0 left-0 h-[420px] w-[420px] rounded-full opacity-0 blur-[72px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 68%)",
        }}
      />

      {/* Bottom vertical dissolve guarantee: seamless blend into --canvas below */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--canvas) 100%)",
        }}
      />
    </div>
  );
}
