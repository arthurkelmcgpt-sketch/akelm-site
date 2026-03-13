import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        akelm: {
          white: "#FFFFFF",
          light: "#F3F4F6",
          dark: "#111827",
          primary: "#7F1D1D",
          accent: "#EF4444"
        }
      }
    }
  },
  plugins: []
};

export default config;