"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./layout/Container";
import BrandLogo from "./ui/BrandLogo";
import BottomSheet from "./ui/BottomSheet";
import { PendingLink } from "./ui/ContactAction";
import {
  BRAND_CONFIG,
  NAVIGATION,
  buildWhatsAppUrl,
  CONTACT_MESSAGES,
} from "@/config/siteContent";
export default function FooterMontana() {
  const [privacy, setPrivacy] = useState(false);
  return (
    <footer className="footer">
      <Container size="wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" aria-label="BW Prime Fitness — voltar ao início">
              <BrandLogo />
            </a>
            <p>
              SEU TREINO.
              <br />
              SUA EVOLUÇÃO.
            </p>
            <span className="small muted">Morro do Banco, Itanhangá — RJ</span>
          </div>
          <nav aria-label="Navegação do rodapé">
            <span className="eyebrow">EXPLORE</span>
            {NAVIGATION.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#horarios">Horários</a>
          </nav>
          <div className="footer-social">
            <span className="eyebrow">CONECTE-SE</span>
            <PendingLink
              label="Instagram ↗"
              url={BRAND_CONFIG.instagramUrl}
              text="O perfil oficial de Instagram ainda será informado pela BW."
            />
            <a
              href={buildWhatsAppUrl(CONTACT_MESSAGES.hero) || "#localizacao"}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
            <a
              href={BRAND_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google ↗
            </a>
            <button onClick={() => setPrivacy(true)}>
              Política de Privacidade
            </button>
          </div>
          <div className="footer-address">
            <span className="eyebrow">ENCONTRE A BW</span>
            <p>
              Rua Cinco de Janeiro
              <br />
              Morro do Banco
              <br />
              Itanhangá — Rio de Janeiro / RJ
              <br />
              22641-190
            </p>
            <span className="small muted">Próximo ao Expresso Pizza</span>
            <a
              className="text-link"
              href={BRAND_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Como chegar <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="small muted">
            © {new Date().getFullYear()} BW Prime Fitness
          </span>
          <p className="montana">
            PROJETO PRODUZIDO POR{" "}
            {BRAND_CONFIG.productionUrl ? (
              <a
                href={BRAND_CONFIG.productionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                MONTANA
              </a>
            ) : (
              <strong>MONTANA</strong>
            )}
          </p>
        </div>
      </Container>
      <BottomSheet
        open={privacy}
        onClose={() => setPrivacy(false)}
        title="Privacidade nesta versão"
      >
        <div className="privacy-copy">
          <p>
            As respostas do teste e os valores de peso e altura são processados
            no seu navegador. Esta página não envia esses dados a um banco de
            dados.
          </p>
          <p>
            Ao escolher falar no WhatsApp, a mensagem do botão é aberta nesse
            serviço. No teste de treino, a mensagem inclui as escolhas que você
            fez.
          </p>
          <p>
            O mapa incorporado utiliza o Google Maps e carrega conteúdo desse
            serviço. Os serviços externos seguem suas próprias políticas de
            privacidade.
          </p>
          <p className="muted">
            O documento institucional completo e o contato responsável por
            privacidade ainda precisam ser fornecidos pela BW.
          </p>
        </div>
      </BottomSheet>
    </footer>
  );
}
