import React, { useState } from "react";
import NextLink from "next/link";
import {
  Link,
  Box,
  HStack,
  Button,
  Spacer,
  ButtonGroup,
  VStack,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useLayoutMediaQuery } from "../../../utils/useLayoutMediaQuery";
import { ChakraNextImage } from "../../../components/ChakraNextImage";
import { items } from "./data";
import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { TriangleLogo } from "./TriangleLogo";

import { useColor } from "@/app/customHooks/useColor";
import VideoModalButton from "./videoModalButton";

function ProfileHeader() {
  const index = useColor();
  const MotionButton = motion(Button);
  const [isHovered, setIsHovered] = useState(false);
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
        mb={6}>
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
              w="65%">
              <NextLink
                href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
                passHref>
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
              whileHover={whileHover.cv}>
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
          position={"relative"}
          as="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          display="flex"
          alignSelf="start"
          w="40%"
          boxSize={"xs"}
          pl={"2%"}>
          <ChakraNextImage
            priority={true}
            src={"/ProfilePic.png"}
            alt={"ProfilePic"}
            bgGradient={`linear(to-r,${
              items[index]?.color || items[0]?.color
            },#4ff3cc,${items[index]?.color || items[0]?.color})`}
            // bg={items[index]?.color}
            // zIndex={-100}
            borderRadius="full"
            flexShrink={0}
            alignSelf="center"
            boxSize={300}
            mb={"0"}
            imageObjectFit="scale-down"
            boxShadow={"lg"}
            border={"10px solid"}
            borderColor={"modeDarkBg"}
            _hover={{ boxShadow: "lg" }}
            sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
          <TriangleLogo />

          <VideoModalButton isHovered={isHovered} />
        </Box>
      </HStack>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Small Screen */}
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
        {" "}
        <Tooltip label="Introducing video" placement="top">
          <Box
            style={{
              justifyContent: "center",
            }}
            as="button"
            pr={0}
            pl={0}
            display="flex"
            position={"relative"}
            alignSelf="center"
            w="40%"
            boxSize={"xs"}>
            <ChakraNextImage
              src={"/ProfilePic.png"}
              alt={"ProfilePic"}
              borderRadius="full"
              priority={true}
              bgGradient={`linear(to-r,${
                items[index]?.color || items[0]?.color
              },#4ff3cc,${items[index]?.color || items[0]?.color})`}
              flexShrink={0}
              alignSelf="center"
              boxSize={"18.75rem"}
              mb={"0"}
              imageObjectFit="scale-down"
              boxShadow={"lg"}
              border={"10px solid"}
              borderColor={"modeDarkBg"}
              _hover={{ boxShadow: "lg", borderColor: "rgb(79, 243, 204,0.6)" }}
              sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
            />
          </Box>
        </Tooltip>
        <ButtonGroup
          isAttached
          mt={4}
          display={"flex"}
          justifyContent={"center"}>
          <MotionButton
            animate={{
              color: ["#fff", "#4ff3cc"],
              backgroundColor: [items[index]?.color, "#565C60"],
            }}
            whileTap={{ scale: 0.8 }}
            display={"flex"}
            whileHover={whileHover.letsTalk}
            transition={transition}
            w="65%">
            <NextLink
              href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
              passHref>
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
            whileHover={whileHover.cv}>
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
