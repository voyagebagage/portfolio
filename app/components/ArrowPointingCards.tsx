import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import useInViewAnimation from "../customHooks/useInViewAnimation";
import { ArrowTriangle } from "./StyledIcons";
import { inViewAnimation, outOfViewAnimation } from "./animations/animation";
import { AnimationContextProps } from "../context/ThemeProviderContext";
// import '../customHooks'
interface AnimatedComponentProps {
  arrowPointingAt: AnimationContextProps["arrowPointingAt"];
}
const ArrowPointingCards = ({
  arrowPointingAt,
}: AnimatedComponentProps): JSX.Element => {
  return (
    <Box
      as={motion.div}
      animate={
        arrowPointingAt === "about" || "work" || "projects" || "contact"
          ? inViewAnimation
          : outOfViewAnimation
      }
      // position={"absolute"}
    >
      <ArrowTriangle
        zIndex={2}
        position={"absolute"}
        boxSize={70}
        opacity="0.08"
        alignSelf="flex-end"
      />
    </Box>
  );
};

export default ArrowPointingCards;
