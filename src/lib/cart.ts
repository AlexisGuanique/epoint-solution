export type CartLineItem = {
  productId: string;
  title: string;
  price: string;
  priceCents: number;
  image: string;
  quantity: number;
};

export const CART_STORAGE_KEY = "epoint-cart-v1";

export function parsePriceToCents(price: string): number {
  const value = parseFloat(price.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(value)) return 0;
  return Math.round(value * 100);
}

export function formatCents(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function getCartTotalCents(items: readonly CartLineItem[]): number {
  return items.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );
}

export function getCartItemCount(items: readonly CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
