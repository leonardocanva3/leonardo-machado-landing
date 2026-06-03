const proofItems = [
  {
    title: "Atendimento direto com o Léo",
    description: "Você conversa com quem pensa a estratégia e executa a solução.",
  },
  {
    title: "Direção antes da ferramenta",
    description: "Primeiro clareza sobre objetivo, público e próximos passos.",
  },
  {
    title: "Google Ads como diferencial",
    description: "Tráfego, página e mensagem são pensados para trabalhar juntos.",
  },
  {
    title: "Entrega organizada",
    description: "Processo consultivo, comunicação clara e acabamento premium.",
  },
];

export function ConversionProofStrip() {
  return (
    <section className="px-5 pb-10 sm:px-8 lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 shadow-[0_20px_70px_rgba(2,6,23,0.32)] sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-white/10 bg-black/20 p-5"
          >
            <h2 className="text-base font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
