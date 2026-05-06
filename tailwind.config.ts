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
        lin: "#F5F1EA",
        noir: "#111111",
        foret: "#1F3A2E",
        cognac: "#B8793E",
        sable: "#D8C5A5",
        pierre: "#8A8378",
        noyer: "#5A3921",
        sauge: "#A7B89A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.0" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2.5rem)", { lineHeight: "1.15" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "4rem",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        drawLine: "drawLine 2s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
