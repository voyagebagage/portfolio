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
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { TriangleLogoSmall } from "./TriangleLogoSmall";
import { items } from "../../landingPage/profileHeader/data";
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";

type props = {
  visitingName: String;
  index: ThemeProviderContextProps["index"];
};

const Header = ({ visitingName, index }: props) => {
  const [isLargerThan1150] = useMediaQuery("(min-width: 1150px)");
  return isLargerThan1150 ? (
    <Box
      className="flex flex-row items-center justify-between px-10 pt-1"
      w="100%"
      position="fixed"
      css={{ backdropFilter: "blur(15px)" }}
      zIndex={99009}
      maxH="8.3vh"
    >
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
        Welcome {visitingName}
      </Text>
      <div className="flex justify-around gap-8">
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
    </Box>
  ) : (
    <Box
      className="flex flex-row items-center justify-between px-2 py-1"
      w="100%"
      position="fixed"
      css={{ backdropFilter: "blur(15px)" }}
      zIndex={99009}
      maxH="8.3vh"
    >
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
        Welcome {visitingName}
      </Text>
      <div className="flex justify-around gap-8">
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
    </Box>
  );
};

export default Header;
