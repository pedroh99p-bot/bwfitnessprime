import Eyebrow from "./Eyebrow";
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`section-header ${align === "center" ? "centered" : ""} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>
        {title}
        {highlight && (
          <>
            <br />
            <span className="gold-text">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
