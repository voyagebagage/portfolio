import React, { Suspense, useEffect } from "react";
import {
  chakra,
  ChakraComponent,
  Flex,
  Heading,
  PropsOf,
} from "@chakra-ui/react";
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

interface StackCardProps {
  index: number;
  // setIndex: React.Dispatch<React.SetStateAction<number>>;
  // transition?: Transition;
}
interface StackMotionCardProps
  extends PropsOf<typeof motion.div>,
    MotionProps {}

function StackCard({ index }: StackCardProps) {
  const StackMotionCard: ChakraComponent<"div", StackMotionCardProps> = chakra(
    motion.div
  );
  // const [index, setIndex] = useState(0);
  const duration = 2000;

  const transition = {
    default: {
      duration: duration / 1000,
      type: "spring",
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
      justify={"start"}
      // border="5px solid pink"
      boxSize={"xs"}
    >
      <AnimatePresence>
        <StackMotionCard
          boxSize={320}
          layout
          borderRadius={100}
          transition={transition}
        >
          <Suspense
            fallback={
              <ChakraNextImage
                src={`${items[0]?.IconName}`}
                alt="fallback-stack"
                boxSize={298}
                borderRadius="full"
                flexShrink={0}
                boxShadow={"lg"}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority={true}
                // sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                // loading="eager"
                // objectFit="contain"
              />
            }
          >
            <ChakraNextImage
              src={`${items[index]?.IconName}`}
              alt="stackPic"
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              boxSize={298}
              borderRadius="full"
              flexShrink={0}
              boxShadow={"lg"}
              priority={true}
              // loading="lazy"
              // sizes="(max-width: 768px) 100vw,
              // (max-width: 1200px) 50vw,
              // 33vw"
              // objectFit="contain"
            />
          </Suspense>
        </StackMotionCard>
      </AnimatePresence>
    </Flex>
  );
}

export default StackCard;
