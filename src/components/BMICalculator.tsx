"use client";
import { useState } from "react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import ContactAction from "./ui/ContactAction";
import { CONTACT_MESSAGES } from "@/config/siteContent";
import { calculateBMI } from "@/lib/training";
export default function BMICalculator() {
  const [weight, setWeight] = useState("75");
  const [height, setHeight] = useState("175");
  const bmi = calculateBMI(
    Number(weight.replace(",", ".")),
    Number(height.replace(",", ".")),
  );
  const position =
    bmi === null ? 0 : Math.max(0, Math.min(100, ((bmi - 10) / 40) * 100));
  return (
    <Section id="imc" containerSize="wide" className="bmi-section">
      <div className="bmi-layout">
        <Reveal>
          <SectionHeader
            eyebrow="SEU PONTO DE PARTIDA"
            title="Entenda melhor"
            highlight="seu corpo"
            align="left"
            subtitle="Uma referência simples para começar uma conversa sobre você."
          />
          <p className="bmi-disclaimer">
            O IMC é apenas uma referência.
            <br />
            Uma avaliação profissional considera outros fatores.
          </p>
        </Reveal>
        <Reveal variant="side">
          <div className="bmi-calculator">
            <div className="bmi-inputs">
              <div>
                <label htmlFor="bmi-weight">PESO</label>
                <div className="number-field">
                  <input
                    id="bmi-weight"
                    inputMode="decimal"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    aria-describedby="bmi-help"
                    aria-invalid={bmi === null}
                  />
                  <span>kg</span>
                </div>
              </div>
              <div>
                <label htmlFor="bmi-height">ALTURA</label>
                <div className="number-field">
                  <input
                    id="bmi-height"
                    inputMode="decimal"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    aria-describedby="bmi-help"
                    aria-invalid={bmi === null}
                  />
                  <span>cm</span>
                </div>
              </div>
            </div>
            <p id="bmi-help" className="small muted">
              {bmi === null
                ? "Informe um peso de 20 a 350 kg e uma altura de 100 a 250 cm."
                : "Informe seu peso em kg e sua altura em centímetros."}
            </p>
            <div className="bmi-result" aria-live="polite" aria-atomic="true">
              <span className="eyebrow">SEU IMC</span>
              <output
                key={bmi}
                className="bmi-value"
                htmlFor="bmi-weight bmi-height"
              >
                {bmi === null
                  ? "—"
                  : bmi.toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
              </output>
              <span className="small muted">Índice de Massa Corporal</span>
            </div>
            <div className="bmi-scale" aria-hidden="true">
              <span style={{ left: `${position}%` }} />
            </div>
            <div className="scale-labels mono small muted" aria-hidden="true">
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50+</span>
            </div>
            <ContactAction
              message={CONTACT_MESSAGES.assessment}
              className="w-full"
            >
              Agendar avaliação
            </ContactAction>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
