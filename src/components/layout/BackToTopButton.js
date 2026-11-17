"use client";

export default function BackToTopButton() {
  function scrollToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="group inline-flex cursor-pointer items-center gap-2.5 self-start font-display text-sm font-semibold uppercase tracking-[0.04em] text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:self-auto"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/60 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 12.5V3.5M4 7.5 8 3.5l4 4" />
        </svg>
      </span>
      <span>Back to top</span>
    </button>
  );
}
