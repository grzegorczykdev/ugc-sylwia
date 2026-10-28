import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

import { videoClips, type VideoClip, type VideoCategory, type VideoLanguage } from "@/content/site";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const CATEGORIES: VideoCategory[] = ["All", "Tech", "Beauty", "Lifestyle", "Canvas UGC"];

const LANGUAGES: { id: VideoLanguage; label: string; flag: string }[] = [
  { id: "All", label: "All Languages", flag: "🌐" },
  { id: "PL", label: "Polski", flag: "🇵🇱" },
  { id: "EN", label: "English", flag: "🇬🇧" },
];

interface VideoCardProps {
  clip: VideoClip;
  isActive: boolean;
  onToggle: () => void;
  onEnded: () => void;
}

function VideoCard({ clip, isActive, onToggle, onEnded }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Przeliczenie procentów (0-100) na zakres odtwarzacza (0.0 - 1.0)
    // Jeśli pole nie jest podane, domyślnie 100% (czyli 1.0)
    const targetVolume = (clip.soundPercentage ?? 100) / 100;
    video.volume = Math.min(Math.max(targetVolume, 0), 1); // Zabezpieczenie przed wartościami spoza 0.0 - 1.0

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }

    return () => {
      video.pause();
    };
  }, [isActive, clip.soundPercentage]);

  return (
    <figure className="mx-auto w-full max-w-[17rem] sm:max-w-none">
      <div
        onClick={onToggle}
        onContextMenu={(e) => e.preventDefault()}
        className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl bg-muted shadow-paper select-none transition-transform duration-300 hover:-translate-y-1"
      >
        <video
          ref={videoRef}
          src={clip.videoSrc}
          poster={clip.poster}
          playsInline
          controls={false}
          controlsList="nodownload noplaybackrate nofullscreen"
          disablePictureInPicture
          preload="metadata"
          onEnded={onEnded}
          className="size-full object-cover pointer-events-none"
        />

        {/* Flaga języka */}
        <div className="pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-1 text-[0.625rem] font-bold tracking-wider text-primary shadow-sm backdrop-blur-md">
          <span>{clip.language === "PL" ? "🇵🇱" : "🇬🇧"}</span>
          <span>{clip.language}</span>
        </div>

        {/* Przycisk Play */}
        {!isActive && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper/85 text-primary backdrop-blur-sm transition-transform duration-200 group-hover:scale-110 shadow-md"
          >
            <Play className="ml-0.5 size-5 fill-current" />
          </span>
        )}
      </div>

      <figcaption className="mt-4 text-center">
        <span className="eyebrow block text-primary font-semibold tracking-wider">
          {clip.title}
        </span>
        <span className="mt-1 block text-xs text-muted-foreground tabular-nums">{clip.meta}</span>
      </figcaption>
    </figure>
  );
}

export function VideoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>("All");
  const [selectedLanguage, setSelectedLanguage] = useState<VideoLanguage>("All");
  const [activeClipId, setActiveClipId] = useState<string | null>(null);

  const handleCategoryChange = (cat: VideoCategory) => {
    setSelectedCategory(cat);
    setActiveClipId(null);
  };

  const handleLanguageChange = (lang: VideoLanguage) => {
    setSelectedLanguage(lang);
    setActiveClipId(null);
  };

  const handleToggle = (id: string) => {
    setActiveClipId((prev) => (prev === id ? null : id));
  };

  const filteredClips = videoClips.filter((clip) => {
    const matchCategory = selectedCategory === "All" || clip.category === selectedCategory;
    const matchLanguage = selectedLanguage === "All" || clip.language === selectedLanguage;
    return matchCategory && matchLanguage;
  });

  return (
    <section id="portfolio" aria-labelledby="video-title" className="bg-paper">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <SectionHeading id="video-title" title="Portfolio" script="Featured Videos" />
        </Reveal>

        {/* Panel filtrów */}
        <div className="mt-10 flex flex-col items-center gap-5">
          {/* <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isCurrent = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "min-h-10 rounded-full px-5 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer",
                    isCurrent
                      ? "bg-primary text-primary-foreground shadow-paper scale-105"
                      : "border border-primary/20 bg-transparent text-primary/70 hover:border-primary hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div> */}

          <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-paper/60 p-1 shadow-sm backdrop-blur-sm">
            {LANGUAGES.map((lang) => {
              const isCurrent = selectedLanguage === lang.id;
              return (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => handleLanguageChange(lang.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer",
                    isCurrent
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {/* <span className="text-sm">{lang.flag}</span> */}
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Siatka z wideo - klucz to unikalny clip.id */}
        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {filteredClips.map((clip, i) => (
            <li key={clip.id}>
              <Reveal delay={i * 0.06}>
                <VideoCard
                  clip={clip}
                  isActive={activeClipId === clip.id}
                  onToggle={() => handleToggle(clip.id)}
                  onEnded={() => setActiveClipId(null)}
                />
              </Reveal>
            </li>
          ))}
        </ul>

        {filteredClips.length === 0 && (
          <p className="mt-14 text-center text-sm text-muted-foreground">
            Brak filmów spełniających wybrane kryteria.
          </p>
        )}
      </div>
    </section>
  );
}
