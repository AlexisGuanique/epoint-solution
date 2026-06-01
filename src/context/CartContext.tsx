"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CartModal } from "@/components/CartModal";
import {
  CART_STORAGE_KEY,
  getCartItemCount,
  getCartTotalCents,
  parsePriceToCents,
  type CartLineItem,
} from "@/lib/cart";
import type { ShopProduct } from "@/data/content";

type Product = ShopProduct;

type CartContextValue = {
  items: CartLineItem[];
  itemCount: number;
  totalCents: number;
  isOpen: boolean;
  isHydrated: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  cartPulseKey: number;
  bumpCartAnimation: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadStoredItems(): CartLineItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLineItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.productId === "string" &&
        typeof item.quantity === "number" &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [cartPulseKey, setCartPulseKey] = useState(0);

  useEffect(() => {
    setItems(loadStoredItems());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const bumpCartAnimation = useCallback(() => {
    setCartPulseKey((key) => key + 1);
  }, []);

  const addItem = useCallback((product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id);
      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...current,
        {
          productId: product.id,
          title: product.title,
          price: product.price,
          priceCents: parsePriceToCents(product.price),
          image: product.image,
          quantity: 1,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) =>
      current.filter((item) => item.productId !== productId)
    );
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((current) =>
        current.filter((item) => item.productId !== productId)
      );
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const itemCount = useMemo(() => getCartItemCount(items), [items]);
  const totalCents = useMemo(() => getCartTotalCents(items), [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      totalCents,
      isOpen,
      isHydrated,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQuantity,
      cartPulseKey,
      bumpCartAnimation,
    }),
    [
      items,
      itemCount,
      totalCents,
      isOpen,
      isHydrated,
      openCart,
      closeCart,
      addItem,
      removeItem,
      setQuantity,
      cartPulseKey,
      bumpCartAnimation,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartModal />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
