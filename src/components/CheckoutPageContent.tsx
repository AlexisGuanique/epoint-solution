"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RefundPolicyNotice } from "@/components/RefundPolicyNotice";
import { checkoutConfig } from "@/config/checkout";
import { contactInfo } from "@/data/content";
import { useCart } from "@/context/CartContext";
import { buildCheckoutMailto } from "@/lib/checkout";
import { formatCents } from "@/lib/cart";

export function CheckoutPageContent() {
  const router = useRouter();
  const { items, totalCents, isHydrated } = useCart();
  const isEmpty = items.length === 0;

  useEffect(() => {
    if (isHydrated && isEmpty) {
      router.replace("/shop");
    }
  }, [isHydrated, isEmpty, router]);

  if (!isHydrated || isEmpty) {
    return (
      <section className="bg-white px-4 py-16 text-center md:px-6">
        <p className="font-(family-name:--font-roboto) text-gray-600">
          Loading your cart…
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-(family-name:--font-poppins) text-xl font-bold uppercase text-[#0D141A] sm:text-2xl">
          Order summary
        </h2>

        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item.productId}
              className="flex gap-4 rounded-xl border border-gray-100 bg-[#FAFAF8] p-4"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-contain object-center p-1.5"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-(family-name:--font-poppins) text-sm font-semibold uppercase leading-snug text-[#0D141A]">
                  {item.title}
                </p>
                <p className="mt-1 font-(family-name:--font-roboto) text-sm text-gray-600">
                  Qty: {item.quantity} × {item.price}
                </p>
                <p className="mt-1 font-(family-name:--font-poppins) text-sm font-semibold text-[#2D1B0F]">
                  {formatCents(item.priceCents * item.quantity)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
          <span className="font-(family-name:--font-roboto) text-base font-medium text-gray-600">
            Total
          </span>
          <span className="font-(family-name:--font-poppins) text-2xl font-bold text-[#2D1B0F]">
            {formatCents(totalCents)}
          </span>
        </div>

        <RefundPolicyNotice
          context="product"
          className="mt-8 rounded-xl border border-gray-100 bg-[#F9F7F2] p-4 sm:p-5"
        />

        <div className="mt-8 space-y-3">
          <a
            href={buildCheckoutMailto(items, totalCents)}
            className="flex w-full items-center justify-center rounded-xl bg-[#2D1B0F] px-6 py-4 font-(family-name:--font-poppins) text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#3D2817]"
          >
            Proceed to Pay
          </a>
          <p className="text-center font-(family-name:--font-roboto) text-xs text-gray-500">
            Opens your email app with your order details so you can request
            payment instructions.
          </p>

          <Link
            href={checkoutConfig.bookingPath}
            className="block text-center font-(family-name:--font-roboto) text-sm text-[#432F23] underline-offset-2 hover:underline"
          >
            Or schedule a free consultation first
          </Link>
        </div>

        <p className="mt-6 text-center font-(family-name:--font-roboto) text-sm text-gray-600">
          Questions? Call{" "}
          <a
            href={contactInfo.phone.href}
            className="font-medium text-[#2D1B0F] hover:underline"
          >
            {contactInfo.phone.display}
          </a>{" "}
          or{" "}
          <Link
            href={checkoutConfig.contactPath}
            className="font-medium text-[#2D1B0F] hover:underline"
          >
            contact our team
          </Link>
          .
        </p>

        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 font-(family-name:--font-roboto) text-sm font-medium text-[#2D1B0F] hover:opacity-80"
        >
          <span aria-hidden>←</span>
          Back to Shop
        </Link>
      </div>
    </section>
  );
}
