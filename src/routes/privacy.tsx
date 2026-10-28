import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { brand } from "@/content/site.tsx";

const title = "Privacy Policy - Sylwia UGC UGC Creator";
const description =
  "How Sylwia UGC collects, uses and protects information shared through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="container-site max-w-2xl py-20">
      <p className="font-script text-4xl text-primary">{brand.name}</p>
      <h1 className="mt-2 font-display text-4xl uppercase tracking-tight text-primary">
        Privacy Policy
      </h1>
      <div className="mt-8 max-w-prose space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground">
        <p>
          This site does not use tracking cookies or collect personal data automatically. If you
          email me, I use your name, email address and project details only to reply and to manage
          our collaboration.
        </p>
        <p>
          I never sell or share your information with third parties. You can ask me to delete your
          messages at any time by writing to{" "}
          <a className="text-primary underline underline-offset-4" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          .
        </p>
      </div>
      <Button asChild variant="wine" size="pill" className="mt-10">
        <Link to="/">Back to home</Link>
      </Button>
    </main>
  );
}
