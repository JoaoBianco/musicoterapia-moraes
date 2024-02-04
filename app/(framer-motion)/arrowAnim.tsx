export const arrowAnim = {
  hidden: { y: -10 },
  visible: {
    y: 10,
    transition: {
      repeat: Infinity,
      duration: 1.25,
      repeatType: "reverse" as const,
      repeatDelay: 0.25,
    },
  },
};
