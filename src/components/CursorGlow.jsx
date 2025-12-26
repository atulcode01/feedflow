import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5]"
      animate={{
        x: pos.x - 30,
        y: pos.y - 30,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 35,
        mass: 0.6,
      }}
    >
      {/* 🎯 SMALL + DEEP CURSOR GLOW */}
      <div className="w-[60px] h-[60px] rounded-full bg-green-500/25 blur-[45px]" />
    </motion.div>
  );
}
