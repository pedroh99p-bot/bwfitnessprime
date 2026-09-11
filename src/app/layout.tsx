import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { BRAND_CONFIG } from "@/config/siteContent";
import { TOKENS } from "@/styles/tokens";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
const values = {
  "--bw-bg-primary": TOKENS.colors.bg.primary,
  "--bw-bg-secondary": TOKENS.colors.bg.secondary,
  "--bw-surface-primary": TOKENS.colors.surface.primary,
  "--bw-surface-secondary": TOKENS.colors.surface.secondary,
  "--bw-text-primary": TOKENS.colors.text.primary,
  "--bw-text-secondary": TOKENS.colors.text.secondary,
  "--bw-text-muted": TOKENS.colors.text.muted,
  "--bw-gold-base": TOKENS.colors.gold.base,
  "--bw-gold-dark": TOKENS.colors.gold.dark,
  "--bw-gold-light": TOKENS.colors.gold.light,
};
const themeStyle = {
  ...Object.fromEntries(
    Object.entries(values).map(([name, hex]) => [
      name,
      hex
        .match(/[a-f\d]{2}/gi)!
        .map((v) => parseInt(v, 16))
        .join(" "),
    ]),
  ),
  "--bw-gold-gradient": TOKENS.colors.gold.gradientMetallic,
  "--bw-gold-gradient-hover": TOKENS.colors.gold.gradientMetallicHover,
} as CSSProperties;
export const metadata: Metadata = {
  ...(BRAND_CONFIG.siteUrl
    ? {
        metadataBase: new URL(BRAND_CONFIG.siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
  title: "BW Prime Fitness | Morro do Banco, Itanhangá — RJ",
  description:
    "Seu treino. Sua evolução. Conheça a BW Prime Fitness no Morro do Banco, Itanhangá — RJ. Rua Cinco de Janeiro, próximo ao Expresso Pizza.",
  authors: [{ name: "MONTANA" }],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "BW Prime Fitness — Seu treino. Sua evolução.",
    description:
      "Musculação, cardio, funcional e pesos livres no Morro do Banco, Itanhangá — RJ.",
    ...(BRAND_CONFIG.siteUrl ? { url: BRAND_CONFIG.siteUrl } : {}),
    siteName: BRAND_CONFIG.name,
    images: [{ url: BRAND_CONFIG.logoUrl, alt: BRAND_CONFIG.name }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_CONFIG.name,
    images: [BRAND_CONFIG.logoUrl],
  },
};
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={manrope.variable} style={themeStyle}>
      <body>{children}</body>
    </html>
  );
}
