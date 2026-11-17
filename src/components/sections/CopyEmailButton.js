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
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#ece69a]/45 bg-[#0c1145]/70 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#ece69a] transition-colors hover:border-[#ece69a] hover:bg-[#0c1145] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ece69a]"
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
