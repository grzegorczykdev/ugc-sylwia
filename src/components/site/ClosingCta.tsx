import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand, images } from "@/content/site.tsx";
import { FilmStrip, Polaroid, Tape } from "./decor";
import { Reveal } from "./motion";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Nie udało się skopiować:", err);
    }
  };

  return (
    <div className="mt-5 inline-flex items-center justify-center gap-2 text-l text-primary-foreground">
      <span>Email:</span>
      <a href={`mailto:${email}`} className="font-medium underline-offset-4 hover:underline">
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Skopiuj adres email"
        title={copied ? "Skopiowano!" : "Skopiuj email"}
        className="inline-flex size-7 items-center justify-center rounded-md text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
      >
        {copied ? <Check className="size-3.5 text-green-300" /> : <Copy className="size-3.5" />}
      </button>
    </div>
  );
}

const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/@sylwia.techugc", icon: TikTokIcon },
  // { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  // { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Email", href: `mailto:${brand.email}`, icon: Mail },
] as const;

const footerLinkClass =
  "inline-flex min-h-11 items-center rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

export function ClosingCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="container-site relative py-24 md:py-32">
        <div className="pointer-events-none absolute left-2 top-10 hidden w-36 -rotate-6 md:block lg:left-8 lg:w-44">
          <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-3" />
          <Polaroid image={images.chair} />
        </div>
        <FilmStrip
          frames={[images.bag, images.closet, images.sand, images.coffee]}
          className="absolute -bottom-6 right-4 hidden rotate-6 md:flex lg:right-12"
        />

        <Reveal className="relative mx-auto max-w-xl text-center">
          <h2 id="contact-title" className="text-balance">
            <span className="block font-display text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Your next best-performing content
            </span>
            <span className="mt-1 block font-script text-5xl leading-tight sm:text-6xl">
              starts here
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-pretty text-sm leading-relaxed text-on-wine-muted">
            Tell me about your brand and goals - I'll reply within two working days with ideas and a
            tailored quote.
          </p>
          <div>
            <CopyEmailButton email="sylwia.techugc@gmail.com" />
          </div>
          <Button asChild variant="cream" size="pill" className="mt-8">
            <a href={`mailto:${brand.email}?subject=${encodeURIComponent("New UGC project")}`}>
              Book your project
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-wine-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[auto_1fr] md:items-center">
        <ul className="flex justify-center gap-2 md:justify-start" aria-label="Social media">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Button
                asChild
                variant="ghost"
                size="touch"
                className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary focus-visible:ring-primary-foreground focus-visible:ring-offset-wine-deep"
              >
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              </Button>
            </li>
          ))}
        </ul>

        <dl className="grid gap-6 text-center sm:grid-cols-3 md:text-right">
          <div>
            <dt className="eyebrow text-on-wine-muted">Email</dt>
            <dd className="mt-1 flex justify-center text-sm md:justify-end">
              <a href={`mailto:${brand.email}`} className={footerLinkClass}>
                {brand.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-on-wine-muted">Based in</dt>
            <dd className="mt-1 flex min-h-11 items-center justify-center text-sm md:justify-end">
              {brand.location}
            </dd>
          </div>
        </dl>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-4 text-xs text-on-wine-muted sm:flex-row">
          <p className="tabular-nums">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-4">
            <Link to="/privacy" className={footerLinkClass}>
              Privacy Policy
            </Link>
            <a href="#top" className={footerLinkClass}>
              Back to top
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
