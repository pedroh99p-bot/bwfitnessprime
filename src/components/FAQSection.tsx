"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import { FAQ_ITEMS } from "@/config/siteContent";
export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="faq" containerSize="wide">
      <div className="faq-layout">
        <Reveal>
          <SectionHeader
            eyebrow="DÚVIDAS"
            title="Ainda tem"
            highlight="alguma dúvida?"
            align="left"
          />
        </Reveal>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              className={`faq-item ${open === i ? "is-open" : ""}`}
              key={item.question}
            >
              <h3>
                <button
                  id={`faq-question-${i}`}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="mono small muted">0{i + 1}</span>
                  <span>{item.question}</span>
                  <Plus size={20} />
                </button>
              </h3>
              <div
                id={`faq-answer-${i}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${i}`}
                aria-hidden={open !== i}
              >
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
