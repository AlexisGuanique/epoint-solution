"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { articles } from "@/data/content";

const cardMotion = [
  { direction: "left" as const, delay: 80 },
  { direction: "up" as const, delay: 160 },
  { direction: "right" as const, delay: 240 },
  { direction: "up" as const, delay: 320 },
];

type ArticlesProps = {
  /** Muestra el título "OUR ARTICLES" (home). En /articles el hero ya lleva el título. */
  showHeading?: boolean;
  /** home: 4 columnas en desktop; page: cuadrícula 2×2 */
  layout?: "home" | "page";
};

export function Articles({
  showHeading = true,
  layout = "home",
}: ArticlesProps) {
  const isPageGrid = layout === "page";

  return (
    <section
      id="articles"
      className="bg-[#F8F4ED] px-4 py-12 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {showHeading ? (
          <AnimateOnScroll direction="up">
            <h2 className="text-center font-(family-name:--font-poppins) text-2xl font-bold uppercase text-[#0D141A] sm:text-3xl md:text-4xl">
              OUR ARTICLES
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
          {articles.map((article, index) => {
            const motion = cardMotion[index] ?? cardMotion[0];

            return (
              <AnimateOnScroll
                key={article.id}
                direction={motion.direction}
                delay={motion.delay}
              >
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100/80 bg-white shadow-[0_4px_24px_rgba(45,27,15,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(45,27,15,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1B0F]"
                  aria-label={`Leer artículo: ${article.title} (se abre en nueva pestaña)`}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-white">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes={
                        isPageGrid
                          ? "(max-width: 640px) 100vw, 50vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                    />
                  </div>

                  <div className="flex flex-1 flex-col border-t border-gray-50 p-4 sm:p-5 md:p-6">
                    <h3 className="font-(family-name:--font-poppins) text-sm font-medium leading-snug text-[#333] transition-colors group-hover:text-[#2D1B0F] sm:text-base md:text-lg">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-500 md:text-base">
                      {article.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-[#2D1B0F] md:text-base">
                      Read More →
                    </span>
                  </div>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
