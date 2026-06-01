"use client";

import { useEffect, useState } from "react";

/** Mínimo 2 testimonios visibles desde tablet */
export function useTestimonialVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setCount(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setCount(2);
      } else {
        setCount(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}
