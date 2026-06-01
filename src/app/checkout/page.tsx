import { CheckoutPageContent } from "@/components/CheckoutPageContent";
import { Hero } from "@/components/Hero";
import { CheckoutHeroBody } from "@/components/hero/CheckoutHeroBody";
import { SitePage } from "@/components/SitePage";

export default function CheckoutPage() {
  return (
    <SitePage>
      <Hero activeHref="/shop">
        <CheckoutHeroBody />
      </Hero>

      <CheckoutPageContent />
    </SitePage>
  );
}
