import { images } from "@/content/site"; // usunięto końcówkę .tsx
import { Tape } from "./decor";
import { Reveal } from "./motion";
import photoAbout from "@/assets/photo-about.png";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-primary text-primary-foreground"
    >
      <div className="container-site grid items-center gap-16 py-20 md:grid-cols-2 md:py-28">
        <Reveal className="relative mx-auto h-[22rem] w-full max-w-sm sm:h-[26rem]">
          <div className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-md">
            {/* Ozdobna taśma na górze zdjęcia */}
            <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 -rotate-3">
              <Tape className="w-24 opacity-85 shadow-sm" />
            </div>

            {/* Karta zdjęcia w stylu vintage / papier */}
            <div className="rotate-[-2deg] rounded-2xl bg-paper p-3 pb-6 shadow-2xl transition-transform duration-300 hover:rotate-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src={photoAbout}
                  alt="Sylwia - UGC Creator"
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 id="about-title" className="text-balance">
            <span className="block font-script text-5xl leading-tight sm:text-6xl">
              Hi, I'm Sylwia!
            </span>
            <span className="block font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              I TURN VIEWS INTO ENGAGED CUSTOMERS
            </span>
          </h3>
          <div className="mt-8 max-w-prose space-y-4 text-pretty text-sm leading-relaxed text-on-wine-muted sm:text-base">
            <p>
              I’m a <b>Poland-based</b> creator and video editor helping brands tell stories that
              feel genuine, engaging, and effortless to watch. I deliver in both{" "}
              <b>English and Polish.</b>
            </p>

            <p>
              I don’t believe in one-size-fits-all content. Tech brands value me for my{" "}
              <b>5-year IT background</b> and <b>quick grasp of complex tools</b> without
              hand-holding. Lifestyle and consumer brands love me for my{" "}
              <b>natural on-camera presence, creativity, and aesthetic eye</b>. Across every niche,
              I adapt seamlessly to your target audience and brand guidelines.
            </p>
            <p>
              Whatever your product is, I’m here to create <b>high-performing video</b> your
              audience trusts, your ad team can scale, and your brand is proud to share.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
