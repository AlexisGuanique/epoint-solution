"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { useVisibleCount } from "@/hooks/useVisibleCount";
import { offers } from "@/data/content";

const OFFER_COUNT = offers.length;
const CARD_GAP_PX = 10;
const SLIDE_MS = 650;

function OfferIcon({ type }: { type: string }) {
  const iconClass = "h-10 w-10 text-[#C4A882] sm:h-11 sm:w-11";

  switch (type) {
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
          <path strokeWidth="1.5" d="M4 20V4M8 20V10M12 20V14M16 20V6M20 20V8" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
          <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
          <path strokeWidth="1.5" d="M8 12l2 2 6-6M4 10l4-4 4 4M16 10l4-4 4 4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
          <rect x="3" y="5" width="18" height="12" rx="2" strokeWidth="1.5" />
          <path strokeWidth="1.5" d="M8 20h8" />
        </svg>
      );
  }
}

type Offer = (typeof offers)[number];

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="flex h-full min-h-[460px] w-full flex-col rounded-2xl bg-[#F0EBE1] px-3 py-5 text-center sm:min-h-[480px] sm:px-3.5 sm:py-6 md:min-h-[500px]">
      <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2D1B0F] sm:h-16 sm:w-16">
        <OfferIcon type={offer.icon} />
      </div>

      <p className="font-(family-name:--font-noto) text-sm font-bold text-[#3D3D3D]">
        {offer.tagline}
      </p>

      <h3 className="mt-2 font-(family-name:--font-inter) text-sm font-black uppercase leading-snug text-black sm:text-base">
        {offer.title}
      </h3>

      <p className="mt-3 line-clamp-6 flex-1 font-(family-name:--font-roboto) text-xs leading-relaxed text-[#353535] sm:text-sm">
        {offer.description}
      </p>

      <Link
        href={`/shop/${offer.id}`}
        className="mt-4 inline-block rounded-full bg-[#2D1B0F] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3D2817]"
      >
        Get Started
      </Link>
    </article>
  );
}

type TrackSlide = { offer: Offer; key: string };

export function OffersCarousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleCount = useVisibleCount();

  const trackSlides = useMemo((): TrackSlide[] => {
    const clones = offers.map((offer) => ({
      offer,
      key: `${offer.id}-clone`,
    }));
    return [
      ...offers.map((offer) => ({ offer, key: offer.id })),
      ...clones,
    ];
  }, []);

  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - CARD_GAP_PX * (visibleCount - 1)) / visibleCount
      : 0;
  const stepPx = cardWidth + CARD_GAP_PX;
  const translatePx = slideIndex * stepPx;
  const activeDot = slideIndex % OFFER_COUNT;

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
      if (slideIndex >= OFFER_COUNT) {
        resetToStart();
      }
    },
    [slideIndex, resetToStart]
  );

  const next = useCallback(() => {
    setSlideIndex((i) => (i >= OFFER_COUNT ? i : i + 1));
  }, []);

  const prev = useCallback(() => {
    if (slideIndex === 0) {
      setTransitionEnabled(false);
      setSlideIndex(OFFER_COUNT);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideIndex(OFFER_COUNT - 1);
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
      if (target === 0 && slideIndex >= OFFER_COUNT) {
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
          setCardsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#2D1B0F] px-4 py-10 sm:py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll direction="up">
          <h2 className="mb-8 text-center font-(family-name:--font-poppins) text-2xl font-extrabold uppercase tracking-wide text-[#ECE9D8] sm:text-3xl md:mb-10 md:text-4xl">
            OUR OFFERS
          </h2>
        </AnimateOnScroll>

        <div className="relative px-10 sm:px-12 md:px-14">
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ECE9D8]/15 text-2xl text-[#ECE9D8] transition hover:bg-[#ECE9D8]/25 md:h-12 md:w-12"
          >
            ‹
          </button>

          <div
            ref={viewportRef}
            className={`overflow-hidden transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-none ${
              cardsRevealed
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className={`flex motion-reduce:transition-none ${
                transitionEnabled ? "transition-transform ease-[cubic-bezier(0.33,1,0.68,1)]" : ""
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
                  <OfferCard offer={slide.offer} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ECE9D8]/15 text-2xl text-[#ECE9D8] transition hover:bg-[#ECE9D8]/25 md:h-12 md:w-12"
          >
            ›
          </button>
        </div>



        <div className="mt-6 flex justify-center gap-2">
          {offers.map((offer, i) => (
            <button
              key={offer.id}
              type="button"
              aria-label={`Ir a ${offer.title}`}
              aria-current={i === activeDot ? "true" : undefined}
              onClick={() => goToSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === activeDot ? "bg-[#ECE9D8]" : "bg-[#ECE9D8]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
