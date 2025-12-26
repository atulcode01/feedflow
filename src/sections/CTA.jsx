import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="
        min-h-screen px-6 py-32
        flex flex-col items-center text-center
        bg-bg transition-colors duration-500
      "
    >
      {/* Divider */}
      <div className="w-24 h-px bg-primary/40 mb-8" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--text)]"
      >
        Be Part of the FeedFlow Movement
      </motion.h2>

      <p
        className="
          max-w-2xl mb-20
          text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
        "
      >
        FeedFlow is more than technology — it’s a collective effort to reduce
        food waste, improve response time, and serve communities with dignity.
      </p>

      {/* CTA CARDS */}
      <div className="grid gap-8 max-w-5xl w-full md:grid-cols-3">
        {/* FOOD PROVIDERS */}
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="
            rounded-2xl p-6
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            transition-all
            hover:shadow-[0_18px_55px_rgba(34,197,94,0.25)]
          "
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2 text-[color:var(--text)]">
            <span className="text-xl">🍽️</span> Food Providers
          </h3>

          <p
            className="
              text-sm mb-4
              text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
            "
          >
            Hotels, bakeries, and event halls can list surplus food instantly
            instead of wasting it.
          </p>

          <span className="text-primary text-sm font-medium">
            Reduce waste • Create impact
          </span>
        </motion.div>

        {/* NGOs & VOLUNTEERS */}
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="
            rounded-2xl p-6
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            transition-all
            hover:shadow-[0_18px_55px_rgba(34,197,94,0.25)]
          "
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2 text-[color:var(--text)]">
            <span className="text-xl">🤝</span> NGOs & Volunteers
          </h3>

          <p
            className="
              text-sm mb-4
              text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
            "
          >
            Receive priority-based alerts and collect food before it expires —
            faster and smarter.
          </p>

          <span className="text-primary text-sm font-medium">
            Save time • Save lives
          </span>
        </motion.div>

        {/* BUILDERS & PARTNERS */}
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="
            rounded-2xl p-6
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            transition-all
            hover:shadow-[0_18px_55px_rgba(34,197,94,0.25)]
          "
        >
          <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2 text-[color:var(--text)]">
            <span className="text-xl">🚀</span> Builders & Partners
          </h3>

          <p
            className="
              text-sm mb-4
              text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
            "
          >
            Developers, institutions, and governments can collaborate to scale
            FeedFlow nationwide.
          </p>

          <span className="text-primary text-sm font-medium">
            Build systems • Change futures
          </span>
        </motion.div>
      </div>

      {/* PRIMARY CTA BUTTON */}
      <button
        className="
          mt-10 px-6 py-3 rounded-full
          bg-primary/15 text-primary
          border border-primary/30
          hover:bg-primary/25 transition
        "
      >
        Request Early Access (Demo)
      </button>

      {/* FINAL LINE */}
      <p
        className="
          text-xs mt-24 max-w-xl
          text-[color:color-mix(in srgb, var(--text) 50%, transparent)]
        "
      >
        When technology meets responsibility, real impact follows — at scale.
      </p>
    </section>
  );
}
