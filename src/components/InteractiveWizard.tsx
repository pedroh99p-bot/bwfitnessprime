"use client";
import { useRef, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Dumbbell,
  Flame,
  Heart,
  RotateCcw,
  Users,
} from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import SelectableCard from "./ui/cards/SelectableCard";
import Button from "./ui/Button";
import ContactAction from "./ui/ContactAction";
import { WIZARD_QUESTIONS } from "@/config/siteContent";
import {
  answerLabels,
  recommendationMessage,
  recommendPlan,
} from "@/lib/training";
import type { TrainingAnswers } from "@/types/content";

const icons = {
  Flame,
  Dumbbell,
  Activity,
  Heart,
  Calendar,
  Users,
  ArrowUpRight,
};
export default function InteractiveWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<TrainingAnswers>({});
  const [done, setDone] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const question = WIZARD_QUESTIONS[step];
  const selected = answers[question.key];
  const labels = answerLabels(answers);
  const plan = recommendPlan(answers);
  const focusHeading = () =>
    requestAnimationFrame(() =>
      heading.current?.focus({ preventScroll: true }),
    );
  return (
    <Section
      id="encontre-seu-treino"
      containerSize="wide"
      className="finder-section"
      borderTop={false}
    >
      <span id="treino-ideal" className="anchor-alias" />
      <Reveal>
        <SectionHeader
          align="left"
          eyebrow="PLANO • EVOLUÇÃO • VOCÊ"
          title="Encontre seu"
          highlight="treino ideal"
          subtitle="Responda algumas perguntas e descubra o caminho ideal para seus objetivos."
        />
      </Reveal>
      <Reveal variant="side">
        <div className="finder">
          <div className="finder-main">
            <div className="finder-top">
              <span className="eyebrow">
                {done ? "SEU CAMINHO COMEÇA AQUI" : `PASSO ${step + 1} DE 3`}
              </span>
              <span className="small muted">
                {done ? "Concluído" : "Menos de 30 segundos"}
              </span>
            </div>
            <div
              className="finder-progress"
              role="progressbar"
              aria-label="Progresso do treino ideal"
              aria-valuemin={0}
              aria-valuemax={3}
              aria-valuenow={done ? 3 : step}
            >
              {[0, 1, 2].map((i) => (
                <span className={i <= step ? "active" : ""} key={i}>
                  <i>{done || i < step ? <Check size={12} /> : i + 1}</i>
                </span>
              ))}
            </div>
            {!done ? (
              <div className="step-view" key={step}>
                <h3 ref={heading} tabIndex={-1} className="finder-question">
                  {question.title}
                </h3>
                <div
                  className={`finder-options ${step === 0 ? "options-grid" : ""}`}
                  role="group"
                  aria-label={question.title}
                >
                  {question.options.map((option) => {
                    const Icon =
                      icons[option.iconName as keyof typeof icons] || Dumbbell;
                    return (
                      <SelectableCard
                        key={option.id}
                        selected={selected === option.id}
                        onSelect={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [question.key]: option.id,
                          }))
                        }
                      >
                        <div className="option-content">
                          <Icon size={23} strokeWidth={1.6} />
                          <div>
                            <strong>{option.title}</strong>
                            <span>{option.description}</span>
                          </div>
                        </div>
                      </SelectableCard>
                    );
                  })}
                </div>
                <div className="finder-navigation">
                  <button
                    className="text-link"
                    disabled={step === 0}
                    onClick={() => {
                      setStep(step - 1);
                      focusHeading();
                    }}
                  >
                    <ArrowLeft size={16} /> Voltar
                  </button>
                  <Button
                    disabled={!selected}
                    iconRight={<ArrowRight size={17} />}
                    onClick={() => {
                      if (step === 2) setDone(true);
                      else setStep(step + 1);
                      focusHeading();
                    }}
                  >
                    {step === 2 ? "Ver recomendação" : "Continuar"}
                  </Button>
                </div>
              </div>
            ) : (
              <div
                id="recomendacao"
                className="step-view finder-result"
                aria-live="polite"
              >
                <div className="result-check">
                  <Check size={24} />
                </div>
                <span className="eyebrow">RECOMENDADO PARA VOCÊ</span>
                <h3 ref={heading} tabIndex={-1}>
                  PLANO <span className="gold-text">{plan}</span>
                </h3>
                <p className="muted">
                  Uma recomendação baseada no seu objetivo, frequência e forma
                  de treinar.
                </p>
                <ul className="result-pillars">
                  {labels.map((label) => (
                    <li key={label}>
                      <Check size={16} />
                      {label}
                    </li>
                  ))}
                </ul>
                <p className="small muted">
                  Sugestão inicial e editável. O plano e seus benefícios serão
                  confirmados pela equipe.
                </p>
                <div className="result-actions">
                  <Button
                    href={`#plano-${plan.toLowerCase()}`}
                    iconRight={<ArrowUpRight size={16} />}
                  >
                    Conhecer plano
                  </Button>
                  <ContactAction
                    variant="secondary"
                    message={recommendationMessage(answers)}
                  >
                    Falar com a equipe
                  </ContactAction>
                </div>
                <button
                  className="text-link small"
                  onClick={() => {
                    setStep(0);
                    setDone(false);
                    setAnswers({});
                    focusHeading();
                  }}
                >
                  <RotateCcw size={14} /> Refazer minhas escolhas
                </button>
              </div>
            )}
          </div>
          <aside className="finder-preview">
            <span className="eyebrow">SEU TREINO TEM UM PONTO DE PARTIDA.</span>
            <div className="preview-number" aria-hidden="true">
              {done ? "03" : `0${step + 1}`}
              <span>/ 03</span>
            </div>
            <h3>
              O seu ritmo.
              <br />
              As suas escolhas.
            </h3>
            <p className="muted">Um caminho que começa com você.</p>
            <dl className="answer-preview">
              {["Objetivo", "Frequência", "Preferência"].map((label, i) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{labels[i]}</dd>
                </div>
              ))}
            </dl>
            <span className="small muted">
              Você escolhe. A gente conversa sobre o próximo passo.
            </span>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
