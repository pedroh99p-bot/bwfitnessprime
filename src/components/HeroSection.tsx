import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Container from "./layout/Container";
import Button from "./ui/Button";
import GoogleRating from "./ui/GoogleRating";
import ContactAction from "./ui/ContactAction";
import { BRAND_CONFIG, CONTACT_MESSAGES } from "@/config/siteContent";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-arch" />
        <div className="hero-line" />
      </div>
      {BRAND_CONFIG.heroVideoUrl && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src={BRAND_CONFIG.heroVideoUrl} type="video/mp4" />
        </video>
      )}
      <Container size="wide" className="hero-inner">
        <div className="hero-copy">
          <p
            className="eyebrow hero-enter"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            BW PRIME FITNESS <span>•</span> MORRO DO BANCO
          </p>
          <h1>
            <span
              className="hero-enter"
              style={{ "--delay": "90ms" } as React.CSSProperties}
            >
              SEU TREINO.
            </span>
            <span
              className="hero-enter gold-text"
              style={{ "--delay": "180ms" } as React.CSSProperties}
            >
              SUA EVOLUÇÃO.
            </span>
          </h1>
          <p
            className="hero-description hero-enter"
            style={{ "--delay": "280ms" } as React.CSSProperties}
          >
            Estrutura, acompanhamento e treino para evoluir no seu ritmo.
          </p>
          <div
            className="hero-actions hero-enter"
            style={{ "--delay": "380ms" } as React.CSSProperties}
          >
            <Button
              href="#encontre-seu-treino"
              iconRight={<ArrowUpRight size={19} />}
            >
              Começar agora
            </Button>
            <ContactAction variant="secondary" message={CONTACT_MESSAGES.hero}>
              Falar no WhatsApp
            </ContactAction>
          </div>
          <div
            className="hero-rating hero-enter"
            style={{ "--delay": "480ms" } as React.CSSProperties}
          >
            <GoogleRating />
          </div>
        </div>
        <div className="hero-portrait">
          <Image
            src="/images/bw-prime/wellington-hero.webp"
            alt="Retrato ilustrativo de Wellington, proprietário da BW Prime Fitness. Semelhança a confirmar."
            fill
            priority
            sizes="(min-width: 1024px) 36vw, (min-width: 640px) 220px, 190px"
          />
        </div>
        <div className="hero-side" aria-hidden="true">
          <span>FORÇA PARA O SEU DIA.</span>
          <span>ESPAÇO PARA A SUA EVOLUÇÃO.</span>
          <div className="hero-side-rule" />
          <span>ITANHANGÁ / RJ</span>
        </div>
        <div className="hero-bottom">
          <span>
            MORRO DO BANCO <span className="muted">/</span> ITANHANGÁ
          </span>
          <a href="#encontre-seu-treino" aria-label="Explore a página">
            EXPLORE <ArrowDown size={15} />
          </a>
        </div>
      </Container>
    </section>
  );
}
