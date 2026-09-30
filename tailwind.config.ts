import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware surfaces (bound to CSS variables, flip with .dark)
        surface: "rgb(var(--surface) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted) / <alpha-value>)",
        hairline: "rgb(var(--hairline) / <alpha-value>)",
        brand: {
          // Green — primary action / trust color
          forest: "#1C6D40",
          forestDark: "#145530",
          forestLight: "#438F56",
          actionGreen: "#358B4A",
          // Pink — accent color
          pink: "#C2185B",
          pinkDark: "#9E124A",
          pinkLight: "#F7DCE6",
          // Supporting mints & neutrals
          mint: "#CDEAD9",
          mintLight: "#EEF7F1",
          surface: "#FAF8F6",
          accent: "#7FD8AE",
          charcoal: "#1D2420",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px -4px rgb(31 95 74 / 0.08)",
        cardHover: "0 12px 32px -8px rgb(31 95 74 / 0.14)",
        "card-dark": "0 4px 24px -4px rgb(0 0 0 / 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
