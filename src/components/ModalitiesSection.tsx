import { ArrowUpRight } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Carousel from "./ui/Carousel";
import Reveal from "./ui/Reveal";
import MediaPlaceholder from "./ui/MediaPlaceholder";
import ContactAction from "./ui/ContactAction";
import { FACILITY_CATEGORIES } from "@/config/siteContent";
export default function ModalitiesSection() {
  return (
    <Section
      id="modalidades"
      containerSize="wide"
      className="modalities-section"
    >
      <Reveal>
        <SectionHeader
          eyebrow="MODALIDADES"
          title="Escolha como quer"
          highlight="se movimentar"
          align="left"
        />
      </Reveal>
      <Reveal variant="fade">
        <Carousel label="Modalidades" className="modalities-carousel">
          {FACILITY_CATEGORIES.map((item, i) => (
            <article key={item.id} className="modality-card">
              <MediaPlaceholder
                variant="portrait"
                label={`[FOTO ${item.name.toUpperCase()}]`}
                className="modality-media"
              />
              <div className="modality-info">
                <span className="modality-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{item.name}</h3>
                <p className="muted">{item.objectives.join(" • ")}</p>
                <ContactAction
                  variant="ghost"
                  icon={false}
                  message={`Olá! Gostaria de saber mais sobre ${item.name.toLowerCase()} na BW Prime Fitness.`}
                >
                  Quero conhecer <ArrowUpRight size={16} />
                </ContactAction>
              </div>
            </article>
          ))}
        </Carousel>
      </Reveal>
    </Section>
  );
}
