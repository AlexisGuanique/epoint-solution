import Link from "next/link";
import {
  productNonRefundableNotice,
  refundPolicyHighlights,
  refundPolicyPage,
  termsHighlight,
} from "@/data/refundPolicy";

type RefundPolicyNoticeProps = {
  variant?: "light" | "dark";
  /** general: resumen con ventana de 3 días (home, etc.). product: no reembolsable. */
  context?: "general" | "product";
  className?: string;
};

const variantStyles = {
  light: {
    wrapper: "text-gray-600",
    title: "text-[#2D1B0F]",
    link: "text-[#2D1B0F] underline underline-offset-2 hover:opacity-80",
    terms: "text-gray-500",
  },
  dark: {
    wrapper: "text-[#ECE9D8]/90",
    title: "text-[#ECE9D8]",
    link: "text-[#ECE9D8] underline underline-offset-2 hover:text-white",
    terms: "text-[#ECE9D8]/80",
  },
} as const;

export function RefundPolicyNotice({
  variant = "light",
  context = "general",
  className = "",
}: RefundPolicyNoticeProps) {
  const styles = variantStyles[variant];
  const isProduct = context === "product";

  return (
    <div
      className={`font-(family-name:--font-roboto) text-sm leading-relaxed sm:text-base ${styles.wrapper} ${className}`}
    >
      {isProduct ? (
        <div
          className={`rounded-lg border px-4 py-3 ${
            variant === "light"
              ? "border-[#2D1B0F]/20 bg-[#2D1B0F]/5"
              : "border-[#ECE9D8]/25 bg-[#ECE9D8]/10"
          }`}
        >
          <p className={`font-bold uppercase tracking-wide ${styles.title}`}>
            {productNonRefundableNotice.title}
          </p>
          <p className="mt-2">{productNonRefundableNotice.body}</p>
        </div>
      ) : (
        <>
          <p className={`font-semibold ${styles.title}`}>
            Refund &amp; cancellation summary
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {refundPolicyHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
      <p className="mt-3">
        <Link href={refundPolicyPage.href} className={styles.link}>
          Read our full {refundPolicyPage.label}
        </Link>
        {isProduct
          ? " for complete terms."
          : " for complete non-refundable terms, session policies, and billing inquiries."}
      </p>
      <p className={`mt-3 text-sm ${styles.terms}`}>{termsHighlight}</p>
    </div>
  );
}
