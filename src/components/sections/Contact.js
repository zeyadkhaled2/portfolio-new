import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <Reveal className="rounded-2xl bg-panel px-8 py-16 text-center md:px-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight text-panel-ink md:text-5xl">
            Let&apos;s build something good together.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-panel-muted">
            Open to new opportunities and interesting projects. My inbox is always open.
          </p>
          <div className="mt-8">
            <Button href={`mailto:${site.email}`}>Say hello →</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
