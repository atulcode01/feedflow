import { motion, AnimatePresence } from "framer-motion";
import { Home, Shuffle, Users, BarChart3, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { id: "hero", icon: Home },
  { id: "flow", icon: Shuffle },
  { id: "roles", icon: Users },
  { id: "impact", icon: BarChart3 },
  { id: "future", icon: Rocket },
];

export default function DockNav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY + 8) setVisible(false);
      else if (y < lastScrollY - 8) setVisible(true);
      setLastScrollY(y);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const go = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 inset-x-0 z-50 flex justify-center"
        >
          <div
            className="
              flex items-center gap-1
              px-3 py-2
              rounded-2xl
              bg-black/55 backdrop-blur-xl
              border border-white/10
              shadow-[0_15px_50px_rgba(0,0,0,0.7)]
            "
          >
            {items.map(({ id, icon: Icon }) => {
              const isActive = active === id;

              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`
                    w-12 h-12 rounded-xl
                    flex items-center justify-center
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-green-500/20 text-green-400 shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                        : "text-white/70 hover:bg-white/10"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
