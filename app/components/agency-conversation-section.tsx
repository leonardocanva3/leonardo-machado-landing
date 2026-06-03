import { SectionHeading } from "@/app/components/section-heading";

const steps = [
  "Primeiro entendo seu negócio.",
  "Depois definimos a estratégia.",
  "Só então construímos a solução.",
];

export function AgencyConversationSection() {
  return (
    <section id="estrategia" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Estratégia antes da execução"
          title="Por que conversar comigo antes de contratar qualquer agência?"
          description="Muitas empresas investem em sites, anúncios ou redes sociais sem uma direção clara. Meu trabalho começa antes da criação, com uma conversa próxima para entender cenário, objetivo e prioridade."
        />

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-sky-300/[0.08] p-6 shadow-2xl shadow-black/30">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-sky-100/25 bg-sky-100/10 text-sm font-semibold text-sky-100">
                  {index + 1}
                </span>
                <p className="text-base font-medium leading-7 text-slate-100">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-sky-100/20 bg-sky-100/[0.06] p-5 text-sm leading-7 text-slate-200">
            A ideia é decidir sem pressão, com organização e clareza técnica.
            Você entende o que faz sentido, o que pode esperar e qual caminho
            tem mais potencial para gerar oportunidades reais.
          </p>
        </div>
      </div>
    </section>
  );
}
