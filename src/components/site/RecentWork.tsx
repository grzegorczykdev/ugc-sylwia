import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { caseStudies, type CaseStudy } from "@/content/site.tsx";
import { cn } from "@/lib/utils";
import { BinderClip } from "./decor";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

interface CaseBlockProps {
  study: CaseStudy;
  index: number;
}

function CaseBlock({ study, index }: CaseBlockProps) {
  const [active, setActive] = useState(0);
  const total = study.clips.length;
  const clip = study.clips[active] ?? study.clips[0]!;
  const go = (next: number) => setActive((next + total) % total);
  const titleId = `case-${index}`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn("py-16 md:py-20", index % 2 === 1 ? "bg-paper" : "bg-background")}
    >
      <Reveal className="container-site grid grid-cols-1 items-center gap-6 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Button
          variant="outlineWine"
          size="touch"
          onClick={() => go(active - 1)}
          aria-label={`Previous ${study.brand} clip`}
          className="hidden sm:inline-flex"
        >
          <ChevronLeft />
        </Button>

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center md:flex-row md:items-center">
          {/* Phone mockup */}
          <div className="relative z-10 w-44 shrink-0 sm:w-52 md:w-56">
            <div className="aspect-[9/16] overflow-hidden rounded-[1.75rem] border-[6px] border-ink bg-ink shadow-lift">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={clip.src}
                  src={clip.src}
                  alt={clip.alt}
                  width={clip.width}
                  height={clip.height}
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="size-full object-cover"
                />
              </AnimatePresence>
            </div>
            <p className="sr-only" aria-live="polite">
              Clip {active + 1} of {total}
            </p>
          </div>

          {/* Stacked paper card */}
          <div className="relative mt-10 w-full max-w-md md:-ml-10 md:mt-0">
            <div
              aria-hidden="true"
              className="paper-card absolute inset-0 translate-x-2 translate-y-3 rotate-2 rounded-sm"
            />
            <div aria-hidden="true" className="paper-card absolute inset-0 -rotate-1 rounded-sm" />
            <div className="paper-card relative rounded-sm px-6 pb-7 pt-12 md:pl-16">
              <BinderClip className="absolute -top-6 left-8 w-9 md:left-16" />
              <p className="eyebrow text-muted-foreground">{study.category}</p>
              <h3
                id={titleId}
                className="mt-2 font-display text-2xl uppercase tracking-tight text-primary sm:text-3xl"
              >
                {study.brand}
              </h3>
              <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground">
                {study.summary}
              </p>
              <dl className="mt-6 grid grid-cols-3 divide-x divide-paper-border border-y border-paper-border text-center">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col-reverse px-2 py-3">
                    <dt className="text-[0.5625rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:eyebrow">
                      {metric.label}
                    </dt>
                    <dd className="font-display text-xl text-primary tabular-nums sm:text-2xl">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center sm:flex-col"
          role="group"
          aria-label={`${study.brand} clips`}
        >
          <Button
            variant="ghost"
            size="touch"
            onClick={() => go(active - 1)}
            aria-label={`Previous ${study.brand} clip`}
            className="text-primary sm:hidden"
          >
            <ChevronLeft />
          </Button>
          {study.clips.map((c, i) => (
            <button
              key={`${c.src}-${i}`}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${study.brand} clip ${i + 1}`}
              aria-pressed={i === active}
              className="group grid min-h-11 min-w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span
                className={cn(
                  "block size-2.5 rounded-full border border-primary transition-colors motion-reduce:transition-none",
                  i === active ? "bg-primary" : "bg-transparent group-hover:bg-primary/40",
                )}
              />
            </button>
          ))}
          <Button
            variant="ghost"
            size="touch"
            onClick={() => go(active + 1)}
            aria-label={`Next ${study.brand} clip`}
            className="text-primary sm:hidden"
          >
            <ChevronRight />
          </Button>
        </div>
      </Reveal>
    </article>
  );
}

export function RecentWork() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="bg-background pt-20 md:pt-28">
        <Reveal className="container-site">
          <SectionHeading id="work-title" title="My Recent" script="Work" />
        </Reveal>
      </div>
      {caseStudies.map((study, index) => (
        <CaseBlock key={study.brand} study={study} index={index} />
      ))}
    </section>
  );
}
