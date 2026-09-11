import Container from "./Container";
export default function Section({
  id,
  children,
  fullBleed = false,
  containerSize = "default",
  className = "",
  borderTop = true,
}: {
  id?: string;
  children: React.ReactNode;
  fullBleed?: boolean;
  containerSize?: "default" | "narrow" | "wide" | "full";
  className?: string;
  borderTop?: boolean;
}) {
  return (
    <section
      id={id}
      className={`section ${borderTop ? "section-bordered" : ""} ${className}`}
    >
      {fullBleed ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}
