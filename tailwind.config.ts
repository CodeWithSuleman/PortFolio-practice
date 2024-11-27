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
        heading:"#21243D",
        recentBackground: "#F4E2E2",
        footerBackground: "#FAF5F5",
        profileBackground: "#dfd8d8",
        primary:"#F98585",
        background: "#f6f1f1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
