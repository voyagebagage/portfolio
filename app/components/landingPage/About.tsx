import {
  Text,
  VStack,
  Box,
  SimpleGrid,
  Heading,
  Container,
  Highlight,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { items } from "./profileHeader/data";
import {
  ThemeProviderContext,
  AnimationContext,
  ThemeProviderContextProps,
} from "@/app/context/ThemeProviderContext";
import { ArrowTriangle } from "../StyledIcons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowPointingCards from "../ArrowPointingCards";
import usePositionFromTop from "@/app/customHooks/useScrollValue";
import { inViewAnimation, outOfViewAnimation } from "../animations/animation";

type Props = {
  index: ThemeProviderContextProps["index"];
  // arrowPointingAt: ThemeProviderContextProps["arrowPointingAt"];
  // setArrowPointingAt: ThemeProviderContextProps["setArrowPointingAt"];
  // refSetter: (node: HTMLElement) => void;
};
const About = ({ index }: Props) => {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const { arrowPointingAt, setArrowPointingAt } = useContext(AnimationContext)!;
  const [on, setOn] = useState<boolean>(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(inViewAnimation);
    }
    if ((!on && arrowPointingAt === "about") || !inView) {
      animation.start(outOfViewAnimation);
    }
  }, [inView, animation, on, arrowPointingAt]);
  // console.log("ton scroll", inView, scrollSup850, on);

  const handleMouseEnter = () => {
    setOn(true);
    setArrowPointingAt("about");
  };
  const handleMouseLeave = () => {
    setOn(false);
    setArrowPointingAt("");
  };

  return (
    <section
      // id="about"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <VStack
        id="about"
        w="full"
        pt={100}
        borderRadius="20px 20px 0px 0px"
        textAlign={"center"}
        overflowX="hidden"

        // bg="#2BDEB2"
        // bg="#28D0A9"
      >
        <Container maxW="4xl">
          <Text as="kbd" fontSize={"md"} color="#64ffda">
            Hi, my name is
          </Text>

          <Heading
            position={"relative"}
            letterSpacing={1.8}
            fontSize="5xl"
            pl={39}
            // className="pl-16"
            textAlign={"center"}
            filter="brightness(105%)"
            bgGradient={`linear(to-t, ${
              items[index]?.color || items[0]?.color
            },#CAFFF5)`}
            bgClip="text"
            ref={ref}
          >
            Olivier Frugier.
          </Heading>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Triangle arrowPointingAt */}
          <Box
            as={motion.div}
            animate={
              on && arrowPointingAt === "about"
                ? inViewAnimation
                : outOfViewAnimation
            }
          >
            <ArrowTriangle
              zIndex={2}
              position={"absolute"}
              boxSize={70}
              opacity="0.08"
              alignSelf="flex-end"
            />
          </Box>

          <Heading
            letterSpacing={1.5}
            fontSize="5xl"
            className="pl-16"
            filter="brightness(75%)"
          >
            I do web and mobile app.
          </Heading>
          <SimpleGrid columns={2} w="100%" spacingX={7} spacingY={2} p={2}>
            <Box>
              <Text wordBreak="break-word" textAlign="right">
                <Highlight
                  query={["front", "full", "Koh Phangan"]}
                  styles={{ color: "#64FFDA" }}
                >
                  I&apos;m front end / full stack developer I started
                  programming during covid time, in Koh Phangan. I studied at
                  &apos;Le Réacteur&apos;, to have more details click on stacks
                  details, or see below.
                </Highlight>
              </Text>
            </Box>
            <Box>
              <Text wordBreak="break-word" textAlign="left">
                <Highlight
                  query={["back to work"]}
                  styles={{ color: "#64FFDA" }}
                >
                  I had my first company experience at &apos;Ninja
                  partners&apos;, and participate to small projects here and
                  there. I had personal life things to deal with and know
                  I&apos;m back to work
                </Highlight>
              </Text>
            </Box>
            <Box>
              <Text wordBreak="break-word" textAlign="right">
                <Highlight
                  query={["youtube link"]}
                  styles={{
                    color: "#64FFDA",
                    textDecoration: "underline",
                    textDecorationSkipInk: "auto",
                  }}
                >
                  We, my wife and I, also produce music and make video clips. We
                  also had a little business designing/selling clothes. I invite
                  the youtube link
                </Highlight>
              </Text>
            </Box>
            <Box>
              <Text wordBreak="break-word" textAlign="left">
                Before Asia, I was in the tourist industry. I was mostly driving
                sled dogs/huskies in the north of Europe
              </Text>
            </Box>
          </SimpleGrid>
        </Container>

        {/* <Box
            // position={"absolute"}
            // top={"60%"}
            // mt={"5rem"}
            w="85%"
            display="flex"
            // bg={"#303d3d"}
            // bg="#5BD6DE"
            // bg="#8FBAAE"
            bg="#759c91"
            // border="3px solid blue"
            borderRadius="40px 40px 0px 0px"
            // h="55%"
            // w="100%"
          ></Box> */}
      </VStack>
    </section>
  );
};

export default About;
