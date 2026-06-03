import { whatsappHref } from "@/app/components/brand";
import { SectionHeading } from "@/app/components/section-heading";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

const adsPillars = [
  "Estrutura correta de campanhas",
  "Palavras-chave com intenção real",
  "Páginas preparadas para conversão",
  "Acompanhamento e otimização",
];

export function GoogleAdsSection() {
  return (
    <section id="google-ads" className="border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Google Ads em destaque"
            title="Google Ads sem desperdício"
            description="Campanhas estruturadas para atrair pessoas que já estão procurando pelo que sua empresa oferece. Menos achismo. Mais estratégia. Mais clareza."
          />

          <div className="rounded-2xl border border-sky-100/20 bg-[#07111d]/80 p-6 shadow-[0_24px_80px_rgba(14,165,233,0.1)]">
            <p className="text-[15px] leading-7 text-slate-200">
              Tráfego pago funciona melhor quando anúncio, intenção de busca e
              página conversam entre si. Por isso, a análise considera a jornada
              completa, não apenas cliques.
            </p>
            <WhatsAppLink
              href={whatsappHref}
              trackingLocation="google_ads_whatsapp"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full border border-sky-200/30 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-200/10"
            >
              Converse com o Léo
            </WhatsAppLink>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adsPillars.map((pillar, index) => (
            <article
              key={pillar}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.075] to-white/[0.025] p-6"
            >
              <span className="text-[15px] font-semibold text-sky-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[21px] font-semibold leading-7 text-white">
                {pillar}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
