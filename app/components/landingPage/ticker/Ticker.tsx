// import "./styles.css";
import React, { useCallback, useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import {
  motion,
  MotionValue,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

import { wrap } from "@motionone/utils";
import TickerStackCard from "././TickerStackCard";
import { stacks } from "./data";
import ProfileHeader from "../profileHeader/ProfileHeader";
import { ArrowRightIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}
const ParallaxCard = React.memo(function ParallaxCard({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const dragX = useSpring(useMotionValue(0), {
    damping: 30,
    stiffness: 100,
  });

  // const [isHovered, setIsHovered] = useState(false);
  const [wrap2ndArgument, setWrap2ndArgument] = useState<number>(-15);

  // const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
  //   clamp: false,
  // });
  const velocityFactor = useTransform(
    baseX,
    [-100, 100],
    [-baseVelocity, baseVelocity]
  );

  // const x = useTransform(baseX, (v) => `${wrap(1, -13.28, v)}%`);
  const x = useTransform(
    [baseX, dragX] as unknown as MotionValue<[number, number]>,
    ([base, drag]: [number, number]) => {
      return `${wrap(10, wrap2ndArgument, base) + drag}%`;
    }
  );

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (isHovered) {
      moveBy *= 0.2; // Slow down the scrolling when hovered
    }
    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="parallax"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // style={{ border: "1px solid green" }}
    >
      <motion.div className="scroller" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
});
// type setSwitchAbout = {
//   on: () => void;
//   off: () => void;
//   toggle: () => void;
// };

// interface TickerProps extends ThemeProviderContextProps {
//   switchAbout: boolean;
//   setSwitchAbout: {
//     on: () => void;
//     off: () => void;
//     toggle: () => void;
//   };
// }

const Ticker = () => {
  const [isLargerThan1150] = useMediaQuery("(min-width: 1150px)");
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const tickerStackCards = stacks.map((stack, indexStackCard) => {
    if (stack?.category !== "UI") {
      return (
        <div
          key={`${stack.tickerName}-${indexStackCard}`}
          // style={{ border: "2px solid orange" }}
        >
          <TickerStackCard
            // index={index}
            title={stack.tickerName || ""}
            content={stack.content || ""}
            level={stack.level || ""}
            project={stack.project || ""}
            orientation={"top"}
            icon={
              <Center>
                <Icon
                  as={stack.reactIcon[0]}
                  boxSize={stack.tickerName ? "1.5rem" : "2.35rem"}
                />
              </Center>
            }
          />
        </div>
      );
      {
      }
    }
  });
  const tickerUICards = stacks.map((stack, indexUiCard) => {
    if (stack?.category === "UI") {
      return (
        <div
          key={`${stack.tickerName}-${indexUiCard}`}
          // style={{ border: "2px solid orange" }}
        >
          <TickerStackCard
            // index={index}
            title={stack.tickerName || ""}
            content={stack.content || ""}
            level={stack.level || ""}
            project={stack.project || ""}
            orientation={"bottom"}
            icon={
              <Center>
                <Icon
                  as={stack.reactIcon[0]}
                  boxSize={stack.tickerName ? "1.5rem" : "2.35rem"}
                />
              </Center>
            }
          />
        </div>
      );
    }
  });

  return isLargerThan1150 ? (
    <section>
      <Box position={"relative"} bg="default" h="100%">
        {/* <section className="mySection"></section> */}
        <Box
          mt="3.5vh"
          position="relative"
          // scrollSnapAlign={"start"}
          height="100vh"
          w="100vw"
          // pt={"10vh"}
          // mb="30px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="0.6rem"
          zIndex={1}
          className="mySection"
          // _hover={{ color: "white", stroke: "blue" }}
          // border="2px solid yellow"
        >
          <ProfileHeader />
          <ParallaxCard baseVelocity={-0.25}>{tickerStackCards}</ParallaxCard>
          <ParallaxCard baseVelocity={0.19}>{tickerUICards}</ParallaxCard>

          <Center>
            <AnchorLink href="#about">
              <Button
                // onClick={setSwitchAbout.on}
                zIndex={-1}
                ml={"4.6rem"}
                mt={"3%"}
                boxShadow="2xl"
                bg="rgba(255, 255, 255, 0.16)"
                aria-label="intro"
                p={6}
                px={18}
                w={isLargerThan1000 ? "4xl" : "fit-content"}
                rightIcon={
                  <Icon
                    as={ArrowRightIcon}
                    transform={"rotate(90deg)"}
                    ml={2}
                  />
                }
              >
                {isLargerThan1000 ? (
                  <Text letterSpacing={2} textAlign={"center"}>
                    Hi, I&apos;m Oli, web and mobile developer based in Thailand
                  </Text>
                ) : (
                  <Text letterSpacing={2} textAlign={"center"}>
                    Hi, I&apos;m Oli, web and mobile
                  </Text>
                )}
              </Button>
            </AnchorLink>
          </Center>
        </Box>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          height="100%"
          width="100%"
          boxShadow="inset 100px 0px 10px -10px rgba(48,55,61,0.981), inset -100px 0px 10px -10px rgba(48,55,61, 0.981)"
          pointerEvents="none"
          zIndex={2}
        />
      </Box>
    </section>
  ) : (
    <section>
      <Box
        mt="3.5vh"
        position="relative"
        height="100vh"
        w="100vw"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="0.7rem"
        zIndex={1}
        className="mySection"
        // mb="3vh"
      >
        <ProfileHeader />
        <ParallaxCard baseVelocity={-0.2}>{tickerStackCards}</ParallaxCard>
        <ParallaxCard baseVelocity={0.1}>{tickerUICards}</ParallaxCard>
        {/* </Box> */}

        <Center>
          <AnchorLink href="#about">
            <Button
              // onClick={setSwitchAbout.on}
              zIndex={-1}
              // ml={"4.6rem"}
              mt={"3%"}
              boxShadow="2xl"
              bg="rgba(255, 255, 255, 0.16)"
              aria-label="intro"
              p={6}
              px={8}
              w="70vw"
              rightIcon={
                <Icon as={ArrowRightIcon} transform={"rotate(90deg)"} ml={2} />
              }
            >
              {isLargerThan600 ? (
                <Text letterSpacing={2} textAlign={"center"}>
                  Hi, I&apos;m Oli, web and mobile developer
                </Text>
              ) : null}
            </Button>
          </AnchorLink>
        </Center>
      </Box>
    </section>
  );
};
export default Ticker;
