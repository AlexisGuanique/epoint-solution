import { Hero } from "@/components/Hero";
import { AboutHeroBody } from "@/components/hero/AboutHeroBody";
import { Newsletter } from "@/components/Newsletter";
import { OurStory } from "@/components/OurStory";
import { SitePage } from "@/components/SitePage";

export default function AboutPage() {
  return (
    <SitePage>
      <Hero activeHref="/about">
        <AboutHeroBody />
      </Hero>

      <OurStory showButton={false} />
      <Newsletter />
    </SitePage>
  );
}
