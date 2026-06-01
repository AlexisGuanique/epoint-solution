"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { NavigationFocusFix } from "@/components/NavigationFocusFix";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <NavigationFocusFix />
      {children}
    </CartProvider>
  );
}
