import { navLinks } from "@/data/content";

/** Resuelve el href activo del hero según la ruta actual (App Router) */
export function getHeroActiveHref(pathname: string): (typeof navLinks)[number]["href"] {
  const match = navLinks.find((link) => link.href === pathname);
  return match?.href ?? navLinks[0].href;
}
