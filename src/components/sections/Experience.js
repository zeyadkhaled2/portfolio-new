import Link from "next/link";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <header className="mb-10 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Experience
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.02em] text-ink sm:text-4xl lg:text-5xl">
              Where I&apos;ve Worked
            </h2>
          </header>
        </Reveal>

        <RevealGroup as="ol" stagger={0.1} className="divide-y divide-line border-y border-line">
          {experience.map((job, i) => (
            <li key={`${job.period}-${i}`} data-reveal-item className="py-7 sm:py-9">
              <div className="grid gap-3 md:grid-cols-12 md:items-baseline md:gap-8">
                <p className="font-mono text-sm uppercase tracking-[0.08em] text-ink-muted md:col-span-3">
                  {job.period}
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {job.role}{" "}
                    <span className="font-normal text-accent">· {job.company}</span>
                  </h3>
                  <p className="mt-2.5 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
                    {job.summary}
                  </p>
                  {job.caseStudies?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {job.caseStudies.map((cs) => (
                        <Link
                          key={cs.href}
                          href={cs.href}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
                        >
                          <span>{cs.label}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
