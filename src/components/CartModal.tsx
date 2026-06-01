"use client";

import Image from "next/image";
import Link from "next/link";
import { HiMinus, HiPlus, HiTrash, HiXMark } from "react-icons/hi2";
import { useCart } from "@/context/CartContext";
import { formatCents } from "@/lib/cart";
import { contactInfo } from "@/data/content";

function buildCheckoutMailto(
  items: ReturnType<typeof useCart>["items"],
  totalCents: number
) {
  const lines = items.map(
    (item) =>
      `- ${item.title} x${item.quantity} — ${formatCents(item.priceCents * item.quantity)}`
  );
  const body = [
    "Hello, I would like to complete my purchase:",
    "",
    ...lines,
    "",
    `Total: ${formatCents(totalCents)}`,
  ].join("\n");

  return `mailto:${contactInfo.email.display}?subject=${encodeURIComponent("EPoint Solution — Cart Checkout")}&body=${encodeURIComponent(body)}`;
}

export function CartModal() {
  const {
    items,
    totalCents,
    isOpen,
    closeCart,
    removeItem,
    setQuantity,
  } = useCart();

  if (!isOpen) return null;

  const isEmpty = items.length === 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-black/45"
        onClick={closeCart}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-[0_24px_64px_rgba(45,27,15,0.22)] sm:max-h-[85vh] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
          <h2
            id="cart-modal-title"
            className="font-(family-name:--font-poppins) text-lg font-bold uppercase text-[#0D141A] sm:text-xl"
          >
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close"
            className="rounded-full p-2 text-[#432F23] transition hover:bg-[#432F23]/10"
          >
            <HiXMark className="size-6" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          {isEmpty ? (
            <div className="py-10 text-center">
              <p className="font-(family-name:--font-roboto) text-base text-gray-600">
                Your cart is empty.
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="mt-6 inline-block rounded-lg bg-[#2D1B0F] px-6 py-3 font-(family-name:--font-roboto) text-sm font-semibold text-white transition hover:bg-[#3D2817]"
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.productId}
                  className="flex gap-3 rounded-xl border border-gray-100 bg-[#FAFAF8] p-3 sm:gap-4 sm:p-4"
                >
                  <Link
                    href={`/shop/${item.productId}`}
                    onClick={closeCart}
                    className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white sm:h-24 sm:w-24"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-contain object-center p-1.5"
                      sizes="96px"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link
                      href={`/shop/${item.productId}`}
                      onClick={closeCart}
                      className="line-clamp-2 font-(family-name:--font-poppins) text-xs font-semibold uppercase leading-snug text-[#0D141A] hover:text-[#2D1B0F] sm:text-sm"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 font-(family-name:--font-poppins) text-sm font-semibold text-[#2D1B0F]">
                      {item.price}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
                      <div className="flex items-center rounded-lg border border-gray-200 bg-white">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.title}`}
                          onClick={() =>
                            setQuantity(item.productId, item.quantity - 1)
                          }
                          className="flex h-9 w-9 items-center justify-center text-[#432F23] transition hover:bg-gray-50"
                        >
                          <HiMinus className="size-4" aria-hidden />
                        </button>
                        <span className="min-w-8 text-center font-(family-name:--font-roboto) text-sm font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.title}`}
                          onClick={() =>
                            setQuantity(item.productId, item.quantity + 1)
                          }
                          className="flex h-9 w-9 items-center justify-center text-[#432F23] transition hover:bg-gray-50"
                        >
                          <HiPlus className="size-4" aria-hidden />
                        </button>
                      </div>

                      <button
                        type="button"
                        aria-label={`Remove ${item.title} from cart`}
                        onClick={() => removeItem(item.productId)}
                        className="flex items-center gap-1 rounded-lg px-2 py-1.5 font-(family-name:--font-roboto) text-xs text-gray-500 transition hover:bg-red-50 hover:text-red-700"
                      >
                        <HiTrash className="size-4" aria-hidden />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isEmpty ? (
          <div className="border-t border-gray-100 bg-[#F9F7F2] px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center justify-between">
              <span className="font-(family-name:--font-roboto) text-sm font-medium text-gray-600">
                Total
              </span>
              <span className="font-(family-name:--font-poppins) text-xl font-bold text-[#2D1B0F] sm:text-2xl">
                {formatCents(totalCents)}
              </span>
            </div>

            <a
              href={buildCheckoutMailto(items, totalCents)}
              onClick={closeCart}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#2D1B0F] px-6 py-3.5 font-(family-name:--font-poppins) text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#3D2817]"
            >
              Proceed to Checkout
            </a>
            <Link
              href="/shop"
              onClick={closeCart}
              className="mt-3 block text-center font-(family-name:--font-roboto) text-sm text-[#432F23] underline-offset-2 hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
