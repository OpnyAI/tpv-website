import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tpv: {
          dark: "#0B002E",
          deep: "#050015",
          card: "#071525",
          muted: "#120532",
          violet: "#A300FF",
          magenta: "#F900FF",
          accent: "#FF365F",
          blue: "#401DB1",
          gold: "#E69930",
          aubergine: "#2B0E2E",
          deepViolet: "#240242",
          white: "#F8F7FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-tpv)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(249, 0, 255, 0.26)",
        glowSoft: "0 0 32px rgba(255, 54, 95, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        "subtle-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -8px, 0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.72" },
          "50%": { opacity: "1" },
        },
        referenceZoom: {
          "0%": { opacity: "0.78", transform: "translateX(-50%) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateX(-50%) scale(1)" },
        },
      },
      animation: {
        "subtle-float": "subtle-float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
