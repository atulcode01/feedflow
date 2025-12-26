import { motion } from "framer-motion";
import { cardFade } from "../animations/variants";

const urgencyStyles = {
  HIGH: {
    ring: "ring-red-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(239,68,68,0.35)]",
    badge: "bg-red-500/15 text-red-500",
    bar: "bg-red-500",
  },
  LOW: {
    ring: "ring-green-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]",
    badge: "bg-green-500/15 text-green-500",
    bar: "bg-green-500",
  },
};

export default function FoodCard({ item }) {
  const urgency = urgencyStyles[item.urgency] || urgencyStyles.LOW;

  return (
    <motion.div
      variants={cardFade}
      className={`
        relative rounded-2xl p-6
        bg-card/70 backdrop-blur-xl
        border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
        ring-1 ${urgency.ring}
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 ${urgency.glow}
      `}
    >
      {/* URGENCY BADGE */}
      <span
        className={`
          absolute top-4 right-4 px-3 py-1
          text-xs font-semibold rounded-full
          ${urgency.badge}
        `}
      >
        {item.urgency}
      </span>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-[color:var(--text)] mb-1">
        {item.source}
      </h3>

      {/* TYPE */}
      <p className="text-sm text-[color:color-mix(in srgb, var(--text) 65%, transparent)] mb-4">
        {item.type}
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="uppercase text-xs text-[color:color-mix(in srgb, var(--text) 55%, transparent)]">
            Quantity
          </p>
          <p className="font-medium text-[color:var(--text)]">
            {item.quantity}
          </p>
        </div>

        <div>
          <p className="uppercase text-xs text-[color:color-mix(in srgb, var(--text) 55%, transparent)]">
            Distance
          </p>
          <p className="font-medium text-[color:var(--text)]">
            {item.distance}
          </p>
        </div>
      </div>

      {/* EXPIRY */}
      <div className="mt-4 text-xs text-[color:color-mix(in srgb, var(--text) 55%, transparent)]">
        Expiry: {item.expiry}
      </div>

      {/* PROGRESS BAR */}
      <div
        className="
          mt-4 h-[3px] w-full rounded-full
          bg-[color:color-mix(in srgb, var(--text) 12%, transparent)]
          overflow-hidden
        "
      >
        <motion.div
          className={`h-full ${urgency.bar}`}
          initial={{ width: "0%" }}
          whileInView={{
            width: item.urgency === "HIGH" ? "80%" : "45%",
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
