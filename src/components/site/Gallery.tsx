import { galleryImages, images } from "@/content/site.tsx";
import { Polaroid, Tape } from "./decor";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-background">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <SectionHeading id="gallery-title" title="Photo" script="Gallery" />
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-3xl">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {galleryImages.map((image, i) => (
              <li key={`${image.src}-${i}`} className={i === 4 ? "hidden sm:block" : undefined}>
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* Centre polaroid overlay */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden w-56 -translate-x-1/2 -translate-y-1/2 -rotate-3 sm:block md:w-64">
            <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
            <Polaroid image={images.Sylwia} imageClassName="aspect-[4/5]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
