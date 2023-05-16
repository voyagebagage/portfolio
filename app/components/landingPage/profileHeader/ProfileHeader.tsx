import React from "react";
import NextLink from "next/link";
import {
  Link,
  Box,
  useColorMode,
  HStack,
  Button,
  Spacer,
  ButtonGroup,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useLayoutMediaQuery } from "../../../utils/useLayoutMediaQuery";
import { ChakraNextImage } from "../../../components/ChakraNextImage";
import { items } from "./data";
import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { TriangleLogo } from "./TriangleLogo";

import { useColor } from "@/app/customHooks/useColor";

function ProfileHeader() {
  const index = useColor();
  const MotionButton = motion(Button);

  const { colorMode } = useColorMode();
  // const isDark = colorMode === "dark";
  //~~~~~~~~~~~~Breakpoints~~~~~~~~~~~~~~~~~
  const displayLargeHeader = useBreakpointValue({ base: "none", md: "flex" });
  const displaySmallValue = useBreakpointValue({ base: "flex", md: "none" });
  //~~~~~~~~~~~~~~~MediaQueries~~~~~~~~~~~~~~~~~~~~~
  const isLargerThan920 = useLayoutMediaQuery("(min-width:920px)");
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const whileHover = {
    letsTalk: {
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
    },
    cv: {
      scale: 1.1,
    },
  };
  const transition = {
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
  };
  return (
    <>
      <HStack
        width="100%"
        display={displayLargeHeader}
        alignItems="center"
        // border="5px solid olive"
        zIndex={-1}
        // direction={isSmallerThan600 ? "row" : "column"}
        direction={"row"}
        w="88%"
        minWidth="max-content"
        justifyContent={"center"}
        ml={isLargerThan920 ? "-3rem" : 0}
        mb={6}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Left-col */}
        <VStack
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          // border={"2px solid violet"}
        >
          <StackCard />

          <ButtonGroup isAttached mt={4} mb={2}>
            <MotionButton
              animate={{
                color: ["#fff", "#4ff3cc"],
                backgroundColor: [items[index]?.color, "#565C60"],
              }}
              whileTap={{ scale: 0.8 }}
              whileHover={whileHover.letsTalk}
              transition={transition}
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
                  isExternal
                  // w="100%"
                >
                  Let&apos;s Talk
                </Link>
              </NextLink>
            </MotionButton>
            <MotionButton
              // oppositeColor
              whileTap={{ scale: 0.8 }}
              whileHover={whileHover.cv}
            >
              <Link href="/CV DEV 2023.pdf" isExternal>
                CV
              </Link>
            </MotionButton>
          </ButtonGroup>
        </VStack>

        <Spacer maxW="5%" />
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Right-col */}
        <Box
          // border="10px solid green"
          display="flex"
          position={"relative"}
          alignSelf="start"
          w="40%"
          boxSize={"xs"}
        >
          <ChakraNextImage
            priority={true}
            src={"/ProfilePic.jpg"}
            alt={"ProfilePic"}
            mr={"8%"}
            borderRadius="full"
            flexShrink={0}
            alignSelf="center"
            boxSize={300}
            mb={"0"}
            boxShadow={"lg"}
            border={"10px solid"}
            borderColor={"modeDarkBg"}
            _hover={{ boxShadow: "lg" }}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
          <TriangleLogo />
        </Box>
      </HStack>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Small Screen */}
      <VStack
        display={displaySmallValue}
        alignItems="center"
        justifyContent={"center"}
        pr={0}
        pl={0}
        style={{
          justifyContent: "center",
        }}
        // border={"2px solid violet"}
      >
        <Box
          style={{
            justifyContent: "center",
          }}
          pr={0}
          pl={0}
          display="flex"
          position={"relative"}
          alignSelf="center"
          w="40%"
          boxSize={"xs"}
        >
          <ChakraNextImage
            src={"/ProfilePic.jpg"}
            alt={"ProfilePic"}
            borderRadius="full"
            priority={true}
            flexShrink={0}
            alignSelf="center"
            boxSize={"18.75rem"}
            mb={"0"}
            boxShadow={"lg"}
            border={"10px solid"}
            borderColor={"modeDarkBg"}
            _hover={{ boxShadow: "lg" }}
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
          />
        </Box>
        <ButtonGroup
          isAttached
          mt={4}
          display={"flex"}
          justifyContent={"center"}
        >
          <MotionButton
            animate={{
              color: ["#fff", "#4ff3cc"],
              backgroundColor: [items[index]?.color, "#565C60"],
            }}
            whileTap={{ scale: 0.8 }}
            display={"flex"}
            whileHover={whileHover.letsTalk}
            transition={transition}
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
                isExternal
                // w="100%"
              >
                Let&apos;s Talk
              </Link>
            </NextLink>
          </MotionButton>
          <MotionButton
            display={"flex"}
            whileTap={{ scale: 0.8 }}
            whileHover={whileHover.cv}
          >
            <Link href="/CV DEV 2023.pdf" isExternal>
              CV
            </Link>
          </MotionButton>
        </ButtonGroup>
      </VStack>
    </>
  );
}

export default ProfileHeader;
