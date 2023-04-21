import React, { useContext, useState } from "react";
import NextLink from "next/link";
import {
  Flex,
  Link,
  Stack,
  Box,
  useColorMode,
  useMediaQuery,
  HStack,
  Text,
  Heading,
  Button,
  Spacer,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";

// import ProfilePic from "../../../assets/ProfilePic.jpg";
import { BoxForNextImage, ChakraNextImage } from "../../ChakraNextImage";
import { items } from "./data";
// import '../../../assets/ProfilePic.jpg'
import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { TriangleLogo } from "./TriangleLogo";
import Image from "next/image";
import ThemeProviderContext, {
  ThemeProviderContextProps,
} from "@/app/context/ThemeProviderContext"; // useThemeProviderContext,

function ProfileHeader({ index, setIndex }: ThemeProviderContextProps) {
  // const { index, setIndex }: ThemeProviderContextProps =
  //   useContext(ThemeProviderContext)!;

  const MotionButton = motion(Button);

  const [isSmallerThan600] = useMediaQuery("(min-width:600px)");
  const [isLargerThan1280] = useMediaQuery("(min-width:1280px)");
  const { colorMode } = useColorMode();
  const [isShown, setIsShown] = useState(false);
  // const [index, setIndex] = useState(0);

  const isDark = colorMode === "dark";

  return (
    <HStack
      width="100%"
      // mt={16}
      display="flex"
      alignItems="center"
      // border="5px solid olive"
      zIndex={-1}
      direction={isSmallerThan600 ? "row" : "column"}
      w="88%"
      minWidth="max-content"
      justifyContent={"center"}
      ml={"-5rem"}
      mb={6}
    >
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Left-col */}

      <VStack
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        // border={"2px solid violet"}
      >
        <StackCard
          index={index}
          setIndex={setIndex}
          // border="1px solid violet"
        />

        <ButtonGroup isAttached mt={4}>
          <MotionButton
            animate={{
              color: ["#fff", "#4ff3cc"],
              backgroundColor: [items[index]?.color, "#565C60"],
              // backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
            }}
            whileTap={{ scale: 0.8 }}
            whileHover={{
              scale: 1.1,
              color: ["#fff", "#bff9e8"],
              bgGradient: `linear(to-l, ${
                items[index]?.color || items[0]?.color
              },#4ff3cc)`,
              // backgroundColor: [items[index]?.color, "#565C60"],
              transition: {
                backgroundColor: {
                  duration: 0.7,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                },
                color: {
                  duration: 0.7,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              },
            }}
            transition={{
              backgroundColor: {
                duration: 2,
                ease: "easeIn",
                repeat: Infinity,
                repeatType: "loop",
              },
              color: {
                duration: 2,
                ease: "easeIn",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            w="65%"
          >
            <NextLink
              href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
              passHref
            >
              <Link
                pl={3}
                pr={3}
                target="_blank"
                rel="noopener noreferrer"
                as="samp"
                _hover={{ textDecoration: "none" }}
                size="sm"
                // w="100%"
              >
                Let&apos;s Talk
              </Link>
            </NextLink>
          </MotionButton>
          <MotionButton
            // oppositeColor
            whileTap={{ scale: 0.8 }}
            whileHover={{
              scale: 1.1,
            }}
          >
            CV
          </MotionButton>
        </ButtonGroup>
        {/* {(items[index]?.name || items[0]?.name) && (
          <Heading
            opacity={0.8}
            ml={-4}
            // mt={-10}
            as="h2"
            // pos={"absolute"}
            // top={"65%"}
            display={"flex"}
            color={items[index]?.color}
            textAlign="center"
            alignSelf={"center"}
            fontSize="6xl"
            fontWeight={"extraBold"}
          >
            {items[index]?.name
              ? items[index]?.name
              : items[index]?.name === items[0]?.name
              ? items[0]?.name
              : null}
          </Heading>
        )} */}
      </VStack>
      {/* {(items[index]?.name || items[0]?.name) && (
        <Heading
          maxW="8%"
          border={"1px solid red"}
          ml={4}
          as="div"
          opacity={0.8}
          // pos={"absolute"}
          display={"flex"}
          bgGradient={`linear(to-bl, ${
            items[index]?.color || items[0]?.color
          },#4ff3cc)`}
          bgClip="text"
          // color={items[index]?.color}
          // textAlign="center"
          alignSelf={"flex-start"}
          fontSize="4xl"
          fontWeight={"extraBold"}
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",

            // marginTop: "12px",
          }}
        >
          {items[index]?.name
            ? items[index]?.name
            : items[index]?.name === items[0]?.name
            ? items[0]?.name
            : null}
        </Heading>
      )} */}
      <Spacer
        maxW="5%"
        // border="1px solid yellow"
      />
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Right-col */}
      <Box
        // border="10px solid green"
        position={"relative"}
        alignSelf="start"
        display="flex"
        w="40%"
        boxSize={"xs"}
      >
        <ChakraNextImage
          src={"/ProfilePic.jpg"}
          alt={"ProfilePic"}
          boxSize={isSmallerThan600 ? 320 : 340}
          mr={"8%"}
          borderRadius="full"
          flexShrink={0}
          mt={isSmallerThan600 ? "0" : "12"}
          mb={isSmallerThan600 ? "0" : "12"}
          alignSelf="center"
          boxShadow={isSmallerThan600 ? "lg" : "dark-lg"}
          border={isSmallerThan600 && isDark ? "10px solid" : "4px solid"}
          borderColor={isSmallerThan600 ? "modeDarkBg" : "primary"}
          _hover={{ boxShadow: isSmallerThan600 ? "lg" : "dark-lg" }}
        />
        <TriangleLogo />
      </Box>
      {/* </Flex> */}
    </HStack>
  );
}

export default ProfileHeader;
