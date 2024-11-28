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
        black: "#1C1C1C",
        gray_primary: "#8A8A8A",
        gray_secondary: "#E9E9E9",
        blue_category: "#AACAFA",
        orange_category: "#F9DBA1",
        green_category: "#BBFAB5",
        yellow_custom: "#FFEB3B", // Amarillo 
        red_custom: "#F44336",    // Rojo 
        pink_custom: "#E91E63",   // Rosa 
      },
      fontFamily: {
        Anaheim: ["Anaheim", "sans-serif"],
        
      },
      spacing: {
        
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;

