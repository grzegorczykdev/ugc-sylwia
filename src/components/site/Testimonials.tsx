import { Star } from "lucide-react";

import { testimonials } from "@/content/site.tsx";
import { cn } from "@/lib/utils";
import { Tape } from "./decor";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const tilts = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]"];

export function Testimonials() {
  return (
    <section aria-labelledby="feedback-title" className="bg-primary text-primary-foreground">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <SectionHeading id="feedback-title" title="Client" script="Feedback" tone="wine" />
        </Reveal>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 0.08}>
                <figure
                  className={cn(
                    "paper-card relative mx-auto flex h-full max-w-sm flex-col rounded-sm px-6 pb-8 pt-14 text-center text-card-foreground",
                    tilts[i % tilts.length],
                  )}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <Tape className="-top-2 left-1/2 w-14 -translate-x-1/2 rotate-6" />
                    <img
                      src={t.avatar.src}
                      alt=""
                      width={t.avatar.width}
                      height={t.avatar.height}
                      loading="lazy"
                      className="size-16 rounded-full border-4 border-paper object-cover shadow-paper"
                    />
                  </div>
                  <h3 className="text-balance font-display text-xl uppercase leading-tight tracking-tight text-primary">
                    {t.headline}
                  </h3>
                  <div
                    className="mt-3 flex justify-center gap-0.5 text-primary"
                    role="img"
                    aria-label="Rated 5 out of 5"
                  >
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} className="size-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-auto pt-6">
                    {/* <span className="block font-script text-2xl text-primary">{t.name}</span> */}
                    {/* <span className="eyebrow mt-1 block text-muted-foreground">{t.role}</span> */}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
