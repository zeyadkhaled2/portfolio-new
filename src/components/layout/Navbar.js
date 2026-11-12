import ThemeToggle from "@/components/layout/ThemeToggle";
import { site, navLinks } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-serif text-lg">
          {site.name}
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <ul className="hidden gap-6 text-ink-muted sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="text-accent transition-colors hover:text-accent-hover">
            Contact →
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
