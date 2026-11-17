import BackToTopButton from "@/components/layout/BackToTopButton";
import { site } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-ink">
          {site.year} © {site.name}
        </p>

        <BackToTopButton />
      </div>
    </footer>
  );
}
