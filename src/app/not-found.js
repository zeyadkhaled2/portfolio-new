import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <span className="inline-block -rotate-6 rounded-full border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          404 · Not Found
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-ink sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-lg font-sans text-lg text-ink-muted">
          The route or project you requested isn&apos;t here. Head back to the portfolio to explore
          selected work.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back home</Button>
          <Button href="/#work" variant="outline">
            Selected work
          </Button>
        </div>
      </div>
    </section>
  );
}
