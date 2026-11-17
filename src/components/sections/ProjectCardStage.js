"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Wraps each project thumbnail stage with a smooth GSAP quickTo floating "Open ↗"
 * cursor pill on desktop fine-pointer devices while preserving SSR Server Component markup.
 */
export default function ProjectCardStage({ className = "", children }) {
  const stageRef = useRef(null);
  const pillRef = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const stage = stageRef.current;
      const pill = pillRef.current;
      if (!stage || !pill) return;

      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        gsap.set(pill, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.86 });
        const xTo = gsap.quickTo(pill, "x", { duration: 0.28, ease: "power3.out" });
        const yTo = gsap.quickTo(pill, "y", { duration: 0.28, ease: "power3.out" });

        const onEnter = contextSafe((e) => {
          const rect = stage.getBoundingClientRect();
          xTo(e.clientX - rect.left);
          yTo(e.clientY - rect.top);
          gsap.to(pill, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        const onMove = contextSafe((e) => {
          const rect = stage.getBoundingClientRect();
          xTo(e.clientX - rect.left);
          yTo(e.clientY - rect.top);
        });

        const onLeave = contextSafe(() => {
          gsap.to(pill, {
            autoAlpha: 0,
            scale: 0.86,
            duration: 0.18,
            ease: "power2.in",
            overwrite: "auto",
          });
        });

        stage.addEventListener("pointerenter", onEnter);
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerleave", onLeave);

        return () => {
          stage.removeEventListener("pointerenter", onEnter);
          stage.removeEventListener("pointermove", onMove);
          stage.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: stageRef }
  );

  return (
    <div ref={stageRef} className={className}>
      {children}
      <div
        ref={pillRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute top-0 left-0 z-30 inline-flex items-center gap-1.5 rounded-full border border-accent/70 bg-canvas/90 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink opacity-0 shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <span>Open</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
