"use client";
import { useEffect, useRef } from "react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import { METHOD_STEPS } from "@/config/siteContent";
export default function MethodSection() {
  const timeline = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = timeline.current;
    if (!el) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = media.matches
        ? 1
        : Math.max(
            0,
            Math.min(1, (window.innerHeight * 0.75 - rect.top) / rect.height),
          );
      el.style.setProperty("--progress", String(progress));
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    media.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      media.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <Section id="metodo" containerSize="wide" className="method-section">
      <div className="method-layout">
        <Reveal>
          <SectionHeader
            eyebrow="NOSSO MÉTODO"
            title="Evolução com"
            highlight="propósito"
            align="left"
            subtitle="Cada jornada é única. A sua também."
          />
        </Reveal>
        <div className="method-timeline" ref={timeline}>
          {METHOD_STEPS.map((step, i) => (
            <Reveal key={step.title} variant="side">
              <div className="method-step">
                <span className="method-dot" />
                <span className="eyebrow">PASSO 0{i + 1}</span>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
