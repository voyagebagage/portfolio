"use client";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Flex,
  useDisclosure,
  Box,
  Icon,
  Text,
  HStack,
  Center,
  Highlight,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TriangleLogoSmall } from "./TriangleLogoSmall";
import { items } from "../../landingPage/profileHeader/data";
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";
import { getToken } from "@/app/utils/tokenManager";
import BurgerMenu from "./BurgerMenu";
import useFirstLoadMediaBooleans from "@/app/utils/useFirstLoadMediaBooleans";
import MIconButton from "../../MIconButton";
import { ChevronUpIcon } from "@chakra-ui/icons";

type props = {
  visitingName: string | undefined;
  setVisitingName: React.Dispatch<React.SetStateAction<string | undefined>>;
  index: ThemeProviderContextProps["index"];
};

const Header = ({ visitingName, setVisitingName, index }: props) => {
  const [positionFromTop, setPositionFromTop] = useState<Boolean>(false);

  //~~~~~~~~~~~~~~~MediaQueries~~~~~~~~~~~~~~~~~~~~~
  const { screenSizeIsSmallerThan600, screenSizeIsLargerThan1150 } =
    useFirstLoadMediaBooleans();
  const [isLargerThan1150] = useMediaQuery("(min-width: 1150px)");
  const [isSmallerThan700] = useMediaQuery("(max-width: 700px)");
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  //========================
  const myIsLargerThan1150 = isLargerThan1150 || screenSizeIsLargerThan1150;
  const myIsSmallerThan600 = isSmallerThan600 || screenSizeIsSmallerThan600;
  // document.documentElement.clientWidth < 600 ? true : false;
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    fetchName();
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 700) {
        setPositionFromTop(true);
      }
      if (window.scrollY <= 550) {
        setPositionFromTop(false);
      }
    });
  }, [positionFromTop]);

  const fetchName = () => {
    const nameInToken: string | undefined = getToken()?.split("--")[0];
    if (visitingName === "") {
      setVisitingName(nameInToken);
    }
  };

  // console.log(["visitName", visitingName]);

  // console.log(["windowWidth", window.innerWidth]);

  // console.log(["windowWidth2", document.documentElement.clientWidth]);

  return myIsLargerThan1150 ? (
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
        // as="p"
        // noOfLines={1}
        fontSize="xl"
        fontWeight="bold"
        bgGradient={`linear(to-r, ${
          items[index]?.color || items[0]?.color
        },#4ff3cc)`}
        bgClip="text"
        ml={"-10rem"}
        // className="-ml-40"
      >
        Welcome <>{visitingName}</>
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
  ) : !myIsSmallerThan600 ? (
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
        // as="p"
        noOfLines={1}
        fontSize="xl"
        fontWeight="bold"
        bgGradient={`linear(to-r, ${
          items[index]?.color || items[0]?.color
        },#4ff3cc)`}
        bgClip="text"
        ml={"-10rem"}
        // className="-ml-40"
      >
        Welcome <>{visitingName}</>
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
    <HStack
      // as={Box}
      spacing={4}
      // border="2px solid blue"
      w="100%"
      position="fixed"
      css={{ backdropFilter: "blur(15px)" }}
      zIndex={99009}
      maxH="10.3vh"
      alignItems={"flex-end"}
      justifyContent="space-around"
    >
      <Text
        // as="p"
        noOfLines={1}
        pt={2}
        w={"50%"}
        // h="20%"
        fontSize="xl"
        fontWeight="bold"
        bgGradient={`linear(to-r, ${
          items[index]?.color || items[0]?.color
        },#4ff3cc)`}
        bgClip="text"
        alignSelf={"end"}
        // className=""
      >
        Welcome <>{visitingName}</>
      </Text>
      {positionFromTop && (
        <>
          <AnchorLink href="#home">
            <MIconButton
              aria-label="top"
              icon={<Icon as={ChevronUpIcon} boxSize={5} />}
              size="sm"
              bg="teal"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            />
          </AnchorLink>
        </>
      )}
      <BurgerMenu />
    </HStack>
  );
};

export default Header;
