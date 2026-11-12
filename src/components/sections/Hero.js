import Button from "@/components/ui/Button";
import { HeroTimeline } from "@/components/ui/Reveal";
import { site } from "@/data/portfolio";

function MaskedWords({ text, className = "" }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-[0.26em]">
      <span data-hero="word" className={`inline-block ${className}`}>
        {word}
      </span>
    </span>
  ));
}

export default function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 md:pt-28 md:pb-32">
      <HeroTimeline className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <p
          data-hero="eyebrow"
          className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent"
        >
          {site.role} · {site.location}
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">
          <MaskedWords text={`Hi, I'm ${site.name}.`} />
          <span className="text-ink-muted">
            <MaskedWords text="I build thoughtful software that feels" />
            <span className="inline-block overflow-hidden align-bottom pb-1 mr-[0.26em]">
              <em data-hero="word" className="inline-block text-accent">
                calm
              </em>
            </span>
            <MaskedWords text="to use." />
          </span>
        </h1>
        <p data-hero="desc" className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
          {site.description}
        </p>
        <div data-hero="cta" className="mt-10 flex flex-wrap gap-3">
          <Button href="#work">View my work</Button>
          <Button href={site.cvUrl} variant="outline">
            Download CV
          </Button>
        </div>
      </HeroTimeline>
    </section>
  );
}
