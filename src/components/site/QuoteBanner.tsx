import { images } from "@/content/site.tsx";

export function QuoteBanner() {
  return (
    <section aria-labelledby="collabs-title" className="relative overflow-hidden bg-ink">
      <div className="aspect-[16/9] w-full sm:aspect-[5/2]">
        <img
          src={images.hairBanner.src}
          alt={images.hairBanner.alt}
          width={images.hairBanner.width}
          height={images.hairBanner.height}
          loading="lazy"
          className="size-full object-cover object-[70%_center] opacity-90"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/30 to-ink/70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container-site flex justify-end">
          <div className="max-w-xs text-center text-primary-foreground sm:max-w-sm">
            <h2 id="collabs-title" className="text-balance">
              <span className="block font-display text-3xl uppercase leading-none tracking-tight tabular-nums sm:text-5xl">
                200+ Brand
              </span>
              <span className="-mt-1 block font-script text-4xl leading-tight sm:text-6xl">
                Collaborations
              </span>
            </h2>
            <p className="mt-3 hidden text-pretty text-sm leading-relaxed text-on-wine-muted sm:block">
              Trusted by independent labels and household names across beauty, fashion and home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
