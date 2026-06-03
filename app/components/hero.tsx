import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { whatsappHref } from "@/app/components/brand";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

const heroStats = [
  "Diagnóstico antes da execução",
  "Tráfego pago com clareza",
  "Páginas preparadas para vender",
  "Atendimento direto com o Léo",
];

export function Hero() {
  const profileImagePath = "/images/leo-profile.png";
  const hasProfileImage = existsSync(
    join(process.cwd(), "public", "images", "leo-profile.png")
  );

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28"
    >
      <div>
        <p className="text-[15px] font-semibold tracking-[0.28em] text-sky-100 uppercase">
          Leonardo Machado
        </p>
        <p className="mt-4 text-[17px] font-medium leading-7 text-slate-100">
          Desenvolvedor Web • Especialista em Google Ads • Designer de Sistemas
        </p>
        <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[15px] font-medium text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          Design que Vende
        </p>
        <h1 className="mt-4 max-w-5xl text-[clamp(3.25rem,7.6vw,5rem)] font-semibold tracking-tight text-white">
          Soluções digitais com design premium e função comercial.
        </h1>
        <p className="mt-7 max-w-2xl text-[19px] leading-8 text-slate-200 sm:text-[21px]">
          Eu ajudo empresas a sair do improviso digital com sites, landing pages
          e campanhas de Google Ads pensados para gerar conversas, oportunidades
          e decisões mais claras.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <WhatsAppLink
            href={whatsappHref}
            trackingLocation="hero_whatsapp"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-200 via-slate-100 to-white px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.26)] transition hover:scale-[1.01]"
          >
            Converse com o Léo
          </WhatsAppLink>
          <a
            href="#estrategia"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-sky-200/50 hover:bg-white/[0.04]"
          >
            Vamos conversar sobre sua empresa
          </a>
        </div>

        <p className="mt-5 max-w-xl text-[15px] leading-6 text-slate-300">
          Comece com uma conversa sem pressão para entender o cenário, encontrar
          gargalos e decidir o melhor próximo passo.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {heroStats.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[15px] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_58%)] blur-3xl" />
        <div className="relative mx-auto max-w-[32rem]">
          <div className="absolute -left-5 top-8 h-28 w-28 rounded-full border border-sky-200/20 bg-sky-200/10 blur-sm" />
          <div className="absolute -right-3 bottom-16 h-36 w-36 rounded-full border border-white/10 bg-white/[0.04]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.12] via-white/[0.045] to-sky-400/[0.11] p-4 shadow-2xl shadow-black/50">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/70 to-transparent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#090d13]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(148,163,184,0.28),transparent_30%),linear-gradient(145deg,rgba(2,6,23,0.25),rgba(14,165,233,0.16),rgba(255,255,255,0.05))]" />
              {hasProfileImage ? (
                <Image
                  src={profileImagePath}
                  alt="Foto profissional de Leonardo Machado"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <span className="flex size-28 items-center justify-center rounded-full border border-sky-100/20 bg-white/[0.06] text-[clamp(2rem,4vw,2.25rem)] font-semibold tracking-[0.22em] text-slate-100 shadow-[0_0_70px_rgba(56,189,248,0.22)]">
                    LM
                  </span>
                  <p className="mt-7 text-[15px] font-semibold tracking-[0.28em] text-sky-100 uppercase">
                    Leonardo Machado
                  </p>
                  <p className="mt-3 max-w-xs text-[15px] leading-6 text-slate-200">
                    Desenvolvedor Web, Designer de Sistemas e Especialista em
                    Google Ads.
                  </p>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/60 to-transparent p-6">
                <p className="text-xs font-semibold tracking-[0.24em] text-sky-100 uppercase">
                  Marca pessoal
                </p>
                <p className="mt-2 text-[clamp(1.55rem,3vw,1.75rem)] font-semibold text-white">
                  Estratégia, design e tráfego no mesmo olhar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
