const conversationSteps = [
  "Primeiro entendo seu negócio.",
  "Depois definimos a estratégia.",
  "Só então construímos a solução.",
];

export function WhoIsLeoSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-[15px] font-semibold tracking-[0.28em] text-sky-100 uppercase">
            Quem é o Léo?
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.2rem)] font-semibold tracking-tight text-white">
            Um olhar consultivo para transformar ideias em presença digital
            comercial.
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-200">
            <p>
              Sou desenvolvedor web, especialista em Google Ads e designer de
              sistemas.
            </p>
            <p>
              Meu trabalho começa antes da criação, com uma conversa próxima
              para entender contexto, prioridades e o que realmente faz sentido
              construir.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-sky-100/20 bg-gradient-to-br from-white/[0.09] via-white/[0.035] to-sky-300/[0.09] p-6 shadow-2xl shadow-black/35">
          <p className="text-[15px] font-semibold tracking-[0.24em] text-sky-100 uppercase">
            Clareza antes da execução
          </p>
          <div className="mt-6 grid gap-4">
            {conversationSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-100/10 text-sm font-semibold text-sky-100">
                  {index + 1}
                </span>
                <p className="text-[17px] font-medium leading-7 text-slate-100">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-7 text-slate-200">
            A conversa é sem pressão: a intenção é organizar as decisões,
            enxergar a estratégia antes da ferramenta e escolher o caminho com
            segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
