import Link from "next/link";
import CommandPalette from "@/components/layout/CommandPalette";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { ScrollProgressBar } from "@/components/ui/Reveal";
import { site, navLinks } from "@/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-18 w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.015em] text-ink transition-colors hover:text-accent"
        >
          {/* Custom geometric Z monogram mark */}
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2.25"
              y="2.25"
              width="27.5"
              height="27.5"
              rx="9"
              fill="currentColor"
              fillOpacity="0.14"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            <path
              d="M9.75 10.5H21.75L10.25 21.5"
              stroke="var(--ink)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.25 21.5H22.25"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="22.25" cy="10.5" r="1.3" fill="var(--mint)" />
          </svg>
          <span>{site.shortName}</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden items-center gap-7 font-display text-sm font-medium uppercase tracking-[0.06em] text-ink-muted md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <CommandPalette />
          <ThemeToggle />
          <MobileMenu links={navLinks} />
        </nav>
      </div>
      <ScrollProgressBar />
    </header>
  );
}
