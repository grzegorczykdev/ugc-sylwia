import { faqs } from "@/content/site.tsx";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-background">
      <div className="container-site py-20 md:py-28">
        <Reveal>
          <SectionHeading id="faq-title" title="FAQ" />
        </Reveal>

        <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 3) * 0.06}>
              <dt>
                <span className="font-display text-sm text-primary/70 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block border-b border-primary/25 pb-3 text-balance text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-primary">
                  {faq.question}
                </span>
              </dt>
              <dd className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
