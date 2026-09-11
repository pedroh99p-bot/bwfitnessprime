import { ArrowUpRight } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Carousel from "./ui/Carousel";
import Reveal from "./ui/Reveal";
import ContactAction from "./ui/ContactAction";
import { CONTACT_MESSAGES, PLANS_DATA } from "@/config/siteContent";
export default function PlansSection() {
  return (
    <Section id="planos" containerSize="wide">
      <Reveal>
        <SectionHeader
          eyebrow="PLANOS"
          title="Um plano para"
          highlight="cada momento"
          align="left"
          subtitle="Encontre o seu ponto de partida. Converse com a BW sobre as opções."
        />
      </Reveal>
      <Reveal variant="stagger">
        <Carousel label="Planos" className="plans-carousel">
          {PLANS_DATA.map((plan) => (
            <article
              id={`plano-${plan.code.toLowerCase()}`}
              key={plan.code}
              className={`plan-card ${plan.code === "PRIME" ? "plan-featured" : ""}`}
            >
              <div className="plan-badge">
                {plan.code === "PRIME" ? "RECOMENDADO" : "SEU PRÓXIMO PASSO"}
              </div>
              <div className="plan-body">
                <h3>{plan.code}</h3>
                <p className="muted plan-description">{plan.description}</p>
                <div className="plan-price">
                  {plan.price === null ? (
                    <>
                      <span>R$</span> -- <small>/ mês</small>
                    </>
                  ) : (
                    <>
                      {plan.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                      <small>/ mês</small>
                    </>
                  )}
                </div>
                <span className="small muted">Valor a confirmar</span>
                <ul className="plan-benefits">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span aria-hidden="true">—</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <ContactAction
                  icon={false}
                  variant={plan.code === "PRIME" ? "primary" : "secondary"}
                  className="w-full"
                  message={`${CONTACT_MESSAGES.plans} Tenho interesse na proposta ${plan.code}.`}
                >
                  Escolher plano <ArrowUpRight size={17} />
                </ContactAction>
              </div>
            </article>
          ))}
        </Carousel>
      </Reveal>
      <div className="section-end">
        <p className="small muted">
          Apresentação provisória. Nomes, benefícios e condições aguardam
          confirmação da BW.
        </p>
        <ContactAction variant="ghost" message={CONTACT_MESSAGES.plans}>
          Falar sobre planos
        </ContactAction>
      </div>
    </Section>
  );
}
