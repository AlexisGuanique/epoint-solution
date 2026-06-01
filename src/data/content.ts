import {
  productTabContent,
  type ProductSummary,
  type ProductTabDescription,
} from "@/data/productTabContent";

export type ShopProduct = {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
  imageDetail: string;
  reviewCount: number;
  summary?: ProductSummary;
  tabDescription: ProductTabDescription;
};

export const offers = [
  {
    id: "strategic-marketing",
    tagline: "Learn, Apply, Grow.",
    title: "STRATEGIC MARKETING & BRANDING BLUEPRINT",
    description:
      "Acquire a comprehensive, data-driven marketing strategy and elite branding assistance tailored to your business goals. Designed for small businesses and entrepreneurs, this program builds a powerful market position, enhances brand identity, and outlines clear campaign deployment maps to scale your business with total confidence.",
    icon: "chart",
  },
  {
    id: "advertising-leads",
    tagline: "Learn, Apply, Grow.",
    title: "HIGH-CONVERSION ADVERTISING & LEAD GENERATION GUIDANCE",
    description:
      "Master your customer acquisition with custom advertising consulting and tactical lead generation frameworks. We guide you step-by-step through campaign asset development, audience targeting, and distribution efficiency to secure a consistent flow of high-quality prospects directly into your sales pipeline.",
    icon: "target",
  },
  {
    id: "elite-mentorship",
    tagline: "Learn, Apply, Grow.",
    title: "12-MONTH ELITE MENTORSHIP & BUSINESS CONSULTING PROGRAM",
    description:
      "A premium, year-long partnership featuring monthly business consulting, one-on-one coaching, and dedicated mentorship sessions. Delivered entirely through private video calls, online meetings, and direct communications, this flagship program provides continuous execution support, scalable operations advice, and executive accountability for driven business founders.",
    icon: "handshake",
  },
  {
    id: "digital-education",
    tagline: "Learn, Apply, Grow.",
    title: "ACCELERATED DIGITAL MARKETING EDUCATION PLATFORM",
    description:
      "Gain immediate access to professional marketing strategies, targeted advertising frameworks, and live, interactive consulting sessions. Perfect for entrepreneurs seeking rapid skill acquisition, this program combines structured marketing modules with one-on-one mentorship to optimize your digital infrastructure and maximize operational growth from day one.",
    icon: "laptop",
  },
] as const;

export const products: ShopProduct[] = [
  {
    id: "digital-education",
    title: "ACCELERATED DIGITAL MARKETING EDUCATION PLATFORM",
    price: "$3,000.00",
    category: "Consulting",
    image: "/images/guides/digital-education.png",
    imageDetail: "/images/guides/digital-education-detail.png",
    reviewCount: productTabContent["digital-education"].reviewCount,
    summary: productTabContent["digital-education"].summary,
    tabDescription: productTabContent["digital-education"].tabDescription,
  },
  {
    id: "strategic-marketing",
    title: "STRATEGIC MARKETING & BRANDING BLUEPRINT",
    price: "$2,500.00",
    category: "Consulting",
    image: "/images/guides/strategic-marketing.png",
    imageDetail: "/images/guides/strategic-marketing-detail.png",
    reviewCount: productTabContent["strategic-marketing"].reviewCount,
    tabDescription: productTabContent["strategic-marketing"].tabDescription,
  },
  {
    id: "advertising-leads",
    title: "HIGH-CONVERSION ADVERTISING & LEAD GENERATION GUIDANCE",
    price: "$600.00",
    category: "Consulting",
    image: "/images/guides/advertising-leads.png",
    imageDetail: "/images/guides/advertising-leads-detail.png",
    reviewCount: productTabContent["advertising-leads"].reviewCount,
    summary: productTabContent["advertising-leads"].summary,
    tabDescription: productTabContent["advertising-leads"].tabDescription,
  },
  {
    id: "elite-mentorship",
    title: "12-MONTH ELITE MENTORSHIP & BUSINESS CONSULTING PROGRAM",
    price: "$500.00",
    category: "Consulting",
    image: "/images/guides/elite-mentorship.png",
    imageDetail: "/images/guides/elite-mentorship-detail.png",
    reviewCount: productTabContent["elite-mentorship"].reviewCount,
    summary: productTabContent["elite-mentorship"].summary,
    tabDescription: productTabContent["elite-mentorship"].tabDescription,
  },
];

export const testimonials = [
  {
    id: "alvaro",
    name: "Alvaro Arbea",
    role: "CEO PEPARZEL LLC",
    quote:
      "EPoint Solution LLC truly helped me take my business in the right direction. Their team provided structured growth strategies and operational systems that improved our performance and clarity. Because of their detailed planning and consistent support, we've experienced measurable and sustainable growth.",
  },
  {
    id: "roberto",
    name: "Roberto Moreno",
    role: "CEO DEXTRA LLC",
    quote:
      "I've worked with several consulting firms before, but none matched the level of structure and execution that EPoint Solution LLC delivers. They don't just give advice they implement systems and guide you through every step. Highly recommended.",
  },
  {
    id: "betza",
    name: "Betza Sandoval",
    role: "CEO BN BUSINESS LLC",
    quote:
      "EPoint Solution LLC made a significant impact on our business foundation. Their clear growth roadmap and strategic approach removed uncertainty and gave us a scalable direction. Today, our operations are more efficient and performance-driven.",
  },
  {
    id: "gonzalo",
    name: "Gonzalo Arbea",
    role: "CEO BULLDONGO LLC",
    quote:
      "Working with EPoint Solution LLC has been a game-changer. Their structured systems and performance strategies streamlined our operations and improved overall efficiency. Their expertise and professionalism truly stand out.",
  },
] as const;

export const articles = [
  {
    id: "serial-entrepreneur",
    title: "Eberths Perozo – Best Serial Entrepreneur 2025",
    excerpt:
      "Awarded as the best serial entrepreneur in the U.S. for 2025 …",
    href: "https://bestofbestreview.com/awards/eberths-perozo-best-serial-entrepreneur-in-the-u-s-of-2025",
    image: "/images/articles/serial-entrepreneur.png",
  },
  {
    id: "self-made",
    title: "Eberths Perozo – Self-Made Millionaire",
    excerpt: "How Eberths Perozo built his wealth from scratch …",
    href: "https://okmagazine.com/p/eberths-perozo-self-made-millionaire/",
    image: "/images/articles/self-made.png",
  },
  {
    id: "private-bankers",
    title: "The Man Private Bankers Know by Name – Eberths Perozo",
    excerpt:
      "A powerful insight into why private bankers recognize and respect Eberths Perozo …",
    href: "https://ceotimes.com/the-man-private-bankers-know-by-name-eberths-perozo/",
    image: "/images/articles/private-bankers.png",
  },
  {
    id: "midocommerce",
    title: "How MidoCommerce's Eberths Perozo Paved the Way for Automation",
    excerpt:
      "Discover how Eberths Perozo reshaped e-commerce automation for global impact …",
    href: "https://www.forbes.com.au/brand-voice/uncategorized/how-midocommerces-eberths-perozo-paved-the-way-for-automation-in-e-commerce/",
    image: "/images/articles/midocommerce.png",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/", view: "home" },
  { label: "About us", href: "/about", view: "about" },
  { label: "Articles", href: "/articles", view: "articles" },
  { label: "Shop", href: "/shop", view: "shop" },
  { label: "Contact Us", href: "/contact", view: "contact" },
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Articles", href: "/articles" },
  { label: "Contact us", href: "/contact" },
] as const;

export const footerPolicies = [
  { label: "Refund & Cancellation", href: "/policies/refund-cancellation" },
  { label: "Privacy & Policy", href: "/policies/privacy-policy" },
  { label: "Terms Of Service", href: "/policies/terms-of-service" },
] as const;

/**
 * Página de empresa en LinkedIn. También puedes usar NEXT_PUBLIC_LINKEDIN_URL en .env.local.
 * Requerido para revisión de procesadores de pago (Square, etc.).
 */
export const linkedInCompany = {
  href: "https://www.linkedin.com/company/eberths-enterprises-llc/",
  label: "Eberths Enterprises LLC on LinkedIn",
} as const;

export const contactInfo = {
  phone: {
    display: "(407) 668-7889",
    href: "tel:+14076687889",
  },
  emails: [
    {
      display: "support@epointsolution.com",
      href: "mailto:support@epointsolution.com",
    },
    {
      display: "eberths@epointsolution.com",
      href: "mailto:eberths@epointsolution.com",
    },
  ] as const,
  /** Correo principal (checkout, formularios). */
  email: {
    display: "support@epointsolution.com",
    href: "mailto:support@epointsolution.com",
  },
  address: "5750 S Semoran Blvd, Orlando FL 32822",
} as const;

export const contactFormCopy = {
  heading: "GET IN TOUCH",
  description:
    "Have questions about our programs or services? Contact our team and let's discuss how we can support your business growth journey.",
} as const;

export { calendlyConfig } from "@/config/calendly";

export const consultationCta = {
  label: "Get 1-1 Free Consultation",
  href: "/booking",
} as const;
