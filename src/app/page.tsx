import { Articles } from "@/components/Articles";
import { HomeHeroBody } from "@/components/hero/HomeHeroBody";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { OffersCarousel } from "@/components/OffersCarousel";
import { OurStory } from "@/components/OurStory";
import { PremiumGuides } from "@/components/PremiumGuides";
import { SitePage } from "@/components/SitePage";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <SitePage>
      <Hero activeHref="/">
        <HomeHeroBody />
      </Hero>

      <OffersCarousel />
      <PremiumGuides />
      <OurStory />
      <Testimonials />
      <Articles />
      <Newsletter />
    </SitePage>
  );
}
