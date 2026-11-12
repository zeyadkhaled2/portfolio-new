import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

const tones = {
  clay: "bg-[var(--tone-clay)]",
  sage: "bg-[var(--tone-sage)]",
  blue: "bg-[var(--tone-blue)]",
};

function ProjectCard({ title, description, tags, href, tone }) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col rounded-xl bg-surface p-5 ring-1 ring-line transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-surface-strong"
    >
      <div className="mb-5 overflow-hidden rounded-lg">
        <div
          className={`aspect-[16/10] w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] ${tones[tone] ?? tones.clay}`}
        />
      </div>
      <h3 className="font-serif text-xl">
        {title}
        <span className="ml-1 inline-block text-accent transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-0.5 text-xs text-ink-muted ring-1 ring-line"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-line py-24">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <Reveal>
          <header className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Selected work
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">Things I&apos;ve built</h2>
          </header>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
