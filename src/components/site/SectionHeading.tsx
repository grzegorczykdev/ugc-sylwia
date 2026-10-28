import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  script?: string;
  tone?: "light" | "wine";
  className?: string;
}

/** Uppercase serif headline with an overlapping script accent word. */
export function SectionHeading({ id, title, script, tone = "light", className }: SectionHeadingProps) {
  const color = tone === "wine" ? "text-primary-foreground" : "text-primary";
  return (
    <h2 id={id} className={cn("text-center text-balance", color, className)}>
      <span className="block font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </span>
      {script ? (
        <span className="-mt-2 block font-script text-4xl leading-tight normal-case sm:-mt-3 sm:text-5xl md:text-6xl">
          {script}
        </span>
      ) : null}
    </h2>
  );
}
