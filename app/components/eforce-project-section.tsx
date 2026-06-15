const eforceFeatures = [
  "Site institucional premium",
  "Design responsivo",
  "Identidade visual forte",
  "Estrutura profissional",
  "Performance otimizada",
  "Experiência focada em confiança",
  "Tecnologia digital em evolução contínua",
  "Parceria há mais de 5 anos",
];

const eforcePreviewImage = "/images/eforce-project-hero.png";
const eforceMobilePreviewImage = "/images/eforce-project-mobile.jpeg";

export function EforceProjectSection() {
  return (
    <section
      id="projeto-eforce"
      className="relative overflow-hidden border-y border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(239,68,68,0.16),transparent_26%),radial-gradient(circle_at_84%_10%,rgba(148,163,184,0.14),transparent_24%),linear-gradient(135deg,#05070a_0%,#10090b_48%,#030609_100%)] px-5 py-24 text-white sm:px-8"
    >
      <style>
        {`
          @keyframes eforceProjectFade {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .eforce-project-reveal {
            animation: eforceProjectFade 700ms ease-out both;
          }
          @media (prefers-reduced-motion: reduce) {
            .eforce-project-reveal { animation: none; }
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-200/30 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-28 size-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 size-72 rounded-full bg-slate-200/10 blur-3xl" />

      <div className="eforce-project-reveal relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.28em] text-red-100 uppercase">
              CLIENTE DE LONGO PRAZO
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Eforce: presença digital com força, autoridade e confiança.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A Eforce confia na nossa tecnologia digital há mais de 5 anos, em
              uma parceria construída com estratégia, evolução contínua e
              presença online profissional.
            </p>

            <div className="mt-12">
              <div className="relative mx-auto max-w-[44rem] lg:mx-0">
                <div className="absolute -inset-5 rounded-[2rem] bg-red-500/12 blur-3xl" />
                <div className="relative rounded-[1.7rem] border border-white/15 bg-white/[0.07] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.48)] backdrop-blur">
                  <div className="overflow-hidden rounded-[1.25rem] border border-red-100/15 bg-[#08090d]">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.045] px-4 py-3">
                      <span className="size-2.5 rounded-full bg-red-400/80" />
                      <span className="size-2.5 rounded-full bg-slate-300/50" />
                      <span className="size-2.5 rounded-full bg-white/25" />
                      <span className="ml-auto h-2 w-28 rounded-full bg-white/10" />
                    </div>

                    <div className="relative min-h-[22rem] overflow-hidden bg-[radial-gradient(circle_at_78%_18%,rgba(248,113,113,0.18),transparent_28%),linear-gradient(135deg,#07070a_0%,#160a0d_52%,#050507_100%)] p-4">
                      <div
                        aria-label="Hero do site da Eforce"
                        className="relative min-h-[20rem] overflow-hidden rounded-[1rem] border border-red-100/15 bg-cover bg-center bg-[#08090d] shadow-[0_24px_70px_rgba(0,0,0,0.34)]"
                        role="img"
                        style={{ backgroundImage: `url(${eforcePreviewImage})` }}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/55 to-transparent" />
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mt-3 h-2 w-36 rounded-full bg-white/18" />
                </div>

                <div className="relative z-10 -mt-28 ml-auto w-[10.5rem] rounded-[2rem] border border-red-100/20 bg-slate-950 p-2 shadow-[0_26px_80px_rgba(239,68,68,0.14)] sm:w-[11.5rem] lg:-mr-3">
                  <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#08090d]">
                    <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-white/20" />
                    <div className="p-3">
                      <div
                        aria-label="Versão mobile da hero da Eforce"
                        className="aspect-[9/19] rounded-[1.2rem] bg-cover bg-top"
                        role="img"
                        style={{ backgroundImage: `url(${eforceMobilePreviewImage})` }}
                      />
                    </div>
                    <div className="mx-auto mb-3 size-7 rounded-full border border-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <article className="rounded-2xl border border-white/12 bg-white/[0.075] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-100/25 hover:bg-white/[0.095] sm:p-7">
              <span className="text-sm font-semibold tracking-[0.22em] text-red-100 uppercase">
                Projeto em destaque
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Eforce
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Presença digital desenvolvida para transmitir força,
                credibilidade e posicionamento profissional, com uma experiência
                moderna, responsiva e alinhada à identidade da marca.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {eforceFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/18 p-3 text-sm font-medium leading-6 text-slate-200 transition hover:border-red-100/25 hover:bg-red-100/[0.06]"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-[0.7rem] font-bold text-white">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.eliasforce.com.br/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex rounded-full border border-red-100/25 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_55px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-red-50"
              >
                Visitar projeto
              </a>
            </article>

            <div className="mt-5 rounded-2xl border border-red-100/15 bg-white/[0.065] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
              <p className="text-5xl font-semibold tracking-tight text-red-100 sm:text-6xl">
                +5 anos
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                de confiança na tecnologia digital desenvolvida por Leonardo
                Machado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.055] px-6 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur">
          <div className="mx-auto mb-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-red-100/35 to-transparent" />
          <p className="mx-auto max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
            Relacionamentos duradouros nascem quando design, tecnologia e
            confiança caminham juntos.
          </p>
        </div>
      </div>
    </section>
  );
}
