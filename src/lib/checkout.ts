import { contactInfo, products } from "@/data/content";
import { productTabContent } from "@/data/productTabContent";
import type { CartLineItem } from "@/lib/cart";
import { formatCents } from "@/lib/cart";

function getProductDescription(productId: string): string {
  const tab = productTabContent[productId as keyof typeof productTabContent];
  if (tab?.summary?.paragraphs[0]) {
    return tab.summary.paragraphs[0];
  }
  if (tab?.tabDescription?.paragraphs[0]) {
    return tab.tabDescription.paragraphs[0];
  }
  const product = products.find((p) => p.id === productId);
  return product?.title ?? productId;
}

function formatLineItem(item: CartLineItem): string {
  const description = getProductDescription(item.productId);
  const lineTotal = formatCents(item.priceCents * item.quantity);

  return [
    `Product: ${item.title}`,
    `Description: ${description}`,
    `Quantity: ${item.quantity}`,
    `Unit price: ${item.price}`,
    `Line total: ${lineTotal}`,
  ].join("\n");
}

export function buildCheckoutMailto(
  items: readonly CartLineItem[],
  totalCents: number
) {
  const itemBlocks = items.map(
    (item, index) => `--- Item ${index + 1} ---\n${formatLineItem(item)}`
  );

  const body = [
    "Hello,",
    "",
    "I would like to complete my purchase. Please send me payment instructions for the following order:",
    "",
    ...itemBlocks,
    "",
    "--- Order total ---",
    formatCents(totalCents),
    "",
    "Thank you.",
  ].join("\n");

  const subject = "EPoint Solution — Payment request";

  return `mailto:${contactInfo.email.display}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
