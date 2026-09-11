import { Clock } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import ResponsiveGrid from "./layout/ResponsiveGrid";
import BaseCard from "./ui/cards/BaseCard";
import Reveal from "./ui/Reveal";
import ContactAction from "./ui/ContactAction";
import { OPERATING_HOURS } from "@/config/siteContent";
export default function HoursSection() {
  return (
    <Section id="horarios" containerSize="wide" className="hours-section">
      <Reveal>
        <SectionHeader
          eyebrow="HORÁRIOS"
          title="A BW cabe na"
          highlight="sua rotina"
          align="left"
        />
      </Reveal>
      <Reveal variant="stagger">
        <ResponsiveGrid cols={3}>
          {OPERATING_HOURS.map((item) => (
            <BaseCard key={item.day} className="hours-card">
              <div>
                <span className="eyebrow">{item.day}</span>
                <Clock size={18} />
              </div>
              <p>{item.hours}</p>
              <span className="small muted">Horário a confirmar</span>
            </BaseCard>
          ))}
        </ResponsiveGrid>
      </Reveal>
      <div className="section-end">
        <p className="small muted">
          Confirme também o funcionamento em feriados.
        </p>
        <ContactAction
          variant="ghost"
          message="Olá! Gostaria de confirmar os horários da BW Prime Fitness."
        >
          Falar com a BW
        </ContactAction>
      </div>
    </Section>
  );
}
