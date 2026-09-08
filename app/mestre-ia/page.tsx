import type { Metadata } from "next";
import Image from "next/image";

const ebookHref = "/materiais/100_prompts_que_vendem_no_Instagram_Mestre_IA.pdf";
const whatsappNumber = "5561994563586";
const whatsappMessage = encodeURIComponent(
  "Olá, Leonardo! Quero entrar na lista de pré-lançamento do treinamento. Meu nome completo é:"
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const serviceCards = [
  {
    title: "CRIE COM IA",
    description:
      "Use Inteligência Artificial para produzir materiais e soluções digitais com mais velocidade e qualidade.",
  },
  {
    title: "TRANSFORME EM SERVIÇO",
    description:
      "Organize suas habilidades em serviços simples, claros e comercializáveis.",
  },
  {
    title: "OFEREÇA PARA EMPRESAS",
    description:
      "Apresente soluções para empresas e empreendedores que precisam melhorar sua presença digital.",
  },
];

const authorityHighlights = [
  {
    value: "+ R$ 500 MIL",
    label: "faturados no digital",
  },
  {
    value: "+ 6 ANOS",
    label: "de experiência no mercado",
  },
  {
    value: "5 ESTRELAS",
    label: "de avaliação no Google",
  },
  {
    value: "CENTENAS",
    label: "de empresas atendidas",
  },
];

const goals = [
  "Fazer uma renda extra.",
  "Guardar dinheiro para uma viagem.",
  "Comprar ou trocar equipamentos.",
  "Juntar para um carro.",
  "Investir em um projeto pessoal.",
  "Aumentar a folga financeira no mês.",
];

const launchBenefits = [
  {
    title: "PRIMEIRA MÃO",
    description: "Receba a informação assim que o treinamento for lançado.",
  },
  {
    title: "50% DE DESCONTO",
    description:
      "Garanta a condição especial reservada para a lista antecipada.",
  },
  {
    title: "CONTATO DIRETO",
    description: "Seu cadastro é feito diretamente comigo pelo WhatsApp.",
  },
];

const credibilityItems = [
  "★★★★★ Avaliação 5 estrelas no Google",
  "Mais de 6 anos de credibilidade no mercado",
  "Centenas de empresas atendidas",
  "Mais de R$ 500 mil faturados no digital com prestação de serviços",
];

export const metadata: Metadata = {
  title: "100 Prompts de IA + Lista de Pré-Lançamento | Leonardo Machado",
  description:
    "Baixe gratuitamente 100 prompts de IA e entre na lista de pré-lançamento do treinamento de Leonardo Machado sobre prestação de serviços digitais.",
  alternates: {
    canonical: "https://www.oleonardomachado.com.br/mestre-ia",
  },
  openGraph: {
    title: "100 Prompts de IA + Lista de Pré-Lançamento",
    description:
      "Baixe gratuitamente 100 prompts de IA e acompanhe o pré-lançamento do treinamento de Leonardo Machado.",
    url: "https://www.oleonardomachado.com.br/mestre-ia",
    siteName: "Leonardo Machado",
    images: ["/images/logo-leonardo222-machado.png"],
    locale: "pt_BR",
    type: "website",
  },
};

function SectionShell({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={`relative z-10 px-5 py-18 sm:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function WhatsappButton({
  children,
  location,
}: Readonly<{
  children: React.ReactNode;
  location: string;
}>) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      data-analytics="cta"
      data-category="Pre-lancamento"
      data-event="whatsapp_prelaunch_click"
      data-label="Entrar na lista de pre-lancamento"
      data-location={location}
      className="inline-flex w-full max-w-xl items-center justify-center rounded-full bg-[#16a34a] px-7 py-5 text-center text-sm font-black tracking-wide text-white shadow-[0_24px_76px_rgba(22,163,74,0.34)] transition hover:scale-[1.01] hover:bg-[#22c55e] hover:shadow-[0_28px_92px_rgba(34,197,94,0.42)] sm:text-base"
    >
      {children}
    </a>
  );
}

export default function MestreIaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.19),transparent_31%),radial-gradient(circle_at_8%_22%,rgba(234,179,8,0.12),transparent_26%),radial-gradient(circle_at_93%_46%,rgba(255,255,255,0.075),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/70 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[72rem] -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0,rgba(250,204,21,0.07)_1px,transparent_1px),linear-gradient(180deg,transparent_0,rgba(250,204,21,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 sm:px-8 lg:py-10">
        <header className="flex items-center justify-center py-4 sm:justify-start">
          <a
            href="https://www.oleonardomachado.com.br"
            className="block w-[230px] sm:w-[270px]"
            aria-label="Leonardo Machado"
          >
            <Image
              src="/images/logo-leonardo222-machado.png"
              alt="Leonardo Machado"
              width={1366}
              height={336}
              priority
              sizes="(min-width: 640px) 270px, 230px"
              className="h-auto w-full object-contain"
            />
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="text-center lg:text-left">
            <p className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-amber-100 uppercase shadow-[0_0_34px_rgba(250,204,21,0.16)] sm:text-sm">
              🎉 SEUS 100 PROMPTS ESTÃO LIBERADOS!
            </p>
            <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:mx-0 lg:text-7xl">
              100 Prompts que Vendem no Instagram
            </h1>
            <p className="mt-5 text-2xl font-semibold text-amber-200 sm:text-4xl">
              Vire um Mestre de IA!
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-xl lg:mx-0">
              Preparei este material para você transformar imagens comuns em
              artes muito mais profissionais usando Inteligência Artificial.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
              <a
                href={ebookHref}
                target="_blank"
                rel="noreferrer"
                data-analytics="cta"
                data-category="Material"
                data-event="ebook_download_click"
                data-label="Baixar meu e-book"
                data-location="mestre-ia-hero"
                className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 px-8 py-5 text-sm font-black tracking-wide text-black shadow-[0_22px_70px_rgba(250,204,21,0.32)] transition hover:scale-[1.01] hover:shadow-[0_26px_90px_rgba(250,204,21,0.42)] sm:text-base"
              >
                📘 BAIXAR MEU E-BOOK
              </a>
              <p className="text-sm font-medium text-zinc-400">
                100 prompts completos • Acesso gratuito
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -inset-4 rounded-[2rem] bg-amber-300/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-white/[0.12] via-amber-200/[0.08] to-white/[0.03] p-5 shadow-2xl shadow-black/60">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/80 to-transparent" />
              <div className="rounded-[1.45rem] border border-white/10 bg-[#070707] p-6 sm:p-8">
                <div className="rounded-2xl border border-amber-200/20 bg-[linear-gradient(135deg,rgba(250,204,21,0.16),rgba(255,255,255,0.04)_42%,rgba(0,0,0,0.58))] p-6">
                  <p className="text-xs font-bold tracking-[0.28em] text-amber-100 uppercase">
                    Ebook gratuito
                  </p>
                  <h2 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Mestre de IA
                  </h2>
                  <p className="mt-5 text-base leading-7 text-zinc-300">
                    Um guia prático para criar artes com mais intenção,
                    aparência premium e direção comercial.
                  </p>
                  <div className="mt-10 grid grid-cols-2 gap-3">
                    {["100", "Prompts", "Instagram", "IA"].map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-center text-sm font-semibold text-zinc-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Agora vem a parte mais interessante...
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
            Esses prompts não servem apenas para criar imagens bonitas. Eles
            também podem se transformar em serviços digitais que empresas e
            empreendedores realmente precisam.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {serviceCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.1] via-white/[0.045] to-amber-200/[0.055] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/10 text-sm font-black text-amber-100">
                {index + 1}
              </span>
              <h3 className="mt-7 text-lg font-bold tracking-[0.12em] text-amber-100">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.28em] text-amber-100 uppercase">
              Experiência prática
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Eu transformei serviços digitais em mais de R$ 500 mil em
              faturamento.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
              Há mais de 6 anos trabalho no mercado digital atendendo empresas
              e empreendedores com serviços de diferentes níveis, do Low Ticket
              ao High Ticket.
            </p>
            <p className="mt-5 text-base leading-8 text-zinc-400">
              Artes, presença digital, páginas, sites, soluções comerciais e
              outros serviços me permitiram construir experiência prática
              atendendo centenas de empresas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {authorityHighlights.map((item) => (
              <article
                key={item.value}
                className="rounded-2xl border border-amber-200/16 bg-[#090909]/90 p-6 shadow-[0_18px_64px_rgba(0,0,0,0.3)]"
              >
                <p className="text-3xl font-black tracking-tight text-amber-200 sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="overflow-hidden rounded-2xl border border-amber-200/18 bg-gradient-to-br from-amber-200/[0.13] via-white/[0.055] to-white/[0.025] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
          <p className="inline-flex rounded-full border border-amber-200/25 bg-amber-200/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-amber-100 uppercase">
            🚀 NOVO TREINAMENTO EM PREPARAÇÃO
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Estou transformando minha experiência em um treinamento prático.
            </h2>
            <div className="text-base leading-8 text-zinc-300 sm:text-lg">
              <p>
                Estou organizando um treinamento para mostrar, de forma simples
                e prática, como pessoas comuns podem aprender a usar
                Inteligência Artificial e ferramentas digitais para criar
                serviços e oferecê-los para empresas e empreendedores.
              </p>
              <p className="mt-5">
                A ideia é mostrar possibilidades de serviços Low Ticket e High
                Ticket, como estruturar ofertas, como produzir, como apresentar
                o serviço e como buscar clientes.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Para quem esse treinamento foi pensado?
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
            Principalmente para quem quer construir uma nova fonte de renda
            prestando serviços digitais.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <div
              key={goal}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center text-base font-semibold text-zinc-100"
            >
              {goal}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-zinc-500">
          Os resultados variam de acordo com execução, dedicação, oferta,
          mercado e capacidade de vendas.
        </p>
      </SectionShell>

      <SectionShell>
        <div className="relative overflow-hidden rounded-2xl border border-amber-200/20 bg-[#080808] p-7 text-center shadow-[0_28px_110px_rgba(0,0,0,0.46)] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-amber-100/80 to-transparent" />
          <p className="text-sm font-bold tracking-[0.28em] text-amber-100 uppercase">
            Lista de pré-lançamento
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Quer receber o treinamento em primeira mão?
          </h2>
          <div className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            <p>O treinamento ainda não foi lançado.</p>
            <p className="mt-3">
              Quem entrar na lista agora receberá as informações do lançamento
              em primeira mão.
            </p>
          </div>

          <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-amber-200/24 bg-gradient-to-r from-amber-200/[0.15] via-yellow-400/[0.12] to-amber-200/[0.15] p-6">
            <p className="text-3xl font-black tracking-tight text-amber-200 sm:text-5xl">
              50% DE DESCONTO NO LANÇAMENTO
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300">
              Os cadastrados antecipadamente terão 50% de desconto para
              adquirir o treinamento quando ele for lançado.
            </p>
          </div>

          <p className="mt-9 text-base font-semibold text-white">
            O cadastro é direto comigo pelo WhatsApp.
          </p>
          <p className="mt-3 text-2xl font-black text-amber-100">
            Você só precisa me enviar seu NOME COMPLETO.
          </p>
          <p className="mt-2 text-sm font-medium text-zinc-500">
            Só isso. Nada de formulário complicado.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <WhatsappButton location="mestre-ia-lista">
              📲 QUERO ENTRAR NA LISTA
            </WhatsappButton>
            <div className="text-sm leading-6 text-zinc-400">
              <p>Atendimento direto comigo pelo WhatsApp.</p>
              <p className="font-semibold text-zinc-200">(61) 99456-3586</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Por que entrar agora
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {launchBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 text-center"
            >
              <h3 className="text-lg font-black tracking-[0.12em] text-amber-100">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <section className="relative z-10 px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 border-y border-white/10 py-6 md:grid-cols-2 lg:grid-cols-4">
          {credibilityItems.map((item) => (
            <p
              key={item}
              className="text-center text-sm font-semibold leading-6 text-zinc-300"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <SectionShell className="pb-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.1] via-white/[0.045] to-amber-200/[0.06] p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.38)] sm:p-10 lg:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Seu próximo projeto pode começar com uma habilidade digital.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            Você já tem acesso aos 100 prompts. Agora pode dar o próximo passo
            e acompanhar o lançamento do treinamento.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsappButton location="mestre-ia-cta-final">
              📲 ENTRAR NA LISTA COM 50% DE DESCONTO
            </WhatsappButton>
          </div>
        </div>
      </SectionShell>

      <footer className="relative z-10 px-5 pb-12 pt-4 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.035] p-7 text-center sm:p-10">
          <p className="text-sm font-semibold tracking-[0.28em] text-amber-100 uppercase">
            Leonardo Machado
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-zinc-300">
            <a
              href="https://www.instagram.com/oleonardomachadodesign"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-200/40 hover:text-amber-100"
            >
              @oleonardomachadodesign
            </a>
            <a
              href="https://www.oleonardomachado.com.br"
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-200/40 hover:text-amber-100"
            >
              www.oleonardomachado.com.br
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-200/40 hover:text-amber-100"
            >
              WhatsApp: (61) 99456-3586
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
