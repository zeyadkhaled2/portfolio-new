import Link from "next/link";
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
          className="group inline-flex items-center gap-2.5 font-display text-xl font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          {/* Periwinkle geometric mark echoing tami.agency's emblem */}
          <svg
            viewBox="0 0 28 28"
            className="h-7 w-7 text-accent transition-transform duration-300 group-hover:rotate-6"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="14" cy="12" r="7" fill="currentColor" opacity="0.22" />
            <path
              d="M7 10.5C7 6.91 10.13 4 14 4s7 2.91 7 6.5c0 2.1-.98 3.96-2.5 5.15L21 21.5M9.5 15.65 7 21.5M12.5 16.8V23M15.5 16.8V23"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="11.5" cy="10.2" r="1.1" fill="currentColor" />
            <circle cx="16.5" cy="10.2" r="1.1" fill="currentColor" />
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

          <ThemeToggle />
          <MobileMenu links={navLinks} />
        </nav>
      </div>
      <ScrollProgressBar />
    </header>
  );
}
