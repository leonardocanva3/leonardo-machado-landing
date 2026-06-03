import { whatsappHref } from "@/app/components/brand";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

export function FloatingWhatsapp() {
  return (
    <WhatsAppLink
      href={whatsappHref}
      trackingLocation="floating_whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Converse com o Léo pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex max-w-[calc(100vw-2.5rem)] items-center justify-center rounded-full border border-sky-200/30 bg-[#06111f]/85 px-5 py-3 text-sm font-bold text-sky-50 shadow-[0_18px_45px_rgba(14,165,233,0.24)] backdrop-blur-xl transition hover:scale-[1.02] hover:border-sky-100/60 hover:shadow-[0_20px_70px_rgba(56,189,248,0.36)] sm:bottom-6 sm:right-6"
    >
      ☕ Converse com o Léo
    </WhatsAppLink>
  );
}
