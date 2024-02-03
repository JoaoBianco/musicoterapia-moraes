export const showItems = (index: number = 1) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1 * index,
      },
    },
    hiddenFromLeft: {
      x: "-100%",
      opacity: 0,
    },
    visibleFromLeft: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0,
      },
    },
  };
};

export const showNav = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
