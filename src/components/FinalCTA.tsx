import { ArrowUpRight } from "lucide-react";
import Section from "./layout/Section";
import BrandLogo from "./ui/BrandLogo";
import ContactAction from "./ui/ContactAction";
import Reveal from "./ui/Reveal";
import { CONTACT_MESSAGES } from "@/config/siteContent";
export default function FinalCTA() {
  return (
    <Section
      id="comece"
      containerSize="wide"
      className="final-cta"
      borderTop={false}
    >
      <Reveal>
        <BrandLogo />
        <p className="eyebrow">BW PRIME FITNESS</p>
        <h2>
          SEU PRÓXIMO TREINO
          <br />
          <span className="gold-text">PODE COMEÇAR AQUI.</span>
        </h2>
        <div className="final-actions">
          <ContactAction icon={false} message={CONTACT_MESSAGES.class}>
            Agendar aula <ArrowUpRight size={18} />
          </ContactAction>
          <ContactAction variant="secondary" message={CONTACT_MESSAGES.hero}>
            Falar no WhatsApp
          </ContactAction>
        </div>
      </Reveal>
    </Section>
  );
}
