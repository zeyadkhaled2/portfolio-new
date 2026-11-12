import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-ink-subtle sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {site.year} {site.name}. Built with Next.js.
        </p>
        <ul className="flex gap-5">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="transition-colors hover:text-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
