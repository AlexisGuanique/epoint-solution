"use client";

import { BsCart4 } from "react-icons/bs";
import { useCart } from "@/context/CartContext";

type CartTriggerProps = {
  className?: string;
};

export function CartTrigger({ className = "" }: CartTriggerProps) {
  const { itemCount, isHydrated, openCart, cartPulseKey } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={
        itemCount > 0
          ? `Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`
          : "Open cart"
      }
      className={`relative rounded-full p-1 transition-opacity hover:opacity-70 sm:p-1.5 ${className}`}
    >
      <BsCart4
        key={cartPulseKey > 0 ? `cart-icon-${cartPulseKey}` : "cart-icon"}
        className={`h-6 w-6 text-[#432F23] ${
          cartPulseKey > 0 ? "animate-cart-icon-pop" : ""
        }`}
        aria-hidden
      />
      {isHydrated && itemCount > 0 ? (
        <span
          key={`cart-badge-${cartPulseKey}-${itemCount}`}
          className="absolute -right-0.5 -top-0.5 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[#2D1B0F] px-1 text-[10px] font-bold leading-none text-white animate-cart-badge-pop"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      ) : cartPulseKey > 0 && isHydrated ? (
        <span
          key={`cart-badge-new-${cartPulseKey}`}
          className="absolute -right-0.5 -top-0.5 flex size-2.5 rounded-full bg-[#3D6B45] animate-cart-badge-pop"
          aria-hidden
        />
      ) : null}
    </button>
  );
}
