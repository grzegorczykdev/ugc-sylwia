import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { SiteImage } from "@/content/site.tsx";

interface DecorProps {
  className?: string;
}

/** Black binder clip, purely decorative. */
export function BinderClip({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 52"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none text-ink", className)}
    >
      {/* Silver wire handles */}
      <g
        fill="none"
        stroke="var(--wire)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M10 26 L7.5 5 Q20 -1 32.5 5 L30 26" />
        <path d="M13.5 26 L12 11 Q20 7 28 11 L26.5 26" />
      </g>
      {/* Black clip body, narrow spine at the top */}
      <path d="M8 22 h24 l6 28 h-36 z" fill="currentColor" />
      <path d="M8 22 h24 l0.8 3.5 h-25.6 z" fill="var(--wire)" opacity="0.35" />
      <circle cx="10" cy="25" r="1.4" fill="var(--wire)" />
      <circle cx="30" cy="25" r="1.4" fill="var(--wire)" />
    </svg>
  );
}

/** Translucent washi tape strip. Position it with className. */
export function Tape({ className }: DecorProps) {
  return <span aria-hidden="true" className={cn("tape absolute block h-6 w-20", className)} />;
}

interface PolaroidProps {
  image: SiteImage;
  className?: string;
  imageClassName?: string;
  caption?: ReactNode;
  priority?: boolean;
}

/** Instant-photo frame with a thick bottom border. */
export function Polaroid({ image, className, imageClassName, caption, priority }: PolaroidProps) {
  return (
    <figure className={cn("paper-card relative p-2 pb-9 sm:p-3 sm:pb-11", className)}>
      <div className={cn("aspect-square overflow-hidden bg-muted", imageClassName)}>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-2 text-center font-script text-xl text-primary sm:bottom-3">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

interface FilmStripProps {
  frames: SiteImage[];
  className?: string;
}

/** Vertical 35mm film strip. Frames are decorative duplicates of nearby photos. */
export function FilmStrip({ frames, className }: FilmStripProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "film-strip flex w-20 flex-col gap-2 px-3.5 py-3 shadow-lift sm:w-24",
        className,
      )}
    >
      {frames.map((frame, i) => (
        <div key={`${frame.src}-${i}`} className="aspect-[4/5] overflow-hidden">
          <img
            src={frame.src}
            alt=""
            width={frame.width}
            height={frame.height}
            loading="lazy"
            className="size-full object-cover grayscale"
          />
        </div>
      ))}
    </div>
  );
}

/** Hand-drawn script underline swash. */
export function Swash({ className }: DecorProps) {
  return (
    <svg
      viewBox="0 0 200 16"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none h-3 w-40 text-current", className)}
    >
      <path
        d="M2 11 C 50 2, 120 2, 198 8 M 30 13 C 80 8, 140 8, 180 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
