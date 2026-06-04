import { SectionHeading } from "@/app/components/section-heading";

const questions = [
  {
    question: "O atendimento é personalizado?",
    answer:
      "Sim. Cada projeto começa com uma conversa para entender objetivo, contexto, público e prioridades antes de definir a melhor direção, sem pressão.",
  },
  {
    question: "Você cria somente landing pages?",
    answer:
      "Não. O trabalho inclui landing pages, sites profissionais, sistemas web, SEO e Google Ads, sempre conforme a necessidade do projeto.",
  },
  {
    question: "O site fica responsivo?",
    answer:
      "Sim. A estrutura é pensada para funcionar bem em celulares, tablets e desktops, com atenção a leitura, navegação e performance.",
  },
  {
    question: "Como começo uma conversa?",
    answer:
      "Basta chamar pelo WhatsApp no botão Converse com o Léo e compartilhar o que você quer construir, melhorar ou validar estrategicamente.",
  },
  {
    question: "Google Ads entra junto com o site?",
    answer:
      "Pode entrar quando fizer sentido. O diferencial é pensar campanha, intenção de busca e página de destino como partes da mesma estratégia.",
  },
  {
    question: "E se eu ainda não souber exatamente o que preciso?",
    answer:
      "Tudo bem. A conversa inicial serve justamente para organizar ideias, identificar prioridades e indicar o caminho mais coerente para o momento da empresa.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas comuns antes de começar."
          description="Respostas diretas para deixar o primeiro contato mais simples e produtivo."
        />

        <div className="space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/10 bg-black/20 p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                <span className="flex items-center justify-between gap-6">
                  {item.question}
                  <span className="text-sky-200 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
