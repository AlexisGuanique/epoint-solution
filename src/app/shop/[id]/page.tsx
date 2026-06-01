import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductHeroBody } from "@/components/hero/ProductHeroBody";
import { SitePage } from "@/components/SitePage";
import { products } from "@/data/content";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <SitePage>
      <Hero activeHref="/shop">
        <ProductHeroBody title={product.title} />
      </Hero>

      <ProductDetail product={product} />
    </SitePage>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}
