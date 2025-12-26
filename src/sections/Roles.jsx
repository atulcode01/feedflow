import { motion } from "framer-motion";

export default function Roles() {
  return (
    <section
      id="roles"
      className="
        min-h-screen px-6 py-32
        flex flex-col items-center
        bg-bg transition-colors duration-500
      "
    >
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[color:var(--text)]">
        How FeedFlow Works
      </h2>

      <p className="
        max-w-3xl text-center mb-20
        text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
      ">
        FeedFlow intelligently connects surplus food providers with NGOs and
        volunteers using real-time prioritisation based on urgency, distance,
        and quantity.
      </p>

      {/* FLOW STACK */}
      <div className="flex flex-col items-center gap-12 max-w-3xl w-full">

        {/* FOOD PROVIDERS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            w-full rounded-2xl p-6
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            transition-all duration-300
            shadow-[0_10px_35px_rgba(0,0,0,0.12)]
            hover:shadow-[0_15px_45px_rgba(0,0,0,0.18)]
          "
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[color:var(--text)]">
            🍽️ Food Providers
          </h3>

          <p className="
            text-sm mb-3
            text-[color:color-mix(in srgb, var(--text) 65%, transparent)]
          ">
            Hotels, bakeries, event halls, and canteens list surplus food instead
            of wasting it.
          </p>

          <ul className="
            text-sm space-y-1
            text-[color:color-mix(in srgb, var(--text) 60%, transparent)]
          ">
            <li>• Food type & quantity</li>
            <li>• Expiry time</li>
            <li>• Location (distance)</li>
          </ul>
        </motion.div>

        {/* DOWN ARROW */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary text-3xl"
        >
          ↓
        </motion.div>

        {/* FEEDFLOW SYSTEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            w-full rounded-2xl p-8
            bg-card/80 backdrop-blur-xl
            border border-primary/40
            shadow-[0_0_55px_rgba(34,197,94,0.22)]
          "
        >
          <h3 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2">
            🧠 FeedFlow Smart System
          </h3>

          <p className="
            text-sm mb-4
            text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
          ">
            FeedFlow analyses every food entry in real-time and assigns a
            priority score using intelligent rules.
          </p>

          <ul className="
            text-sm space-y-2
            text-[color:color-mix(in srgb, var(--text) 65%, transparent)]
          ">
            <li>⚡ Urgency (expiry time)</li>
            <li>📍 Distance to NGOs</li>
            <li>📦 Quantity available</li>
          </ul>

          <p className="text-xs text-primary mt-4">
            Result: High-priority food is surfaced first
          </p>
        </motion.div>

        {/* DOWN ARROW */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-primary text-3xl"
        >
          ↓
        </motion.div>

        {/* NGOs & VOLUNTEERS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            w-full rounded-2xl p-6
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            transition-all duration-300
            shadow-[0_10px_35px_rgba(0,0,0,0.12)]
            hover:shadow-[0_15px_45px_rgba(34,197,94,0.18)]
          "
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-[color:var(--text)]">
            🤝 NGOs & Volunteers
          </h3>

          <p className="
            text-sm mb-3
            text-[color:color-mix(in srgb, var(--text) 65%, transparent)]
          ">
            NGOs receive prioritised alerts and collect food before it expires.
          </p>

          <ul className="
            text-sm space-y-1
            text-[color:color-mix(in srgb, var(--text) 60%, transparent)]
          ">
            <li>• Priority-based alerts</li>
            <li>• Faster collection</li>
            <li>• Reduced food waste</li>
          </ul>
        </motion.div>
      </div>

      {/* FOOTER LINE */}
      <p className="
        text-xs mt-20 text-center max-w-xl
        text-[color:color-mix(in srgb, var(--text) 55%, transparent)]
      ">
        FeedFlow ensures surplus food reaches the right people at the right time —
        efficiently and responsibly.
      </p>
    </section>
  );
}
