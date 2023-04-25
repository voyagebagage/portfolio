export const inViewAnimation: Object = {
  x: 500,
  y: 0,
  rotate: 180,
  // transition: { type: "spring", duration: 1, bounce: 0.1, delay: 0.3 },
  transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 },
};

export const outOfViewAnimation = {
  x: 1000,
  y: 0,
  // transition: { type: "spring", duration: 1, bounce: 0.2 },
  transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 },
};
