import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import {
  Link,
  Box,
  useColorMode,
  useMediaQuery,
  HStack,
  Button,
  Spacer,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";
import { useLayoutMediaQuery } from "../../../utils/useLayoutMediaQuery";
import { ChakraNextImage } from "../../ChakraNextImage";
import { items } from "./data";
import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { TriangleLogo } from "./TriangleLogo";

import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";

function ProfileHeader({ index, setIndex }: ThemeProviderContextProps) {
  const MotionButton = motion(Button);
  const [isSmallerThan600] = useMediaQuery("(min-width:600px)");
  const isLargerThan850 = useLayoutMediaQuery("(min-width:850px)");
  // const [isLargerThan850] = useMediaQuery("(min-width:850px)");
  const [isLargerThan1280] = useMediaQuery("(min-width:1280px)");
  const { colorMode } = useColorMode();
  const [isShown, setIsShown] = useState(false);
  const isDark = colorMode === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= 5) setIndex(-1);
      setIndex((index: number) => index + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);
  console.log(
    "isLargerThan850",
    isLargerThan850,
    "WINDOW"
    // typeof window,
    // window.document.head
    // win  dow.
  );

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
  return isLargerThan850 ? (
    <HStack
      width="100%"
      // mt={16}
      display="flex"
      alignItems="center"
      // border="5px solid olive"
      zIndex={-1}
      // direction={isSmallerThan600 ? "row" : "column"}
      direction={"row"}
      w="88%"
      minWidth="max-content"
      justifyContent={"center"}
      ml={"-3rem"}
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
          // setIndex={setIndex}
          // border="1px solid violet"
        />

        <ButtonGroup isAttached mt={4} mb={2}>
          <MotionButton
            animate={{
              color: ["#fff", "#4ff3cc"],
              backgroundColor: [items[index]?.color, "#565C60"],
              // backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
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

      <Spacer
        maxW="5%"
        // border="1px solid yellow"
      />
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
          priority
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

          // mt={20}
          // mt={isSmallerThan600 ? "0" : 12}
          // boxSize={isSmallerThan600 ? 300 : 340}
          // mb={isSmallerThan600 ? "0" : "12"}
          // boxShadow={isSmallerThan600 ? "lg" : "dark-lg"}
          // border={isSmallerThan600 && isDark ? "10px solid" : "4px solid"}
          // borderColor={isSmallerThan600 ? "modeDarkBg" : "primary"}
          // _hover={{ boxShadow: isSmallerThan600 ? "lg" : "dark-lg" }}
        />
        <TriangleLogo />
      </Box>
    </HStack>
  ) : (
    <VStack
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      // border={"2px solid violet"}
    >
      <Box
        // border="10px solid green"
        display="flex"
        position={"relative"}
        alignSelf="start"
        w="40%"
        boxSize={"xs"}
      >
        <ChakraNextImage
          src={"/ProfilePic.jpg"}
          alt={"ProfilePic"}
          mr={"8%"}
          borderRadius="full"
          flexShrink={0}
          // mt={20}
          // mt={isSmallerThan600 ? "0" : 12}
          alignSelf="center"
          // boxSize={isSmallerThan600 ? 300 : 340}
          // mb={isSmallerThan600 ? "0" : "12"}
          // boxShadow={isSmallerThan600 ? "lg" : "dark-lg"}
          // border={isSmallerThan600 && isDark ? "10px solid" : "4px solid"}
          // borderColor={isSmallerThan600 ? "modeDarkBg" : "primary"}
          // _hover={{ boxShadow: isSmallerThan600 ? "lg" : "dark-lg" }}
          boxSize={300}
          mb={"0"}
          boxShadow={"lg"}
          border={"10px solid"}
          borderColor={"modeDarkBg"}
          _hover={{ boxShadow: "lg" }}
        />
      </Box>
      <ButtonGroup isAttached mt={4}>
        <MotionButton
          animate={{
            color: ["#fff", "#4ff3cc"],
            backgroundColor: [items[index]?.color, "#565C60"],
            // backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
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
  );
  // return (
  //   <HStack
  //     width="100%"
  //     // mt={16}
  //     display="flex"
  //     alignItems="center"
  //     // border="5px solid olive"
  //     zIndex={-1}
  //     // direction={isSmallerThan600 ? "row" : "column"}
  //     direction={"row"}
  //     w="88%"
  //     minWidth="max-content"
  //     justifyContent={"center"}
  //     ml={"-3rem"}
  //     mb={6}
  //   >
  //     {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Left-col */}

  //     <VStack
  //       display="flex"
  //       alignItems="center"
  //       justifyContent={"center"}
  //       // border={"2px solid violet"}
  //     >
  //       <StackCard
  //         index={index}
  //         // setIndex={setIndex}
  //         // border="1px solid violet"
  //       />

  //       <ButtonGroup isAttached mt={4} mb={2}>
  //         <MotionButton
  //           animate={{
  //             color: ["#fff", "#4ff3cc"],
  //             backgroundColor: [items[index]?.color, "#565C60"],
  //             // backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
  //           }}
  //           whileTap={{ scale: 0.8 }}
  //           whileHover={whileHover.letsTalk}
  //           transition={transition}
  //           w="65%"
  //         >
  //           <NextLink
  //             href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
  //             passHref
  //           >
  //             <Link
  //               pl={3}
  //               pr={3}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               as="samp"
  //               _hover={{ textDecoration: "none" }}
  //               size="sm"
  //               isExternal
  //               // w="100%"
  //             >
  //               Let&apos;s Talk
  //             </Link>
  //           </NextLink>
  //         </MotionButton>
  //         <MotionButton
  //           // oppositeColor
  //           whileTap={{ scale: 0.8 }}
  //           whileHover={whileHover.cv}
  //         >
  //           <Link href="/CV DEV 2023.pdf" isExternal>
  //             CV
  //           </Link>
  //         </MotionButton>
  //       </ButtonGroup>
  //     </VStack>

  //     <Spacer
  //       maxW="5%"
  //       // border="1px solid yellow"
  //     />
  //     {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Right-col */}
  //     <Box
  //       // border="10px solid green"
  //       display="flex"
  //       position={"relative"}
  //       alignSelf="start"
  //       w="40%"
  //       boxSize={"xs"}
  //     >
  //       <ChakraNextImage
  //         priority
  //         src={"/ProfilePic.jpg"}
  //         alt={"ProfilePic"}
  //         mr={"8%"}
  //         borderRadius="full"
  //         flexShrink={0}
  //         alignSelf="center"
  //         boxSize={300}
  //         mb={"0"}
  //         boxShadow={"lg"}
  //         border={"10px solid"}
  //         borderColor={"modeDarkBg"}
  //         _hover={{ boxShadow: "lg" }}

  //         // mt={20}
  //         // mt={isSmallerThan600 ? "0" : 12}
  //         // boxSize={isSmallerThan600 ? 300 : 340}
  //         // mb={isSmallerThan600 ? "0" : "12"}
  //         // boxShadow={isSmallerThan600 ? "lg" : "dark-lg"}
  //         // border={isSmallerThan600 && isDark ? "10px solid" : "4px solid"}
  //         // borderColor={isSmallerThan600 ? "modeDarkBg" : "primary"}
  //         // _hover={{ boxShadow: isSmallerThan600 ? "lg" : "dark-lg" }}
  //       />
  //       <TriangleLogo />
  //     </Box>
  //   </HStack>
  // );
}

export default ProfileHeader;
//
