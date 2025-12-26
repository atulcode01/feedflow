import { motion } from "framer-motion";
import heroMockup from "../assets/hero-mockup.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2
                        w-[900px] h-[900px] rounded-full
                        bg-green-500/15 blur-[240px]" />
        <div className="absolute -top-40 -left-40
                        w-[700px] h-[700px] rounded-full
                        bg-emerald-500/12 blur-[220px]" />
        <div className="absolute bottom-[-300px] -right-40
                        w-[700px] h-[700px] rounded-full
                        bg-green-600/12 blur-[240px]" />
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 mx-auto max-w-7xl px-6
                      grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-[0.22em]
                         text-primary mb-6">
            FEEDFLOW
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[color:var(--text)]">
            Smart Surplus Food System
          </h2>

          <p className="mt-4 text-xl md:text-2xl text-[color:color-mix(in srgb, var(--text) 80%, transparent)]">
            for <span className="text-primary font-medium">Zero-Waste Cities</span>
          </p>

          <p className="mt-8 text-base md:text-lg max-w-xl
                        text-[color:color-mix(in srgb, var(--text) 65%, transparent)]">
            Turning surplus food into real-time impact using intelligent
            prioritisation based on urgency, distance, and quantity.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() =>
                document.getElementById("flow")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold
                         hover:bg-primarySoft transition
                         shadow-[0_0_40px_rgba(34,197,94,0.45)]"
            >
              See Live Food Flow
            </button>

            <button
              onClick={() =>
                document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-full bg-card/60 backdrop-blur-xl
                         border border-[color:color-mix(in srgb, var(--text) 15%, transparent)]
                         text-[color:var(--text)]
                         hover:bg-card/80 transition"
            >
              View Impact →
            </button>
          </div>

          <p className="mt-6 text-sm italic
            text-[color:color-mix(in srgb, var(--text) 45%, transparent)]">
            “Every notification saves a meal.”
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={heroMockup}
            alt="FeedFlow Mobile Interface"
            className="w-[300px] sm:w-[340px] md:w-[380px] xl:w-[420px]
                       drop-shadow-[0_0_50px_rgba(34,197,94,0.4)]
                       select-none pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-64
                      bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
