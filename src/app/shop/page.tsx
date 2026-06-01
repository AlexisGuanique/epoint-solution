import { Hero } from "@/components/Hero";
import { PremiumGuides } from "@/components/PremiumGuides";
import { ShopHeroBody } from "@/components/hero/ShopHeroBody";
import { SitePage } from "@/components/SitePage";

export default function ShopPage() {
  return (
    <SitePage>
      <Hero activeHref="/shop">
        <ShopHeroBody />
      </Hero>

      <PremiumGuides showHeading={false} layout="page" />
    </SitePage>
  );
}
