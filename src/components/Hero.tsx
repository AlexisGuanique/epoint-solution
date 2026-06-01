"use client";

import { heroBodyByView } from "@/components/hero/registry";
import type { HeroProps } from "@/components/hero/types";
import type { HeroViewId } from "@/components/hero/types";
import { HeroHeader } from "@/components/Header";
import { TopBar } from "@/components/TopBar";

type HeroWithChildrenProps = HeroProps & {
  view?: undefined;
};

type HeroWithViewProps = {
  view: HeroViewId;
  activeHref: HeroProps["activeHref"];
  children?: undefined;
};

/**
 * Shell compartido del hero (TopBar + nav + tarjeta crema).
 * El cuerpo debajo del nav es dinámico:
 * - En cada página: `<Hero activeHref="/"><HomeHeroBody /></Hero>`
 * - O por vista: `<Hero view="home" activeHref="/" />` usando el registro
 */
function isHeroWithView(
  props: HeroWithChildrenProps | HeroWithViewProps
): props is HeroWithViewProps {
  return "view" in props && props.view !== undefined;
}

export function Hero(props: HeroWithChildrenProps | HeroWithViewProps) {
  const { activeHref } = props;
  const body = isHeroWithView(props)
    ? heroBodyByView[props.view]()
    : props.children;

  return (
    <section className="bg-white px-3 pt-3 pb-5 sm:px-4 sm:pt-4 sm:pb-6 md:px-6 md:pt-6 md:pb-8">
      <div className="mx-auto max-w-7xl">
        <TopBar />
        <div className="mt-2 overflow-hidden rounded-2xl bg-[#F9F7F4] px-4 py-6 sm:rounded-3xl sm:px-5 sm:py-8 md:mt-3 md:rounded-4xl md:px-10 md:py-10 lg:px-12 lg:py-12">
          <HeroHeader activeHref={activeHref} />
          {body != null && (
            <div key={activeHref} className="mt-10">
              {body}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
