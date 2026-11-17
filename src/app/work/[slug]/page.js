import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectMediaViewer from "./_components/ProjectMediaViewer";
import Button from "@/components/ui/Button";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { projects, site } from "@/data";

const featureDotColors = ["bg-accent", "bg-pink", "bg-mint", "bg-yellow"];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: `${project.title} | ${site.name}`,
      description: project.description,
      images: [{ url: project.coverImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${site.name}`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

function ProjectDetailSkeleton() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 pb-24 sm:px-10 sm:pt-16 lg:px-14">
      <div className="h-4 w-40 rounded-full bg-surface" />
      <div className="mt-10 h-14 w-72 rounded-2xl bg-surface" />
      <div className="mt-4 h-7 w-full max-w-2xl rounded-xl bg-surface" />
      <div className="mt-12 aspect-video w-full rounded-[32px] border border-line bg-surface" />
    </div>
  );
}

async function ProjectDetailContent({ params }) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const metaLine = [project.year, ...project.tags].filter(Boolean).join(" · ");

  return (
    <article className="pt-10 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span>
          <span>Back to selected work</span>
        </Link>

        {/* Project Hero Header */}
        <header className="mt-8 sm:mt-10">
          <div className="mb-5">
            <span className="inline-block -rotate-3 rounded-full border border-accent px-3.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-ink">
              {project.year} · {project.role}
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-[0.02em] text-ink sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl font-display text-xl leading-snug text-ink/90 sm:text-2xl">
            {project.subtitle}
          </p>

          <p className="mt-4 font-sans text-sm text-ink-muted">· {metaLine}</p>

          {/* External Action Links */}
          {project.links?.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <Button
                  key={link.label}
                  href={link.href}
                  variant={i === 0 ? "accent" : "primary"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </Button>
              ))}
            </div>
          )}
        </header>

        {/* Interactive Demo Video & Screenshot Gallery */}
        <section className="mt-12 sm:mt-16" aria-label="Project demo and screenshots">
          <ProjectMediaViewer
            title={project.title}
            video={project.video}
            screenshots={project.screenshots}
          />
        </section>

        <Reveal variant="rule" className="my-16 sm:my-20" />

        {/* README / Overview & What It Does */}
        <section className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              README · Overview
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.02em] text-ink sm:text-4xl">
              What It Does
            </h2>
            <p className="mt-5 font-sans text-lg leading-relaxed text-ink-muted">
              {project.overview}
            </p>
          </Reveal>

          <RevealGroup stagger={0.08} className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {project.features.map((feat, idx) => (
              <div
                key={feat.title}
                data-reveal-item
                className="rounded-[28px] border border-line bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      featureDotColors[idx % featureDotColors.length]
                    }`}
                  />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {feat.title}
                  </h3>
                </div>
                <p className="font-sans text-sm leading-relaxed text-ink-muted">
                  {feat.detail}
                </p>
              </div>
            ))}
          </RevealGroup>
        </section>

        <Reveal variant="rule" className="my-16 sm:my-20" />

        {/* Engineering Challenge -> Decision -> Result */}
        {project.challenge && (
          <>
            <section aria-label="Engineering challenge and decisions">
              <Reveal>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Behind the Build
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.02em] text-ink sm:text-4xl">
                  Trade-Offs &amp; Decisions
                </h2>
              </Reveal>
              <RevealGroup stagger={0.09} className="mt-8 grid gap-5 md:grid-cols-3">
                <div data-reveal-item className="rounded-[28px] border border-line bg-surface p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-pink">
                    01 · Problem
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
                    {project.challenge.problem}
                  </p>
                </div>
                <div data-reveal-item className="rounded-[28px] border border-line bg-surface p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    02 · Approach
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
                    {project.challenge.decision}
                  </p>
                </div>
                <div data-reveal-item className="rounded-[28px] border border-line bg-surface p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-mint">
                    03 · Outcome
                  </p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
                    {project.challenge.result}
                  </p>
                </div>
              </RevealGroup>
            </section>

            <Reveal variant="rule" className="my-16 sm:my-20" />
          </>
        )}

        {/* Architecture & Technical Notes */}
        <section className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              How It Fits Together
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.02em] text-ink sm:text-4xl">
              Architecture &amp; Build
            </h2>
            <ul className="mt-6 space-y-3.5">
              {project.architecture.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-base leading-relaxed text-ink-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-6">
            <div>
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink">
                Tech Stack
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.readmeCommands?.length > 0 && (
              <div className="rounded-[28px] border border-line bg-surface p-6">
                <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink">
                  Workflow &amp; Commands
                </h3>
                <div className="mt-4 space-y-3">
                  {project.readmeCommands.map((cmd) => (
                    <div
                      key={cmd.label}
                      className="flex flex-col gap-1 border-b border-line pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="font-sans text-sm text-ink-muted">
                        {cmd.label}
                      </span>
                      <code className="rounded-xl border border-line bg-canvas px-3 py-1 font-mono text-xs text-accent">
                        {cmd.code}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Next Project Banner */}
        {nextProject && nextProject.slug !== project.slug && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-20 flex items-center justify-between border-y border-line py-8 transition-colors hover:border-accent sm:py-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                Next Project
              </span>
              <p className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.03em] text-ink transition-colors group-hover:text-accent sm:text-4xl">
                {nextProject.title}
              </p>
            </div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line font-mono text-xl text-ink transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
              ↗
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ProjectDetailPage({ params }) {
  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}
