const projectFeatures = [
  "Landing Page Premium",
  "Área do Paciente Integrada",
  "SEO Avançado",
  "Google Analytics",
  "Google Search Console",
  "Design Responsivo",
  "Performance Otimizada",
  "Estrutura preparada para Google Ads",
];

const heroPreviewImage =
  "/images/eliane-project-hero.png";
const mobilePreviewImage =
  "/images/eliane-project-mobile.jpeg";

export function RealProjectsSection() {
  return (
    <section
      id="projetos-reais"
      className="relative overflow-hidden bg-slate-50 px-5 py-24 text-slate-950 sm:px-8"
    >
      <style>
        {`
          @keyframes realProjectsFade {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .real-projects-reveal {
            animation: realProjectsFade 700ms ease-out both;
          }
          @media (prefers-reduced-motion: reduce) {
            .real-projects-reveal { animation: none; }
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 size-72 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="real-projects-reveal relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.28em] text-sky-700 uppercase">
              PROJETOS REAIS
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Design que transmite confiança desde o primeiro clique.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Cada projeto é desenvolvido para representar a identidade do
              profissional, transmitir credibilidade e oferecer uma experiência
              moderna, rápida e intuitiva para quem acessa o site.
            </p>

            <div className="mt-12">
              <div className="relative mx-auto max-w-[21rem] sm:max-w-[44rem] lg:mx-0">
                <div className="absolute -inset-5 rounded-[2rem] bg-sky-200/35 blur-3xl" />
                <div className="relative rounded-[1.35rem] border border-white/80 bg-white/75 p-2 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:rounded-[1.7rem] sm:p-3">
                  <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3">
                      <span className="size-2.5 rounded-full bg-sky-500/70" />
                      <span className="size-2.5 rounded-full bg-slate-300" />
                      <span className="size-2.5 rounded-full bg-slate-200" />
                      <span className="ml-auto h-2 w-16 rounded-full bg-slate-200 sm:w-28" />
                    </div>

                    <div className="min-h-[14rem] bg-gradient-to-br from-white via-sky-50/65 to-slate-100 p-2.5 sm:min-h-[22rem] sm:p-4">
                      <div
                        aria-label="Hero do site da Psicóloga Eliane Gonçalves"
                        className="relative min-h-[12.5rem] overflow-hidden rounded-[1rem] border border-white bg-cover bg-top bg-slate-100 shadow-[0_22px_60px_rgba(15,23,42,0.12)] sm:min-h-[20rem]"
                        role="img"
                        style={{ backgroundImage: `url(${heroPreviewImage})` }}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/45 to-transparent" />
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mt-3 h-2 w-24 rounded-full bg-slate-300 sm:w-36" />
                </div>

                <div className="relative z-10 -mt-20 ml-auto w-[8.5rem] rounded-[1.7rem] border border-white bg-slate-950 p-1.5 shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:-mt-28 sm:w-[11.5rem] sm:rounded-[2rem] sm:p-2 lg:-mr-3">
                  <div className="overflow-hidden rounded-[1.55rem] bg-white">
                    <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-slate-300" />
                    <div className="p-2 sm:p-3">
                      <div
                        aria-label="Versão mobile da hero da Psicóloga Eliane Gonçalves"
                        className="aspect-[9/19] overflow-hidden rounded-[1.2rem] bg-cover bg-top bg-sky-50"
                        role="img"
                        style={{ backgroundImage: `url(${mobilePreviewImage})` }}
                      />
                    </div>
                    <div className="mx-auto mb-3 size-7 rounded-full border border-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <article className="rounded-2xl border border-white bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(14,165,233,0.16)] sm:p-7">
              <span className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase">
                Projeto em destaque
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950 sm:text-3xl">
                Psicóloga Eliane Gonçalves
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Landing Page Premium desenvolvida com foco em credibilidade,
                performance, experiência do usuário e geração de novos
                pacientes.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {projectFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-sm font-medium leading-6 text-slate-700 transition hover:border-sky-200 hover:bg-sky-50/80"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-[0.7rem] font-bold text-white">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.psicologaelianegoncalves.com.br/"
                target="_blank"
                rel="noreferrer"
                data-analytics="external-link"
                data-category="Link externo"
                data-event="external_link_click"
                data-label="Visitar projeto - Psicologa Eliane Goncalves"
                data-location="projetos-reais"
                className="mt-7 inline-flex rounded-full border border-sky-700/20 bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-sky-700"
              >
                Visitar projeto
              </a>
            </article>

            <div className="mt-5 rounded-2xl border border-sky-100 bg-white/72 p-7 shadow-[0_22px_70px_rgba(15,23,42,0.1)] backdrop-blur">
              <p className="text-6xl font-semibold tracking-tight text-sky-700 sm:text-7xl">
                +700
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Projetos, atendimentos e soluções digitais desenvolvidas ao
                longo da trajetória profissional para clientes de diferentes
                regiões do Brasil.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-white/72 px-6 py-8 text-center shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="mx-auto mb-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
          <p className="mx-auto max-w-3xl text-xl font-semibold leading-8 text-slate-950 sm:text-2xl">
            Cada projeto nasce com estratégia, design e foco em resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
