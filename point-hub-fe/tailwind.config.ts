import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "var(--background-dark)",
        bgLight: "var(--background-light)",
        dividerDark: "var(--divider-dark)",
        dividerLight: "var(--divider-light)",
        textDark: "var(--foreground-dark)",
        textLight: "var(--foreground-light)",
        primary: {
          500: "#27A2F8",
        },
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
