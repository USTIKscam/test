import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#182033",
        brand: "#246BFE",
        mint: "#14B8A6",
        sun: "#F59E0B"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 32, 51, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
