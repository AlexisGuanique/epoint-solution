import { linkedInCompany } from "@/data/content";

function getLinkedInUrl(): string | null {
  const url =
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || linkedInCompany.href.trim();

  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("linkedin.com")) {
      console.warn(
        "[social] NEXT_PUBLIC_LINKEDIN_URL debe ser un enlace de linkedin.com."
      );
      return null;
    }
    return parsed.toString();
  } catch {
    console.warn("[social] NEXT_PUBLIC_LINKEDIN_URL no es una URL válida.");
    return null;
  }
}

export const socialConfig = {
  /** Página de empresa en LinkedIn (requerida para revisión de pagos B2B). */
  linkedInUrl: getLinkedInUrl(),
  linkedInLabel: linkedInCompany.label,
} as const;
