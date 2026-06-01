import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export function HomeHeroBody() {
  return (
    <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div className="flex flex-col">
        <AnimateIn direction="right" delay={280}>
          <h1 className="font-(family-name:--font-roboto) text-2xl font-extrabold leading-[1.15] tracking-tight text-[#432F23] md:text-3xl lg:text-4xl lg:leading-[1.12]">
            Scale Your Business with Expert Marketing &amp; Consulting
          </h1>
        </AnimateIn>
        <AnimateIn direction="right" delay={400}>
          <p className="mt-5 max-w-xl font-(family-name:--font-roboto) text-lg leading-relaxed text-[#1a1a1a]/90 md:mt-6 md:text-xl">
            Get professional marketing strategies, targeted advertising, and
            one-on-one mentorship designed to drive growth for entrepreneurs and
            small businesses. From branding assistance to elite lead generation,
            we deliver immediate, digital-first consulting and resources to
            elevate your business right now.
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={520}>
          <button
            type="button"
            className="mt-8 w-fit rounded-lg bg-[#432F23] px-8 py-3.5 font-(family-name:--font-roboto) text-sm font-semibold text-white transition-opacity hover:opacity-90 md:mt-10"
          >
            Shop Now
          </button>
        </AnimateIn>
      </div>

      <div className="flex flex-col items-center lg:items-end">
        <AnimateIn direction="left" delay={360} className="relative w-full max-w-xl">
          <div className="relative aspect-828/440 w-full">
            <Image
              src="/images/hero-suite.png"
              alt="Epoint Solution Suite — marketing strategies, targeted advertising, and mentorship programs"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 576px"
              priority
            />
          </div>
        </AnimateIn>
        <AnimateIn direction="up" delay={500} className="mt-5 flex w-full max-w-md items-center gap-3">
          <span className="h-px flex-1 bg-[#432F23]/25" aria-hidden />
          <p className="shrink-0 font-(family-name:--font-roboto) text-sm font-medium text-[#432F23]">
            Epoint Solution Suite
          </p>
          <span className="h-px flex-1 bg-[#432F23]/25" aria-hidden />
        </AnimateIn>
      </div>
    </div>
  );
}
