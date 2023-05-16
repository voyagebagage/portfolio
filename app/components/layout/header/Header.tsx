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
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TriangleLogoSmall } from "./TriangleLogoSmall";
import { items } from "../../landingPage/profileHeader/data";

import { getToken } from "@/app/utils/tokenManager";
import BurgerMenu from "./BurgerMenu";
import MIconButton from "../../MIconButton";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useColor } from "@/app/customHooks/useColor";

type props = {
  visitingName: string | undefined;
  setVisitingName: React.Dispatch<React.SetStateAction<string | undefined>>;
  // index: ColorContextType;
};

const Header = ({ visitingName, setVisitingName }: props) => {
  // const index = useContext(ColorContext)!;
  const index = useColor();
  const [positionFromTop, setPositionFromTop] = useState<Boolean>(false);
  //~~~~~~~~~~~~Breakpoints~~~~~~~~~~~~~~~~~
  const displayLargeHeader = useBreakpointValue({
    base: "none",
    xl: "flex",
  });
  const displaySmallHeader = useBreakpointValue({
    base: "none",
    md: "flex",
  });
  const displayBurgerHeader = useBreakpointValue({
    md: "none",
    base: "flex",
  });
  //~~~~~~~~~~~~~~~MediaQueries~~~~~~~~~~~~~~~~~~~~~
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

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
  return (
    <>
      <Box
        className="flex-row items-center justify-between px-10 pt-1"
        w="100%"
        position="fixed"
        css={{ backdropFilter: "blur(15px)" }}
        zIndex={99009}
        maxH="8.3vh"
        display={displayLargeHeader}
      >
        <Flex>
          <TriangleLogoSmall />
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

      <Box
        className="flex-row items-center justify-between px-2 py-1"
        w="100%"
        position="fixed"
        css={{ backdropFilter: "blur(15px)" }}
        zIndex={99009}
        maxH="8.3vh"
        // ml={"-8rem"}
        display={displaySmallHeader}
      >
        <Flex>
          <TriangleLogoSmall />
        </Flex>
        <Text
          noOfLines={1}
          fontSize="xl"
          fontWeight="bold"
          bgGradient={`linear(to-r, ${
            items[index]?.color || items[0]?.color
          },#4ff3cc)`}
          bgClip="text"
          ml={positionFromTop && isSmallerThan800 ? 0 : "-10rem"}
          // className="-ml-40"
        >
          Welcome <>{visitingName}</>
        </Text>
        {positionFromTop && isSmallerThan800 && (
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
          // </Box>
        )}
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

      <HStack
        as={Box}
        spacing={4}
        // border="2px solid blue"
        w="100%"
        position="fixed"
        css={{ backdropFilter: "blur(15px)" }}
        zIndex={99009}
        maxH="10.3vh"
        h="7vh"
        pb={1}
        display={displayBurgerHeader}
        alignItems={"end"}
        justifyContent="space-around"
      >
        <Text
          noOfLines={1}
          pt={2}
          w={"50%"}
          fontSize="xl"
          fontWeight="bold"
          bgGradient={`linear(to-r, ${
            items[index]?.color || items[0]?.color
          },#4ff3cc)`}
          bgClip="text"
          display={"flex"}
          // alignSelf={"end"}
          // className=""
        >
          Welcome <>{visitingName}</>
        </Text>
        {positionFromTop && (
          <Box display={"flex"} pt={3} mt={3}>
            <AnchorLink href="#home">
              <MIconButton
                aria-label="top"
                icon={<Icon as={ChevronUpIcon} boxSize={5} />}
                size="md"
                bg="teal"
                opacity={0.5}
                _hover={{ opacity: 1 }}
              />
            </AnchorLink>
          </Box>
        )}
        <Box alignSelf={"center"}>
          <BurgerMenu />
        </Box>
      </HStack>
    </>
  );
};

export default Header;
