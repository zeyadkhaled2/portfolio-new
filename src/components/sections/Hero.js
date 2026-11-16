import Button from "@/components/ui/Button";
import { HeroTimeline } from "@/components/ui/Reveal";
import { site } from "@/data";

export default function Hero() {
  const { prefix, highlight, suffix } = site.heroHeadline;

  return (
    <section id="top" className="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      <HeroTimeline className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="mb-8 sm:mb-10">
          <span
            data-hero="badge"
            className="inline-block -rotate-9 rounded-full border border-accent px-4 py-2 font-mono text-sm text-ink sm:text-base"
          >
            Hi, I&apos;m {site.name.split(" ")[0]}
          </span>
        </div>

        <h1
          data-hero="headline"
          className="max-w-[1220px] font-display text-[2.45rem] font-bold uppercase leading-[1.08] tracking-[0.025em] text-ink sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.25rem]"
        >
          {prefix} <span className="text-accent">{highlight}</span> {suffix}
        </h1>

        <p
          data-hero="desc"
          className="mt-7 max-w-3xl font-display text-lg leading-[1.45] tracking-[0.015em] text-ink/90 sm:mt-9 sm:text-2xl sm:leading-[1.35]"
        >
          {site.description}
        </p>

        <div data-hero="cta" className="mt-9 flex flex-wrap items-center gap-4 sm:mt-11">
          <Button href="#contact">Let&apos;s talk</Button>
          <Button href="#work" variant="outline">
            See work
          </Button>
        </div>

        <div className="mt-16 h-px w-full bg-line sm:mt-24" aria-hidden="true" />
      </HeroTimeline>
    </section>
  );
}
