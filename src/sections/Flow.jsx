import { motion } from "framer-motion";
import { foodData } from "../data/foodData";
import FoodCard from "../components/FoodCard";
import { stagger } from "../animations/variants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Flow() {
  const sortedFood = [...foodData].sort(
    (a, b) => (a.urgency === "HIGH" ? -1 : 1)
  );

  return (
    <section
      id="flow"
      className="
        relative
        min-h-screen px-6 py-32
        flex flex-col items-center justify-center
        -mt-28
        bg-bg
        transition-colors duration-500
      "
    >
      {/* LIVE SYSTEM */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-3"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs tracking-widest text-green-400">
          LIVE SYSTEM
        </span>
      </motion.div>

      {/* HEADING */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
      >
        Live Food Flow
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl text-center opacity-70"
      >
        Surplus food entries are dynamically prioritised and matched
        based on urgency, distance, and quantity.
      </motion.p>

      {/* TIMESTAMP */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xs opacity-50 mt-2 mb-12"
      >
        Last updated: <span className="text-green-400">Just now</span>
      </motion.p>

      {/* FOOD CARDS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid w-full max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {sortedFood.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
