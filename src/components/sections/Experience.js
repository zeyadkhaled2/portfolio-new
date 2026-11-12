import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <Reveal>
          <header className="mb-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Experience
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">Where I&apos;ve worked</h2>
          </header>
        </Reveal>
        <ol className="divide-y divide-line border-y border-line">
          {experience.map((job, i) => (
            <li key={i} className="py-6">
              <Reveal delay={i * 0.08} className="grid gap-2 md:grid-cols-4 md:gap-8">
                <p className="text-sm text-ink-subtle">{job.period}</p>
                <div className="md:col-span-3">
                  <h3 className="font-serif text-xl">
                    {job.role} <span className="text-ink-muted">· {job.company}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{job.summary}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
