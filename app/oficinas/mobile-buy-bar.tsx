"use client";

import { useEffect, useState } from "react";
import styles from "./oficinas.module.css";

export function MobileBuyBar({ checkoutUrl }: Readonly<{ checkoutUrl: string }>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 240);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      className={`${styles.mobileSticky} ${isVisible ? styles.mobileStickyVisible : ""}`}
      aria-label="Compra rápida do ebook"
    >
      <span>500 PROMPTS — R$ 29,90</span>
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Comprar ebook por R$ 29,90 na Hotmart"
        data-analytics="cta"
        data-category="Oficinas"
        data-event="hotmart_checkout_click"
        data-label="COMPRAR POR APENAS R$ 29,90!"
        data-location="mobile-sticky"
        className={`${styles.buyButton} ${styles.buyButtonCompact}`}
      >
        QUERO AGORA
      </a>
    </div>
  );
}
