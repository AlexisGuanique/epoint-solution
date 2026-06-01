"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const hiddenByDirection: Record<Direction, string> = {
  up: "translate-y-10 opacity-0",
  down: "-translate-y-10 opacity-0",
  left: "-translate-x-12 opacity-0",
  right: "translate-x-12 opacity-0",
};

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

export function AnimateOnScroll({
  children,
  className = "",
  direction = "left",
  delay = 0,
  duration = 700,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-none ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : hiddenByDirection[direction]
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
