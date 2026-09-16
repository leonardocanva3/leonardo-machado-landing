"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AI_ROBOT_CHAT_IMAGE_SRC,
  CHECKOUT_URL,
  CTA_CHARACTERS_IMAGE_SRC,
  DR_PROMPT_CHAT_IMAGE_SRC,
  DR_PROMPT_QUESTION_IMAGE_SRC,
  EBOOK_MOCKUP_IMAGE_SRC,
  PRODUCT_PRICE,
} from "./dentistas-config";
import styles from "./dentistas.module.css";

const totalSteps = 4;

type QuizEvent =
  | "dentistas_quiz_started"
  | "dentistas_question_1_answered"
  | "dentistas_question_2_answered"
  | "dentistas_offer_viewed"
  | "dentistas_checkout_clicked";

type CharacterVariant = "doctor" | "robot";

type MetaPixelParameters = {
  value: number;
  currency: "BRL";
};

declare global {
  interface Window {
    fbq?: (
      command: "track",
      eventName: "InitiateCheckout",
      parameters: MetaPixelParameters
    ) => void;
    __dentistasMetaPixelInitiateCheckoutSent?: boolean;
  }
}

const firstQuestionOptions = [
  "😵 Não sei o que postar",
  "⏰ Falta tempo",
  "🤖 O ChatGPT responde muito genérico",
  "💡 Quero melhorar meus conteúdos",
];

const secondQuestionOptions = [
  "😅 Peço algo bem simples",
  "🤔 Tento explicar, mas não sei montar o prompt",
  "📋 Já uso prompts prontos",
  "🤖 Ainda uso pouco",
];

const benefits = [
  "Mini treinamento de ChatGPT",
  "98 prompts estratégicos",
  "14 áreas da Odontologia",
  "Exemplos + bônus",
];

function emitDentistasEvent(eventName: QuizEvent, details?: Record<string, string>) {
  void eventName;
  void details;
}

function Character({
  src,
  label,
  variant,
}: Readonly<{
  src: string;
  label: string;
  variant: CharacterVariant;
}>) {
  return (
    <div className={`${styles.character} ${styles[variant]}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label} className={styles.characterImage} />
      ) : (
        <div className={styles.characterFallback} role="img" aria-label={label}>
          <span className={styles.face}>{variant === "doctor" ? "Dr." : "AI"}</span>
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

function ProductMockup() {
  return (
    <div className={styles.mockup}>
      {EBOOK_MOCKUP_IMAGE_SRC ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={EBOOK_MOCKUP_IMAGE_SRC}
          alt="Capa do produto 98 Prompts Estratégicos para Dentistas"
          className={styles.mockupImage}
        />
      ) : (
        <div className={styles.mockupFallback} role="img" aria-label="Capa do produto">
          <span>98</span>
          <strong>Prompts Estratégicos</strong>
          <small>para Dentistas</small>
        </div>
      )}
    </div>
  );
}

function Progress({ step }: Readonly<{ step: number }>) {
  return (
    <div className={styles.progress} aria-label={`Etapa ${step} de ${totalSteps}`}>
      <span style={{ width: `${(step / totalSteps) * 100}%` }} />
    </div>
  );
}

export function DentistasLanding() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const checkoutEventSentRef = useRef(false);
  const stepLabel = useMemo(() => `Etapa ${step} de ${totalSteps}`, [step]);

  useEffect(() => {
    emitDentistasEvent("dentistas_quiz_started");
  }, []);

  useEffect(() => {
    if (step === 4) {
      emitDentistasEvent("dentistas_offer_viewed");
    }

    contentRef.current?.focus();
  }, [step]);

  function goToStep(nextStep: number) {
    setSelectedOption(null);
    setStep(Math.min(Math.max(nextStep, 1), totalSteps));
  }

  function answerFirstQuestion(option: string) {
    setSelectedOption(option);
    emitDentistasEvent("dentistas_question_1_answered", { option });
    window.setTimeout(() => goToStep(2), 280);
  }

  function answerSecondQuestion(option: string) {
    setSelectedOption(option);
    emitDentistasEvent("dentistas_question_2_answered", { option });
  }

  function handleCheckoutClick() {
    emitDentistasEvent("dentistas_checkout_clicked");

    if (
      !checkoutEventSentRef.current &&
      !window.__dentistasMetaPixelInitiateCheckoutSent
    ) {
      checkoutEventSentRef.current = true;
      window.__dentistasMetaPixelInitiateCheckoutSent = true;
      window.fbq?.("track", "InitiateCheckout", {
        value: 29.9,
        currency: "BRL",
      });
    }

    window.location.href = CHECKOUT_URL;
  }

  return (
    <main className={styles.page}>
      <section className={styles.shell} aria-labelledby="dentistas-title">
        <header className={styles.header}>
          <button
            className={styles.backButton}
            disabled={step === 1}
            onClick={() => goToStep(step - 1)}
            type="button"
          >
            ← voltar
          </button>
          <Progress step={step} />
          <span>{step}/{totalSteps}</span>
        </header>

        <div
          key={step}
          ref={contentRef}
          className={styles.panel}
          tabIndex={-1}
          aria-label={stepLabel}
        >
          {step === 1 ? (
            <div className={styles.questionLayout}>
              <Character
                src={DR_PROMPT_QUESTION_IMAGE_SRC}
                label="Dr. Prompt"
                variant="doctor"
              />
              <div className={styles.copy}>
                <p className={styles.eyebrow}>98 prompts para dentistas</p>
                <h1 id="dentistas-title">Dentista, posso te fazer uma pergunta? 🦷</h1>
                <p>
                  Quando você precisa criar conteúdo para o Instagram, o que mais
                  acontece?
                </p>
                <div className={styles.options}>
                  {firstQuestionOptions.map((option) => (
                    <button
                      className={selectedOption === option ? styles.selected : ""}
                      key={option}
                      onClick={() => answerFirstQuestion(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className={styles.conversationLayout}>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>rapidinho</p>
                <h1>E quando você pede ajuda ao ChatGPT?</h1>
                <div className={styles.options}>
                  {secondQuestionOptions.map((option) => (
                    <button
                      className={selectedOption === option ? styles.selected : ""}
                      key={option}
                      onClick={() => answerSecondQuestion(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className={`${styles.miniScene} ${
                  selectedOption ? styles.miniSceneVisible : ""
                }`}
                aria-live="polite"
              >
                <div className={styles.duo}>
                  <Character
                    src={DR_PROMPT_CHAT_IMAGE_SRC}
                    label="Dr. Prompt"
                    variant="doctor"
                  />
                  <Character
                    src={AI_ROBOT_CHAT_IMAGE_SRC}
                    label="Robô IA"
                    variant="robot"
                  />
                </div>
                <div className={styles.bubbles}>
                  <p>
                    <strong>Dr. Prompt:</strong> Crie um post para minha clínica.
                  </p>
                  <p>
                    <strong>Robô IA:</strong> Qual clínica? 😂
                  </p>
                </div>
                <p className={styles.shortText}>
                  O ChatGPT pode entregar muito mais quando você aprende a pedir
                  do jeito certo.
                </p>
                <button
                  className={styles.primaryButton}
                  disabled={!selectedOption}
                  onClick={() => goToStep(3)}
                  type="button"
                >
                  QUERO APRENDER →
                </button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className={styles.productLayout}>
              <div className={styles.productArt}>
                <ProductMockup />
                <div className={styles.productCharacters}>
                  <Character
                    src={DR_PROMPT_CHAT_IMAGE_SRC}
                    label="Dr. Prompt"
                    variant="doctor"
                  />
                  <Character
                    src={AI_ROBOT_CHAT_IMAGE_SRC}
                    label="Robô IA"
                    variant="robot"
                  />
                </div>
              </div>

              <div className={styles.copy}>
                <p className={styles.eyebrow}>agora fez sentido</p>
                <h1>Foi exatamente por isso que eu criei isto.</h1>
                <h2>98 Prompts Estratégicos para Dentistas</h2>
                <p>
                  Aprenda primeiro a usar melhor o ChatGPT. Depois, tenha uma
                  biblioteca completa de prompts para consultar sempre que precisar.
                </p>
                <div className={styles.benefits}>
                  {benefits.map((benefit) => (
                    <span key={benefit}>{benefit}</span>
                  ))}
                </div>
                <p className={styles.highlight}>
                  Fácil de usar e pronto para aplicar no seu dia a dia no consultório.
                </p>
                <button
                  className={styles.primaryButton}
                  onClick={() => goToStep(4)}
                  type="button"
                >
                  QUERO CONHECER 👇
                </button>
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className={styles.offerLayout}>
              <div className={styles.offerVisual}>
                <ProductMockup />
                <div className={styles.offerCharacters}>
                  {CTA_CHARACTERS_IMAGE_SRC ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={CTA_CHARACTERS_IMAGE_SRC}
                      alt="Dr. Prompt e Robô IA apresentando o produto"
                      className={styles.ctaCharactersImage}
                    />
                  ) : null}
                </div>
              </div>
              <div className={styles.offerCard}>
                <p className={styles.eyebrow}>oferta</p>
                <h1>98 Prompts Estratégicos para Dentistas</h1>
                <strong className={styles.price}>{PRODUCT_PRICE}</strong>
                <button
                  className={styles.checkoutButton}
                  onClick={handleCheckoutClick}
                  type="button"
                >
                  QUERO ACESSAR AGORA POR {PRODUCT_PRICE}
                </button>
                <small>Pagamento processado com segurança pela Hotmart.</small>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
