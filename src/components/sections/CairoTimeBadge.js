"use client";

import { useEffect, useState } from "react";

function formatCairoTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Cairo",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
}

export default function CairoTimeBadge({ fallback }) {
  const [cairoTime, setCairoTime] = useState("");

  useEffect(() => {
    const raf = requestAnimationFrame(() => setCairoTime(formatCairoTime()));
    const timer = setInterval(() => setCairoTime(formatCairoTime()), 30000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
    };
  }, []);

  return (
    <span
      suppressHydrationWarning
      className="rounded-full border border-line bg-canvas px-3.5 py-1.5 font-mono text-xs text-ink-muted"
    >
      {cairoTime ? `Cairo · ${cairoTime}` : fallback}
    </span>
  );
}
