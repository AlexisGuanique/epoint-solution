"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useVisibleCount } from "@/hooks/useVisibleCount";
import { products } from "@/data/content";

const PRODUCT_COUNT = products.length;
const CARD_GAP_PX = 16;
const SLIDE_MS = 650;

import type { ShopProduct } from "@/data/content";

type Product = ShopProduct;

function ProductGuideCard({ product }: { product: Product }) {
  return (
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="border-t border-gray-50 bg-white p-4 sm:p-5 md:p-6">
        <div className="mb-2 h-px w-8 bg-gray-300" />
        <p className="text-xs text-gray-500 md:text-sm">{product.category}</p>
        <h3 className="mt-1 font-(family-name:--font-poppins) text-sm font-normal uppercase leading-snug text-[#444] group-hover:text-[#2D1B0F] sm:text-base">
          {product.title}
        </h3>
        <p className="mt-2 font-(family-name:--font-poppins) text-base font-semibold text-black md:text-lg">
          {product.price}
        </p>
      </div>
    </Link>
  );
}

type TrackSlide = { product: Product; key: string };

type ProductGuidesCarouselProps = {
  /** Producto actual; se usa para marcar el slide activo en los dots al cargar */
  currentProductId?: string;
};

export function ProductGuidesCarousel({
  currentProductId,
}: ProductGuidesCarouselProps) {
  const initialIndex = useMemo(() => {
    if (!currentProductId) return 0;
    const index = products.findIndex((p) => p.id === currentProductId);
    return index >= 0 ? index : 0;
  }, [currentProductId]);

  const [slideIndex, setSlideIndex] = useState(initialIndex);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleCount = useVisibleCount();

  const trackSlides = useMemo((): TrackSlide[] => {
    const clones = products.map((product) => ({
      product,
      key: `${product.id}-clone`,
    }));
    return [
      ...products.map((product) => ({ product, key: product.id })),
      ...clones,
    ];
  }, []);

  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - CARD_GAP_PX * (visibleCount - 1)) / visibleCount
      : 0;
  const stepPx = cardWidth + CARD_GAP_PX;
  const translatePx = slideIndex * stepPx;
  const activeDot = slideIndex % PRODUCT_COUNT;

  const measureViewport = useCallback(() => {
    if (viewportRef.current) {
      setViewportWidth(viewportRef.current.clientWidth);
    }
  }, []);

  useLayoutEffect(() => {
    measureViewport();
    window.addEventListener("resize", measureViewport);
    return () => window.removeEventListener("resize", measureViewport);
  }, [measureViewport, visibleCount]);

  useEffect(() => {
    setSlideIndex(initialIndex);
  }, [initialIndex]);

  const resetToStart = useCallback(() => {
    setTransitionEnabled(false);
    setSlideIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionEnabled(true));
    });
  }, []);

  const handleTransitionEnd = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      if (
        event.propertyName !== "transform" ||
        event.target !== trackRef.current
      ) {
        return;
      }
      if (slideIndex >= PRODUCT_COUNT) {
        resetToStart();
      }
    },
    [slideIndex, resetToStart]
  );

  const next = useCallback(() => {
    setSlideIndex((i) => (i >= PRODUCT_COUNT ? i : i + 1));
  }, []);

  const prev = useCallback(() => {
    if (slideIndex === 0) {
      setTransitionEnabled(false);
      setSlideIndex(PRODUCT_COUNT);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideIndex(PRODUCT_COUNT - 1);
          setTransitionEnabled(true);
        });
      });
    } else {
      setSlideIndex((i) => i - 1);
    }
  }, [slideIndex]);

  const goToSlide = useCallback(
    (target: number) => {
      if (target === activeDot) return;
      if (target === 0 && slideIndex >= PRODUCT_COUNT) {
        resetToStart();
        return;
      }
      setSlideIndex(target);
    },
    [activeDot, slideIndex, resetToStart]
  );

  return (
    <section className="border-t border-gray-100 bg-white px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-(family-name:--font-poppins) text-2xl font-bold uppercase text-[#0D141A] sm:text-3xl md:text-4xl">
          OUR PREMIUM PROGRAMS
        </h2>

        <div className="relative mt-8 px-10 sm:mt-10 sm:px-12 md:px-14">
          <button
            type="button"
            onClick={prev}
            aria-label="Producto anterior"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl text-[#2D1B0F] shadow-sm transition hover:bg-[#F8F4ED] md:h-12 md:w-12"
          >
            ‹
          </button>

          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex motion-reduce:transition-none ${
                transitionEnabled
                  ? "transition-transform ease-[cubic-bezier(0.33,1,0.68,1)]"
                  : ""
              }`}
              style={{
                gap: `${CARD_GAP_PX}px`,
                transform: `translate3d(-${translatePx}px, 0, 0)`,
                transitionDuration: transitionEnabled ? `${SLIDE_MS}ms` : "0ms",
              }}
            >
              {trackSlides.map((slide) => (
                <div
                  key={slide.key}
                  className="shrink-0"
                  style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
                >
                  <ProductGuideCard product={slide.product} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Siguiente producto"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl text-[#2D1B0F] shadow-sm transition hover:bg-[#F8F4ED] md:h-12 md:w-12"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {products.map((product, i) => (
            <button
              key={product.id}
              type="button"
              aria-label={`Ir a ${product.title}`}
              aria-current={i === activeDot ? "true" : undefined}
              onClick={() => goToSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === activeDot ? "bg-[#2D1B0F]" : "bg-[#2D1B0F]/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
