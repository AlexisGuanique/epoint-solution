import type { ReactNode } from "react";
import type { navLinks } from "@/data/content";

export type HeroViewId = (typeof navLinks)[number]["view"];

export type HeroProps = {
  /** Contenido bajo la barra de navegación; cada página define el suyo */
  children: ReactNode;
  /** Debe coincidir con el `href` del ítem activo en `navLinks` */
  activeHref: (typeof navLinks)[number]["href"];
};
