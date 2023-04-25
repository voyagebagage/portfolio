// import "./styles.css";
import React, { useRef, useState } from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Icon,
  Text,
} from "@chakra-ui/react";

import {
  motion,
  clamp,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useDragControls,
} from "framer-motion";

import { wrap } from "@motionone/utils";
import TickerStackCard from "././TickerStackCard";
import { stacks } from "./data";
import About from "../About";
import ProfileHeader from "../profileHeader/ProfileHeader";
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { IconButtonStyles } from "@/app/styles/components/IconButtonStyles";
import AnchorLink from "react-anchor-link-smooth-scroll";
// interface ParallaxProps {
//   children: string;
//   baseVelocity: number;
// }
interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}
function ParallaxCard({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const dragX = useSpring(useMotionValue(0), {
    damping: 30,
    stiffness: 100,
  });
  const dragControls = useDragControls();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [isHovered, setIsHovered] = useState(false);
  const [wrap2ndArgument, setWrap2ndArgument] = useState<number>(-45);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 500,
    stiffness: 40,
  });
  // const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
  //   clamp: false,
  // });
  const velocityFactor = useTransform(
    baseX,
    [-100, 100],
    [-baseVelocity, baseVelocity]
  );
  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const limitDrag = (offset: number) => {
    const minDrag = -100; // minimum drag limit
    const maxDrag = 100; // maximum drag limit
    return clamp(minDrag, offset, maxDrag);
  };

  // const x = useTransform(baseX, (v) => `${wrap(1, -13.28, v)}%`);
  const x = useTransform(
    [baseX, dragX] as unknown as MotionValue<[number, number]>,
    ([base, drag]: [number, number]) => {
      return `${wrap(-20, wrap2ndArgument, base) + drag}%`;
    }
  );
  const handleDragEnd = (event: any, info: any) => {
    // prevent the click event
    if (info?.offset?.x === 0) {
      event.preventDefault();
    }
  };
  const handleDrag = (event: any, info: any) => {
    const moveBy = limitDrag(info?.offset?.x ?? 0);
    baseX.set(baseX.get() + moveBy);
    directionFactor.current = moveBy > 0 ? 1 : -1;
  };

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
  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  return (
    <div
      className="parallax"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // style={{ border: "1px solid green" }}
    >
      <motion.div
        className="scroller"
        style={{ x }}

        // drag="x"
        // dragElastic={0.1}
        // dragMomentum={false}
        // dragControls={dragControls}
        // onDragEnd={handleDragEnd}
        // onDrag={handleDrag}
      >
        {children}
        {children}
        {children}
        {children}

        {/* {stacks.map((stack, index) => {
          // setWrap2ndArgument(21);
          if (stack?.category === "UI") {
            return (
              <React.Fragment key={index}>
                {children}
                {children}
              </React.Fragment>
            );
          }
        })} */}
      </motion.div>
    </div>
  );
}
// type setSwitchAbout = {
//   on: () => void;
//   off: () => void;
//   toggle: () => void;
// };

interface TickerProps extends ThemeProviderContextProps {
  switchAbout: boolean;
  setSwitchAbout: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
}
const Ticker: React.ForwardRefRenderFunction<HTMLDivElement, TickerProps> = (
  { index, setIndex, setSwitchAbout, switchAbout },
  ref
) => {
  const tickerStackCards = stacks.map((stack, indexStackCard) => {
    if (stack?.category !== "UI") {
      return (
        <div
          key={`${stack.tickerName}-${indexStackCard}`}
          // style={{ border: "2px solid orange" }}
        >
          <TickerStackCard
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

  return (
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
          // textTransform="uppercase"
          className="mySection"
          // _hover={{ color: "white", stroke: "blue" }}
          // border="2px solid yellow"
        >
          <ProfileHeader index={index} setIndex={setIndex} />
          <ParallaxCard baseVelocity={-0.6}>{tickerStackCards}</ParallaxCard>
          <ParallaxCard baseVelocity={0.5}>{tickerUICards}</ParallaxCard>
          {!switchAbout && (
            <Center>
              <AnchorLink href="#about">
                <Button
                  onClick={setSwitchAbout.on}
                  zIndex={-1}
                  ml={"4.6rem"}
                  mt={"3%"}
                  boxShadow="2xl"
                  bg="rgba(255, 255, 255, 0.16)"
                  aria-label="intro"
                  p={6}
                  px={18}
                  w="4xl"
                  rightIcon={
                    <Icon
                      as={ArrowRightIcon}
                      transform={"rotate(90deg)"}
                      ml={2}
                    />
                  }
                >
                  <Text letterSpacing={2} textAlign={"center"}>
                    Hi, I&apos;m Oli, web and mobile developer based in Thailand
                  </Text>
                </Button>
              </AnchorLink>
            </Center>
          )}
        </Box>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          height="100%"
          width="100%"
          boxShadow="inset 100px 0px 8px -10px rgba(48,55,61,0.981), inset -100px 0px 8px -10px rgba(48,55,61, 0.981)"
          pointerEvents="none"
          zIndex={2}
        />
      </Box>

      {/* <ParallaxCard baseVelocity={-0.09}>{tickerUICards}</ParallaxCard> */}
      {/* <section className="mySection">
        <ParallaxCard baseVelocity={-1}>{tickerStackCards}</ParallaxCard>
      </section> */}
    </section>
  );
};
export default React.forwardRef(Ticker);
