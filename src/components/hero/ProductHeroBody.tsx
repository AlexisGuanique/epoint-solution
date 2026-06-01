import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

type ProductHeroBodyProps = {
  title: string;
};

export function ProductHeroBody({ title }: ProductHeroBodyProps) {
  return (
    <div className="py-4 text-center sm:py-6 md:py-8">
      <AnimateIn direction="up" delay={200}>
        <h1 className="mx-auto max-w-4xl font-(family-name:--font-poppins) text-xl font-bold uppercase leading-tight tracking-tight text-[#2D1B0F] sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h1>
      </AnimateIn>
      <AnimateIn direction="up" delay={320}>
        <nav
          className="mt-4 font-(family-name:--font-roboto) text-xs uppercase tracking-wide text-gray-600 sm:mt-5 sm:text-sm"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#2D1B0F]">
            HOME
          </Link>
          <span className="mx-2 text-gray-400" aria-hidden>
            /
          </span>
          <Link
            href="/shop"
            className="transition-colors hover:text-[#2D1B0F]"
          >
            SHOP
          </Link>
          <span className="mx-2 text-gray-400" aria-hidden>
            /
          </span>
          <span className="text-[#2D1B0F]">PRODUCT</span>
        </nav>
      </AnimateIn>
    </div>
  );
}
