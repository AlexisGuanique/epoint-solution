"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { products } from "@/data/content";

const cardMotion = [
  { direction: "left" as const, delay: 80 },
  { direction: "up" as const, delay: 160 },
  { direction: "right" as const, delay: 240 },
  { direction: "up" as const, delay: 320 },
];

type PremiumGuidesProps = {
  /** Muestra el título "OUR PREMIUM PROGRAMS" (home). En /shop el hero ya lleva el título. */
  showHeading?: boolean;
  /** home: 4 columnas en desktop; page: cuadrícula 2×2 */
  layout?: "home" | "page";
};

export function PremiumGuides({
  showHeading = true,
  layout = "home",
}: PremiumGuidesProps) {
  const isPageGrid = layout === "page";

  return (
    <section
      id="shop"
      className="bg-white px-4 py-12 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {showHeading ? (
          <AnimateOnScroll direction="up">
            <h2 className="text-center font-(family-name:--font-poppins) text-2xl font-bold uppercase text-[#0D141A] sm:text-3xl md:text-4xl">
              OUR PREMIUM PROGRAMS
            </h2>
          </AnimateOnScroll>
        ) : null}

        <div
          className={
            isPageGrid
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8"
              : "mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
          }
        >
          {products.map((product, index) => {
            const motion = cardMotion[index] ?? cardMotion[0];

            return (
              <AnimateOnScroll
                key={product.id}
                direction={motion.direction}
                delay={motion.delay}
              >
                <Link
                  href={`/shop/${product.id}`}
                  className="group block h-full overflow-hidden rounded-xl border border-gray-100/80 bg-white shadow-[0_4px_24px_rgba(45,27,15,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(45,27,15,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1B0F]"
                  aria-label={`Ver detalle de ${product.title}`}
                >
                  <div className="relative aspect-4/3 w-full bg-white">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-contain object-center p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:p-4 md:p-5"
                      sizes={
                        isPageGrid
                          ? "(max-width: 640px) 100vw, 50vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                    />
                  </div>

                  <div className="border-t border-gray-50 bg-white p-4 sm:p-5 md:p-6">
                    <div className="mb-2 h-px w-8 bg-gray-300" />
                    <p className="text-xs text-gray-500 md:text-sm">
                      {product.category}
                    </p>
                    <h3 className="mt-1 font-(family-name:--font-poppins) text-sm font-normal uppercase leading-snug text-[#444] group-hover:text-[#2D1B0F] sm:text-base">
                      {product.title}
                    </h3>
                    <p className="mt-2 font-(family-name:--font-poppins) text-base font-semibold text-black md:text-lg">
                      {product.price}
                    </p>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
