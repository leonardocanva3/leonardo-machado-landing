import { SectionHeading } from "@/app/components/section-heading";

const pillars = [
  {
    title: "Estratégia antes do visual",
    description:
      "Cada página começa com entendimento do negócio, público, oferta e caminho de conversão. A execução vem depois da direção.",
  },
  {
    title: "Design com intenção",
    description:
      "Interfaces elegantes, claras e objetivas, criadas para guiar a decisão sem ruído e sem pressão.",
  },
  {
    title: "Técnica para vender melhor",
    description:
      "Estrutura responsiva, SEO básico bem cuidado e integração com Google Ads quando fizer sentido para o projeto.",
  },
];

export function IntroSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Muito além de um site bonito"
          title="Presença digital precisa ter estética, lógica e intenção comercial."
          description="O trabalho do Léo une design premium, desenvolvimento web e visão de tráfego para criar experiências digitais que passam confiança, organizam a mensagem e ajudam o visitante a tomar o próximo passo."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
