"use client";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Flex,
  useDisclosure,
  Box,
  Text,
  HStack,
  Center,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollOffset = 10;
      const scrollThreshold = 5;
      if (currentScrollPos === 0) {
        // If we're at the top of the page, always show the header
        onOpen();
      } else if (prevScrollPos > currentScrollPos && !isOpen) {
        onOpen();
      } else if (prevScrollPos < currentScrollPos - scrollOffset && isOpen) {
        onClose();
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isOpen, onOpen, onClose]);

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
      as={motion.div}
      animate={isOpen ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className="flex flex-row items-center justify-between px-10"
      py={1}
      boxShadow={isOpen ? "sm" : ""}
      position={isOpen ? "fixed" : "relative"}
      // px={8}
      top={0}
      left={0}
      right={0}
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
        <AnchorLink href="/">Top</AnchorLink>
        <AnchorLink href="#about">00. About</AnchorLink>
        <AnchorLink href="#work">01. Work</AnchorLink>
        <AnchorLink href={"#projects"}>02. Projects</AnchorLink>
        <AnchorLink href="#contact">03. Contact</AnchorLink>
      </div>
      {/* </Flex> */}
    </Box>
  );
};

export default Header;

// const Header = () => {
//   return <motion.div>{/* Navigation links go here */}</motion.div>;
// };
