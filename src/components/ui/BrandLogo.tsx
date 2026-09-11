import Image from "next/image";
import { BRAND_CONFIG } from "@/config/siteContent";
export default function BrandLogo({
  priority = false,
  className = "",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      className={`brand-logo ${className}`}
      src={BRAND_CONFIG.logoUrl}
      alt={BRAND_CONFIG.name}
      width={180}
      height={120}
      sizes="(min-width: 1024px) 140px, 100px"
      priority={priority}
    />
  );
}
