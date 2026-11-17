"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function ErrorPage({ error, retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 items-center py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <span className="inline-block -rotate-4 rounded-full border border-pink px-4 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-pink">
          Error
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-ink sm:text-6xl">
          Something went wrong.
        </h1>
        <p className="mt-4 max-w-lg font-sans text-lg text-ink-muted">
          An unexpected error occurred while rendering this section. You can retry or return home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => retry()}
            className="pill-shine inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-accent bg-accent px-7 font-display text-base font-medium text-accent-ink transition-colors hover:bg-accent-hover"
          >
            Try again
          </button>
          <Button href="/" variant="outline">
            Back home
          </Button>
        </div>
      </div>
    </section>
  );
}
