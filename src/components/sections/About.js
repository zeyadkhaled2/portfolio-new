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
            <p className="mt-2 font-mono text-xs text-mint">{site.availability}</p>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6 font-sans text-lg leading-relaxed text-ink-muted lg:col-span-7">
            <p className="text-xl leading-relaxed text-ink">
              I studied Computer Science at Ain Shams University in Cairo and spend most of my time
              building full-stack web apps, mobile apps with React Native, and backend services
              powered by AI.
            </p>
            <p>
              Lately that has meant everything from shipping a Next.js tour booking site for a
              travel agency and building an Egyptian Arabic WhatsApp sales bot, to working remotely
              with a team in Saudi Arabia on real-time crowd vision models. I care about clean
              architecture, solid tests, and shipping software people can rely on.
            </p>

            {/* Education card */}
            <div className="rounded-[26px] border border-line bg-surface p-5 sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Education
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-ink">
                {site.education.degree}
              </p>
              <p className="mt-0.5 font-sans text-sm text-ink-muted">{site.education.school}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <span className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink">
                Full-Stack Web
              </span>
              <span className="rounded-full border border-pink/60 px-4 py-1.5 font-mono text-xs text-pink">
                React Native / Expo
              </span>
              <span className="rounded-full border border-mint/60 px-4 py-1.5 font-mono text-xs text-mint">
                AI &amp; Computer Vision
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
