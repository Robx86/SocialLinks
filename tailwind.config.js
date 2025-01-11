/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#141414",
        foreground: "#1F1F1F",
        "primary-green": "#C4F82A",
        "button-bg": "#333333",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
