/**
 * BW PRIME FITNESS — Centralized Design Tokens
 *
 * Inegociável:
 * - Preto Profundo (#050505) + Grafite (#0A0A0A, #101010, #141414)
 * - Dourado Nobre (#D4AF37) com variações dark e light
 * - Off-White (#F9F9FB) para legibilidade máxima
 * - Zero rosa, zero magenta, zero roxo, zero azul neon
 */

export const TOKENS = {
  colors: {
    bg: {
      primary: "#050505",
      secondary: "#0A0A0A",
    },
    surface: {
      primary: "#101010",
      secondary: "#141414",
      border: "rgba(255, 255, 255, 0.08)",
      borderGold: "rgba(212, 175, 55, 0.28)",
    },
    text: {
      primary: "#F9F9FB",
      secondary: "#A3A3B0",
      muted: "#71717A",
    },
    gold: {
      dark: "#8C5E13",
      base: "#D4AF37",
      light: "#F5E296",
      glow: "rgba(212, 175, 55, 0.22)",
      gradientMetallic:
        "linear-gradient(135deg, #FFE8A3 0%, #D4AF37 40%, #AA7C11 75%, #634304 100%)",
      gradientMetallicHover:
        "linear-gradient(135deg, #FFF2C6 0%, #E2BD44 40%, #B88B25 75%, #7D5C0E 100%)",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
  },
  radius: {
    sm: "8px",
    md: "12px",
    card: "18px",
    glass: "22px",
    full: "9999px",
  },
  borders: {
    subtle: "1px solid rgba(255, 255, 255, 0.08)",
    goldSubtle: "1px solid rgba(212, 175, 55, 0.25)",
    goldSolid: "1px solid #D4AF37",
    goldActive: "2px solid #D4AF37",
  },
  shadows: {
    card: "0 4px 20px rgba(0, 0, 0, 0.5)",
    glass: "0 10px 30px rgba(0, 0, 0, 0.65)",
    goldSubtle: "0 0 16px rgba(212, 175, 55, 0.15)",
    goldGlow: "0 0 25px rgba(212, 175, 55, 0.28)",
  },
  typography: {
    fontFamily: {
      sans: "var(--font-manrope), Inter, sans-serif",
      display: "var(--font-manrope), Inter, sans-serif",
      mono: "var(--font-mono), monospace",
    },
    scale: {
      display: "clamp(2.5rem, 7vw, 4.5rem)",
      h1: "clamp(2rem, 5vw, 3.25rem)",
      h2: "clamp(1.5rem, 3.5vw, 2.25rem)",
      h3: "clamp(1.125rem, 2.5vw, 1.5rem)",
      bodyLarge: "1.125rem", // 18px
      body: "1rem", // 16px
      bodySmall: "0.875rem", // 14px
      label: "0.75rem", // 12px
      eyebrow: "0.6875rem", // 11px
    },
    tracking: {
      tight: "-0.02em",
      normal: "0em",
      wide: "0.05em",
      widest: "0.25em",
    },
  },
  containers: {
    mobile: "390px",
    content: "1140px",
    wide: "1280px",
  },
  breakpoints: {
    xs: 360,
    mobile: 390,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1440,
  },
  motion: {
    duration: {
      fast: "150ms",
      normal: "250ms",
      slow: "400ms",
      marquee: "35s",
    },
    easing: {
      default: "cubic-bezier(0.16, 1, 0.3, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
    },
  },
  zIndex: {
    base: 0,
    surface: 1,
    header: 30,
    modal: 40,
    assistant: 45,
    overlay: 50,
  },
} as const;

export type DesignTokens = typeof TOKENS;
