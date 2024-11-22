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
        "TP-primary":"rgba(73, 149, 255, 1)",
        "TP-black":"rgba(30, 30, 30, 1)",
        "TP-primary-text":"rgba(255, 255, 255, 1)",
        "TP-secondary-text":"rgba(176, 176, 176, 1)"
      },
      fontFamily: {
        benzin: ['Benzin-Medium', 'sans-serif'],
        sfpro: ['"SF Pro"', 'sans-serif'], // Ensure this exists for `font-sfpro`
      },
      fontWeight: {
        regular: '400', // Defines `font-regular`
      },

    },
  },
  plugins: [],
} satisfies Config;
