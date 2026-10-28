import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";

import { About } from "@/components/site/About";
import { ClosingCta, SiteFooter } from "@/components/site/ClosingCta";
import { Faq } from "@/components/site/Faq";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { WhyWorkWithMe } from "@/components/site/WhyWorkWithMe";
// import { LeadMagnet } from "@/components/site/LeadMagnet";
import { Navbar } from "@/components/site/Navbar";
import { QuoteBanner } from "@/components/site/QuoteBanner";
import { RecentWork } from "@/components/site/RecentWork";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { VideoShowcase } from "@/components/site/VideoShowcase";

const title = "Sylwia UGC - Professional UGC & Content Creator";
const description =
  "Authentic UGC videos, ad creative packs and content strategy for beauty, fashion and lifestyle brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhyWorkWithMe />
        {/* <QuoteBanner /> */}
        <Services />
        {/* <RecentWork /> */}
        <VideoShowcase />
        {/* <Gallery /> */}
        <Testimonials />
        {/* <LeadMagnet /> */}
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </MotionConfig>
  );
}
