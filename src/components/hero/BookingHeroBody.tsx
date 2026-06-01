import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export function BookingHeroBody() {
  return (
    <div className="py-4 text-center sm:py-6 md:py-8">
      <AnimateIn direction="up" delay={200}>
        <h1 className="font-(family-name:--font-poppins) text-3xl font-bold uppercase tracking-tight text-[#2D1B0F] sm:text-4xl md:text-5xl">
          BOOK YOUR 1-1 CONSULTATION
        </h1>
      </AnimateIn>
      <AnimateIn direction="up" delay={320}>
        <nav
          className="mt-4 font-(family-name:--font-roboto) text-sm uppercase tracking-wide text-gray-600 sm:mt-5 sm:text-base"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#2D1B0F]">
            HOME
          </Link>
          <span className="mx-2 text-gray-400" aria-hidden>
            /
          </span>
          <span className="text-[#2D1B0F]">BOOKING</span>
        </nav>
      </AnimateIn>
    </div>
  );
}
