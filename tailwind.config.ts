import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: { DEFAULT: "#efdcae", 2: "#e3caa0", dark: "#cdab77" },
        wood: { light: "#b98452", DEFAULT: "#6b4123", mid: "#8a5a34", dark: "#3c2412" },
        gold: { DEFAULT: "#c9971f", bright: "#e7b93a" },
        grass: { DEFAULT: "#4c7a3f", dark: "#33552a" },
        sky: { DEFAULT: "#a9d8e6", 2: "#7fc0d6" },
        ocean: { DEFAULT: "#2c6e8e", dark: "#184a63" },
        stone: "#837b6d",
        ink: { DEFAULT: "#2a1a0f", soft: "#4a3420" },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      boxShadow: {
        wood: "0 6px 0 #3a2210",
        panel: "0 10px 0 rgba(0,0,0,.15), 0 16px 30px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};
export default config;
