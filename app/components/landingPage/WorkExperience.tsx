import React, { useEffect, useState } from "react";
import useElementSize from "../../customHooks/useElementSize";
import Image from "next/image";
import * as BiIcons from "react-icons/bi";
// import '../../customHooks/useElementSize'
import {
  Box,
  calc,
  Center,
  Flex,
  Heading,
  Highlight,
  IconButton,
  // Image,
  Img,
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
  Stack,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { ChakraNextImage } from "../ChakraNextImage";

const WorkExperience = () => {
  const [width, height, ref] = useElementSize();
  const [adjustedHeight, setAdjustedHeight] = useState<number>(0);
  console.log("height", height);
  useEffect(() => {
    // console.log("height", height);
    const adjustHeight = () => {
      const coeff = 0.75;
      setAdjustedHeight(height * coeff);
    };
    adjustHeight();
  }, [height]);

  return (
    <section
      id="work"
      className="shadow-md "
      // style={{ border: "2px yellow solid" }}
    >
      <Flex justify={"center"} align={"flex-end"}>
        <Heading>
          <Highlight
            query={["01.", "worked ..."]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
          >
            01. Where I have worked ...
          </Highlight>
        </Heading>
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
        // boxShadow="2xl"
        boxShadow="dark-lg"
        borderRadius={"10px 10px 0 0"}
        // className="shadow-2xl"
      >
        <TabList border={0}>
          <Tab
            // _hover={{ border: 0 }}
            // _active={{ border: 0, boxShadow: "inner " }}
            // _focus={{ border: 0, boxShadow: "inner" }}
            // _visited={{ border: 0 }}
            _selected={{ border: 0 }}
            borderRadius={"10px 10px 0 0"}
          >
            Ninja Partners
          </Tab>
          <Tab
            _hover={{ border: 0 }}
            _active={{ border: 0, boxShadow: "inner " }}
            _focus={{ border: 0, boxShadow: "inner" }}
            _visited={{ border: 0 }}
            _selected={{ border: 0 }}
          >
            FreeLance
          </Tab>
          <Tab
            _hover={{ border: 0 }}
            _active={{ border: 0, boxShadow: "inner " }}
            _focus={{ border: 0, boxShadow: "inner" }}
            _visited={{ border: 0 }}
            _selected={{ border: 0 }}
          >
            Own Projects
          </Tab>
          <Tab border={0}>Boot Camp</Tab>
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
                  priority={true}
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
                  border={"1px solid cyan"}
                  // px={0}
                  pb={0}
                  w={"full"}
                  h="100%"
                  position="relative"
                  display={"flex"}
                  justifyContent="space-start"
                  alignItems="center"
                  gap={5}
                  ref={ref}
                >
                  {/* <Image
                    src={"/ninjaLogoSquare.png"}
                    alt={"fd1sfs"}
                    width={100}
                    height={height}
                    // priority={true}
                    style={{
                      objectFit: "contain",
                      display: "flex",
                      borderRadius: "50%",
                      border: "0.1px solid",
                      marginLeft: "0.7rem",
                      // padding: "1rem",
                      marginTop: 5,
                      marginBottom: 5,
                    }}
                  /> */}
                  <ChakraNextImage
                    // border={"1px solid cyan"}
                    src={"/ninjaLogoSquare.png"}
                    alt={"workedExperience_ninjaPartnerLogo"}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    w={100}
                    h={adjustedHeight}
                    border="0.1px solid"
                    borderRadius={"50%"}
                    objectFit={"contain"}
                    // loading="lazy"
                    // imageBorderRadius="90%"
                    // imageObjectFit={"contain"}
                    ml={"0.7rem"}
                    mt={5}
                    mb={5}
                    priority={true}
                    // style={{
                    //   // objectFit: "contain",
                    //   // display: "flex",
                    //   border: "0.1px solid",
                    //   marginLeft: "0.7rem",
                    //   // borderRadius: "50%",
                    //   // marginTop: 5,
                    //   // marginBottom: 5,
                    // }}
                  />
                  <Heading
                    // border={"1px solid yellow"}
                    as="h3"
                    size={"lg"}
                    display="flex"
                    pt={3}
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
                border={"1px solid white"}
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
                border={"1px solid white"}
                w="full"
                h={"full"}
                // flexDirection="row"
              >
                <Container py="2">
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                </Container>
              </Box>
            </VStack>
          </TabPanel>
          {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FreeLance */}
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
                pt="1"
                h={`${calc(100 / 3.8)}%`}
                // className="h-1/4"
                position="relative"
              >
                <Image
                  src={"/ninjaGroupMod.png"}
                  alt={"workedExperience_FreeLanceGroup"}
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  priority={true}
                  style={{
                    filter: "brightness(65%) grayscale(60%) blur(0.2px)",
                    objectFit: "cover",
                    borderRadius: "0 10px 0 0",
                    // objectPosition: "left",
                  }}
                />
                <Box
                  // border={"1px solid white"}
                  px={0}
                  pb={0}
                  // pt={}
                  w={"full"}
                  h="95%"
                  position="relative"
                  // objectPosition="center"
                  // h={`${calc(100 / 1.8)}%`}
                  // className="h-1/3"
                  display={"flex"}
                  flex={1}
                  justifyContent="space-start"
                  alignItems="center"
                >
                  <Image
                    src={"/ninjaLogoSquare.png"}
                    alt={"workedExperience_FreeLanceLogo"}
                    width={100}
                    height={100}
                    priority={true}
                    style={{
                      objectFit: "contain",
                      display: "flex",
                      borderRadius: "50%",
                      border: "0.3px solid white",
                      // left: -10,
                      scale: "0.76",
                      // marginLeft: "0.7rem",
                      // padding: "-1rem",
                    }}
                    className="w-1/4 h-auto"
                  />
                  <Heading
                    // border={"1px solid yellow"}
                    as="h3"
                    size={"lg"}
                    display="flex"
                    ml={-3}
                    lineHeight={1.4}
                    letterSpacing="wider"
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
                border={"1px solid white"}
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
                border={"1px solid white"}
                w="full"
                h={"full"}
                // flexDirection="row"
              >
                <Container py="2">
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
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
                pt="1"
                h={`${calc(100 / 3.8)}%`}
                // className="h-1/4"
                position="relative"
              >
                <Image
                  src={"/ninjaGroupMod.png"}
                  alt={"workedExperience_OwnProjectGroup"}
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  priority={true}
                  style={{
                    filter: "brightness(65%) grayscale(60%) blur(0.2px)",
                    objectFit: "cover",
                    borderRadius: "0 10px 0 0",
                    // objectPosition: "left",
                  }}
                />
                <Box
                  // border={"1px solid white"}
                  px={0}
                  pb={0}
                  // pt={}
                  w={"full"}
                  h="95%"
                  position="relative"
                  // objectPosition="center"
                  // h={`${calc(100 / 1.8)}%`}
                  // className="h-1/3"
                  display={"flex"}
                  flex={1}
                  justifyContent="space-start"
                  alignItems="center"
                >
                  <Image
                    src={"/ninjaLogoSquare.png"}
                    alt={"workedExperience_OwnProjectLogo"}
                    width={100}
                    height={100}
                    // priority={false}
                    priority={true}
                    style={{
                      objectFit: "contain",
                      display: "flex",
                      borderRadius: "50%",
                      border: "0.3px solid white",
                      // left: -10,
                      scale: "0.6",
                      marginLeft: "-1rem",
                      // padding: "-1rem",
                    }}
                    className="w-1/4 h-auto"
                  />
                  <Heading
                    // border={"1px solid yellow"}
                    as="h3"
                    size={"lg"}
                    display="flex"
                    ml={-3}
                    lineHeight={1.4}
                    letterSpacing="wider"
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
                border={"1px solid white"}
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
                border={"1px solid white"}
                w="full"
                h={"full"}
                // flexDirection="row"
              >
                <Container py="2">
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
                  <HStack mb="0.15rem">
                    <Icon as={BiIcons.BiRightArrow} color="whatsapp.700" />
                    <Text> Developing a full stack web application</Text>
                  </HStack>
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
