const caseCards = [
  {
    title: "Área do Paciente",
    description:
      "Um ambiente moderno onde pacientes acessam orientações, materiais, recursos e informações importantes de forma simples, intuitiva e organizada.",
  },
  {
    title: "Painel Administrativo",
    description:
      "Interface desenvolvida para facilitar o gerenciamento de pacientes, conteúdos, agenda e comunicação.",
  },
  {
    title: "White Label",
    description:
      "Cada profissional possui identidade visual própria, cores personalizadas e experiência exclusiva para seus pacientes.",
  },
  {
    title: "Tecnologia Própria",
    description:
      "Arquitetura moderna construída com foco em performance, organização, escalabilidade e excelente experiência do usuário.",
  },
];

const patientAreaDesktopImage = "/images/patient-area-desktop.png";
const patientAreaMobileImage = "/images/patient-area-mobile.jpeg";

export function TechnologyCaseSection() {
  return (
    <section
      id="case-tecnologia"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.18),transparent_28%),linear-gradient(135deg,#05070a_0%,#07111d_48%,#030609_100%)] px-5 py-24 sm:px-8"
    >
      <style>
        {`
          @keyframes caseTechnologyFade {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .case-technology-reveal {
            animation: caseTechnologyFade 700ms ease-out both;
          }
          @media (prefers-reduced-motion: reduce) {
            .case-technology-reveal { animation: none; }
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-100/35 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="case-technology-reveal relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.28em] text-sky-200 uppercase">
            CASE DE TECNOLOGIA
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Muito além de uma Landing Page.
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>Alguns projetos exigem uma solução digital completa.</p>
            <p>
              Por isso, além de Landing Pages Premium, também desenvolvo
              plataformas web próprias, unindo design, estratégia, experiência
              do usuário e tecnologia para criar soluções que realmente fazem
              sentido para cada negócio.
            </p>
          </div>

          <div className="mt-9 rounded-2xl border border-sky-100/20 bg-white/[0.055] p-6 shadow-[0_24px_90px_rgba(14,165,233,0.12)] backdrop-blur">
            <span className="text-sm font-semibold tracking-[0.22em] text-sky-200 uppercase">
              Projeto proprietário
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              LM Health
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Uma plataforma desenvolvida para profissionais da saúde que
              centraliza atendimento, comunicação, organização e experiência do
              paciente em um único ambiente digital.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Projeto proprietário desenvolvido por Leonardo Machado.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {caseCards.map((card, index) => (
              <article
                key={card.title}
                className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.075] to-white/[0.028] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-200/35 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-semibold text-sky-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 pt-2 lg:pt-10">
          <div className="relative mx-auto max-w-[21rem] sm:max-w-[34rem]">
            <div className="absolute -inset-6 rounded-[2rem] bg-sky-300/10 blur-3xl" />
            <div className="relative rounded-[1.35rem] border border-white/12 bg-slate-950/80 p-2 shadow-[0_32px_110px_rgba(2,8,23,0.72)] backdrop-blur sm:rounded-[1.6rem] sm:p-3">
              <div className="overflow-hidden rounded-[1.15rem] border border-sky-100/15 bg-[#06101c]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.045] px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="size-2.5 rounded-full bg-sky-200/80" />
                  <span className="size-2.5 rounded-full bg-slate-300/50" />
                  <span className="size-2.5 rounded-full bg-white/30" />
                  <span className="ml-auto h-2 w-16 rounded-full bg-white/10 sm:w-24" />
                </div>

                <div className="bg-[#f8f7f4] p-2.5 sm:p-4">
                  <div
                    aria-label="Área do Paciente no desktop"
                    className="min-h-[12rem] rounded-xl border border-white/70 bg-contain bg-center bg-no-repeat bg-slate-100 shadow-[0_22px_70px_rgba(2,8,23,0.28)] sm:min-h-[18rem]"
                    role="img"
                    style={{
                      backgroundImage: `url(${patientAreaDesktopImage})`,
                    }}
                  />
                </div>
              </div>
              <div className="mx-auto mt-3 h-2 w-24 rounded-full bg-white/20 sm:w-32" />
            </div>

            <div className="relative z-10 -mt-20 ml-auto w-[8.5rem] rounded-[1.7rem] border border-sky-100/25 bg-slate-950 p-1.5 shadow-[0_28px_90px_rgba(14,165,233,0.16)] sm:-mt-32 sm:w-[11.5rem] sm:rounded-[2rem] sm:p-2 lg:-mr-4">
              <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-white">
                <div className="mx-auto mt-3 h-1.5 w-14 rounded-full bg-white/20" />
                <div className="p-2 sm:p-3">
                  <div
                    aria-label="Área do Paciente no celular"
                    className="aspect-[9/19] rounded-[1.2rem] bg-cover bg-top bg-slate-100"
                    role="img"
                    style={{
                      backgroundImage: `url(${patientAreaMobileImage})`,
                    }}
                  />
                </div>
                <div className="mx-auto mb-3 size-7 rounded-full border border-slate-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="mt-4 rounded-2xl border border-sky-100/20 bg-white/[0.045] px-6 py-8 text-center shadow-[0_22px_80px_rgba(2,8,23,0.28)] backdrop-blur">
            <div className="mx-auto mb-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-sky-100/35 to-transparent" />
            <p className="mx-auto max-w-2xl text-xl font-semibold leading-8 text-white sm:text-2xl">
              Alguns projetos começam com uma Landing Page.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-xl font-semibold leading-8 text-sky-100 sm:text-2xl">
              Outros evoluem para uma plataforma completa.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex rounded-full border border-sky-200/30 px-6 py-3 text-sm font-semibold text-sky-100 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-200/10 hover:shadow-[0_18px_55px_rgba(14,165,233,0.14)]"
            >
              Conhecer o projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
