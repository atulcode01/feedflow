// Hero text animation
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Group stagger animation
export const stagger = {
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

// Food flow card animation
export const cardFade = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const heartbeat = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(239,68,68,0.0)",
      "0 0 24px rgba(239,68,68,0.35)",
      "0 0 0px rgba(239,68,68,0.0)"
    ],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
