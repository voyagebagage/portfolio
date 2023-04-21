"use client";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Flex,
  useDisclosure,
  Box,
  Text,
  HStack,
  Center,
  Highlight,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import { TriangleLogoSmall } from "./TriangleLogoSmall";
import { items } from "../../landingPage/profileHeader/data";

type props = {
  visitingName: String;
  index: number;
};

const Header = ({ visitingName, index }: props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const scrollOffset = 10;
  //     const scrollThreshold = 5;
  //     if (currentScrollPos === 0) {
  //       // If we're at the top of the page, always show the header
  //       onOpen();
  //     } else if (prevScrollPos > currentScrollPos && !isOpen) {
  //       onOpen();
  //     } else if (prevScrollPos < currentScrollPos - scrollOffset && isOpen) {
  //       onClose();
  //     }
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos, isOpen, onOpen, onClose]);

  const variants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: { delay: 0.2, duration: 0.2, ease: "easeOut" },
    },
    visible: { y: "0%", opacity: 1 },
  };
  const transition = {
    duration: "0.2s ease-out",
    ease: "easeOut",
    type: "tween",
  };
  return (
    <Box
      // as={motion.div}
      // animate={isOpen ? "visible" : "hidden"}
      // variants={variants}
      // transition={transition}
      className="flex flex-row items-center justify-between px-10"
      // py={1}
      // boxShadow={isOpen ? "sm" : ""}
      // position={isOpen ? "fixed" : "relative"}
      px={4000}
      // top={0}
      // left={0}
      // right={0}
      w="100%"
      // align="center"
      position="fixed"
      css={{ backdropFilter: "blur(15px)" }}
      zIndex={99009}
    >
      {/* <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        bg="transparent"
        
       
      > */}
      <Flex>
        <TriangleLogoSmall />
        {/* <Text className="text-xl" alignSelf="center">
          idevandyou
        </Text> */}
      </Flex>
      <Text
        noOfLines={1}
        fontSize="xl"
        fontWeight="bold"
        bgGradient={`linear(to-r, ${
          items[index]?.color || items[0]?.color
        },#4ff3cc)`}
        bgClip="text"
      >
        Welcome {visitingName && visitingName}
      </Text>
      <div className="flex justify-around gap-8">
        {/* <AnchorLink href="/">Top</AnchorLink> */}
        <Box _hover={{ color: "#64FFDA" }}>
          <AnchorLink href="#about">
            <Highlight query="00." styles={{ color: "#64FFDA" }}>
              00. About
            </Highlight>
          </AnchorLink>
        </Box>
        <Box _hover={{ color: "#64FFDA" }}>
          <AnchorLink href="#work">
            <Highlight query="01." styles={{ color: "#64FFDA" }}>
              01. Work
            </Highlight>
          </AnchorLink>
        </Box>
        <Box _hover={{ color: "#64FFDA" }}>
          <AnchorLink href={"#projects"}>
            <Highlight query="02." styles={{ color: "#64FFDA" }}>
              02. Projects
            </Highlight>
          </AnchorLink>
        </Box>
        <Box _hover={{ color: "#64FFDA" }}>
          <AnchorLink href="#contact">
            <Highlight query="03." styles={{ color: "#64FFDA" }}>
              03. Contact
            </Highlight>
          </AnchorLink>
        </Box>
      </div>
      {/* </Flex> */}
    </Box>
  );
};

export default Header;

// const Header = () => {
//   return <motion.div>{/* Navigation links go here */}</motion.div>;
// };
