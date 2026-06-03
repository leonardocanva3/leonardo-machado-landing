"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "generate_lead",
      parameters: {
        method: "whatsapp";
        location: string;
      }
    ) => void;
  }
}

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackingLocation: string;
};

export function trackWhatsAppClick(location: string) {
  window.gtag?.("event", "generate_lead", {
    method: "whatsapp",
    location,
  });
}

export function WhatsAppLink({
  trackingLocation,
  onClick,
  ...props
}: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackWhatsAppClick(trackingLocation);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}
