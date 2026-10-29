import { Button } from "@/components/ui/button";
import { images, tickerItems } from "@/content/site.tsx";
import { Polaroid, Tape } from "./decor";
import { Reveal } from "./motion";

export function Hero() {
  return (
    <>
      <section id="top" aria-labelledby="hero-title" className="bg-background">
        <div className="container-site grid items-center gap-12 py-12 md:grid-cols-2 md:py-20 lg:gap-20">
          <Reveal className="text-center">
            <h1 id="hero-title" className="text-balance text-primary">
              <span className="block font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                Your go-to
              </span>
              <span className="-my-1 block font-script text-6xl leading-tight sm:text-7xl lg:text-8xl">
                Professional
              </span>
              <span className="block font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                Creative Partner
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Creating scroll-stopping, authentic short-form videos across tech, lifestyle, beauty,
              and travel. Content that feels real, matches your brand voice, and genuinely converts.
            </p>
            <div className="w-full flex gap-2 justify-center flex-wrap">
              <Button asChild variant="wine" size="pill" className="mt-8">
                <a href="#contact">Let's work together</a>
              </Button>
              <Button asChild variant="wineOutline" size="pill" className="mt-8">
                <a href="#video-title">EXPLORE WORK</a>
              </Button>
            </div>{" "}
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lift md:rotate-[1.5deg]">
              <img
                src={images.heroFlatlay.src}
                alt={images.heroFlatlay.alt}
                width={images.heroFlatlay.width}
                height={images.heroFlatlay.height}
                fetchPriority="high"
                className="size-full object-cover object-[50%_70%] scale-110 -translate-x-[3px]"
              />
            </div>
            {/* <div className="absolute -bottom-8 -left-4 w-32 -rotate-6 sm:-left-10 sm:w-40">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-3" />
              <Polaroid image={images.Sylwia} priority />
            </div> */}
          </Reveal>
        </div>
      </section>

      <div className="overflow-hidden border-y border-paper-border bg-blush py-3">
        <p className="sr-only">{tickerItems.join(", ")}</p>
        <div aria-hidden="true" className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <li
                  key={`${copy}-${i}`}
                  className="eyebrow flex items-center text-accent-foreground"
                >
                  <span className="px-6">{item}</span>
                  <span className="text-primary">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
