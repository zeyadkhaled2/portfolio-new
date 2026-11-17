"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects, site, navLinks } from "@/data";

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);

  const githubUrl =
    site.socials.find((s) => s.label.toLowerCase() === "github")?.href || "https://github.com";

  const items = useMemo(() => {
    const projectItems = projects.map((p) => ({
      id: `project-${p.slug}`,
      group: "Projects",
      label: p.title,
      hint: p.tags.slice(0, 2).join(" · "),
      run: () => router.push(`/work/${p.slug}`),
    }));

    const navItems = navLinks.map((n) => ({
      id: `nav-${n.label}`,
      group: "Sections",
      label: n.label[0] + n.label.slice(1).toLowerCase(),
      hint: n.href,
      run: () => router.push(n.href),
    }));

    const actionItems = [
      {
        id: "action-copy-email",
        group: "Actions",
        label: copiedEmail ? "Email copied ✓" : `Copy email (${site.email})`,
        hint: "Clipboard",
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(site.email);
          } catch {
            const ta = document.createElement("textarea");
            ta.value = site.email;
            ta.setAttribute("readonly", "");
            ta.style.position = "absolute";
            ta.style.left = "-9999px";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
          }
          setCopiedEmail(true);
          setTimeout(() => {
            setCopiedEmail(false);
            setOpen(false);
          }, 700);
        },
      },
      {
        id: "action-theme",
        group: "Actions",
        label: "Toggle Dark / Light Theme",
        hint: "Appearance",
        run: () => {
          const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
          const next = current === "dark" ? "light" : "dark";
          document.documentElement.dataset.theme = next;
          try {
            localStorage.setItem("theme", next);
          } catch {
            // Ignore storage restriction
          }
        },
      },
      {
        id: "action-github",
        group: "Actions",
        label: "Open GitHub Profile",
        hint: "External ↗",
        run: () => window.open(githubUrl, "_blank", "noopener,noreferrer"),
      },
    ];

    return [...projectItems, ...navItems, ...actionItems];
  }, [copiedEmail, githubUrl, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  const closePalette = () => {
    setOpen(false);
    setQuery("");
    setActiveIdx(0);
  };

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (prev) {
            setQuery("");
            setActiveIdx(0);
          }
          return !prev;
        });
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
        setQuery("");
        setActiveIdx(0);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useGSAP(
    () => {
      if (!open || !panelRef.current || !overlayRef.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.18, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 12, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.24, ease: "power3.out" }
      );
    },
    { dependencies: [open] }
  );

  function executeItem(item) {
    if (!item) return;
    item.run();
    if (!item.keepOpen) {
      closePalette();
    }
  }

  function handleInputKeyDown(e) {
    if (filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((idx) => (idx + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((idx) => (idx - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      executeItem(filtered[activeIdx] ?? filtered[0]);
    }
  }

  const safeActiveIdx = activeIdx < filtered.length ? activeIdx : 0;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open quick navigation menu (Ctrl+K or Cmd+K)"
        className="hidden h-9 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface/60 px-3 font-mono text-[11px] text-ink-muted transition-colors hover:border-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
      >
        <span>Menu</span>
        <kbd className="rounded border border-line bg-canvas px-1.5 py-0.5 text-[10px] text-ink-muted">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Quick navigation and actions"
          onClick={closePalette}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/65 px-4 pt-20 backdrop-blur-sm sm:pt-28"
        >
          <div
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-[28px] border border-line bg-canvas shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIdx(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Jump to project, section, or action..."
                className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
              />
              <button
                type="button"
                onClick={closePalette}
                className="cursor-pointer rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-accent hover:text-ink"
              >
                Esc
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2.5">
              {filtered.length === 0 ? (
                <p className="px-4 py-8 text-center font-mono text-xs text-ink-muted">
                  No matches for &ldquo;{query}&rdquo;
                </p>
              ) : (
                <ul className="space-y-1">
                  {filtered.map((item, idx) => {
                    const isActive = idx === safeActiveIdx;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIdx(idx)}
                          onClick={() => executeItem(item)}
                          className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl px-4 py-2.5 text-left transition-colors ${
                            isActive
                              ? "bg-surface text-ink ring-1 ring-accent/50"
                              : "text-ink-muted hover:bg-surface/60 hover:text-ink"
                          }`}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                              {item.group}
                            </span>
                            <span className="truncate font-sans text-sm font-medium text-ink">
                              {item.label}
                            </span>
                          </div>
                          <span className="shrink-0 font-mono text-[11px] text-ink-subtle">
                            {item.hint}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-line bg-surface/60 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-subtle">
              <span>↑↓ Navigate · ↵ Select</span>
              <span>⌘K / Ctrl+K</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
