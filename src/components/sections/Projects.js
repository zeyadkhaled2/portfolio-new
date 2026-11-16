import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { projects, site } from "@/data";

const backdropTones = {
  peach: "bg-[var(--tone-peach)]",
  obsidian: "bg-[var(--tone-obsidian)]",
  mint: "bg-[var(--tone-mint)]",
  lavender: "bg-[var(--tone-lavender)]",
};

function ProjectCard({
  slug,
  title,
  year,
  description,
  tags,
  tone,
  coverImage,
  secondaryImage,
  coverFit,
  screenshots,
  video,
}) {
  const metaLine = [year, ...tags].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        className={`relative h-[300px] w-full overflow-hidden rounded-[20px] border border-line sm:h-[360px] lg:h-[420px] ${backdropTones[tone] ?? backdropTones.obsidian}`}
      >
        {/* Subtle media count pill */}
        <div className="pointer-events-none absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-[#131314]/80 px-3 py-1 font-mono text-[11px] text-[#f6f2e7] backdrop-blur-sm">
          {video && <span className="h-1.5 w-1.5 rounded-full bg-mint" />}
          <span>
            {video ? "Demo Video" : "Preview"} · {screenshots.length} screens
          </span>
        </div>

        {coverFit === "contain" && secondaryImage ? (
          <div className="flex h-full w-full items-center justify-center gap-4 px-5 pt-12 pb-5 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:gap-5 sm:px-8">
            <div className="relative aspect-[4/5] h-full max-w-[47%] overflow-hidden rounded-2xl border border-white/15 bg-[#111917] shadow-2xl">
              <Image
                src={coverImage}
                alt={`${title} main screen`}
                fill
                sizes="(max-width: 768px) 44vw, 240px"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] h-[94%] max-w-[47%] translate-y-2 overflow-hidden rounded-2xl border border-white/15 bg-[#111917] shadow-2xl">
              <Image
                src={secondaryImage}
                alt={`${title} secondary screen`}
                fill
                sizes="(max-width: 768px) 44vw, 240px"
                className="object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center p-5 pt-13 sm:p-7 sm:pt-14">
            <div
              className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/15 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                tone === "mint" ? "bg-[#111514]" : "bg-[#f7f7f2]"
              }`}
            >
              <Image
                src={coverImage}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 768px) 90vw, 640px"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-2.5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
            {title}
          </h3>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted transition-colors duration-200 group-hover:text-accent">
            <span>View case</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </span>
        </div>
        <p className="font-sans text-base leading-relaxed text-ink-muted">{description}</p>
        <p className="pt-1 font-sans text-sm text-ink-muted">· {metaLine}</p>
      </div>
    </Link>
  );
}

export default function Projects() {
  const githubHref =
    site.socials.find((s) => s.label.toLowerCase() === "github")?.href || "#";

  return (
    <section id="work" className="pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <header className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Selected Work
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.02em] text-ink sm:text-4xl lg:text-5xl">
                Projects I&apos;ve Built
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              Click any project for demo &amp; README
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={githubHref}
            target={githubHref.startsWith("http") ? "_blank" : undefined}
            rel={githubHref.startsWith("http") ? "noreferrer" : undefined}
            className="group mt-16 flex items-center justify-between border-y border-line py-7 transition-colors hover:border-accent sm:mt-20 sm:py-9"
          >
            <span className="font-display text-2xl font-bold uppercase tracking-[0.03em] text-ink transition-colors group-hover:text-accent sm:text-4xl">
              See more on GitHub
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line font-mono text-lg text-ink transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
              ↗
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
