"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { HiCheck, HiShoppingCart } from "react-icons/hi2";
import { productActionButtonBase } from "@/components/productActionButtonStyles";
import { useCart } from "@/context/CartContext";
import type { ShopProduct } from "@/data/content";

type Product = ShopProduct;

type AddToCartButtonProps = {
  product: Product;
};

const SUCCESS_MS = 2400;
const SPLASH_PARTICLES = 8;

function CheckWithSplash() {
  return (
    <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
      <span className="cart-check-splash-ring" aria-hidden />
      {Array.from({ length: SPLASH_PARTICLES }, (_, index) => (
        <span
          key={index}
          className="cart-check-splash-dot"
          style={
            {
              "--splash-angle": `${index * (360 / SPLASH_PARTICLES)}deg`,
            } as CSSProperties
          }
          aria-hidden
        />
      ))}
      <HiCheck className="relative z-10 size-5" aria-hidden />
    </span>
  );
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, bumpCartAnimation } = useCart();
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResetTimer = useCallback(() => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearResetTimer(), [clearResetTimer]);

  const handleAddToCart = useCallback(() => {
    clearResetTimer();

    addItem(product);
    bumpCartAnimation();
    setStatus("success");

    resetTimerRef.current = setTimeout(() => {
      setStatus("idle");
      resetTimerRef.current = null;
    }, SUCCESS_MS);
  }, [addItem, bumpCartAnimation, clearResetTimer, product]);

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={status === "success"}
      aria-live="polite"
      className={`${productActionButtonBase} relative text-white transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none ${
        status === "success"
          ? "overflow-visible scale-[1.02] bg-[#3D6B45] shadow-[0_8px_24px_rgba(61,107,69,0.35)]"
          : "overflow-hidden bg-[#2D1B0F] hover:bg-[#3D2817] active:scale-[0.98]"
      }`}
    >
      <span
        className={`flex items-center justify-center gap-2 transition-all duration-300 ${
          status === "success" ? "animate-cart-button-success" : ""
        }`}
      >
        {status === "success" ? (
          <>
            <CheckWithSplash />
            Added!
          </>
        ) : (
          <>
            <HiShoppingCart className="size-5 shrink-0 opacity-90" aria-hidden />
            Add to Cart
          </>
        )}
      </span>
    </button>
  );
}
