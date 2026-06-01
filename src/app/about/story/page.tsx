import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SitePage } from "@/components/SitePage";

export default function OurStoryDetailPage() {
  return (
    <SitePage>
      <Hero view="about" activeHref="/about" />
      <section className="bg-[#F8F4ED] px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-(family-name:--font-poppins) text-2xl font-bold text-[#0D141A] md:text-3xl">
            Our Story
          </h1>
          <p className="mt-4 font-(family-name:--font-roboto) text-base leading-relaxed text-gray-600">
            Página completa de nuestra historia — en construcción.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block font-(family-name:--font-roboto) text-sm text-[#2D1B0F] underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
