import { whatsappHref } from "@/app/components/brand";
import { SectionHeading } from "@/app/components/section-heading";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão, com narrativa clara, design refinado e CTAs posicionados para gerar conversas qualificadas.",
  },
  {
    title: "Sites Profissionais",
    description:
      "Sites responsivos para marcas que precisam transmitir autoridade, clareza e confiança desde o primeiro contato.",
  },
  {
    title: "Google Ads",
    description:
      "Campanhas estruturadas para atrair quem já está procurando, com página e mensagem alinhadas.",
  },
  {
    title: "SEO",
    description:
      "Base técnica e conteúdo organizado para tornar o site mais compreensível para pessoas e buscadores.",
  },
  {
    title: "Sistemas Web",
    description:
      "Interfaces e ferramentas sob medida para organizar processos, dados e rotinas com mais precisão técnica.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções digitais com design premium e função comercial."
            description="Sites e landing pages deixam de ser peças estáticas quando nascem com estratégia, clareza técnica e conexão com aquisição de demanda."
          />
          <div className="rounded-xl border border-sky-200/20 bg-sky-200/[0.06] p-6 text-[15px] leading-7 text-slate-100">
            Atendimento consultivo para decidir o que construir, como comunicar,
            quais prioridades fazem sentido e como transformar tráfego em
            oportunidade.
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group min-h-64 rounded-xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-sky-200/30 hover:bg-white/[0.055]"
            >
              <span className="text-[15px] font-semibold text-sky-200">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-[21px] font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-200">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-sky-200/20 bg-sky-200/[0.06] p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-[15px] leading-7 text-slate-100">
            Não sabe se precisa de uma landing page, site, campanha ou sistema?
            A conversa inicial ajuda a separar prioridade de distração.
          </p>
          <WhatsAppLink
            href={whatsappHref}
            trackingLocation="services_whatsapp"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_55px_rgba(226,232,240,0.18)] transition hover:scale-[1.01]"
          >
            Converse com o Léo
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
