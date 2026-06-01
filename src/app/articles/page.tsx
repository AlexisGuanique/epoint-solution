import { Articles } from "@/components/Articles";
import { Hero } from "@/components/Hero";
import { ArticlesHeroBody } from "@/components/hero/ArticlesHeroBody";
import { Newsletter } from "@/components/Newsletter";
import { SitePage } from "@/components/SitePage";

export default function ArticlesPage() {
  return (
    <SitePage>
      <Hero activeHref="/articles">
        <ArticlesHeroBody />
      </Hero>

      <Articles showHeading={false} layout="page" />
      <Newsletter />
    </SitePage>
  );
}
