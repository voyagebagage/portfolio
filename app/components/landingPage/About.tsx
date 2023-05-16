import {
  Text,
  VStack,
  Box,
  SimpleGrid,
  Heading,
  Container,
  Highlight,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { items } from "./profileHeader/data";
import { AnimationContext } from "@/app/context/ThemeProviderContext";
import { ArrowTriangle } from "../StyledIcons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { inViewAnimation, outOfViewAnimation } from "../animations/animation";
import useFirstLoadMediaBooleans from "@/app/utils/useFirstLoadMediaBooleans";
import { useColor } from "@/app/customHooks/useColor";

const About = () => {
  const index = useColor();
  //~~~~~~~~~~~~~~~MediaQueries~~~~~~~~~~~~~~~~~~~~~
  const { screenSizeIsSmallerThan640 } = useFirstLoadMediaBooleans();
  const [isSmallerThan600] = useMediaQuery("(max-width: 640px)");
  const myIsSmallerThan640 = isSmallerThan600 || screenSizeIsSmallerThan640;
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
      id="about"
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
        <Container maxW={{ sm: "100%", md: "xl", lg: "4xl" }}>
          <Text as="kbd" fontSize={"md"} color="#64ffda">
            Hi, my name is
          </Text>

          <Heading
            position={"relative"}
            letterSpacing={1.8}
            fontSize="5xl"
            pl={myIsSmallerThan640 ? 0 : 39}
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
            pl={myIsSmallerThan640 ? 0 : "4rem"}
            // className="pl-16"
            filter="brightness(75%)"
          >
            <Highlight
              query={["."]}
              styles={{
                color: items[index]?.color || items[0]?.color,
                filter: "brightness(200%)",
              }}
            >
              I do web and mobile app.
            </Highlight>
          </Heading>
          <SimpleGrid
            columns={{ sm: 2, xs: 1 }}
            w="100%"
            // minChildWidth="200px"
            spacingX={7}
            spacingY={2}
            p={4}
          >
            <Box>
              <Text
                wordBreak="break-word"
                textAlign={myIsSmallerThan640 ? "center" : "right"}
              >
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
              <Text
                wordBreak="break-word"
                textAlign={myIsSmallerThan640 ? "justify" : "left"}
                textIndent={myIsSmallerThan640 ? "10%" : 0}
              >
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
              <Text
                wordBreak="break-word"
                textAlign={myIsSmallerThan640 ? "justify" : "right"}
                textIndent={myIsSmallerThan640 ? "10%" : 0}
              >
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
              <Text
                wordBreak="break-word"
                textAlign={myIsSmallerThan640 ? "center" : "left"}
              >
                Before Asia, I was in the tourist industry. I was mostly driving
                sled dogs/huskies in the north of Europe
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </VStack>
    </section>
  );
};

export default About;
