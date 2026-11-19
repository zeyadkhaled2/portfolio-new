import Image from "next/image";
import CairoTimeBadge from "@/components/sections/CairoTimeBadge";
import CopyEmailButton from "@/components/sections/CopyEmailButton";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data";

export default function Contact() {
  const externalSocials = site.socials.filter((s) => s.href.startsWith("http"));

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div className="card-3d rounded-[28px] border border-line bg-surface p-7 sm:rounded-[34px] sm:p-12 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Heading, copy, and direct contact actions */}
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Contact
                </span>

                <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.04] tracking-[0.02em] text-ink sm:text-5xl lg:text-6xl">
                  Let&apos;s Work <span className="text-accent">Together</span>
                </h2>

                <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
                  Have a product, web app, or mobile build in mind? Send me an email directly and
                  I&apos;ll get back to you.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted">
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-3.5 py-1.5 text-ink">
                    <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                    <span>{site.availability}</span>
                  </span>
                  <CairoTimeBadge fallback={site.location} />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href={`mailto:${site.email}`} variant="accent">
                    <span>{site.email}</span>
                    <span aria-hidden="true">↗</span>
                  </Button>
                  <CopyEmailButton email={site.email} />
                  {externalSocials.map((s) => (
                    <Button
                      key={s.label}
                      href={s.href}
                      variant="outline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{s.label}</span>
                      <span aria-hidden="true">↗</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Right Column: Clean portrait card matching the portfolio aesthetic */}
              {site.portraitUrl && (
                <div className="lg:col-span-4">
                  <div className="relative mx-auto aspect-[4/3] max-w-sm overflow-hidden rounded-[26px] border border-line bg-canvas lg:ml-auto lg:max-w-none">
                    <Image
                      src={site.portraitUrl}
                      alt={`${site.name} portrait`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 400px"
                      className="object-cover object-[50%_32%] scale-[1.08]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
