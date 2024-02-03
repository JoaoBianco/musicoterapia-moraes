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
        "custom-blue-400": "#69B3C0",
        "custom-blue-500": "#2B7D92",
        "custom-red-400": "#C42F1B",
        "custom-red-500": "#980903",
      },
      backgroundColor: {
        "custom-blue-400": "#69B3C0",
        "custom-blue-500": "#2B7D92",
        "custom-red-400": "#C42F1B",
        "custom-red-500": "#980903",
        "white-snow": "#fffafa",
      },
    },
  },
  plugins: [],
};
export default config;
