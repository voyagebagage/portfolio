import React, { useEffect, useLayoutEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ChakraNextImage } from "../ChakraNextImage";
import { ArrowTriangle } from "../StyledIcons";
import { motion } from "framer-motion";

type Props = {
  myList?: string[];
  icon?: any;
  noIcon?: boolean;
};
export const SimpleList = ({ myList, icon, noIcon }: Props) => (
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
            {/* <ListIcon as={icon || BsIcons.BsPatchCheckFill} color="#64FFDA" /> */}
            <Text>{item}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  </UnorderedList>
);
const WorkExperience = React.forwardRef<HTMLHeadingElement, Props>(
  ({}, ref) => {
    // const [width, height, ref] = useElementSize(-0.2);
    const [adjustedHeight, setAdjustedHeight] = useState<number>(0);
    //make a function to transform height in rem
    function remCalc(height: number) {
      const rem = 16;
      const coeff = 0.8;
      const remHeight = Math.floor((height * coeff) / rem);
      return remHeight;
    }

    // const myHeight = remCalc(height);

    useLayoutEffect(() => {
      // console.log("height", height);
      const adjustHeight = () => {
        // setAdjustedHeight(myHeight);
      };
      adjustHeight();
    }, []);

    return (
      <section
        id="work"
        className="shadow-lg bg-cyan-500 pt-24 pb-10 mt-10 mb-2 mx-auto"
        style={{
          width: "70%",
          // margin: "auto",
          // borderRadius: "40px 40px 0px 0px",
          borderRadius: "40px 40px  80% 80%",
          // borderTop: "2px solid",
        }}
      >
        <Flex justify={"center"} align={"flex-end"}>
          <Heading position="relative" ref={ref}>
            <Highlight
              query={["01.", "worked ..."]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
            >
              01. Where I have worked ...
            </Highlight>
          </Heading>
          {/* <Box
            as={motion.div}
            //   initial={{ x: 500, y: 0, rotate: 180 }}
            // animate={on ? inViewAnimation : outOfViewAnimation}
            // animate={animation}
            // exit={outOfViewAnimation}
          >
            <ArrowTriangle
              position={"absolute"}
              zIndex={2}
              transformOrigin="right"
              transform="translate(550%, 0%) rotate(180deg)"
              boxSize={70}
              opacity="0.08"
              alignSelf="flex-end"
            />
          </Box> */}

          <Box w="6rem" border={"0.5px solid white"} h={0} />
        </Flex>
        <Tabs
          isFitted
          variant="enclosed"
          orientation="vertical"
          h={`${calc(100 / 2)}%`}
          w={`${calc(100 / 1.75)}%`}
          // border={"4px solid blue"}
          pb={0}
          borderBottom={0}
          bg={"#30373D"}
          // boxShadow="2xl"
          boxShadow="dark-lg"
          borderRadius={"10px 10px 0 0"}
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
              h="100%"
              // border={"1px solid white"}
              pt={0}
              pr={0}
              pl={0}
              boxShadow="xl"
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
                    src={"/ninjaGroupMod.png"}
                    alt={"workedExperience_ninjaPartnerGroup"}
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
                      Full Stack Developer
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
                  <Heading size="md">
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
              h="100%"
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
                  // pt="1"
                  h={`${100 / 3.8}%`}
                  // border={"0.1px solid"}
                  // className="h-1/4"
                  position="relative"
                  // ref={heightRef}
                >
                  <Image
                    src={"/ninjaGroupMod.png"}
                    alt={"workedExperience_ninjaPartnerGroup"}
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
                  <Heading size="md">
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
                      myList={["Youtube View booster bot, made as a PWA"]}
                    />
                  </Container>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel
              w="full"
              h="100%"
              // border={"1px solid white"}
              pt={0}
              pr={0}
              pl={0}
              boxShadow="xl"
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
                    src={"/ninjaGroupMod.png"}
                    alt={"workedExperience_ninjaPartnerGroup"}
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
                    // as={HStack}
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
                      // ml={-3}
                      lineHeight={1.8}
                      letterSpacing="wider"
                      textShadow="-0.7px 0 black, 0 0.7px black, 0.7px 0 black, 0 -0.7px black"
                      // opacity={0.8}
                      // textAlign={"end"}
                    >
                      Le Réacteur
                    </Heading>
                    <IconButton
                      aria-label="icon-reacteur"
                      icon={<ExternalLinkIcon />}
                    />
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
                </Box>
                <Box
                  pb={0}
                  pl={1}
                  // border={"1px solid white"}
                  w="full"
                  h={"full"}
                  // flexDirection="row"
                >
                  <Container>
                    <SimpleList
                      // border="1px solid"
                      // icon={BsIcons.BsPatchCheckFill}
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
  }
);

export default WorkExperience;
{
  /* <Box
    position="absolute"
    top={180}
    mt="50%"
    w="10rem"
    h="35%"
    transform="translate(30%,-9%) rotate(90deg)"
    border="none"
    // marginY="auto"
  >
    <Box
      h="10rem"
      // rotate="180deg"
      // border="1px solid black"
      transform="rotate(270deg)"
      minW="30%"
      // h="10rem"
      bg="#759c91"
      bgGradient={`linear(to-b, #759c91,#3d3031)`}
      border="transparent 0px"

      // zIndex={1}
    >
      <Box
        bg="#30373d"
        h="50%"
        borderRadius="100% 0% 0% 100% / 100% 30% 70% 0% "
        border="transparent 0px"
      />
      <Box
        bg="#3d3031"
        h="50%"
        transform="scaleY(-1)"
        borderRadius="100% 0% 0% 100% / 100% 30% 70% 0% "
        border="transparent 0px"
      />
    </Box>
    <Box
      bg="#759c91"
      h="25%"
      zIndex={1}
      bgGradient={`linear(to-r, #759c91,#3d3031)`}
      border="transparent 0px"
    />
    <Box
      h="10rem"
      // border="1px solid black"
      transform="rotate(90deg)"
      minW="30%"
      bg="#759c91"
      bgGradient={`linear(to-t, #759c91,#3d3031)`}
      border="transparent 0px"
    >
      <Box
        bg="#3d3031"
        h="50%"
        borderRadius="100% 0% 0% 100% / 100% 30% 70% 0% "
        border="transparent 0px"
      />
      <Box
        h="50%"
        bg="#30373d"
        transform="scaleY(-1)"
        borderRadius="100% 0% 0% 100% / 100% 30% 70% 0% "
        border="transparent 0px"
      />
    </Box>
  </Box> */
}

{
  /* <Box
position="absolute"
top={180}
mt="50%"
minW="10rem"
h="30%"
transform="rotate(90deg)"
border="1px solid red"
>
<Box
  border="1px solid cyan"
  h="50%"
  bg="#759c91"
  transform="rotate(180deg)"
>
  <Box
    bg="#759c91"
    h="75%"
    zIndex={1}
    borderRadius="0 0 100% 100%"
  ></Box>
  <Box
    bg="#3d3031"
    h="25%"
    zIndex={1}
    borderRadius="100% 100% 0 0"
  ></Box>
</Box>
<Box
  border="1px solid cyan"
  h="50%"
  bg="#759c91"
  transform="rotate(180deg)"
>
  <Box
    bg="#759c91"
    h="75%"
    zIndex={1}
    borderRadius="0 0 100% 100%"
  ></Box>
  <Box
    bg="#3d3031"
    h="25%"
    zIndex={1}
    borderRadius="100% 100% 0 0"
  ></Box>
</Box></Box> */
}
