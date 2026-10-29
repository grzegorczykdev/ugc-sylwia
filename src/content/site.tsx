import heroFlatlay from "@/assets/2.jpeg";
import hairBanner from "@/assets/hair-banner.jpg";
import SylwiaPortrait from "@/assets/photo-sylwia-4.jpg";
import contentCreation from "@/assets/8.jpeg";
import serviceBag from "@/assets/service-bag.jpg";
import sylwiaTablet from "@/assets/10.jpeg";
import workCar from "@/assets/work-car.jpg";
import workPlush from "@/assets/work-plush.jpg";
import workSand from "@/assets/work-sand.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";
import gallerySylwia2 from "@/assets/photo-sylwia-2.JPG";
import { ReactNode } from "react";

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const img = (src: string, alt: string, width: number, height: number): SiteImage => ({
  src,
  alt,
  width,
  height,
});

export const images = {
  heroFlatlay: img(
    heroFlatlay,
    "Laptop, phone and earbuds resting on a metal chair beside a black coat",
    896,
    1088,
  ),
  hairBanner: img(
    hairBanner,
    "Black and white portrait of a woman with windswept dark hair",
    1600,
    640,
  ),
  Sylwia: img(
    SylwiaPortrait,
    "Sylwia filming content on her phone in sunglasses and a white shirt",
    896,
    1024,
  ),
  contentcreation: img(contentCreation, "Sylwia taking a picture of herself", 768, 960),
  bag: img(
    serviceBag,
    "Open black handbag with sunglasses, lipstick and earbuds on a sofa",
    768,
    960,
  ),
  chair: img(sylwiaTablet, "Sylwia holding a tablet", 768, 960),
  car: img(workCar, "Iced coffee in a car cup holder with sunlight on beige seats", 720, 1280),
  plush: img(workPlush, "Cream shearling jacket and a soft plush bunny close up", 720, 1280),
  sand: img(workSand, "Straw tote and sunglasses on a linen towel on the sand", 720, 1280),
  coffee: img(galleryCoffee, "Espresso cup and an open magazine on a dark grey sofa", 896, 1024),
  closet: img(
    gallerySylwia2,
    "Clothing rail with neutral beige, white and black garments",
    896,
    1024,
  ),
} satisfies Record<string, SiteImage>;

export const brand = {
  name: "Sylwia UGC",
  email: "sylwia.techugc@gmail.com",
  location: "Poland",
} as const;

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "My work", href: "#mywork" },
  { label: "FAQ", href: "#faq" },
];

export const tickerItems: string[] = [
  "LIFESTYLE & BEAUTY",
  "SAAS & TECH",
  "TRAVEL & EXPERIENCES",
  "VIDEO EDITING",
  "UGC Videos",
  "Product Photography",
  "PAID SOCIAL & ORGANIC",
  "PET CONTENT",
  "PRODUCT REVIEWS",
  "TikTok & Reels",
];

export interface Service {
  number: string;
  title: string;
  description: string;
  includes: string[];
  price: string;
  image: SiteImage;
}

export const services: Service[] = [
  {
    number: "01",
    title: "UGC Content Creation",
    description:
      "Scroll-stopping, authentic videos crafted to build trust and drive conversions across your organic feeds and paid campaigns.",
    includes: [
      "Concept ideation & strategic scriptwriting",

      "Relatable talking-head demos, reviews & reactions",

      "Dynamic unboxings, tutorials & lifestyle integrations",

      "SaaS walkthroughs & physical product showcases",

      "Bilingual delivery available (English & Polish)",
    ],
    price: "From $450",
    image: images.contentcreation,
  },
  {
    number: "02",
    title: "Product photography",
    description:
      "Aesthetic, high-quality imagery styled to showcase your product in real-life settings and elevate your brand's visual identity.",
    includes: [
      "High-resolution lifestyle & in-use product staging",

      "Minimalist, modern aesthetic tailored to your brand",

      "Detail-oriented shots for websites, socials & paid ads",

      "Professional color correction & image post-processing",

      "Full commercial usage rights included",
    ],
    price: "From $900",
    image: images.bag,
  },
  {
    number: "03",
    title: "Short-form video editing",
    description:
      "Professional post-production turning your raw footage into punchy, retention-focused videos that match your brand's unique style and pace.",
    includes: [
      "Dynamic pacing, clean cuts & engaging hooks",

      "Native on-screen subtitles, typography & callouts",

      "Sound design, audio enhancement & trending audio sync",

      "Formats fully optimized for TikTok, Reels & Shorts",

      "Revisions tailored to your feedback and campaign goals",
    ],
    price: "From $300",
    image: images.chair,
  },
];

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  brand: string;
  category: string;
  summary: string;
  metrics: Metric[];
  clips: SiteImage[];
}

export const caseStudies: CaseStudy[] = [
  {
    brand: "Maison Ora",
    category: "Loungewear · TikTok Ads",
    summary:
      "A cosy autumn launch told through texture-first close-ups and a voiceover hook that turned browsers into buyers in week one.",
    metrics: [
      { value: "1.2M", label: "Views" },
      { value: "8.4%", label: "Engagement" },
      { value: "3.1×", label: "ROAS" },
    ],
    clips: [images.plush, images.closet, images.coffee],
  },
  {
    brand: "Salt & Sun",
    category: "Travel Accessories · Reels",
    summary:
      "Sun-soaked beach day storytelling for a summer tote drop, cut into three hook variations for paid and organic placements.",
    metrics: [
      { value: "640K", label: "Views" },
      { value: "11.2%", label: "Engagement" },
      { value: "2.7×", label: "ROAS" },
    ],
    clips: [images.sand, images.bag, images.Sylwia],
  },
  {
    brand: "Daily Grind",
    category: "Coffee · Paid Social",
    summary:
      "A day-in-the-life series built around the morning commute ritual, lifting click-through and lowering cost per purchase.",
    metrics: [
      { value: "2.4M", label: "Views" },
      { value: "6.9%", label: "Engagement" },
      { value: "−38%", label: "CPA" },
    ],
    clips: [images.car, images.coffee, images.chair],
  },
];

export type VideoCategory = "All" | "Tech" | "Beauty" | "Lifestyle" | "Canvas UGC";
export type VideoLanguage = "All" | "PL" | "EN";

export interface VideoClip {
  id: string;
  title: string;
  meta: string;
  videoSrc: string;
  category: "Tech" | "Beauty" | "Lifestyle" | "Canvas UGC";
  language: "PL" | "EN";
  poster?: string;
  soundPercentage?: number; // np. 50 dla 50%, brak pola = domyślnie 100%
}

export const videoClips: VideoClip[] = [
  {
    id: "clip0",
    title: "App - Capcut",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/capcut.mp4#t=0.001",
  },
  {
    id: "gsdgsfg4",
    title: "Courses",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/courses.mp4#t=0.001",
  },
  {
    id: "fn3i3jg",
    title: "App - Tricount",
    meta: "",
    category: "Tech",
    language: "EN",
    videoSrc: "https://media.sgweblab.com/tricount.mp4#t=0.001",
  },
  {
    id: "clip2",
    title: "Product test - DJI",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/dji.mp4#t=0.001",
  },
  {
    id: "clip3",
    title: "App - Notebook",
    meta: "",
    category: "Tech",
    language: "EN",
    videoSrc: "https://media.sgweblab.com/notebook.mp4#t=0.001",
  },
  {
    id: "clip4",
    title: "Platform - Preply",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/preply.mp4#t=0.001",
  },
  {
    id: "clip5",
    title: "App - Vinted",
    meta: "",
    category: "Tech",
    language: "EN",
    videoSrc: "https://media.sgweblab.com/vinted.mp4#t=0.001",
  },
  {
    id: "clip6",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift-1.MP4#t=0.001",
  },
  {
    id: "clip7",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift-2.MP4#t=0.001",
    soundPercentage: 60,
  },
  {
    id: "clip8",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift-3.MP4#t=0.001",
    soundPercentage: 60,
  },
  {
    id: "clip9",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift-4.MP4#t=0.001",
  },
  {
    id: "clip10",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift-5.MP4#t=0.001",
    soundPercentage: 50,
  },
  {
    id: "clip11",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift-6.MP4#t=0.001",
  },
  {
    id: "clip12",
    title: "CanvasUGC - SideShift",
    meta: "",
    category: "Tech",
    language: "PL",
    videoSrc: "https://media.sgweblab.com/sideshift.MP4#t=0.001",
  },
];

export const galleryImages: SiteImage[] = [
  images.plush,
  images.bag,
  images.chair,
  images.closet,
  images.Sylwia,
  images.heroFlatlay,
  images.coffee,
  images.contentcreation,
  images.sand,
];

export interface Testimonial {
  headline: string;
  quote: string;
  name: string;
  role: string;
  avatar: SiteImage;
}

export const testimonials: Testimonial[] = [
  {
    headline: "NO HAND-HOLDING NEEDED",
    quote:
      "Finding a creator who actually understands SaaS workflows without endless briefs is nearly impossible. Sylwia nailed our app demo on the very first try - the hooks were sharp, the delivery felt completely effortless, and our sign-ups saw an immediate lift.",
    name: "Amelia R.",
    role: "Founder, Maison Ora",
    avatar: images.chair,
  },
  {
    headline: "CONTENT THAT FEELS LIKE A FRIEND",
    quote:
      "Her videos never feel like traditional ads, which is why they perform so well for us. Sylwia has this rare, natural charisma on camera that instantly builds trust. The creative batch she delivered became our top-spending ad within two weeks.",
    name: "Jordan K.",
    role: "Growth Lead, Daily Grind",
    avatar: images.Sylwia,
  },
  {
    headline: "FAST & TREND-SAVVY",
    quote:
      "Everything went smoothly from start to finish. She stays current on trending formats, adapts them quickly to brand requirements, and delivers on tight timelines. Her latest video delivered strong organic reach, generating over 100K views in its first week.",
    name: "Priya M.",
    role: "Marketing Director, Salt & Sun",
    avatar: images.closet,
  },
];

export interface WhyWorkWithMe {
  headline: string;
  quote: ReactNode; // Zmiana ze string na ReactNode
}

export const whyworkwithme: WhyWorkWithMe[] = [
  {
    headline: "WHICH NICHES SUIT ME BEST?",
    quote: (
      <>
        My sweet spots are{" "}
        <b>SaaS & tech apps, canvas UGC, lifestyle, beauty, travel, and pet content</b>.
      </>
    ),
  },
  {
    headline: "What is my setup?",
    quote: (
      <>
        <u>Tailored for the best quality</u>:{" "}
        <ul>
          <li>
            <b>Camera:</b> iPhone 18 Pro (4K capture)
          </li>

          <li>
            <b>Audio:</b> DJI wireless microphone system
          </li>
          <li>
            <b>Lighting:</b> Studio softboxes & compact accent fill lights
          </li>
        </ul>
      </>
    ),
  },

  {
    headline: "What do I do in my free time?",
    quote: (
      <>
        When I'm not recording or editing, you'll find me doing all kinds of{" "}
        <b>sports, cooking, traveling, exploring psychology, playing guitar, or dancing</b>.
      </>
    ),
  },

  // ...
];

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

export const faqs: FaqItem[] = [
  {
    question: "What is UGC and why does my brand need it?",
    answer:
      "User-generated content is authentic, creator-made content that feels native to social feeds. It builds trust faster than polished ads and typically converts better on paid social.",
  },
  {
    question: "What niches do you cover?",
    answer:
      "I cover a wide range of niches including lifestyle, beauty, travel, wellness, pet products, and consumer tech/SaaS. My focus is always on adapting my style to your brand's unique identity and target audience.",
  },
  {
    question: "What languages do you create content in?",
    answer:
      "I create and deliver content natively in both English and Polish. This makes it easy to run campaigns for local European markets as well as global, English-speaking audiences.",
  },
  {
    question: "Do you include usage rights?",
    answer:
      "Organic usage is included with every package. Paid usage rights can be added for 30, 60, or 90 days, or bought outright.",
  },
  {
    question: "Can you edit footage I've already filmed?",
    answer:
      "Absolutely! In addition to creating UGC from scratch, I offer dedicated short-form video editing. You can share your raw files, and I'll edit them in whatever style fits your brand best.",
  },
  {
    question: "Can you write the concepts and scripts?",
    answer:
      "Yes! I can handle concept ideation, hook variations, and scriptwriting tailored to current social trends. If you already have your own briefs or scripts ready, I’m happy to work with those as well.",
  },
];
