import Link from "next/link";

export function TopBar() {
  return (
    <div className="flex flex-wrap justify-end gap-x-2 gap-y-1 py-1 text-right text-[10px] text-gray-500 sm:text-xs">
      <Link
        href="/policies/refund-cancellation"
        className="hover:text-[#2D1B0F]"
        onClick={(event) => event.currentTarget.blur()}
      >
        Refund &amp; Cancellation Policy
      </Link>
      <span className="hidden sm:inline" aria-hidden>
        |
      </span>
      <Link
        href="/policies/terms-of-service"
        className="hover:text-[#2D1B0F]"
        onClick={(event) => event.currentTarget.blur()}
      >
        Terms Of Service
      </Link>
    </div>
  );
}
