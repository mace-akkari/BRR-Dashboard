import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "1.5rem",
        "2xl": "1.75rem",
      },
      colors: {
        background: "var(--brr-bg-color)",
        text: "var(--brr-text-color)",
        "text-muted": "var(--brr-text-muted)",
        muted: "var(--brr-muted)",
        border: "var(--brr-border-color)",
        primary: "var(--brr-primary)",
      },
    },
  },
  plugins: [],
};

export default config;
