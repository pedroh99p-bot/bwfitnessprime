import Section from "./layout/Section";
import SectionHeader from "./layout/SectionHeader";
import GoogleRating from "./ui/GoogleRating";
import Carousel from "./ui/Carousel";
import Reveal from "./ui/Reveal";
import { PendingLink } from "./ui/ContactAction";
import { BRAND_CONFIG, REVIEWS } from "@/config/siteContent";
export default function GoogleSocialProof() {
  return (
    <Section id="avaliacoes" containerSize="wide" className="reviews-section">
      <Reveal>
        <div className="reviews-heading">
          <SectionHeader
            eyebrow="GOOGLE • AVALIAÇÕES"
            title="Quem treina na BW"
            highlight="conta melhor"
            align="left"
          />
          <div>
            <GoogleRating />
            <p className="small muted">5 estrelas no Google</p>
          </div>
        </div>
      </Reveal>
      <Carousel label="Avaliações" className="reviews-carousel" autoplay>
        {REVIEWS.map((review, i) => (
          <article className="review-card" key={review.id}>
            <div className="review-top">
              <span className="rating-stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="mono small muted">0{i + 1}</span>
            </div>
            <p
              className={
                review.text ? "review-text" : "review-text placeholder-text"
              }
            >
              {review.text || "[DEPOIMENTO REAL]"}
            </p>
            {!review.text && (
              <p className="small muted">
                Espaço reservado para uma avaliação autorizada.
              </p>
            )}
            <div className="review-author">
              <span className="review-avatar" aria-hidden="true">
                —
              </span>
              <span>{review.author || "[CLIENTE]"}</span>
              <span className="small muted">
                {review.text ? "Google" : "Pendente"}
              </span>
            </div>
          </article>
        ))}
      </Carousel>
      <PendingLink
        label="Ver avaliações no Google ↗"
        className="text-link"
        url={BRAND_CONFIG.googleReviewsUrl}
        text="O link oficial das avaliações ainda será informado pela BW."
      />
    </Section>
  );
}
