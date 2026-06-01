import { AnimateIn } from "@/components/AnimateIn";

type PolicyHeroBodyProps = {
  title: string;
  breadcrumbLabel: string;
};

export function PolicyHeroBody({ title, breadcrumbLabel }: PolicyHeroBodyProps) {
  return (
    <div className="py-4 text-center sm:py-6 md:py-8">
      <AnimateIn direction="up" delay={200}>
        <h1 className="font-(family-name:--font-poppins) text-3xl font-bold uppercase tracking-tight text-[#2D1B0F] sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </AnimateIn>
      <AnimateIn direction="up" delay={320}>
        <nav
          className="mt-4 font-(family-name:--font-roboto) text-sm uppercase tracking-wide text-gray-600 sm:mt-5 sm:text-base"
          aria-label="Breadcrumb"
        >
          <span className="text-gray-600">POLICIES</span>
          <span className="mx-2 text-gray-400" aria-hidden>
            /
          </span>
          <span className="text-[#2D1B0F]">{breadcrumbLabel}</span>
        </nav>
      </AnimateIn>
    </div>
  );
}
