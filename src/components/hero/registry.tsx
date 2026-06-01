import type { ReactNode } from "react";
import { AboutHeroBody } from "@/components/hero/AboutHeroBody";
import { ArticlesHeroBody } from "@/components/hero/ArticlesHeroBody";
import { ShopHeroBody } from "@/components/hero/ShopHeroBody";
import { ContactHeroBody } from "@/components/hero/ContactHeroBody";
import { HomeHeroBody } from "@/components/hero/HomeHeroBody";
import type { HeroViewId } from "@/components/hero/types";

/** Mapa vista → cuerpo del hero. Útil con `<Hero view="home" />` sin children */
export const heroBodyByView: Record<HeroViewId, () => ReactNode> = {
  home: () => <HomeHeroBody />,
  about: () => <AboutHeroBody />,
  articles: () => <ArticlesHeroBody />,
  shop: () => <ShopHeroBody />,
  contact: () => <ContactHeroBody />,
};
