"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useTestimonialVisibleCount } from "@/hooks/useTestimonialVisibleCount";
import { testimonials } from "@/data/content";

const TESTIMONIAL_COUNT = testimonials.length;
const CARD_GAP_PX = 10;
const SLIDE_MS = 650;

function Stars() {
  return (
    <div className="flex justify-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-xs">
          ★
        </span>
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full min-h-[240px] flex-col rounded-2xl border border-gray-100 bg-[#FAFAFA] px-4 py-5 text-center shadow-[0_4px_20px_rgba(45,27,15,0.06)] sm:min-h-[260px] sm:px-5 sm:py-6">
      <p className="line-clamp-5 flex-1 font-(family-name:--font-roboto) text-sm italic leading-relaxed text-gray-600 sm:line-clamp-6 sm:text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-4 shrink-0">
        <p className="font-(family-name:--font-poppins) text-sm font-semibold text-[#0D141A]">
          {testimonial.name}
        </p>
        <p className="mt-0.5 text-xs text-gray-500">{testimonial.role}</p>
        <div className="mt-2 flex justify-center">
          <Stars />
        </div>
      </div>
    </article>
  );
}

type TrackSlide = { testimonial: Testimonial; key: string };

export function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [sectionRevealed, setSectionRevealed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleCount = useTestimonialVisibleCount();

  const trackSlides = useMemo((): TrackSlide[] => {
    const clones = testimonials.map((item) => ({
      testimonial: item,
      key: `${item.id}-clone`,
    }));
    return [
      ...testimonials.map((item) => ({
        testimonial: item,
        key: item.id,
      })),
      ...clones,
    ];
  }, []);

  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - CARD_GAP_PX * (visibleCount - 1)) / visibleCount
      : 0;
  const stepPx = cardWidth + CARD_GAP_PX;
  const translatePx = slideIndex * stepPx;
  const activeDot = slideIndex % TESTIMONIAL_COUNT;

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
      if (slideIndex >= TESTIMONIAL_COUNT) {
        resetToStart();
      }
    },
    [slideIndex, resetToStart]
  );

  const next = useCallback(() => {
    setSlideIndex((i) => (i >= TESTIMONIAL_COUNT ? i : i + 1));
  }, []);

  const prev = useCallback(() => {
    if (slideIndex === 0) {
      setTransitionEnabled(false);
      setSlideIndex(TESTIMONIAL_COUNT);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideIndex(TESTIMONIAL_COUNT - 1);
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
      if (target === 0 && slideIndex >= TESTIMONIAL_COUNT) {
        resetToStart();
        return;
      }
      setSlideIndex(target);
    },
    [activeDot, slideIndex, resetToStart]
  );

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll direction="up">
          <h2 className="text-center font-(family-name:--font-poppins) text-2xl font-bold uppercase text-[#0D141A] sm:text-3xl md:text-4xl">
            REAL RESULTS. REAL GROWTH.
          </h2>
        </AnimateOnScroll>

        <div className="relative mt-8 px-10 sm:mt-10 sm:px-12 md:px-14">
          <button
            type="button"
            onClick={prev}
            aria-label="Testimonio anterior"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-500 transition hover:bg-gray-200 hover:text-[#2D1B0F] md:h-12 md:w-12"
          >
            ‹
          </button>

          <div
            ref={viewportRef}
            className={`overflow-hidden transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-none ${
              sectionRevealed
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
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
                  <TestimonialCard testimonial={slide.testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Siguiente testimonio"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-500 transition hover:bg-gray-200 hover:text-[#2D1B0F] md:h-12 md:w-12"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ver testimonio de ${item.name}`}
              aria-current={i === activeDot ? "true" : undefined}
              onClick={() => goToSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === activeDot ? "bg-[#2D1B0F]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
