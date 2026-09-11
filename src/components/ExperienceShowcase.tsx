"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import MediaPlaceholder from "./ui/MediaPlaceholder";
import Reveal from "./ui/Reveal";
import BottomSheet from "./ui/BottomSheet";
import ContactAction from "./ui/ContactAction";
import {
  BRAND_CONFIG,
  CONTACT_MESSAGES,
  FACILITY_CATEGORIES,
} from "@/config/siteContent";

export default function ExperienceShowcase() {
  const [tab, setTab] = useState(0);
  const [tour, setTour] = useState(false);
  const tabs = useRef<HTMLDivElement>(null);
  const category = FACILITY_CATEGORIES[tab];
  return (
    <Section id="estrutura" containerSize="wide" className="experience-section">
      <Reveal>
        <SectionHeader
          eyebrow="ESTRUTURA • EXPERIÊNCIA"
          title="A experiência"
          highlight="BW"
          align="left"
          subtitle="Um ambiente preparado para você evoluir no Morro do Banco."
        />
      </Reveal>
      <div className="experience-layout">
        <Reveal variant="fade">
          <div
            id="facility-panel"
            role="tabpanel"
            aria-labelledby={`facility-tab-${tab}`}
            className="experience-media"
          >
            {category.photo ? (
              <Image
                src={category.photo}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            ) : (
              <MediaPlaceholder
                key={category.id}
                label="[PLACEHOLDER ACADEMIA]"
                expectedAsset={`Foto oficial de ${category.name.toLowerCase()}`}
                className="structure-placeholder"
              />
            )}
            <button className="tour-button" onClick={() => setTour(true)}>
              <Play size={15} /> Tour da academia{" "}
              <span className="small muted">em breve</span>
            </button>
          </div>
        </Reveal>
        <Reveal variant="side" className="experience-content">
          <div
            className="facility-tabs"
            role="tablist"
            aria-label="Ambientes da academia"
            ref={tabs}
          >
            {FACILITY_CATEGORIES.map((item, i) => (
              <button
                id={`facility-tab-${i}`}
                key={item.id}
                role="tab"
                aria-selected={tab === i}
                tabIndex={tab === i ? 0 : -1}
                aria-controls="facility-panel"
                onClick={() => setTab(i)}
                onKeyDown={(e) => {
                  if (
                    [
                      "ArrowRight",
                      "ArrowDown",
                      "ArrowLeft",
                      "ArrowUp",
                      "Home",
                      "End",
                    ].includes(e.key)
                  ) {
                    e.preventDefault();
                    const next =
                      e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 3
                          : (i +
                              (["ArrowRight", "ArrowDown"].includes(e.key)
                                ? 1
                                : 3)) %
                            4;
                    setTab(next);
                    (
                      tabs.current?.children[next] as HTMLButtonElement
                    )?.focus();
                  }
                }}
              >
                <span className="mono">0{i + 1}</span>
                {item.name}
                <ArrowUpRight size={18} />
              </button>
            ))}
          </div>
          <div className="facility-description" key={category.id}>
            <p>{category.description}</p>
            <span className="small muted">
              {category.objectives.join(" • ")}
            </span>
          </div>
          <ContactAction variant="ghost" message={CONTACT_MESSAGES.class}>
            Conhecer a academia
          </ContactAction>
        </Reveal>
      </div>
      <BottomSheet
        open={tour}
        onClose={() => setTour(false)}
        title="Conheça a estrutura"
      >
        {tour && BRAND_CONFIG.tourVideoUrl ? (
          <video
            src={BRAND_CONFIG.tourVideoUrl}
            controls
            playsInline
            className="w-full"
          />
        ) : (
          <MediaPlaceholder
            variant="reel"
            label="[VÍDEO OFICIAL]"
            expectedAsset="O tour será inserido quando o vídeo oficial estiver disponível."
          />
        )}
        <ContactAction message={CONTACT_MESSAGES.class} className="w-full">
          Consultar uma visita
        </ContactAction>
      </BottomSheet>
    </Section>
  );
}
