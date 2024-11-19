import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#9e60ff",
        secondary: "#50c878",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config;
