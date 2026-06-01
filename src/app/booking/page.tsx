import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Hero } from "@/components/Hero";
import { BookingHeroBody } from "@/components/hero/BookingHeroBody";
import { SitePage } from "@/components/SitePage";
import { calendlyConfig } from "@/config/calendly";

export const metadata: Metadata = {
  title: "Book Your 1-1 Consultation | Epoint Solution",
  description:
    "Schedule a free 30-minute consultation with EPoint Solution. Get expert marketing and business consulting guidance tailored to your goals.",
};

export default function BookingPage() {
  return (
    <SitePage>
      <Hero activeHref="/">
        <BookingHeroBody />
      </Hero>

      <section className="bg-white px-3 pb-12 sm:px-4 md:px-6 md:pb-16">
        <div className="mx-auto max-w-4xl">
          <CalendlyEmbed />
          <p className="mt-4 text-center font-(family-name:--font-roboto) text-sm text-gray-500">
            {calendlyConfig.duration} · {calendlyConfig.locationNote}
          </p>
        </div>
      </section>
    </SitePage>
  );
}
