import { site } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-ink">
          {site.year} © {site.name}
        </p>

        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 self-start font-display text-sm font-semibold uppercase tracking-[0.04em] text-ink transition-colors hover:text-accent sm:self-auto"
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
        </a>
      </div>
    </footer>
  );
}
