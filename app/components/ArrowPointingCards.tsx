import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import useInViewAnimation from "../customHooks/useInViewAnimation";
import { ArrowTriangle } from "./StyledIcons";
// import '../customHooks'
interface AnimatedComponentProps {
  children: ReactNode;
  inViewAnimation: object;
  outOfViewAnimation: object;
  threshold?: number;
}
const ArrowPointingCards = ({
  children,
  inViewAnimation,
  outOfViewAnimation,
  threshold = 1,
}: AnimatedComponentProps) => {
  const [ref, setRefs, animation] = useInViewAnimation({
    inViewAnimation,
    outOfViewAnimation,
    threshold,
  });

  return (
    <Box
      as={motion.div}
      ref={setRefs}
      animate={animation}
      zIndex={2}
      position="absolute"
      boxSize={70}
      opacity="0.08"
      alignSelf="flex-end"
    >
      <ArrowTriangle
        zIndex={2}
        position={"absolute"}
        boxSize={70}
        opacity="0.08"
        alignSelf="flex-end"
      />
      {children}
    </Box>
  );
};

export default ArrowPointingCards;

// <Box
//   as={motion.div}
//   //   initial={{ x: 500, y: 0, rotate: 180 }}
//   animate={animation}
// >
//   <ArrowTriangle
//     zIndex={2}
//     position={"absolute"}
//     boxSize={70}
//     opacity="0.08"
//     alignSelf="flex-end"
//   />
// </Box>
