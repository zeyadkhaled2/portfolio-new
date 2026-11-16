import Reveal from "@/components/ui/Reveal";
import { skills } from "@/data";

const accentDot = {
  accent: "bg-accent",
  pink: "bg-pink",
  mint: "bg-mint",
  yellow: "bg-yellow",
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <header className="mb-10 sm:mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.02em] text-ink sm:text-4xl lg:text-5xl">
              Tools &amp; Stack
            </h2>
          </header>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ group, accent, items }, i) => (
            <Reveal
              key={group}
              delay={i * 0.07}
              className="rounded-[20px] border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent/60"
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rounded-full ${accentDot[accent] ?? "bg-accent"}`} />
                <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink">
                  {group}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
