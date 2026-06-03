import { whatsappHref } from "@/app/components/brand";
import { SectionHeading } from "@/app/components/section-heading";
import { WhatsAppLink } from "@/app/components/whatsapp-link";

const processSteps = [
  {
    title: "Conversa inicial",
    description:
      "Entendimento do cenário, objetivos, público, prioridades e melhores caminhos, sem pressão para decidir no escuro.",
  },
  {
    title: "Direção estratégica",
    description:
      "Definição da estrutura, mensagem, experiência, tráfego e recursos necessários para a entrega.",
  },
  {
    title: "Design e construção",
    description:
      "Criação da interface, desenvolvimento responsivo e refinamento dos detalhes importantes.",
  },
  {
    title: "Entrega e próximos passos",
    description:
      "Publicação assistida, alinhamentos finais e orientação para evoluir com segurança e organização.",
  },
];

export function ProcessSection() {
  return (
    <>
      <section id="sobre" className="border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.035] to-sky-300/[0.08] p-7">
            <p className="text-[15px] font-semibold tracking-[0.28em] text-sky-100 uppercase">
              Prazer, eu sou o Léo
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.2rem)] font-semibold tracking-tight text-white">
              Um parceiro técnico e estratégico para transformar presença em oportunidade.
            </h2>
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-slate-200">
            <p>
              Leonardo Machado atua como Desenvolvedor Web, Designer de Sistemas
              Web e Especialista em Google Ads, unindo visão estética,
              organização técnica, leitura comercial e experiência prática com
              tráfego pago.
            </p>
            <p>
              O atendimento é próximo, consultivo e personalizado, com clareza
              sobre decisões, prioridades e próximos passos. A proposta é criar
              presença digital com autoridade, confiança, acabamento artesanal e
              foco em venda.
            </p>
            <WhatsAppLink
              href={whatsappHref}
              trackingLocation="about_whatsapp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-sky-200/30 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-200/10"
            >
              Converse com o Léo
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section id="processo" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Processo de atendimento"
            title="Um fluxo organizado para construir com calma, clareza e precisão."
            description="Do diagnóstico à entrega, o processo evita improviso e mantém cada etapa conectada ao objetivo principal do projeto, com decisões bem explicadas."
            align="center"
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-[21px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-slate-200">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
