import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: warm, cultural, trustworthy
        brand: {
          50: "#faf8f5",
          100: "#f2ede6",
          200: "#e6dccf",
          300: "#d4c4b0",
          400: "#bda88a",
          500: "#a68b6a",
          600: "#937558",
          700: "#795f49",
          800: "#634e3d",
          900: "#524132",
          950: "#2b2119",
        },
        // Accent: dignified, used for CTAs and highlights
        accent: {
          50: "#f0f7f4",
          100: "#d9ebe3",
          200: "#b6d6c9",
          300: "#8ab9a8",
          400: "#5f9d87",
          500: "#44826e",
          600: "#35685a",
          700: "#2d554a",
          800: "#27453d",
          900: "#233a34",
          950: "#112019",
        },
        // Neutrals for text and backgrounds
        surface: {
          DEFAULT: "#fafaf9",
          muted: "#f5f5f4",
          elevated: "#ffffff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2rem", { lineHeight: "1.2" }],
        "display-sm": ["1.5rem", { lineHeight: "1.3" }],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 7rem)",
        container: "min(90vw, 1200px)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
