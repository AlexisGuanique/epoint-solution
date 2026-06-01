"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Evita que el foco se quede en el nav del Hero tras cambiar de ruta
 * (el navegador hace scrollIntoView hacia el enlace enfocado).
 */
export function NavigationFocusFix() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const active = document.activeElement;
    if (active instanceof HTMLElement) {
      active.blur();
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const main = document.getElementById("main-content");
    if (main instanceof HTMLElement) {
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
