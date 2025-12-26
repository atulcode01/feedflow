import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section
      id="impact"
      className="
        min-h-screen px-6 py-32
        flex flex-col items-center
        bg-bg transition-colors duration-500
      "
    >
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[color:var(--text)]">
        Real Impact with FeedFlow
      </h2>

      <p className="
        max-w-3xl text-center mb-20
        text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
      ">
        FeedFlow is not just a platform — it’s a system designed to reduce food
        waste, improve response time, and ensure surplus food reaches people who
        need it the most.
      </p>

      {/* IMPACT STATS */}
      <div className="grid gap-10 w-full max-w-5xl sm:grid-cols-2 md:grid-cols-3">

        {/* STAT 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            rounded-2xl p-8 text-center
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            transition-all duration-300
            hover:shadow-[0_18px_55px_rgba(34,197,94,0.25)]
          "
        >
          <p className="text-4xl font-bold text-green-500 mb-2">↓ 40%</p>
          <p className="font-medium mb-1 text-[color:var(--text)]">
            Food Wastage Reduction
          </p>
          <p className="
            text-sm
            text-[color:color-mix(in srgb, var(--text) 65%, transparent)]
          ">
            Compared to manual food redistribution.
          </p>
        </motion.div>

        {/* STAT 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="
            rounded-2xl p-8 text-center
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            transition-all duration-300
            hover:shadow-[0_18px_55px_rgba(59,130,246,0.25)]
          "
        >
          <p className="text-4xl font-bold text-blue-500 mb-2">⚡ Faster</p>
          <p className="font-medium mb-1 text-[color:var(--text)]">
            Response Time
          </p>
          <p className="
            text-sm
            text-[color:color-mix(in srgb, var(--text) 65%, transparent)]
          ">
            NGOs receive high-priority alerts instantly.
          </p>
        </motion.div>

        {/* STAT 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="
            rounded-2xl p-8 text-center
            bg-card/70 backdrop-blur-xl
            border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            transition-all duration-300
            hover:shadow-[0_18px_55px_rgba(239,68,68,0.28)]
          "
        >
          <p className="text-4xl font-bold text-red-500 mb-2">⏱️ Critical</p>
          <p className="font-medium mb-1 text-[color:var(--text)]">
            Expiry Handling
          </p>
          <p className="
            text-sm
            text-[color:color-mix(in srgb, var(--text) 65%, transparent)]
          ">
            Urgent food is surfaced first — no manual sorting.
          </p>
        </motion.div>
      </div>

      {/* FOOTER MESSAGE */}
      <p className="
        text-sm mt-24 text-center max-w-2xl
        text-[color:color-mix(in srgb, var(--text) 55%, transparent)]
      ">
        By combining technology with social responsibility, FeedFlow helps
        communities fight hunger while minimising food waste — efficiently,
        transparently, and at scale.
      </p>
    </section>
  );
}
