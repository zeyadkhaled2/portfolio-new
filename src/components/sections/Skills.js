import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <header className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Skills</p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">Tools I work with</h2>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <h3 className="mb-3 text-sm font-medium text-ink">{group}</h3>
              <ul className="space-y-2 text-ink-muted">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
