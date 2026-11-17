"use client";

import { useEffect, useState } from "react";

export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`inline-flex h-12 cursor-pointer items-center justify-center rounded-full border px-6 font-display text-base font-medium tracking-[0.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] ${
        copied
          ? "border-mint bg-canvas text-mint"
          : "border-line bg-canvas text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
