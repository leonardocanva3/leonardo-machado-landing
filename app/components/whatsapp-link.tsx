"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackCtaClick, trackWhatsAppClick } from "@/lib/analytics";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackingLocation: string;
  trackingLabel?: string;
  trackCta?: boolean;
};

export function WhatsAppLink({
  trackingLocation,
  trackingLabel,
  trackCta = true,
  onClick,
  href,
  children,
  ...props
}: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const label =
      trackingLabel ||
      event.currentTarget.textContent?.trim() ||
      event.currentTarget.getAttribute("aria-label") ||
      trackingLocation;
    const linkUrl = event.currentTarget.href;

    trackWhatsAppClick({
      label,
      location: trackingLocation,
      linkUrl,
    });

    if (trackCta) {
      trackCtaClick({
        label,
        location: trackingLocation,
        linkUrl,
      });
    }

    onClick?.(event);
  }

  return (
    <a
      {...props}
      href={href}
      data-analytics="whatsapp"
      data-event="whatsapp_click"
      data-location={trackingLocation}
      data-label={trackingLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
