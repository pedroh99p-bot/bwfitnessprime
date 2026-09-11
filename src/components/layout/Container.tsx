export default function Container({
  children,
  size = "default",
  className = "",
}: {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
}) {
  return (
    <div className={`container container-${size} ${className}`}>{children}</div>
  );
}
