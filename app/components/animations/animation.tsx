export const inViewAnimation = {
  x: 400,
  y: 0,
  rotate: 180,
  // transition: { type: "spring", duration: 1, bounce: 0.1, delay: 0.3 },
  transition: {
    duration: 0.9,
    ease: [0.17, 0.55, 0.55, 1],
    opacity: [0.08, 0.08, 0.08, 1],
    // opacity: 1,
  },
};

export const outOfViewAnimation = {
  x: 1000,
  y: 0,
  // transition: { type: "spring", duration: 1, bounce: 0.2 },
  transition: {
    duration: 0.9,
    ease: [0.17, 0.55, 0.55, 1],
    opacity: [1, 0.08, 0.08, 0.08],
    // opacity: 0,
  },
};
