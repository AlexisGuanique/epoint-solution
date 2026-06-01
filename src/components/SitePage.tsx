import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import type { ReactNode } from "react";

type SitePageProps = {
  children: ReactNode;
};

/** Layout base: contenido en main + footer y cookies en todas las rutas */
export function SitePage({ children }: SitePageProps) {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
