export default function Eyebrow({
  children,
  variant = "gold",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "gold" | "muted" | "pill";
  className?: string;
}) {
  return (
    <span
      className={`eyebrow ${variant === "muted" ? "muted" : ""} ${className}`}
    >
      {children}
    </span>
  );
}
