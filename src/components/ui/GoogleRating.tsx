export default function GoogleRating() {
  return (
    <div
      className="google-rating"
      aria-label="Avaliação 5,0 de 5 estrelas no Google"
    >
      <svg
        className="google-mark"
        aria-hidden="true"
        width="29"
        height="29"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.23c1.9-1.75 2.99-4.33 2.99-7.36ZM12 22c2.7 0 4.96-.9 6.61-2.41l-3.23-2.51c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.08v2.59A10 10 0 0 0 12 22Zm-5.58-8.08A6 6 0 0 1 6.1 12c0-.67.11-1.32.32-1.92V7.49H3.08A10 10 0 0 0 2 12c0 1.61.39 3.14 1.08 4.51l3.34-2.59ZM12 5.96c1.47 0 2.79.51 3.82 1.51l2.86-2.86C16.95 3 14.7 2 12 2a10 10 0 0 0-8.92 5.49l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96Z" />
      </svg>
      <div>
        <div className="rating-line">
          <strong>5,0</strong>
          <span className="rating-stars" aria-hidden="true">
            ★★★★★
          </span>
        </div>
        <span className="rating-caption">no Google</span>
      </div>
    </div>
  );
}
