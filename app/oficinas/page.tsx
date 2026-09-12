import type { Metadata } from "next";
import { EbookCover } from "./ebook-cover";
import { MobileBuyBar } from "./mobile-buy-bar";
import styles from "./oficinas.module.css";

const checkoutUrl =
  "https://hotmart.com/pt-br/marketplace/produtos/500-prompts-para-oficinas-mecanicas-de-sucesso/A107582553B";

const ctaText = "COMPRAR POR APENAS R$ 29,90!";
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "500 Prompts para Oficinas Mecânicas de Sucesso | Leonardo Machado",
  description:
    "500 prompts para oficinas mecânicas criarem conteúdos, Reels, Stories, artes, legendas e estratégias de marketing usando Inteligência Artificial.",
  alternates: {
    canonical: "https://www.oleonardomachado.com.br/oficinas",
  },
  openGraph: {
    title: "500 Prompts para Oficinas Mecânicas de Sucesso | Leonardo Machado",
    description:
      "500 prompts para oficinas mecânicas criarem conteúdos, Reels, Stories, artes, legendas e estratégias de marketing usando Inteligência Artificial.",
    url: "https://www.oleonardomachado.com.br/oficinas",
    siteName: "Leonardo Machado",
    images: [
      {
        url: "/oficinas/capa-500-prompts-oficinas.png",
        width: 1200,
        height: 630,
        alt: "500 Prompts para Oficinas Mecânicas de Sucesso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "500 Prompts para Oficinas Mecânicas de Sucesso | Leonardo Machado",
    description:
      "500 prompts para oficinas mecânicas criarem conteúdos, Reels, Stories, artes, legendas e estratégias de marketing usando Inteligência Artificial.",
    images: ["/oficinas/capa-500-prompts-oficinas.png"],
  },
};

const pains = [
  "Não sabe o que postar?",
  "Acaba publicando sempre as mesmas coisas?",
  "Tem dificuldade para criar Reels?",
  "Não sabe como transformar serviços mecânicos em conteúdo?",
  "Já tentou usar IA, mas recebeu respostas genéricas?",
  "Não sabe como pedir uma arte profissional para a IA?",
];

const steps = [
  {
    title: "ESCOLHA",
    text: "Escolha o assunto que deseja divulgar.",
  },
  {
    title: "PERSONALIZE",
    text: "Informe nome, WhatsApp, endereço, cidade e dados da sua oficina.",
  },
  {
    title: "CRIE",
    text: "Cole o prompt na Inteligência Artificial e refine o resultado.",
  },
];

const lessons = [
  "Como informar corretamente os dados da oficina",
  "Como anexar e orientar o uso da logomarca",
  "Como inserir telefone e endereço nos prompts",
  "Como fornecer contexto",
  "Como pedir alterações sem começar novamente",
  "Como evitar que a IA invente informações",
  "Como transformar respostas simples em materiais melhores",
  "Como criar conteúdo mantendo a identidade da oficina",
];

const workshopCategories = [
  "Revisão Preventiva",
  "Óleo e Lubrificação",
  "Freios",
  "Suspensão",
  "Direção",
  "Alinhamento",
  "Balanceamento",
  "Embreagem",
  "Câmbio e Transmissão",
  "Motor",
  "Arrefecimento",
  "Injeção Eletrônica",
  "Diagnóstico",
  "Elétrica",
  "Bateria",
  "Partida",
  "Ar-condicionado Automotivo",
  "Pneus",
  "Rodas",
  "Escapamento",
  "Correias",
  "Velas",
  "Ignição",
  "Viagens e Férias",
  "Economia de Manutenção",
  "Mitos e Verdades",
  "Curiosidades Automotivas",
];

const marketingCategories = [
  "Reels",
  "Stories",
  "Carrosséis",
  "Feed",
  "Legendas",
  "Artes",
  "Engajamento",
  "Autoridade",
  "Bastidores",
  "Promoções",
  "Captação local",
  "Avaliações",
  "Pós-venda",
  "BIO do Instagram",
  "Posicionamento digital",
  "Calendário de conteúdo",
];

const contentAngles = [
  "Por que manter a revisão em dia pode poupar dinheiro?",
  "3 barulhos que você não deveria simplesmente aumentar o volume do rádio para ignorar.",
  "Seu carro está tentando avisar alguma coisa?",
  "Quanto pode custar adiar uma manutenção?",
  "5 coisas que um mecânico gostaria que todo motorista soubesse.",
  "O barato pode sair caro na manutenção?",
  "Quais sinais aparecem antes de uma pane?",
  "Por que trocar peças no chute pode custar mais?",
];

const formats = [
  ["ARTES", "Peça ideias e comandos para criar peças profissionais."],
  ["REELS", "Crie roteiros rápidos, educativos e comerciais."],
  ["STORIES", "Enquetes, perguntas, bastidores e chamadas."],
  ["CARROSSÉIS", "Transforme conhecimento técnico em conteúdo fácil de consumir."],
  ["LEGENDAS", "Explique serviços sem parecer complicado."],
  ["MARKETING", "Crie campanhas e estratégias para divulgar sua oficina."],
  ["BIO", "Melhore a apresentação do perfil da oficina."],
  ["ENGAJAMENTO", "Crie perguntas e conteúdos que estimulam interação."],
];

const audiences = [
  "Donos de oficinas mecânicas",
  "Mecânicos autônomos",
  "Centros automotivos",
  "Especialistas automotivos",
  "Profissionais que administram o Instagram da própria oficina",
  "Oficinas que querem melhorar sua presença digital",
  "Quem está começando a usar Inteligência Artificial",
];

const deliverables = [
  "500 PROMPTS PRONTOS",
  "AULA PRÁTICA DE IA",
  "PROMPTS MESTRES",
  "PROMPTS PARA BIO",
  "MARKETING PARA INSTAGRAM",
  "IDEIAS PARA REELS, STORIES E CARROSSÉIS",
  "CONTEÚDO ORGANIZADO POR ÁREAS DA OFICINA",
];

const faqs = [
  [
    "Preciso entender de Inteligência Artificial?",
    "Não. O material foi criado justamente para ensinar desde a preparação dos dados da oficina até a utilização e personalização dos prompts.",
  ],
  [
    "Os prompts servem apenas para ChatGPT?",
    "Os comandos foram escritos em linguagem natural e podem ser adaptados para diferentes ferramentas de Inteligência Artificial, embora os resultados possam variar entre plataformas.",
  ],
  [
    "Preciso saber design?",
    "Não. Existem prompts que ajudam a estruturar ideias visuais e materiais de marketing mesmo para quem não trabalha profissionalmente com design.",
  ],
  [
    "Posso personalizar os prompts para minha oficina?",
    "Sim. Essa é uma das partes mais importantes do método. O material ensina a substituir campos como nome da oficina, WhatsApp, endereço, cidade, serviços e outras informações.",
  ],
  [
    "Recebo os 500 prompts de uma vez?",
    "O produto é um eBook digital organizado por categorias, permitindo consultar os prompts conforme a necessidade.",
  ],
  [
    "Tem prompts para Instagram?",
    "Sim. Há conteúdos voltados para Feed, Stories, Reels, carrosséis, BIO, engajamento, autoridade, marketing e outras estratégias.",
  ],
];

function BuyButton({
  location,
  children = ctaText,
  compact = false,
}: Readonly<{
  location: string;
  children?: React.ReactNode;
  compact?: boolean;
}>) {
  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${typeof children === "string" ? children : "Comprar ebook"} na Hotmart`}
      data-analytics="cta"
      data-category="Oficinas"
      data-event="hotmart_checkout_click"
      data-label={ctaText}
      data-location={location}
      className={`${styles.buyButton} ${compact ? styles.buyButtonCompact : ""}`}
    >
      {children}
    </a>
  );
}

function Section({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

function InlineCta({ location }: Readonly<{ location: string }>) {
  return (
    <div className={styles.inlineCta}>
      <div>
        <span>QUERO OS 500 PROMPTS</span>
        <strong>R$ 29,90</strong>
      </div>
      <BuyButton location={location} />
    </div>
  );
}

export default function OficinasPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGrid} />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.badge}>MARKETING AUTOMOTIVO + INTELIGÊNCIA ARTIFICIAL</p>
              <h1>
                <span>500 PROMPTS</span> PARA OFICINAS MECÂNICAS DE SUCESSO
              </h1>
              <p className={styles.productSubtitle}>
                Além dos prompts, uma verdadeira aula de como se comunicar com a Inteligência Artificial!
              </p>
              <p className={styles.heroLead}>
                Transforme a Inteligência Artificial em uma poderosa aliada do marketing da sua oficina.
              </p>
              <p className={styles.heroText}>
                Tenha 500 comandos prontos para criar conteúdos, artes, Reels, Stories, campanhas,
                legendas, estratégias e muito mais, mesmo que você ainda saiba pouco sobre Inteligência Artificial.
              </p>
              <div className={styles.heroQuote}>
                Você não precisa dominar Inteligência Artificial.
                <br />
                Precisa saber o que pedir para ela.
              </div>
              <div className={styles.heroCta}>
                <BuyButton location="hero" />
              </div>
              <div className={styles.trustBar} aria-label="Benefícios do acesso">
                {["Acesso digital", "Conteúdo prático", "500 prompts", "Use no seu próprio ritmo"].map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>
            </div>
            <EbookCover />
          </div>
        </div>
      </section>

      <Section>
        <div className={styles.centerHeading}>
          <h2>SUA OFICINA É BOA NO QUE FAZ. MAS O INSTAGRAM MOSTRA ISSO?</h2>
        </div>
        <div className={styles.painGrid}>
          {pains.map((pain) => (
            <article key={pain} className={styles.questionCard}>
              {pain}
            </article>
          ))}
        </div>
        <p className={styles.sectionPunch}>
          O problema talvez não seja a Inteligência Artificial.
          <br />
          É o comando que você está dando para ela.
        </p>
      </Section>

      <Section className={styles.sectionAlt}>
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>A solução</p>
            <h2>IMAGINE TER 500 IDEIAS PRONTAS PARA COMEÇAR.</h2>
            <p>
              Em vez de abrir o ChatGPT e ficar pensando no que escrever, você escolhe o assunto,
              copia o prompt, personaliza os dados da sua oficina e começa.
            </p>
            <strong className={styles.copyLine}>Copie. Personalize. Crie.</strong>
          </div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.lessonBox}>
          <div>
            <p className={styles.kicker}>Método prático</p>
            <h2>VOCÊ NÃO RECEBE APENAS 500 PROMPTS.</h2>
            <p className={styles.largeText}>Você aprende a conversar com a Inteligência Artificial.</p>
          </div>
          <div className={styles.checkGrid}>
            {lessons.map((lesson) => (
              <span key={lesson}>✓ {lesson}</span>
            ))}
          </div>
          <strong className={styles.highlightBox}>
            Além dos prompts, uma verdadeira aula de como se comunicar com a Inteligência Artificial!
          </strong>
        </div>
      </Section>

      <Section className={styles.sectionAlt}>
        <div className={styles.centerHeading}>
          <p className={styles.kicker}>O que tem dentro?</p>
          <h2>500 PROMPTS. DEZENAS DE POSSIBILIDADES.</h2>
        </div>
        <div className={styles.tagGrid}>
          {workshopCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className={styles.marketingBlock}>
          <h3>MARKETING DA OFICINA</h3>
          <div className={styles.tagGrid}>
            {marketingCategories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <p>E muito mais.</p>
        </div>
        <InlineCta location="categories-inline" />
      </Section>

      <Section>
        <div className={styles.centerHeading}>
          <h2>NÃO É SÓ “FAÇA UM POST SOBRE FREIOS”.</h2>
          <p>Os prompts foram pensados para transformar assuntos mecânicos em conteúdos que despertam curiosidade.</p>
        </div>
        <div className={styles.angleGrid}>
          {contentAngles.map((angle) => (
            <article key={angle} className={styles.angleCard}>
              {angle}
            </article>
          ))}
        </div>
        <p className={styles.note}>Exemplos de abordagens de conteúdo que ajudam sua oficina a comunicar valor.</p>
      </Section>

      <Section className={styles.chatSection}>
        <div className={styles.centerHeading}>
          <p className={styles.kicker}>Exemplo real de prompt</p>
          <h2>VEJA COMO UM BOM PROMPT MUDA TUDO.</h2>
        </div>
        <div className={styles.promptCompare}>
          <article className={styles.promptCard}>
            <span>PROMPT SIMPLES</span>
            <p>“Faça um post sobre troca de óleo.”</p>
          </article>
          <div className={styles.vs}>VS</div>
          <article className={`${styles.promptCard} ${styles.promptPro}`}>
            <span>PROMPT PROFISSIONAL</span>
            <p>
              “Crie uma arte profissional quadrada para o Instagram da [NOME DA OFICINA], usando a
              logomarca anexada sem modificá-la. O tema será troca de óleo preventiva. Quero uma
              composição limpa, moderna e automotiva, com pouco texto na imagem e forte hierarquia
              visual. Inclua o WhatsApp [TELEFONE] e o endereço [ENDEREÇO]. O objetivo da publicação
              é gerar agendamentos. Não invente preços, serviços, garantias ou informações que não forneci.”
            </p>
          </article>
        </div>
        <p className={styles.sectionPunch}>É esse tipo de diferença que você aprenderá a criar.</p>
        <InlineCta location="prompt-inline" />
      </Section>

      <Section>
        <div className={styles.centerHeading}>
          <h2>UMA OFICINA. MUITAS FORMAS DE SE COMUNICAR.</h2>
        </div>
        <div className={styles.formatGrid}>
          {formats.map(([title, text]) => (
            <article key={title} className={styles.featureCard}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className={styles.sectionAlt}>
        <div className={styles.split}>
          <div>
            <p className={styles.kicker}>Para quem é?</p>
            <h2>FOI CRIADO PARA QUEM VIVE O DIA A DIA DA OFICINA.</h2>
            <p className={styles.largeText}>
              Você não precisa ser designer. Você não precisa ser especialista em marketing.
              Você não precisa ser especialista em IA.
            </p>
            <strong className={styles.copyLine}>
              Você precisa conhecer sua oficina. Os prompts ajudam com o restante.
            </strong>
          </div>
          <div className={styles.audienceList}>
            {audiences.map((audience) => (
              <span key={audience}>✓ {audience}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.receiveGrid}>
          <div>
            <p className={styles.kicker}>O que você recebe</p>
            <h2>UM MATERIAL PARA CONSULTAR SEMPRE QUE FALTAR UMA IDEIA.</h2>
            <div className={styles.deliverables}>
              {deliverables.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <EbookCover compact />
        </div>
      </Section>

      <Section className={styles.offerSection}>
        <div className={styles.offerCard}>
          <p className={styles.badge}>ACESSO AO MATERIAL COMPLETO</p>
          <h2>COLOQUE A INTELIGÊNCIA ARTIFICIAL PARA TRABALHAR NO MARKETING DA SUA OFICINA.</h2>
          <strong className={styles.bigPrice}>R$ 29,90</strong>
          <p>
            Um único material. 500 prompts. Ideias para você consultar sempre que precisar criar
            conteúdo para sua oficina.
          </p>
          <BuyButton location="offer" />
          <small>Pagamento processado pela Hotmart.</small>
        </div>
      </Section>

      <Section>
        <div className={styles.centerHeading}>
          <h2>FAQ</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer]) => (
            <details key={question} className={styles.faqItem}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className={styles.finalCta}>
        <div className={styles.centerHeading}>
          <h2>SUA PRÓXIMA IDEIA PARA O INSTAGRAM PODE ESTAR A UM PROMPT DE DISTÂNCIA.</h2>
          <p>Pare de depender da inspiração para divulgar sua oficina.</p>
          <strong className={styles.bigPrice}>R$ 29,90</strong>
          <BuyButton location="final" />
        </div>
      </Section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <strong>500 Prompts para Oficinas Mecânicas de Sucesso</strong>
          <span>Produto digital</span>
          <span>www.oleonardomachado.com.br</span>
          <span>© {currentYear} Leonardo Machado. Todos os direitos reservados.</span>
        </div>
      </footer>

      <MobileBuyBar checkoutUrl={checkoutUrl} />
    </main>
  );
}
