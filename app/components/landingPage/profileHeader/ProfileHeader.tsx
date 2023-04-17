import React, { useState } from "react";
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
} from "@chakra-ui/react";

// import ProfilePic from "../../../assets/ProfilePic.jpg";
import { BoxForNextImage, ChakraNextImage } from "../../ChakraNextImage";
import { items } from "./data";
// import '../../../assets/ProfilePic.jpg'
import { motion } from "framer-motion";
import StackCard from "./StackCard";
import { TriangleLogo } from "./TriangleLogo";
import Image from "next/image";

function ProfileHeader() {
  const MotionButton = motion(Button);

  const [isSmallerThan600] = useMediaQuery("(min-width:600px)");
  const [isLargerThan1280] = useMediaQuery("(min-width:1280px)");
  const { colorMode } = useColorMode();
  const [isShown, setIsShown] = useState(false);
  const [index, setIndex] = useState(0);

  const isDark = colorMode === "dark";

  return (
    <Stack width="100%" mt={120}>
      {/* //------------------------------ */}
      {/* //------------------------------ */}
      <Flex
        direction={isSmallerThan600 ? "row" : "column"}
        border="5px solid cyan"
        width="100%"
        minWidth="max-content"
      >
        <Box mt={"-6%"} alignItems="center" border={"1px solid red"}>
          <Heading
            noOfLines={1}
            fontSize="5xl"
            fontWeight="bold"
            bgGradient={`linear(to-r, ${
              items[index]?.color || items[0]?.color
            },#4ff3cc)`}
            bgClip="text"
          >
            Welcome
          </Heading>
          <HStack mb={2}>
            <Text
              as="div"
              display={"flex"}
              textAlign="start"
              fontSize="2xl"
              fontWeight="semibold"
            >
              My Stacks :
            </Text>
            {(items[index]?.name || items[0]?.name) && (
              <Text
                ml={4}
                as="div"
                display={"flex"}
                color={items[index]?.color}
                textAlign="center"
                alignSelf={"center"}
                fontSize="xl"
                fontWeight={"normal"}
              >
                {items[index]?.name
                  ? items[index]?.name
                  : items[index]?.name === items[0]?.name
                  ? items[0]?.name
                  : null}
              </Text>
            )}
          </HStack>
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
                backgroundColor: [items[index]?.color, "#565C60"],
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
        </Box>
        <Spacer maxW="15%" border="1px solid yellow" />
        <Box
          border="10px solid green"
          position={"relative"}
          display="flex"
          w="40%"
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
            boxShadow={isSmallerThan600 ? "xs" : "dark-lg"}
            border={isSmallerThan600 && isDark ? "10px solid" : "4px solid"}
            borderColor={isSmallerThan600 ? "modeDarkBg" : "primary"}
            _hover={{ boxShadow: isSmallerThan600 ? "lg" : "dark-lg" }}
          />
          <TriangleLogo />
        </Box>
      </Flex>
    </Stack>
  );
}

export default ProfileHeader;
