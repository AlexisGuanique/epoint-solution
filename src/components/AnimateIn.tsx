"use client";

import { useEffect, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const hiddenByDirection: Record<Direction, string> = {
  up: "translate-y-8 opacity-0",
  down: "-translate-y-8 opacity-0",
  left: "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
};

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

export function AnimateIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
}: AnimateInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 50);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
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
