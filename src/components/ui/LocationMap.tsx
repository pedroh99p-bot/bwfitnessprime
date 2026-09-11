"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { BRAND_CONFIG } from "@/config/siteContent";
export default function LocationMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="map-viewport">
      {!loaded && (
        <div className="map-loading" role="status">
          <MapPin size={32} strokeWidth={1.2} />
          <p>Rua Cinco de Janeiro</p>
          <span className="small muted">Carregando o mapa de Itanhangá…</span>
          <a
            href={BRAND_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link small"
          >
            Abrir no Google Maps ↗
          </a>
        </div>
      )}
      <iframe
        title="Mapa da Rua Cinco de Janeiro, Itanhangá"
        src={BRAND_CONFIG.mapEmbedUrl}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
