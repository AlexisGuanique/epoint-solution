"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

type OurStoryProps = {
  showButton?: boolean;
};

export function OurStory({ showButton = true }: OurStoryProps) {
  return (
    <section id="about" className="bg-[#F8F4ED] px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(45,27,15,0.08)] md:rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <AnimateOnScroll
              direction="right"
              className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:order-1"
            >
              <h2 className="font-(family-name:--font-poppins) text-xl font-bold text-[#0D141A] sm:text-2xl md:text-3xl">
                Our Story
              </h2>
              <div className="mt-4 space-y-4 font-(family-name:--font-roboto) text-base leading-relaxed text-gray-600">
                <p>
                  With over a decade of experience helping individuals improve their
                  professional growth profile and overall qualification standing,
                  I&apos;ve seen how many programs rely on shortcuts that don&apos;t
                  create real, lasting progress. That&apos;s why I created Freedom
                  Growth a transparent system built on proven strategies and
                  long-term results.
                </p>
                <p>
                  These guide books is designed for individuals and business owners
                  who are tired of empty promises and want to strengthen their
                  personal standing, unlock new opportunities, and gain real
                  financial education. In addition to structured improvement
                  methods, you&apos;ll receive practical training and step-by-step
                  guidance that teaches you how qualification systems work and how
                  to maintain long-term stability and independence.
                </p>
              </div>
              {showButton ? (
                <Link
                  href="/shop"
                  className="mt-8 inline-flex w-fit rounded-lg bg-[#2D1B0F] px-8 py-3.5 font-(family-name:--font-roboto) text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Read Our Story
                </Link>
              ) : null}
            </AnimateOnScroll>

            <AnimateOnScroll
              direction="left"
              delay={120}
              className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] lg:order-2"
            >
              <Image
                src="/images/our-story.png"
                alt="Fundador de Epoint Solution"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
