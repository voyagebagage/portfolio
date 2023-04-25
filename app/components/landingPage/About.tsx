import {
  Text,
  VStack,
  Box,
  SimpleGrid,
  Heading,
  Container,
  Highlight,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { items } from "./profileHeader/data";
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";
import { ArrowTriangle } from "../StyledIcons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowPointingCards from "../ArrowPointingCards";
import usePositionFromTop from "@/app/customHooks/useScrollValue";

type Props = {
  index: ThemeProviderContextProps["index"];
  // refSetter: (node: HTMLElement) => void;
};
const About = React.forwardRef<HTMLHeadingElement, Props>(
  ({ index }, refSetter) => {
    // const { ref, inView } = useInView({
    //   threshold: 1,
    // });
    // const [on, setOn] = useState<boolean>(false);
    // const { scrollSup850 } = usePositionFromTop();
    // const animation = useAnimation();

    // const inViewAnimation = {
    //   x: 500,
    //   y: 0,
    //   rotate: 180,
    //   // transition: { type: "spring", duration: 1, bounce: 0.1, delay: 0.3 },
    //   transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 },
    // };

    // const outOfViewAnimation = {
    //   x: 1000,
    //   y: 0,
    //   // transition: { type: "spring", duration: 1, bounce: 0.2 },
    //   transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.3 },
    // };

    // useEffect(() => {
    //   if (inView) {
    //     animation.start(inViewAnimation);
    //   }
    //   if (!on || !inView) {
    //     animation.start(outOfViewAnimation);
    //   }

    //   console.log(inView);
    // }, [inView, animation, on, scrollSup850]);
    // console.log("ton scroll", inView, scrollSup850, on);

    return (
      <section
      // id="about"
      // onMouseEnter={() => setOn(true)}
      // onMouseLeave={() => setOn(false)}
      >
        <VStack
          // pos="relative"
          // top={0}
          id="about"
          display="flex"
          // border="2px solid"
          w="full"
          // h="100%"
          pt={100}
          borderRadius="20px 20px 0px 0px"
          textAlign={"center"}
          overflowX="hidden"
          // pb={0}
          // bg="#2BDEB2"
          // bg="#28D0A9"
        >
          <Container maxW="4xl">
            <Text
              as="kbd"
              fontSize={"md"}
              color="#64ffda"

              // ml={-150}
            >
              Hi, my name is
            </Text>
            {/* <div ref={ref}> */}
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
              ref={refSetter}
            >
              Olivier Frugier.
            </Heading>
            <Box
              as={motion.div}
              //   initial={{ x: 500, y: 0, rotate: 180 }}
              // animate={on ? inViewAnimation : outOfViewAnimation}
              // animate={animation}
              // exit={outOfViewAnimation}
            >
              <ArrowTriangle
                zIndex={2}
                position={"absolute"}
                boxSize={70}
                opacity="0.08"
                alignSelf="flex-end"
              />
            </Box>
            {/* </div> */}
            {/* // style={{
          //   transform: isInView ? "none" : "translateY(200px)",
          //   opacity: isInView ? 0.08 : 0,
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }} */}
            {/* <ArrowPointingCards animation={animation} /> */}
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
                    &apos;Le Réacteur&apos;, to have more details click on
                    stacks details, or see below.
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
                    We, my wife and I, also produce music and make video clips.
                    We also had a little business designing/selling clothes. I
                    invite the youtube link
                  </Highlight>
                </Text>
              </Box>
              <Box>
                <Text wordBreak="break-word" textAlign="left">
                  Before Asia, I was in the tourist industry. I was mostly
                  driving sled dogs/huskies in the north of Europe
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
  }
);

export default About;
