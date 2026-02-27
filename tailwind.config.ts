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
        // From original nkatandiinyom.com (Astra theme)
        // Primary blue: links, buttons, CTAs
        primary: {
          50: "#ebf5ff",
          100: "#d6ebff",
          200: "#b3d7ff",
          300: "#80bfff",
          400: "#4da6ff",
          500: "#086afe",
          600: "#257af8",
          700: "#1a5fd4",
          800: "#1549a8",
          900: "#0f3380",
          950: "#0a2050",
        },
        // Navy/slate: headings and body text (original color-2, color-3, color-8)
        brand: {
          50: "#f0f4f8",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#94a3b8",
          600: "#374c6c",
          700: "#374c6c",
          800: "#1e293b",
          900: "#031530",
          950: "#020c1a",
        },
        // Neutrals for backgrounds (original color-5 white, color-6 #e2e8f0)
        surface: {
          DEFAULT: "#ffffff",
          muted: "#e2e8f0",
          elevated: "#f8fafc",
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
        section: "clamp(3rem, 8vw, 7rem)",
        container: "min(90vw, 1200px)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "float-bounce": "floatBounce 5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatBounce: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(4px, -8px)" },
          "50%": { transform: "translate(-5px, 4px)" },
          "75%": { transform: "translate(-3px, 6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
