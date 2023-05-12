import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import useElementSize from "../../customHooks/useElementSize";
import Image from "next/image";
import * as BiIcons from "react-icons/bi";
import {
  Box,
  calc,
  Flex,
  Heading,
  Highlight,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Icon,
  Container,
  HStack,
  Square,
  UnorderedList,
  List,
  ListItem,
  ListIcon,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ChakraNextImage } from "../ChakraNextImage";
import { ArrowTriangle } from "../StyledIcons";
import { motion, useAnimation } from "framer-motion";
import { inViewAnimation, outOfViewAnimation } from "../animations/animation";
import { useInView } from "react-intersection-observer";
import {
  ThemeProviderContext,
  AnimationContext,
} from "@/app/context/ThemeProviderContext";
import useFirstLoadMediaBooleans from "@/app/utils/useFirstLoadMediaBooleans";

type SimpleListProps = {
  myList?: string[];
  icon?: any;
  noIcon?: boolean;
};

interface Props {
  // arrowPointingAt: string;
  // setArrowPointingAt: React.Dispatch<React.SetStateAction<string>>;
}

export const SimpleList = ({ myList, icon, noIcon }: SimpleListProps) => (
  <UnorderedList>
    <List>
      {myList?.map((item, idx) => (
        <ListItem
          key={idx}
          textColor={item.includes("I'm not") ? "tertiary" : "currentColor"}
          mt={item.startsWith("important") ? 1 : "current"}
          fontWeight={item.startsWith("important") ? "semibold" : "current"}
        >
          <HStack mb="0.15rem">
            <ListIcon as={icon || BiIcons.BiRightArrow} color="#64FFDA" />
            <Text>{item}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  </UnorderedList>
);
const WorkExperience = () => {
  //~~~~~~~~~~~~Breakpoints~~~~~~~~~~~~~~~~~
  const orientation = useBreakpointValue<"vertical" | "horizontal">({
    xl: "vertical",
    base: "horizontal",
  });
  //~~~~~~~~~~~~Media Queries~~~~~~~~~~~~~~~~~
  const {
    screenSizeIsSmallerThan600,
    screenSizeIsLargerThan670,
    screenSizeIsLargerThan800,
    screenSizeIsLargerThan920,
    screenSizeIsLargerThan1150,
  } = useFirstLoadMediaBooleans();
  const [isLargerThan600] = useMediaQuery("(max-width: 600px)");
  const [isLargerThan670] = useMediaQuery("(max-width: 670px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan1150] = useMediaQuery("(min-width: 1150px)");
  const [isLargerThan920] = useMediaQuery("(min-width: 920px)");
  const myIsLargerThan600 = isLargerThan600 || screenSizeIsSmallerThan600;
  const myIsLargerThan670 = isLargerThan670 || screenSizeIsLargerThan670;
  const myIsLargerThan1150 = isLargerThan1150 || screenSizeIsLargerThan1150;
  const myIsLargerThan920 = isLargerThan920 || screenSizeIsLargerThan920;
  const myIsLargerThan800 = isLargerThan800 || screenSizeIsLargerThan800;
  // console.log("myIsLargerThan600", myIsLargerThan600);

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const { arrowPointingAt, setArrowPointingAt } = useContext(AnimationContext)!;
  // const [width, height, ref] = useElementSize(-0.2);
  const [adjustedHeight, setAdjustedHeight] = useState<number>(0);
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
  });
  const [on, setOn] = useState<boolean>(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(inViewAnimation);
    }
    if ((!on && arrowPointingAt === "work") || !inView) {
      animation.start(outOfViewAnimation);
    }
  }, [inView, on, arrowPointingAt === "work"]);

  const handleMouseEnter = () => {
    setOn(true);
    setArrowPointingAt("work");
  };
  const handleMouseLeave = () => {
    setOn(false);
    setArrowPointingAt("");
  };

  return (
    <section
      id="work"
      className="shadow-xl pt-2 pb-10 mb-2 "
      style={{
        // width: myIsLargerThan1150 ? "70%" : myIsLargerThan800 ? "80%" : "100%",
        width: myIsLargerThan1150
          ? "72%"
          : myIsLargerThan920
          ? "80%"
          : myIsLargerThan800
          ? "92%"
          : "100%",
        margin: "auto",
        padding: !myIsLargerThan670 ? 0 : "0.3rem",
        // borderRadius: "40px 40px 0px 0px",
        // borderRadius: "40px 40px  80% 80%",
        borderRadius: "40px 40px 40px 40px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Flex justify={"center"} align={"flex-end"}>
        <Heading
          as="h2"
          // fontSize={myIsLargerThan600 ? "xl" : null}
          size={{ "3xs": "xs", xxs: "md", xs: "lg", md: "xl", lg: "xl" }}
          position="relative"
          ref={ref}
        >
          <Highlight
            query={["01.", "worked ..."]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              color: "#30373D",
              bg: "teal.100",
              filter: "contrast(102%)",
            }}
          >
            01. Where I have worked ...
          </Highlight>
        </Heading>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Triangle arrowPointingAt */}
        <Box
          as={motion.div}
          animate={
            on && arrowPointingAt === "work"
              ? inViewAnimation
              : outOfViewAnimation
          }
          position={"absolute"}
        >
          <ArrowTriangle position={"absolute"} zIndex={2} boxSize={70} />
        </Box>
        <Box
          w="6rem"
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={on ? { opacity: 1 } : { opacity: 0 }}
          // transition={{ duration: 0.5 }}
          border={"0.5px solid"}
          h={0}
        />
      </Flex>
      <Tabs
        isFitted
        variant="enclosed"
        orientation={orientation}
        // orientation={myIsLargerThan1150 ? "vertical" : "horizontal"}
        w={myIsLargerThan670 ? "100%" : `${calc(100 / 1.6)}%`}
        minH={`${calc(100 / 1.8)}%`}
        h={
          myIsLargerThan600
            ? "fit-content"
            : myIsLargerThan800
            ? `${calc(100 / 1.8)}%`
            : `${calc(100 / 1.75)}%`
        }
        // border={"4px solid blue"}
        pb={0}
        borderBottom={0}
        bg={"#30373D"}
        // boxShadow="2xl"
        boxShadow="dark-lg"
        borderRadius={!myIsLargerThan600 ? "10px 10px 0 0" : "10px"}
        // box-sizing="border-box"
        // className="shadow-2xl"
      >
        <TabList border={0}>
          <Tab
            _focus={{ border: 0, color: "#64FFDA", boxShadow: "inner" }}
            _selected={{ border: 0 }}
            borderRadius={"10px 10px 0 0"}
          >
            Ninja Partners
          </Tab>
          <Tab
            _hover={{ border: 0 }}
            _active={{ border: 0, boxShadow: "inner " }}
            _visited={{ border: 0 }}
            _focus={{ border: 0, color: "#64FFDA", boxShadow: "inner" }}
            _selected={{ border: 0 }}
          >
            Own Projects
          </Tab>
          <Tab
            _hover={{ border: 0 }}
            _active={{ border: 0, boxShadow: "inner " }}
            _focus={{ border: 0, color: "#64FFDA", boxShadow: "inner" }}
            _visited={{ border: 0 }}
            _selected={{ border: 0 }}
          >
            Boot Camp
          </Tab>
        </TabList>
        <TabPanels>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Ninja Partners */}
          <TabPanel
            w="full"
            minH="100%"
            h={"fit-content"}
            // border={"1px solid white"}
            pt={0}
            pr={0}
            pl={0}
            box-sizing="border-box"
            // boxShadow="xl"
          >
            <VStack h="100%">
              <Box
                w="full"
                px={0}
                pb={0}
                h={`${100 / 3.8}%`}
                // border={"0.1px solid"}

                position="relative"
              >
                {entry?.isIntersecting && (
                  <Image
                    src={"/ninjaGroupMod.png"}
                    alt={"workedExperience_ninjaPartnerGroup"}
                    fill
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                    style={{
                      filter: "brightness(65%) grayscale(60%) blur(0.2px)",
                      objectFit: "cover",
                      borderRadius: "0 10px 0 0",
                    }}
                    // priority={entry?.isIntersecting}
                    // loading="lazy"
                  />
                )}

                <Box
                  // border={"1px solid cyan"}
                  pb={0}
                  w={"full"}
                  h="100%"
                  position="relative"
                  display={"flex"}
                  justifyContent="space-start"
                  alignItems="center"
                  gap={3}
                >
                  <Square
                    position="relative"
                    size={"10vh"}
                    my={4}
                    ml={"0.7rem"}
                  >
                    {entry?.isIntersecting && (
                      <ChakraNextImage
                        src={"/ninjaLogoSquare.png"}
                        alt={"workedExperience_ninjaPartnerLogo"}
                        sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                        w={"100%"}
                        h={"100%"}
                        border="0.1px solid"
                        borderRadius={"50%"}
                        objectFit={"contain"}
                        // priority={inView}
                        // loading="lazy"
                      />
                    )}
                  </Square>
                  <Heading
                    // border={"1px solid yellow"}
                    as="h3"
                    size={"lg"}
                    display="flex"
                    pt={2}
                    pr={2}
                    // ml={-3}
                    lineHeight={1.8}
                    letterSpacing="wider"
                    textShadow="-0.7px 0 black, 0 0.7px black, 0.7px 0 black, 0 -0.7px black"
                  >
                    Full Stack Developer
                  </Heading>
                </Box>
              </Box>
              <Box
                // border={"1px solid white"}
                w="full"
                h={`${calc(100 / 5)}%`}
                display="flex"
                alignItems={"center"}
              >
                <Heading size="md" pl="6">
                  oct 2021 - feb 2022 / oct 2022- dec 2022
                </Heading>
              </Box>
              <Box pb={0} w="full">
                <Container py="2">
                  <SimpleList
                    myList={[
                      "Re-organising data base, back office, Airtable script(JS)",
                      "fetch data from Reply.io/Woodpecker APIs to Airtable",
                      "data base analysis",
                      "Gamification Dashboard to reward the team,  and collect data, client, campaign. Built with Appsync GraphQl React and NodeJs",
                    ]}
                  />
                </Container>
              </Box>
            </VStack>
          </TabPanel>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Own Projects */}
          <TabPanel
            w="full"
            minH="100%"
            h={"fit-content"}
            // border={"1px solid white"}
            pt={0}
            pr={0}
            pl={0}
          >
            <VStack h="100%">
              <Box
                w="full"
                px={0}
                pb={0}
                h={`${100 / 3.8}%`}
                // border={"0.1px solid"}
                // className="h-1/4"
                position="relative"
                // ref={heightRef}
              >
                <Image
                  src={"/gh.png"}
                  alt={"workedExperience_ghGroup"}
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  // priority={true}
                  // ref={ref}
                  style={{
                    filter: "brightness(65%) grayscale(60%) blur(0.2px)",
                    objectFit: "cover",
                    borderRadius: "0 10px 0 0",
                    // marginTop: 10,
                    // objectPosition: "left",
                  }}
                />
                <Box
                  // border={"1px solid cyan"}
                  pb={0}
                  w={"full"}
                  h="100%"
                  position="relative"
                  display={"flex"}
                  justifyContent="space-start"
                  alignItems="center"
                  gap={3}
                  // ref={ref}
                >
                  <Square
                    position="relative"
                    size={"10vh"}
                    // h={"85%"}
                    my={4}
                    ml={"0.7rem"}
                  >
                    <ChakraNextImage
                      src={"/qr.png"}
                      alt={"workedExperience_qrLogo"}
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                      w={"100%"}
                      h={"100%"}
                      // border="0.1px solid"
                      borderRadius={"50%"}
                      objectFit={"contain"}
                      // imageBorderRadius="50%"
                      // imageObjectFit={"contain"}
                      // priority={true}
                    />
                  </Square>
                  <Heading
                    // border={"1px solid yellow"}
                    as="h3"
                    size={"lg"}
                    display="flex"
                    pt={2}
                    // ml={-3}
                    lineHeight={1.8}
                    letterSpacing="wider"
                    textShadow="-0.7px 0 black, 0 0.7px black, 0.7px 0 black, 0 -0.7px black"
                    // opacity={0.8}
                    // textAlign={"end"}
                  >
                    Projects
                  </Heading>
                  {/* </Flex> */}
                  {/* </Flex> */}
                </Box>
              </Box>
              <Box
                // border={"1px solid white"}
                w="full"
                h={`${calc(100 / 5)}%`}
                display="flex"
                alignItems={"center"}
              >
                <Heading size="md" pl="6">
                  oct 2021 - feb 2022 / oct 2022- dec 2022
                </Heading>
              </Box>
              <Box
                pb={0}
                // border={"1px solid white"}
                w="full"
                h={"full"}
                // flexDirection="row"
              >
                <Container py="2">
                  <SimpleList
                    myList={[
                      "Youtube View booster bot, made as a PWA",
                      "Happy cow clone, mostly the map filtering",
                    ]}
                  />
                </Container>
              </Box>
            </VStack>
          </TabPanel>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ BootCamp ~~~~~~~~~~~ */}
          <TabPanel
            w="full"
            minH="100%"
            h={"fit-content"}
            // border={"1px solid white"}
            pt={0}
            pr={0}
            pl={0}
            // boxShadow="xl"
          >
            <VStack h="100%">
              <Box
                w="full"
                px={0}
                pb={0}
                // pt="1"
                h={`${100 / 3.8}%`}
                // border={"0.1px solid"}
                // className="h-1/4"
                position="relative"
                // ref={heightRef}
              >
                <Image
                  src={"/reacteurGroup.png"}
                  alt={"workedExperience_reacteurGroup"}
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  style={{
                    filter: "brightness(65%) grayscale(60%) blur(0.2px)",
                    objectFit: "cover",
                    borderRadius: "0 10px 0 0",
                    // marginTop: 10,
                    // objectPosition: "left",
                  }}
                />
                {/* //~~~~~~~~~~~~~~~ */}
                <Box
                  // border={"1px solid cyan"}

                  pb={0}
                  w={"full"}
                  h="100%"
                  position="relative"
                  display={"flex"}
                  justifyContent="space-start"
                  alignItems="center"
                  gap={3}
                >
                  <Square
                    position="relative"
                    size={"10vh"}
                    // h={"85%"}
                    my={4}
                    ml={"0.7rem"}
                  >
                    <ChakraNextImage
                      src={"/logo-le-reacteur-2.png"}
                      alt={"workedExperience_reacteurLogo"}
                      sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                      w={"100%"}
                      h={"100%"}
                      border="0.1px solid"
                      borderRadius={"50%"}
                      objectFit={"contain"}
                      // imageBorderRadius="50%"
                      // imageObjectFit={"contain"}
                      // priority={true}
                    />
                  </Square>
                  <Heading
                    // border={"1px solid yellow"}
                    as="h3"
                    size={"lg"}
                    display="flex"
                    pt={2}
                    pr={2}
                    // ml={-3}
                    lineHeight={1.8}
                    letterSpacing="wider"
                    textShadow="-0.7px 0 black, 0 0.7px black, 0.7px 0 black, 0 -0.7px black"
                    // opacity={0.8}
                    // textAlign={"end"}
                  >
                    Le Réacteur
                  </Heading>
                </Box>
              </Box>
              <Box
                // border={"1px solid white"}
                w="full"
                h={`${calc(100 / 5)}%`}
                display="flex"
                alignItems={"center"}
              >
                <Heading size="md" pl="6">
                  mar - july 2021
                </Heading>
                <IconButton
                  aria-label="icon-reacteur"
                  icon={<ExternalLinkIcon />}
                />
              </Box>
              <Box
                pb={0}
                // border={"1px solid white"}
                w="full"
                h={"full"}
                display={"flex"}
                justifyContent={"center"}
                justifySelf={"center"}
              >
                <Container py={2} justifySelf={"center"}>
                  <SimpleList
                    // border="1px solid"

                    myList={[
                      "Convert a design to a website or mobile app",
                      "Create servers, APIs and secure data ",
                      "Manage complex database systems",
                      "Use advanced geolocation tools",
                      "Authenticate users, manage online payment",
                      "Create a content upload system on a server",
                      "Automate tasks (scraping with Puppeteer) ",
                      "Deploy the creations to a host",
                    ]}
                  />
                </Container>
              </Box>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default WorkExperience;
