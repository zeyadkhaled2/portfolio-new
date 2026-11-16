import Reveal from "@/components/ui/Reveal";
import { site } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="inline-block -rotate-3 rounded-full border border-accent px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              About
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-ink sm:text-5xl">
              Hi, I&apos;m <span className="text-accent">{site.shortName}</span>
            </h2>
            <p className="mt-4 font-mono text-sm text-ink-muted">{site.locationBadge}</p>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6 font-sans text-lg leading-relaxed text-ink-muted lg:col-span-7">
            <p className="text-xl leading-relaxed text-ink">
              Placeholder bio — write two or three short paragraphs about who you are, what kind of
              systems you enjoy architecting, and what you&apos;re focused on right now.
            </p>
            <p>
              Keep it personal and specific. Mention what you care about in your craft — clean
              interfaces, predictable engineering, and shipping products people genuinely enjoy using.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink">
                Full-Stack Web
              </span>
              <span className="rounded-full border border-pink/60 px-4 py-1.5 font-mono text-xs text-pink">
                Design Systems
              </span>
              <span className="rounded-full border border-mint/60 px-4 py-1.5 font-mono text-xs text-mint">
                Product Craft
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
