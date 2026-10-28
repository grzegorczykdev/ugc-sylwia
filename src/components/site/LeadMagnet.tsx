import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand, images } from "@/content/site.tsx";
import { Reveal } from "./motion";

export function LeadMagnet() {
  return (
    <section aria-labelledby="guide-title" className="overflow-hidden bg-paper">
      <div className="container-site grid items-center gap-14 py-20 md:grid-cols-2 md:py-24">
        <Reveal>
          <h2 id="guide-title" className="text-balance text-primary">
            <span className="block font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Download
              <br />
              my free
            </span>
            <span className="-mt-1 block font-script text-6xl leading-tight sm:text-7xl">
              Guide
            </span>
          </h2>
          <p className="mt-6 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            <em className="not-italic font-semibold text-foreground">The UGC Brief Playbook</em> -
            the exact brief template, hook bank and checklist I use to deliver content that performs
            from the very first post.
          </p>
          <Button asChild variant="wine" size="pill" className="mt-8">
            <a href={`mailto:${brand.email}?subject=${encodeURIComponent("Free UGC guide")}`}>
              <Download aria-hidden="true" />
              Get the free guide
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
          <div className="rotate-6 rounded-[2rem] border-[10px] border-ink bg-ink shadow-lift">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem]">
              <img
                src={images.coffee.src}
                alt="Cover of The UGC Brief Playbook guide shown on a tablet"
                width={images.coffee.width}
                height={images.coffee.height}
                loading="lazy"
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-primary-foreground">
                <p className="eyebrow">Free guide · 2026</p>
                <p className="mt-1 font-display text-2xl uppercase leading-none">The UGC Brief</p>
                <p className="font-script text-4xl leading-tight">Playbook</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
