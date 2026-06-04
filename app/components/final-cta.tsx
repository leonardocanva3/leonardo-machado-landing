import Image from "next/image";
import { whatsappHref } from "@/app/components/brand";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

export function FinalCta() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-200/[0.16] via-white/[0.075] to-white/[0.03] p-7 shadow-[0_24px_90px_rgba(15,23,42,0.65)] sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold tracking-[0.28em] text-sky-100 uppercase">
            Vamos tomar um café virtual?
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Clareza antes da execução. Estratégia antes da tecnologia.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 lg:mx-0">
            Chame o Léo para falar sobre o momento da sua empresa, entender as
            possibilidades e enxergar o melhor caminho com clareza. Não é venda
            fria; é uma conversa consultiva para descobrir o que faz sentido.
          </p>
          <WhatsAppLink
            href={whatsappHref}
            trackingLocation="final_cta_whatsapp"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_18px_55px_rgba(226,232,240,0.22)] transition hover:scale-[1.01]"
          >
            Converse com o Léo
          </WhatsAppLink>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-sky-300/20 blur-3xl" />
          <div className="relative h-[420px] overflow-hidden rounded-[24px] shadow-[0_24px_70px_rgba(2,6,23,0.42)] lg:h-[520px] lg:min-h-[420px]">
            <Image
              src="/images/leo-cafe-virtual.png"
              alt="Léo em uma conversa de café virtual"
              width={1086}
              height={1448}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="block h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
