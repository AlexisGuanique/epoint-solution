import { ContactUs } from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import { ContactHeroBody } from "@/components/hero/ContactHeroBody";
import { SitePage } from "@/components/SitePage";

export default function ContactPage() {
  return (
    <SitePage>
      <Hero activeHref="/contact">
        <ContactHeroBody />
      </Hero>

      <ContactUs />
    </SitePage>
  );
}
