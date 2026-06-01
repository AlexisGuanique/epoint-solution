"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { ProductDetailTabs } from "@/components/ProductDetailTabs";
import { ProductGuidesCarousel } from "@/components/ProductGuidesCarousel";
import { RefundPolicyNotice } from "@/components/RefundPolicyNotice";
import { AddToCartButton } from "@/components/AddToCartButton";
import { productActionButtonOutline } from "@/components/productActionButtonStyles";
import { useCart } from "@/context/CartContext";
import type { ShopProduct } from "@/data/content";

type Product = ShopProduct;

type ProductDetailProps = {
  product: Product;
};

type GalleryImage = {
  src: string;
  label: string;
  variant: "contain" | "cover";
};

function buildGallery(product: Product): GalleryImage[] {
  return [
    {
      src: product.image,
      label: "Vista del producto",
      variant: "contain",
    },
    {
      src: product.imageDetail,
      label: "Vista ampliada del programa",
      variant: "cover",
    },
  ];
}

function ProductGallery({
  images,
  title,
}: {
  images: GalleryImage[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-[0_4px_24px_rgba(45,27,15,0.08)] md:rounded-3xl">
        <div
          className={`relative aspect-4/3 w-full ${
            active.variant === "contain" ? "bg-white" : "bg-[#F8F4ED]"
          }`}
        >
          <Image
            key={active.src}
            src={active.src}
            alt={`${title} — ${active.label}`}
            fill
            className={
              active.variant === "contain"
                ? "object-contain object-center p-4 sm:p-6"
                : "object-cover object-center"
            }
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={activeIndex === 0}
          />
          <span
            className="pointer-events-none absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#2D1B0F] shadow-sm sm:right-4 sm:top-4"
            aria-hidden
          >
            <HiMagnifyingGlassPlus className="size-5" />
          </span>
        </div>
      </div>

      <div
        className="mt-4 flex gap-3 overflow-x-auto pb-1 sm:mt-5 sm:gap-4"
        role="tablist"
        aria-label="Imágenes del producto"
      >
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={image.label}
              onClick={() => setActiveIndex(index)}
              className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-all sm:h-20 sm:w-20 md:h-[88px] md:w-[88px] ${
                isActive
                  ? "border-[#2D1B0F] shadow-[0_4px_12px_rgba(45,27,15,0.15)]"
                  : "border-gray-200 opacity-80 hover:border-gray-300 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                className={
                  image.variant === "contain"
                    ? "object-contain object-center p-1.5"
                    : "object-cover object-center"
                }
                sizes="88px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProductDetail({ product }: ProductDetailProps) {
  const galleryImages = buildGallery(product);
  const summary = product.summary ?? product.tabDescription;
  const { openCart } = useCart();

  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <ProductGallery images={galleryImages} title={product.title} />

          <div className="flex flex-col lg:pt-2">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 sm:text-sm">
              {product.category}
            </p>
            <div className="mt-2 h-px w-10 bg-gray-300" />
            <h2 className="mt-3 font-(family-name:--font-poppins) text-lg font-bold uppercase leading-snug text-[#0D141A] sm:text-xl md:text-2xl">
              {product.title}
            </h2>
            <p className="mt-4 font-(family-name:--font-poppins) text-2xl font-semibold text-[#2D1B0F] sm:text-3xl">
              {product.price}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <AddToCartButton product={product} />
              <button
                type="button"
                onClick={openCart}
                className={productActionButtonOutline}
              >
                View Cart
              </button>
            </div>

            <p className="mt-5 font-(family-name:--font-poppins) text-sm font-semibold leading-snug text-[#2D1B0F] sm:text-base">
              {summary.tagline}
            </p>

            <div className="mt-4 space-y-4 font-(family-name:--font-roboto) text-sm leading-relaxed text-gray-600 sm:text-base">
              {summary.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <RefundPolicyNotice
              context="product"
              className="mt-6 rounded-xl border border-gray-100 bg-[#F9F7F2] p-4 sm:p-5"
            />
          </div>
        </div>

        <ProductDetailTabs product={product} />
      </div>

      <ProductGuidesCarousel currentProductId={product.id} />

      <div className="mx-auto max-w-6xl">
        <Link
          href="/shop"
          className="mt-10 inline-flex items-center gap-2 font-(family-name:--font-roboto) text-sm font-medium text-[#2D1B0F] transition-opacity hover:opacity-80 sm:mt-12"
        >
          <span aria-hidden>←</span>
          Back to Shop
        </Link>
      </div>
    </section>
  );
}
