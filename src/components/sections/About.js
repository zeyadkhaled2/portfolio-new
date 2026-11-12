import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 md:grid-cols-3 md:px-10">
        <Reveal>
          <header>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">A little about me</h2>
          </header>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink-muted md:col-span-2">
          <p>
            Placeholder bio — write two or three short paragraphs about who you are, what kind of
            problems you enjoy solving, and what you&apos;re focused on right now.
          </p>
          <p>
            Keep it personal and specific. Mention what you care about in your work and what you&apos;re
            looking for next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
