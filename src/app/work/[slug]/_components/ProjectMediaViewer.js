"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProjectMediaViewer({ title, video, screenshots }) {
  const [mode, setMode] = useState(video ? "video" : "gallery");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const stageRef = useRef(null);
  const hasInteractedRef = useRef(false);

  const activeShot = screenshots[activeIndex] ?? screenshots[0];

  useGSAP(
    () => {
      if (!hasInteractedRef.current || !stageRef.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        stageRef.current,
        { autoAlpha: 0.45, y: 8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.32,
          ease: "power2.out",
          overwrite: true,
          clearProps: "transform,opacity,visibility",
        }
      );
    },
    { scope: stageRef, dependencies: [activeIndex, mode] }
  );

  function selectMode(nextMode) {
    hasInteractedRef.current = true;
    setMode(nextMode);
  }

  function selectIndex(idx) {
    hasInteractedRef.current = true;
    setActiveIndex(idx);
  }

  function prevShot() {
    hasInteractedRef.current = true;
    setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }

  function nextShot() {
    hasInteractedRef.current = true;
    setActiveIndex((i) => (i + 1) % screenshots.length);
  }

  useEffect(() => {
    if (!lightboxOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % screenshots.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, screenshots.length]);

  return (
    <div className="space-y-5">
      {/* Mode Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-surface p-1">
          {video && (
            <button
              type="button"
              onClick={() => selectMode("video")}
              className={`cursor-pointer rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
                mode === "video"
                  ? "bg-accent text-accent-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Demo Video
            </button>
          )}
          <button
            type="button"
            onClick={() => selectMode("gallery")}
            className={`cursor-pointer rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
              mode === "gallery"
                ? "bg-accent text-accent-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Screenshots ({screenshots.length})
          </button>
        </div>

        {mode === "gallery" && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="cursor-pointer rounded-full border border-line px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-accent hover:text-ink"
            >
              Zoom ↗
            </button>
            {screenshots.length > 1 && (
              <>
                <span className="font-mono text-xs text-ink-muted">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(screenshots.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={prevShot}
                  aria-label="Previous screenshot"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={nextShot}
                  aria-label="Next screenshot"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  →
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Main Stage */}
      {mode === "video" && video ? (
        <div ref={stageRef} className="overflow-hidden rounded-[32px] border border-line bg-[#0d0d0f]">
          <div
            className={`relative w-full bg-[#0d0d0f] ${
              video.portrait ? "h-[480px] sm:h-[620px]" : "aspect-video bg-black"
            }`}
          >
            <video
              key={video.src}
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-5 py-3.5">
            <p className="font-sans text-sm text-[#f1f5f9]/85">{video.caption}</p>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mint">
              Recorded Demo
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div ref={stageRef} className="card-3d overflow-hidden rounded-[32px] border border-line bg-surface">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Zoom screenshot: ${activeShot.title}`}
              className="group relative flex h-[380px] w-full cursor-zoom-in items-center justify-center bg-[#0f1013] p-4 sm:h-[520px] sm:p-6"
            >
              <Image
                src={activeShot.src}
                alt={`${title} · ${activeShot.title}`}
                fill
                sizes="(max-width: 768px) 95vw, 1200px"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.01] sm:p-5"
              />
            </button>
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-line px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {activeShot.title}
                </h3>
                <p className="mt-0.5 font-sans text-sm text-ink-muted">
                  {activeShot.caption}
                </p>
              </div>
              <span className="font-mono text-xs text-accent">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(screenshots.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {screenshots.length > 1 && (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
              {screenshots.map((shot, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => selectIndex(idx)}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl border text-left transition-all ${
                      isActive
                        ? "border-accent ring-2 ring-accent/40"
                        : "border-line opacity-75 hover:border-ink/40 hover:opacity-100"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full bg-[#111215]">
                      <Image
                        src={shot.src}
                        alt={shot.title}
                        fill
                        sizes="180px"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="truncate bg-surface px-2 py-1.5 font-mono text-[10px] text-ink">
                      {shot.title}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Full-Screen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot lightbox`}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0a0c]/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="flex items-center justify-between gap-4 text-[#f1f5f9]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="font-display text-lg font-semibold">{activeShot.title}</p>
              <p className="font-sans text-xs text-[#94a3b8] sm:text-sm">{activeShot.caption}</p>
            </div>
            <div className="flex items-center gap-2">
              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevShot}
                    aria-label="Previous screenshot"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={nextShot}
                    aria-label="Next screenshot"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    →
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
                className="flex h-10 cursor-pointer items-center justify-center rounded-full border border-white/20 px-4 font-mono text-xs uppercase tracking-[0.08em] text-white transition-colors hover:border-accent hover:text-accent"
              >
                Close (Esc)
              </button>
            </div>
          </div>

          <div
            className="relative my-4 flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeShot.src}
              alt={`${title} — ${activeShot.title}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
