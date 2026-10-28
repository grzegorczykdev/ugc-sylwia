import { Star } from "lucide-react";

import { whyworkwithme } from "@/content/site.tsx";
import { cn } from "@/lib/utils";
import { Tape } from "./decor";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const tilts = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]"];

export function WhyWorkWithMe() {
  return (
    <section aria-labelledby="feedback-title" className="bg-secondary text-primary-foreground">
      <div className="container-site py-10 md:py-18">
        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
          {whyworkwithme.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 0.08}>
                <figure
                  className={cn(
                    "paper-card relative mx-auto flex h-full max-w-sm flex-col rounded-sm px-6 pb-8 pt-14 text-center text-card-foreground",
                    tilts[i % tilts.length],
                  )}
                >
                  <h3 className="text-balance font-display text-xl uppercase leading-tight tracking-tight text-primary">
                    {t.headline}
                  </h3>
                  <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                    <p>{t.quote}</p>
                  </blockquote>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
