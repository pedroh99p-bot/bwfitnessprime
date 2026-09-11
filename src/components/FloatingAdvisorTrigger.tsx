"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, UserRound } from "lucide-react";
import BottomSheet from "./ui/BottomSheet";
import ContactAction from "./ui/ContactAction";
import { BRAND_CONFIG, CONTACT_MESSAGES } from "@/config/siteContent";
export default function FloatingAdvisorTrigger() {
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setBubble(false), 6500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="assistant">
        <span
          className={`assistant-bubble ${bubble && !open ? "bubble-visible" : ""}`}
        >
          Posso ajudar?
        </span>
        <button
          className="assistant-button"
          aria-label="Abrir assistente BW"
          aria-expanded={open}
          onClick={() => {
            setOpen(true);
            setBubble(false);
          }}
        >
          <UserRound size={26} strokeWidth={1.4} aria-hidden="true" />
          <span className="assistant-dot" aria-hidden="true" />
        </button>
      </div>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title="Seu próximo passo na BW"
      >
        <p className="muted">Explore a academia ou fale com a equipe.</p>
        <nav
          className="sheet-links assistant-links"
          aria-label="Atalhos do assistente"
        >
          {[
            ["Encontrar meu treino", "#encontre-seu-treino"],
            ["Ver modalidades", "#modalidades"],
            ["Ver planos", "#planos"],
            ["Ver horários", "#horarios"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a
            href={BRAND_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Traçar rota
            <ArrowUpRight size={18} />
          </a>
        </nav>
        <ContactAction message={CONTACT_MESSAGES.class} className="w-full">
          Agendar aula
        </ContactAction>
        <ContactAction variant="secondary" className="w-full">
          WhatsApp
        </ContactAction>
      </BottomSheet>
    </>
  );
}
