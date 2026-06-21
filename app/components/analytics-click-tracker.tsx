"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getEventLabel(element: HTMLElement) {
  return (
    element.dataset.label ||
    element.getAttribute("aria-label") ||
    element.textContent?.trim() ||
    element.dataset.location ||
    "click"
  );
}

export function AnalyticsClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const analyticsElement = target.closest<HTMLElement>("[data-analytics]");

      if (!analyticsElement) {
        return;
      }

      if (analyticsElement.dataset.analytics === "whatsapp") {
        return;
      }

      const eventName = analyticsElement.dataset.event;

      if (!eventName) {
        return;
      }

      trackEvent(eventName, {
        event_category: analyticsElement.dataset.category,
        event_label: getEventLabel(analyticsElement),
        location: analyticsElement.dataset.location,
        link_url:
          analyticsElement instanceof HTMLAnchorElement
            ? analyticsElement.href
            : analyticsElement.dataset.linkUrl,
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
