import { calendlyConfig } from "@/config/calendly";

export function CalendlyEmbed() {
  const embedUrl = `${calendlyConfig.url}?embed_type=Inline`;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <iframe
        title={calendlyConfig.eventTitle}
        src={embedUrl}
        className="min-h-[700px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
