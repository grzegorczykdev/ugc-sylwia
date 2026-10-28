import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/content/site.tsx";
import { BinderClip, Swash } from "./decor";
import { Reveal } from "./motion";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-primary text-primary-foreground"
    >
      <div className="container-site py-20 md:py-28">
        <Reveal className="flex flex-col items-center">
          <h2
            id="services-title"
            className="text-center font-display text-3xl uppercase tracking-tight sm:text-4xl md:text-5xl"
          >
            My Services
          </h2>
          <Swash className="mt-2 text-primary-foreground" />
        </Reveal>

        <ol className="mx-auto mt-14 flex max-w-3xl flex-col gap-10">
          {services.map((service, index) => (
            <li key={service.number}>
              <Reveal delay={index * 0.05}>
                <article
                  aria-labelledby={`service-${service.number}`}
                  className="paper-card relative grid overflow-visible rounded-2xl text-card-foreground sm:grid-cols-[2fr_3fr]"
                >
                  <BinderClip className="absolute -left-3 top-6 z-10 w-9 -rotate-90 sm:-left-5 sm:w-11" />

                  <div className="p-3 sm:p-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                      <img
                        src={service.image.src}
                        alt={service.image.alt}
                        width={service.image.width}
                        height={service.image.height}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col p-5 pt-2 sm:p-6 sm:pl-2">
                    <p className="font-display text-sm text-primary/70 tabular-nums">
                      {service.number}
                    </p>
                    <h3
                      id={`service-${service.number}`}
                      className="mt-1 text-balance font-display text-2xl uppercase leading-tight tracking-tight text-primary sm:text-3xl"
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-paper-border pt-4">
                      <p className="eyebrow text-primary">What's included</p>
                      <ul className="mt-3 space-y-2 text-sm text-foreground">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-paper-border pt-5 sm:mt-6">
                      {/* <p className="font-display text-lg uppercase tracking-wide text-primary tabular-nums">
                        {service.price}
                      </p> */}
                      <Button asChild variant="wine" size="pillSm">
                        <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                          Let's create!
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
