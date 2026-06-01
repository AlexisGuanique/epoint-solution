import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { PolicyHeroBody } from "@/components/hero/PolicyHeroBody";
import { PolicyPageContent } from "@/components/PolicyPageContent";
import { SitePage } from "@/components/SitePage";
import {
  getPolicyBySlug,
  policySlugs,
  type PolicySlug,
} from "@/data/policies";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  return (
    <SitePage>
      <Hero activeHref="/">
        <PolicyHeroBody
          title={policy.heroTitle}
          breadcrumbLabel={policy.breadcrumbLabel}
        />
      </Hero>

      <PolicyPageContent
        policy={policy}
        activeSlug={policy.slug as PolicySlug}
      />
    </SitePage>
  );
}

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}
