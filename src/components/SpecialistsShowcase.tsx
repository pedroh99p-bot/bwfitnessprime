"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Carousel from "./ui/Carousel";
import MediaPlaceholder from "./ui/MediaPlaceholder";
import BottomSheet from "./ui/BottomSheet";
import Reveal from "./ui/Reveal";
import ContactAction from "./ui/ContactAction";
import { CONTACT_MESSAGES, SPECIALISTS } from "@/config/siteContent";
import type { Specialist } from "@/types/content";

export default function SpecialistsShowcase() {
  const [selected, setSelected] = useState<Specialist | null>(null);
  return (
    <Section id="equipe" containerSize="wide">
      <span id="especialistas" className="anchor-alias" />
      <Reveal>
        <SectionHeader
          eyebrow="EQUIPE • ACOMPANHAMENTO"
          title="Especialistas para"
          highlight="sua evolução"
          align="left"
          subtitle="Profissionais preparados para acompanhar diferentes objetivos."
        />
      </Reveal>
      <Reveal variant="stagger">
        <Carousel label="Especialistas" className="team-carousel">
          {SPECIALISTS.map((coach, i) => (
            <button
              key={coach.id}
              className="coach-card"
              onClick={() => setSelected(coach)}
              aria-label={`Conhecer especialista BW ${i + 1}`}
            >
              <div className="coach-photo">
                {coach.photo ? (
                  <Image
                    src={coach.photo}
                    alt={coach.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, 82vw"
                  />
                ) : (
                  <MediaPlaceholder
                    variant="trainer"
                    label="[FOTO DO ESPECIALISTA]"
                  />
                )}
              </div>
              <div className="coach-info">
                <span className="eyebrow">PERFIL A CONFIRMAR / 0{i + 1}</span>
                <h3>
                  {coach.name}
                  <ArrowUpRight size={21} />
                </h3>
                <p className="small muted">{coach.role}</p>
                <div className="tags">
                  {coach.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
                <span className="small muted">
                  Especialidades ilustrativas, a confirmar
                </span>
              </div>
            </button>
          ))}
        </Carousel>
      </Reveal>
      <BottomSheet
        open={!!selected}
        title="Especialista BW"
        onClose={() => setSelected(null)}
      >
        {selected && (
          <>
            <div className="specialist-summary">
              <MediaPlaceholder variant="portrait" label="[FOTO]" />
              <div>
                <span className="eyebrow">PERFIL PROVISÓRIO</span>
                <h3>{selected.name}</h3>
                <p className="muted">{selected.summary}</p>
                <p className="small muted">
                  CREF: {selected.cref || "a confirmar"}
                </p>
              </div>
            </div>
            <p className="small muted">Especialidades a confirmar</p>
            <div className="tags">
              {selected.badges.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
            <ContactAction message={CONTACT_MESSAGES.team} className="w-full">
              Quero acompanhamento
            </ContactAction>
          </>
        )}
      </BottomSheet>
    </Section>
  );
}
