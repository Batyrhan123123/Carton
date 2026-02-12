import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: "#E8E0F0",
          pink: "#F5E6EC",
          periwinkle: "#D4D8F0",
          cyan: "#7DD3D0",
          blue: "#5B9BD5",
          purple: "#9B7EBD",
          lime: "#B8D4A8",
          violet: "#A78BBA",
        },
        surface: {
          glass: "rgba(255,255,255,0.25)",
          glassBorder: "rgba(255,255,255,0.4)",
          card: "rgba(255,255,255,0.7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0,0,0,0.08), 0 8px 48px -8px rgba(0,0,0,0.06)",
        "soft-lg":
          "0 12px 40px -8px rgba(0,0,0,0.1), 0 24px 64px -16px rgba(0,0,0,0.08)",
        glow: "0 0 40px -8px rgba(125,211,208,0.4)",
        "glow-purple": "0 0 40px -8px rgba(155,126,189,0.35)",
        plastic:
          "0 8px 32px -8px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #E8E0F0 0%, #F5E6EC 40%, #D4D8F0 100%)",
        "gradient-cta": "linear-gradient(135deg, #7DD3D0 0%, #5B9BD5 100%)",
        "gradient-accent": "linear-gradient(135deg, #9B7EBD 0%, #5B9BD5 100%)",
      },
      animation: {
        "blob-slow": "blob 20s ease-in-out infinite",
        "blob-slower": "blob 28s ease-in-out infinite",
        "blob-slowest": "blob 36s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        sheen: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
