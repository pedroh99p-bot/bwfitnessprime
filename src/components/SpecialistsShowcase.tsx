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
                    alt={`Retrato ilustrativo de ${coach.name}; semelhança a confirmar`}
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
                <span className="eyebrow">
                  {coach.photo
                    ? `${coach.name.toUpperCase()} • IMAGEM A VALIDAR`
                    : `PERFIL A CONFIRMAR / 0${i + 1}`}
                </span>
                <h3>
                  {coach.name}
                  <ArrowUpRight size={21} />
                </h3>
                <p className="small muted">{coach.role}</p>
                {coach.badges.length > 0 && (
                  <div className="tags">
                    {coach.badges.map((badge) => (
                      <span key={badge}>{badge}</span>
                    ))}
                  </div>
                )}
                <span className="small muted">
                  {coach.photo
                    ? "Retrato ilustrativo; semelhança a confirmar."
                    : "Nome, imagem e informações a confirmar."}
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
              <div className="specialist-detail-photo">
                {selected.photo ? (
                  <Image
                    src={selected.photo}
                    alt={`Retrato ilustrativo de ${selected.name}; semelhança a confirmar`}
                    fill
                    sizes="100px"
                  />
                ) : (
                  <MediaPlaceholder variant="portrait" label="[FOTO A CONFIRMAR]" />
                )}
              </div>
              <div>
                <span className="eyebrow">
                  {selected.photo ? selected.role.toUpperCase() : "PERFIL PROVISÓRIO"}
                </span>
                <h3>{selected.name}</h3>
                <p className="muted">{selected.summary}</p>
                {selected.cref && (
                  <p className="small muted">CREF: {selected.cref}</p>
                )}
              </div>
            </div>
            <p className="small muted">
              {selected.photo
                ? "Imagem ilustrativa baseada em referência; validar semelhança antes da divulgação definitiva."
                : "Nome, imagem, função e demais informações a confirmar."}
            </p>
            {selected.badges.length > 0 && (
              <div className="tags">
                {selected.badges.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            )}
            <ContactAction message={CONTACT_MESSAGES.team} className="w-full">
              Quero acompanhamento
            </ContactAction>
          </>
        )}
      </BottomSheet>
    </Section>
  );
}
