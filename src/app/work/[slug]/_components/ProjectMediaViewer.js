"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectMediaViewer({ title, video, screenshots }) {
  const [mode, setMode] = useState(video ? "video" : "gallery");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeShot = screenshots[activeIndex] ?? screenshots[0];

  function prevShot() {
    setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }

  function nextShot() {
    setActiveIndex((i) => (i + 1) % screenshots.length);
  }

  return (
    <div className="space-y-5">
      {/* Mode Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-line bg-surface p-1">
          {video && (
            <button
              type="button"
              onClick={() => setMode("video")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
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
            onClick={() => setMode("gallery")}
            className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
              mode === "gallery"
                ? "bg-accent text-accent-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Screenshots ({screenshots.length})
          </button>
        </div>

        {mode === "gallery" && screenshots.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-ink-muted">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(screenshots.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={prevShot}
              aria-label="Previous screenshot"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextShot}
              aria-label="Next screenshot"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Main Stage */}
      {mode === "video" && video ? (
        <div className="overflow-hidden rounded-[24px] border border-line bg-[#0d0d0f]">
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
            <p className="font-sans text-sm text-[#f6f2e7]/85">{video.caption}</p>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mint">
              Recorded Demo
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[24px] border border-line bg-surface">
            <div className="relative flex h-[380px] w-full items-center justify-center bg-[#0f1013] p-4 sm:h-[520px] sm:p-6">
              <Image
                src={activeShot.src}
                alt={`${title} — ${activeShot.title}`}
                fill
                sizes="(max-width: 768px) 95vw, 1200px"
                className="object-contain p-2 sm:p-5"
              />
            </div>
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
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative overflow-hidden rounded-xl border text-left transition-all ${
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
    </div>
  );
}
