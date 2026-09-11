/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "360px",
      mobile: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        bw: {
          root: "rgb(var(--bw-bg-primary) / <alpha-value>)",
          bg: {
            primary: "rgb(var(--bw-bg-primary) / <alpha-value>)",
            secondary: "rgb(var(--bw-bg-secondary) / <alpha-value>)",
          },
          surface: {
            primary: "rgb(var(--bw-surface-primary) / <alpha-value>)",
            secondary: "rgb(var(--bw-surface-secondary) / <alpha-value>)",
          },
          text: {
            primary: "rgb(var(--bw-text-primary) / <alpha-value>)",
            secondary: "rgb(var(--bw-text-secondary) / <alpha-value>)",
            muted: "rgb(var(--bw-text-muted) / <alpha-value>)",
          },
          gold: {
            DEFAULT: "rgb(var(--bw-gold-base) / <alpha-value>)",
            light: "rgb(var(--bw-gold-light) / <alpha-value>)",
            dark: "rgb(var(--bw-gold-dark) / <alpha-value>)",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      backgroundImage: { "gold-metallic": "var(--bw-gold-gradient)" },
    },
  },
  plugins: [],
};
