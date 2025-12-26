import { useEffect, useState } from "react";
import CursorGlow from "./components/CursorGlow";
import DockNav from "./components/DockNav";

import Hero from "./sections/Hero";
import Flow from "./sections/Flow";
import Roles from "./sections/Roles";
import Impact from "./sections/Impact";
import Future from "./sections/Future";
import CTA from "./sections/CTA";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen bg-bg text-[color:var(--text)] overflow-hidden transition-colors duration-500">

      {/* 🌗 THEME TOGGLE */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="
          fixed top-5 right-5 z-[100]
          px-4 py-2 rounded-full
          bg-card border border-white/10
          text-sm font-medium
          backdrop-blur-xl
          hover:scale-105 transition
          shadow-lg
        "
      >
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* 🌿 Cursor Glow */}
      <CursorGlow />

      <Hero />
      <Flow />
      <Roles />
      <Impact />
      <Future />
      <CTA />

      <DockNav />
    </div>
  );
}
