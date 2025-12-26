/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
  colors: {
    bg: "var(--bg)",
    surface: "var(--surface)",
    card: "var(--card)",

    textMain: "var(--text)",
    textMuted: "var(--text-muted)",
    borderSoft: "var(--border)",

    primary: "#22c55e",
    primarySoft: "#16a34a",
  },
},

  },
  plugins: [],
};
