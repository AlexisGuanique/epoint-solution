function getPaymentUrl(): string | null {
  const url =
    process.env.NEXT_PUBLIC_PAYMENT_URL?.trim() ||
    process.env.NEXT_PUBLIC_SQUARE_CHECKOUT_URL?.trim();

  if (!url) {
    return null;
  }

  try {
    return new URL(url).toString();
  } catch {
    console.warn(
      "[checkout] NEXT_PUBLIC_PAYMENT_URL / NEXT_PUBLIC_SQUARE_CHECKOUT_URL no es una URL válida."
    );
    return null;
  }
}

export const checkoutConfig = {
  /** Enlace externo de pago (Square, Stripe, etc.). Si no está definido, se usa /contact. */
  paymentUrl: getPaymentUrl(),
  contactPath: "/contact",
  bookingPath: "/booking",
} as const;
