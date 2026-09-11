import { Camera, MapPin, User, Video } from "lucide-react";
export type MediaPlaceholderVariant =
  "portrait" | "landscape" | "square" | "reel" | "map" | "trainer";
export default function MediaPlaceholder({
  variant = "landscape",
  label,
  expectedAsset,
  className = "",
  children,
}: {
  variant?: MediaPlaceholderVariant;
  label?: string;
  expectedAsset?: string;
  aspectRatioLabel?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const Icon =
    variant === "map"
      ? MapPin
      : variant === "trainer" || variant === "portrait"
        ? User
        : variant === "reel"
          ? Video
          : Camera;
  return (
    <div className={`media-placeholder media-${variant} ${className}`}>
      <span className="media-label mono">
        BW PRIME /{" "}
        {variant === "trainer"
          ? "EQUIPE"
          : variant === "map"
            ? "LOCALIZAÇÃO"
            : "EXPERIÊNCIA"}
      </span>
      <div className="media-placeholder-center">
        <Icon size={36} strokeWidth={1} />
        <span>{label || "[FOTO OFICIAL]"}</span>
        {expectedAsset && <small>{expectedAsset}</small>}
      </div>
      <span className="media-status">IMAGEM PENDENTE</span>
      {children}
    </div>
  );
}
