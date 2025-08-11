import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#C19A3F", /* dorado elegante */
          dark: "#9C7E2F",
          light: "#E6C767",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
}
export default config
