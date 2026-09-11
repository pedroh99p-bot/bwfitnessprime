import { MapPin, ArrowUpRight } from "lucide-react";
import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import Reveal from "./ui/Reveal";
import MediaPlaceholder from "./ui/MediaPlaceholder";
import LocationMap from "./ui/LocationMap";
import Button from "./ui/Button";
import ContactAction from "./ui/ContactAction";
import { BRAND_CONFIG, CONTACT_MESSAGES } from "@/config/siteContent";
export default function LocationSection() {
  return (
    <Section id="localizacao" containerSize="wide">
      <Reveal>
        <SectionHeader
          eyebrow="ONDE ESTAMOS"
          title="No Morro"
          highlight="do Banco"
          align="left"
          subtitle="Venha conhecer a BW Prime Fitness."
        />
      </Reveal>
      <div className="location-layout">
        <Reveal variant="fade">
          <div className="map-panel">
            {BRAND_CONFIG.mapEmbedUrl ? (
              <LocationMap />
            ) : (
              <MediaPlaceholder variant="map" label="[MAPA]" />
            )}
            <div className="map-caption">
              <MapPin size={18} />
              <span>
                Rua Cinco de Janeiro <small>Itanhangá • Rio de Janeiro</small>
              </span>
              <ArrowUpRight size={19} />
            </div>
          </div>
          <p className="small muted map-note">
            Mapa da rua informada. Número do imóvel a confirmar.
          </p>
        </Reveal>
        <Reveal variant="side">
          <div className="location-details">
            <span className="eyebrow">BW PRIME FITNESS</span>
            <h3>
              Seu próximo passo
              <br />é por aqui.
            </h3>
            <address>
              {BRAND_CONFIG.location.address}
              <br />
              Morro do Banco, Itanhangá — RJ
              <br />
              CEP {BRAND_CONFIG.location.postalCode}
            </address>
            <div className="reference-block">
              <MediaPlaceholder
                variant="square"
                label="[FOTO EXPRESSO PIZZA]"
              />
              <div>
                <span className="eyebrow">PONTO DE REFERÊNCIA</span>
                <strong>Expresso Pizza</strong>
                <p className="small muted">
                  Próximo ao Expresso Pizza,
                  <br />
                  na Rua Cinco de Janeiro.
                </p>
              </div>
            </div>
            <div className="location-actions">
              <Button
                href={BRAND_CONFIG.googleMapsUrl}
                iconLeft={<MapPin size={18} />}
                iconRight={<ArrowUpRight size={17} />}
              >
                Traçar rota
              </Button>
              <ContactAction
                variant="secondary"
                message={CONTACT_MESSAGES.location}
              >
                Falar no WhatsApp
              </ContactAction>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
