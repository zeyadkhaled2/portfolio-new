import Image from "next/image";
import Link from "next/link";
import Reveal, { ParallaxFloat, RevealGroup } from "@/components/ui/Reveal";
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
}) {
  const cardTags = [year, ...tags].filter(Boolean);

  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden rounded-[28px] border border-line sm:rounded-[34px] ${backdropTones[tone] ?? backdropTones.obsidian}`}
      >
        {coverFit === "mobile-pair" && secondaryImage ? (
          <div className="relative flex h-full w-full items-end justify-center gap-5 px-6 pt-7 sm:gap-7 sm:px-10 sm:pt-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(255,255,255,0.42),transparent_70%)]"
            />
            <ParallaxFloat
              offset={-8}
              className="relative z-10 h-[94%] w-[38%] max-w-[196px]"
            >
              <div className="relative h-full w-full translate-y-3 transition-transform duration-500 ease-out group-hover:translate-y-1">
                <Image
                  src={coverImage}
                  alt={`${title} home interface`}
                  fill
                  sizes="(max-width: 768px) 38vw, 210px"
                  className="object-contain object-bottom drop-shadow-[0_20px_32px_rgba(12,24,20,0.38)]"
                />
              </div>
            </ParallaxFloat>
            <ParallaxFloat
              offset={8}
              className="relative z-10 h-[86%] w-[38%] max-w-[196px]"
            >
              <div className="relative h-full w-full translate-y-5 transition-transform duration-500 ease-out group-hover:translate-y-2">
                <Image
                  src={secondaryImage}
                  alt={`${title} execution trace interface`}
                  fill
                  sizes="(max-width: 768px) 38vw, 210px"
                  className="object-contain object-bottom drop-shadow-[0_20px_32px_rgba(12,24,20,0.38)]"
                />
              </div>
            </ParallaxFloat>
          </div>
        ) : (
          <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <Image
              src={coverImage}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 768px) 92vw, 660px"
              className={
                coverFit === "cover-top"
                  ? "object-cover object-top"
                  : "object-cover object-center"
              }
            />
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-2.5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-accent">
            {title}
          </h3>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted transition-colors duration-200 group-hover:text-accent">
            <span>View project</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
          </span>
        </div>
        <p className="font-sans text-base leading-relaxed text-ink-muted">{description}</p>
        {cardTags.length > 0 && (
          <ul
            aria-label={`${title} tags`}
            className="mt-1 flex flex-wrap items-center gap-2"
          >
            {cardTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-accent/70 px-3 py-1 font-mono text-[11px] leading-none text-ink/90 whitespace-nowrap transition-colors duration-200 group-hover:border-accent"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
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
              Open any project for the demo &amp; breakdown
            </p>
          </header>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <div key={project.slug} data-reveal-item>
              <ProjectCard {...project} />
            </div>
          ))}
        </RevealGroup>

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
