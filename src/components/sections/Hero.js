import Button from "@/components/ui/Button";
import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {site.role} · {site.location}
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">
          Hi, I&apos;m {site.name}.{" "}
          <span className="text-ink-muted">
            I build thoughtful software that feels <em className="text-accent">calm</em> to use.
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">{site.description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#work">View my work</Button>
          <Button href={site.cvUrl} variant="outline">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
