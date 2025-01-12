import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    backgroundImage: {
      "custom-gif": "url('/bg-gif.gif')",
    },
    fontFamily: {
      TheJamsil5Bold: ["TheJamsil5Bold"],
      TheJamsil2Light: ["TheJamsil2Light"],
      TheJamsil4Medium: ["TheJamsil4Medium"],
    },
  },
  plugins: [],
} satisfies Config;
