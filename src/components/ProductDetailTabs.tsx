"use client";

import { useState } from "react";
import type { ShopProduct } from "@/data/content";

type Product = ShopProduct;

type ProductDetailTabsProps = {
  product: Product;
};

type TabId = "description" | "reviews";

export function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("description");
  const { tabDescription, reviewCount } = product;

  const hasWhatsIncluded =
    tabDescription.whatsIncluded && tabDescription.whatsIncluded.length > 0;
  const hasWhoItsFor =
    tabDescription.whoItsFor && tabDescription.whoItsFor.length > 0;
  const hasExpectedOutcomes =
    tabDescription.expectedOutcomes &&
    tabDescription.expectedOutcomes.length > 0;
  const hasClosing = Boolean(tabDescription.closing);

  return (
    <div className="mt-10 border-t border-gray-200 pt-8 sm:mt-12 sm:pt-10">
      <div
        className="flex gap-6 border-b border-gray-200 sm:gap-10"
        role="tablist"
        aria-label="Información del producto"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "description"}
          onClick={() => setActiveTab("description")}
          className={`pb-3 font-(family-name:--font-roboto) text-sm font-medium transition-colors sm:text-base ${
            activeTab === "description"
              ? "border-b-2 border-[#2D1B0F] text-[#2D1B0F]"
              : "text-gray-500 hover:text-[#2D1B0F]"
          }`}
        >
          Description
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 font-(family-name:--font-roboto) text-sm font-medium transition-colors sm:text-base ${
            activeTab === "reviews"
              ? "border-b-2 border-[#2D1B0F] text-[#2D1B0F]"
              : "text-gray-500 hover:text-[#2D1B0F]"
          }`}
        >
          Reviews ({reviewCount})
        </button>
      </div>

      {activeTab === "description" ? (
        <div
          role="tabpanel"
          className="pt-6 font-(family-name:--font-roboto) text-base leading-relaxed text-gray-600 sm:pt-8 sm:text-lg"
        >
          <h3 className="font-(family-name:--font-poppins) text-lg font-semibold leading-snug text-[#2D1B0F] sm:text-xl">
            {tabDescription.tagline}
          </h3>

          <div className="mt-5 space-y-4">
            {tabDescription.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {hasWhatsIncluded ? (
            <>
              <h4 className="mt-8 font-(family-name:--font-poppins) text-base font-bold text-[#0D141A] sm:text-lg">
                {tabDescription.whatsIncludedHeading ?? "What's Included:"}
              </h4>
              <ul className="mt-4 space-y-4">
                {tabDescription.whatsIncluded!.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-[#333]">
                      {item.title}
                    </span>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {hasWhoItsFor ? (
            <>
              <h4 className="mt-8 font-(family-name:--font-poppins) text-base font-bold text-[#0D141A] sm:text-lg">
                Who It&apos;s For:
              </h4>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {tabDescription.whoItsFor!.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {hasExpectedOutcomes ? (
            <>
              <h4 className="mt-8 font-(family-name:--font-poppins) text-base font-bold text-[#0D141A] sm:text-lg">
                {tabDescription.expectedOutcomesHeading ?? "Expected Outcomes:"}
              </h4>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {tabDescription.expectedOutcomes!.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {hasClosing ? (
            <p className="mt-8 font-medium text-[#333]">
              {tabDescription.closing}
            </p>
          ) : null}
        </div>
      ) : (
        <div
          role="tabpanel"
          className="py-10 text-center font-(family-name:--font-roboto) text-base text-gray-500"
        >
          <p>No reviews yet.</p>
        </div>
      )}
    </div>
  );
}
