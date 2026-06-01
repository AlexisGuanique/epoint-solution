const DEFAULT_CALENDLY_URL =
  "https://calendly.com/eberthsperozo/epoint-solution-1-1-consultation";

function getCalendlyUrl() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();

  if (!url) {
    return DEFAULT_CALENDLY_URL;
  }

  try {
    const parsed = new URL(url);
    if (parsed.hostname !== "calendly.com") {
      console.warn(
        "[calendly] NEXT_PUBLIC_CALENDLY_URL debe ser un enlace de calendly.com. Usando valor por defecto."
      );
      return DEFAULT_CALENDLY_URL;
    }
    return parsed.toString().replace(/\/$/, "");
  } catch {
    console.warn(
      "[calendly] NEXT_PUBLIC_CALENDLY_URL no es una URL válida. Usando valor por defecto."
    );
    return DEFAULT_CALENDLY_URL;
  }
}

export const calendlyConfig = {
  /** URL completa del evento Calendly (cuenta + tipo de cita) */
  url: getCalendlyUrl(),
  eventTitle: "EPOINT SOLUTION 1-1 CONSULTATION",
  hostName: "Eberths Perozo",
  duration: "30 min",
  locationNote: "Web conferencing details provided upon confirmation.",
} as const;

/**
 * Usuario Calendly extraído de la URL (p. ej. "eberthsperozo").
 * El correo del anfitrión se gestiona en el panel de Calendly, no en esta app.
 */
export function getCalendlyUsername() {
  try {
    const pathname = new URL(calendlyConfig.url).pathname;
    return pathname.split("/").filter(Boolean)[0] ?? null;
  } catch {
    return null;
  }
}
