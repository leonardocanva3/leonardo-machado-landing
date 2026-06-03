import { navigationItems, whatsappHref } from "@/app/components/brand";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070a]/80 backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-5 sm:h-28 sm:gap-6 sm:px-8 lg:h-32 lg:gap-10"
      >
        <a
          href="#inicio"
          className="flex w-[240px] shrink-0 items-center sm:w-[260px] lg:w-[400px]"
        >
          <img
            src="/images/logo-leonardo222-machado.png"
            alt="Leonardo Machado - Design que Vende"
            className="h-auto w-full object-contain"
          />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-9 lg:flex xl:gap-11">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-base font-medium text-slate-200 transition hover:text-sky-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <WhatsAppLink
          href={whatsappHref}
          trackingLocation="header_whatsapp"
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 items-center rounded-full border border-sky-300/30 bg-sky-300/10 px-5 py-2.5 text-sm font-semibold text-sky-100 shadow-[0_0_28px_rgba(56,189,248,0.16)] transition hover:border-sky-200/60 hover:bg-sky-300/15 md:inline-flex lg:px-6 lg:py-3 lg:text-base"
        >
          Converse com o Léo
        </WhatsAppLink>
      </nav>
    </header>
  );
}
