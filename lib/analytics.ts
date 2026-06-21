export const GA_MEASUREMENT_ID = "G-L0QM1248BX";

type GtagCommand = "event" | "config" | "js";

type AnalyticsParameters = {
  event_category?: string;
  event_label?: string;
  location?: string;
  link_url?: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: GtagCommand,
      target: string | Date,
      parameters?: AnalyticsParameters
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters: AnalyticsParameters = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("event", eventName, parameters);
}

export function trackPageView(pagePath: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
  });
}

export function trackWhatsAppClick({
  label,
  location,
  linkUrl,
}: {
  label: string;
  location: string;
  linkUrl: string;
}) {
  trackEvent("whatsapp_click", {
    event_category: "Contato",
    event_label: label,
    location,
    link_url: linkUrl,
  });
}

export function trackCtaClick({
  label,
  location,
  linkUrl,
}: {
  label: string;
  location: string;
  linkUrl?: string;
}) {
  trackEvent("cta_click", {
    event_category: "CTA",
    event_label: label,
    location,
    link_url: linkUrl,
  });
}

export function trackExternalLinkClick({
  label,
  location,
  linkUrl,
}: {
  label: string;
  location: string;
  linkUrl: string;
}) {
  trackEvent("external_link_click", {
    event_category: "Link externo",
    event_label: label,
    location,
    link_url: linkUrl,
  });
}
