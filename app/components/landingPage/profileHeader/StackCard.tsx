import React, { useEffect } from "react";
import { chakra, ChakraComponent, Flex, PropsOf } from "@chakra-ui/react";
import {
  motion,
  AnimatePresence,
  Transition,
  MotionProps,
} from "framer-motion";

import { items } from "./data";
import { BoxForNextImage, ChakraNextImage } from "../../ChakraNextImage";
import Image from "next/image";
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";

// interface StackCardProps {
//   index: number;
//   setIndex: React.Dispatch<React.SetStateAction<number>>;
//   // transition?: Transition;
// }
interface StackMotionCardProps
  extends PropsOf<typeof motion.div>,
    MotionProps {}

function StackCard({ index, setIndex }: ThemeProviderContextProps) {
  const StackMotionCard: ChakraComponent<"div", StackMotionCardProps> = chakra(
    motion.div
  );
  // const [index, setIndex] = useState(0);
  const duration = 2000;

  useEffect(() => {
    // if (!isShown) {
    //   setIndex(null);
    //   // setIntermediary(false);
    // }
    const interval = setInterval(() => {
      if (index >= 5) setIndex(-1);
      setIndex((index) => index + 1);
    }, 2000);

    return () => clearInterval(interval);

    // setIndex(null);
  }, [index]);

  const transition = {
    default: {
      duration: duration / 1000,
      type: "inertia",
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
    boxShadow: {
      duration: (duration - 1) / 1000,
      type: "inertia",
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  };

  return (
    <Flex
      w="40%"
      direction={"column"}
      align="center"
      justify={"center"}
      border="5px solid pink"
      boxSize={"xs"}
    >
      <AnimatePresence>
        <StackMotionCard
          boxSize={320}
          layout
          // layoutId={index}
          borderRadius={100}
          transition={transition}
        >
          <ChakraNextImage
            src={`${items[index]?.IconName || items[0]?.IconName}`}
            alt="ducon"
            boxSize={298}
            borderRadius="full"
            flexShrink={0}
            boxShadow={"lg"}
            // objectFit="contain"
          />
        </StackMotionCard>
      </AnimatePresence>
    </Flex>
  );
}

export default StackCard;
