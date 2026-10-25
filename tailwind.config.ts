import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 50: "#f2f5fa", 100: "#e1e8f3", 600: "#1f3a68", 700: "#172d52", 800: "#10213d", 900: "#0b1830" },
        gold: { 400: "#d4b26a", 500: "#c29a4a" },
      },
      fontFamily: { sans: ["Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "sans-serif"] },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
} satisfies Config;
