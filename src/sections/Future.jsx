import { motion } from "framer-motion";

const futureSteps = [
  {
    phase: "Phase 1",
    title: "AI-Based Prioritisation",
    icon: "🤖",
    desc: "Machine learning models will predict food urgency, optimise NGO matching, and continuously improve response time."
  },
  {
    phase: "Phase 2",
    title: "Government & NGO Integration",
    icon: "🏛️",
    desc: "Direct integration with municipal bodies, shelters, and verified NGOs to enable city-wide and state-level food rescue."
  },
  {
    phase: "Phase 3",
    title: "Live Impact Dashboard",
    icon: "📊",
    desc: "A public dashboard showing food saved, meals served, CO₂ reduction, and real-time system performance."
  }
];

export default function Future() {
  return (
    <section
      id="future"
      className="
        min-h-screen px-6 py-32
        flex flex-col items-center
        bg-bg transition-colors duration-500
      "
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-center text-[color:var(--text)]"
      >
        The Future of FeedFlow
      </motion.h2>

      <p className="
        max-w-3xl text-center mb-20
        text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
      ">
        FeedFlow is designed to scale beyond a platform — into a nationwide,
        intelligent food redistribution infrastructure.
      </p>

      {/* TIMELINE */}
      <div className="relative max-w-4xl w-full flex flex-col gap-14">
        {/* vertical line */}
        <div
          className="
            absolute left-5 top-0 bottom-0 w-px
            bg-[color:color-mix(in srgb, var(--text) 15%, transparent)]
          "
        />

        {futureSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative flex gap-6"
          >
            {/* DOT */}
            <div
              className="
                flex-shrink-0 w-10 h-10 rounded-full
                bg-primary/20 text-primary
                flex items-center justify-center
                font-semibold
              "
            >
              {i + 1}
            </div>

            {/* CARD */}
            <div
              className="
                flex-1 rounded-2xl p-6
                bg-card/70 backdrop-blur-xl
                border border-[color:color-mix(in srgb, var(--text) 12%, transparent)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_55px_rgba(34,197,94,0.22)]
              "
            >
              <p className="text-xs text-primary mb-1 uppercase tracking-wide">
                {step.phase}
              </p>

              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-[color:var(--text)]">
                <span>{step.icon}</span> {step.title}
              </h3>

              <p className="
                text-sm
                text-[color:color-mix(in srgb, var(--text) 70%, transparent)]
              ">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VISION FOOTER */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="
          text-xs mt-24 text-center max-w-xl
          text-[color:color-mix(in srgb, var(--text) 55%, transparent)]
        "
      >
        Our vision is simple yet powerful — make food rescue intelligent,
        transparent, and scalable, so no meal is wasted and no one is left hungry.
      </motion.p>
    </section>
  );
}
