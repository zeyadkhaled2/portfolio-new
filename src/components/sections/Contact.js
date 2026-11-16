import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            {/* Retro CRT Monitor integrating tami.agency's "LET'S WORK TOGETHER" + portrait slot */}
            <div className="relative rounded-[30px] border border-white/10 bg-[#1a1a1d] p-3.5 shadow-[0_32px_90px_rgba(0,0,0,0.45)] sm:p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-accent/15 blur-2xl"
              />

              {/* Inner phosphor CRT screen */}
              <div className="crt-vignette relative overflow-hidden rounded-[22px] border border-[#3a47b8]/50 bg-[radial-gradient(ellipse_at_center,#2537c2_0%,#172285_64%,#0d134d_100%)] px-6 py-8 text-center sm:px-10 sm:py-11 md:px-12">
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-65" />

                <div className="relative z-10 flex flex-col gap-7 sm:gap-8">
                  {/* Top Row: Headline on left + Rounded CRT Portrait Placeholder on right */}
                  <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:items-start sm:text-left">
                    <div className="max-w-lg">
                      <h2 className="font-pixel text-3xl font-bold uppercase leading-[1.08] tracking-tight text-[#ece69a] drop-shadow-[0_3px_0_rgba(9,13,52,0.95)] sm:text-4xl md:text-[2.85rem]">
                        Let&apos;s Work
                        <br />
                        Together
                      </h2>
                      <p className="mt-3 font-display text-xs font-bold uppercase tracking-[0.08em] text-[#f6f2e7] sm:text-sm">
                        {site.locationBadge}
                      </p>
                    </div>

                    {/* Portrait Inset Slot (user drops photo via site.portraitUrl) */}
                    <div className="relative aspect-[4/3] w-48 shrink-0 overflow-hidden rounded-[18px] border-2 border-[#7e81f4]/75 bg-[#0c1145]/90 shadow-[0_0_24px_rgba(126,129,244,0.3)] sm:w-52 md:w-56">
                      {site.portraitUrl ? (
                        <>
                          <Image
                            src={site.portraitUrl}
                            alt={`${site.name} portrait`}
                            fill
                            sizes="(max-width: 768px) 192px, 224px"
                            className="object-cover"
                          />
                          <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-40" />
                        </>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[#ece69a]/35 p-3 text-center">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-9 w-9 text-[#ece69a]/85"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="8.5" r="3.5" />
                            <path d="M5 20a7 7 0 0 1 14 0" />
                          </svg>
                          <span className="font-pixel text-[10px] uppercase leading-tight text-[#ece69a]">
                            Your Photo Here
                          </span>
                          <span className="font-mono text-[10px] text-[#f6f2e7]/65">
                            portrait placeholder
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Clickable Infomercial Banner */}
                  <div className="border-y border-[#7e81f4]/25 py-5">
                    <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-[#f6f2e7]/90">
                      Click to contact
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 inline-block font-pixel text-2xl font-bold uppercase tracking-tight text-[#ece69a] drop-shadow-[0_3px_0_rgba(9,13,52,0.95)] transition-transform duration-200 hover:scale-[1.02] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ece69a] sm:text-4xl md:text-[2.6rem]"
                    >
                      1-800-BUILD-NOW
                    </a>
                  </div>

                  {/* Bottom Broadcast Strip */}
                  <div className="space-y-2">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.06em] text-[#f6f2e7]/90 sm:text-sm">
                      Available for freelance &amp; full-time roles · Fast response guaranteed
                    </p>
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.06em] text-[#f6f2e7]/75">
                      Or email direct
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-block break-all font-pixel text-xs uppercase tracking-wider text-[#ece69a] underline decoration-[#ece69a]/45 underline-offset-4 transition-colors hover:text-white hover:decoration-white sm:text-sm"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Molded CRT monitor bezel chin */}
              <div className="mt-3.5 flex items-center justify-between px-3 sm:mt-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_8px_var(--mint)]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                    CH-03 · {site.shortName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-10 rounded-full bg-black/50" />
                  <span className="h-2 w-10 rounded-full bg-black/50" />
                  <span className="h-2.5 w-6 rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            {/* Social Links matching tami.agency's contact footer */}
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2 font-sans text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    <span>{s.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
