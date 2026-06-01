export const refundPolicyPage = {
  href: "/policies/refund-cancellation",
  label: "Refund & Cancellation Policy",
} as const;

/** Resumen visible en checkout y ofertas; la política completa está en refundPolicyPage. */
export const refundPolicyHighlights = [
  "You may cancel and request a full refund within three (3) days (72 hours) of purchase or signing, provided you have not accessed proprietary materials or attended any session.",
  "After the 3-day period, all sales are final. Refunds are only considered at our discretion for undelivered services or billing errors.",
  "Approved refunds are processed within 5–10 business days. Session cancellations require at least 24 hours' notice.",
] as const;

export const termsHighlight =
  "Results may vary. We do not guarantee specific revenue, growth, or performance outcomes.";

/** Aviso en páginas de detalle de producto (/shop/[id]). */
export const productNonRefundableNotice = {
  title: "Non-refundable product",
  body: "This product is non-refundable. All sales are final at the time of purchase. No refunds or cancellations will be issued once payment is completed, except where required by applicable law.",
} as const;
