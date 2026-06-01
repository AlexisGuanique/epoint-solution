export const refundPolicyPage = {
  href: "/policies/refund-cancellation",
  label: "Refund & Cancellation Policy",
} as const;

/** Resumen visible donde se usa context="general". */
export const refundPolicyHighlights = [
  "All programs and services are non-refundable. All sales are final at the time of purchase.",
  "No refunds or cancellations will be issued once payment is completed, except where required by applicable law.",
  "Session rescheduling may be available with at least 24 hours' notice; missed sessions are non-refundable.",
] as const;

export const termsHighlight =
  "Results may vary. We do not guarantee specific revenue, growth, or performance outcomes.";

/** Aviso en páginas de detalle de producto (/shop/[id]). */
export const productNonRefundableNotice = {
  title: "Non-refundable product",
  body: "This product is non-refundable. All sales are final at the time of purchase. No refunds or cancellations will be issued once payment is completed, except where required by applicable law.",
} as const;
