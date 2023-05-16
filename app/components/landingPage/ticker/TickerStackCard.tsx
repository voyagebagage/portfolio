// components/Card.tsx
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";
import {
  AbsoluteCenter,
  Card,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Icon,
  Box,
} from "@chakra-ui/react";

import React from "react";
import * as FcIcons from "react-icons/fc";
import MIconButton from "../../MIconButton";
import { items } from "../profileHeader/data";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { css, keyframes } from "@emotion/react";

interface TickerStackCardProps {
  title?: string;
  icon: JSX.Element;
  content?: string;
  level?: string;
  orientation?: "top" | "bottom";
  project?: string;
  index: ThemeProviderContextProps["index"];
}

const TickerStackCard = ({
  title,
  icon,
  content,
  level,
  orientation,
  project,
  index,
}: TickerStackCardProps) => {
  const contentPhrases: string[] = content?.split("," || ".") as string[];
  // console.log("contentText", contentPhrases);
  // console.log("contentText", contentText.join("<br />"));
  const colorChange = keyframes`
    0% {
      color: ${items[index]?.color};
    }
    20% {
      color: ${items[index]?.color};
    }
    40% {
      color: ${items[index]?.color};
    }
    60% {
      color: ${items[index]?.color};
    }
    80% {
      color: ${items[index]?.color};
    }
    100% {
      color: ${items[index]?.color};
    }
  `;

  const animationStyles = css`
    :hover {
      animation-name: color-change-hover;
      animation-duration: ${13.5}s;
      animation-iteration-count: infinite;
    }
  `;
  return (
    <Popover
      trigger="hover"
      placement={
        orientation === "top"
          ? "top-start"
          : orientation === "bottom"
          ? "bottom-start"
          : "bottom"
      }
    >
      <PopoverTrigger>
        <Card
          // css={animationStyles}
          _hover={{
            // bg: items[index].color,
            filter: "brightness(105%)",
            color: items[index].color,
          }}
          // className="indexColor"
          borderWidth="0.1px"
          borderRadius="lg"
          // borderColor="transparent"
          bg="transparent"
          color={"gray.600"}
          mr={4}
          minWidth="75px"
          h="75px"
          boxShadow={"lg"}
          // w="65px"
          // key={key}
          // display={"flex"}
          boxSizing="border-box"
          // zIndex={0}
        >
          {/* {icon} */}
          {/* <VStack spacing={"5px"}> */}
          <AbsoluteCenter>{icon}</AbsoluteCenter>
          {/* </VStack> */}
        </Card>
      </PopoverTrigger>
      <PopoverContent
        bg={"gray.800"}
        borderColor={"gray.800"}
        color={"white"}
        zIndex={105}
        p={2}
      >
        <PopoverArrow />
        <PopoverHeader border="0" fontWeight="bold" fontSize="sm" noOfLines={2}>
          {/* <Text fontWeight="bold" fontSize="sm"> */}
          {title}
          {/* </Text> */}
        </PopoverHeader>
        <PopoverBody>
          {contentPhrases?.map((text, index: number) => (
            <React.Fragment key={index}>
              {text}
              <br />
            </React.Fragment>
          ))}
        </PopoverBody>

        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={4}
        >
          <div>Level: {level}</div>
          <Box
            borderRadius={"md"}
            // size={"45px"}
            bg="transparent"
            border={"tomato 0.5px solid"}
            px={2}
            py={1}
            className="flex items-center"
          >
            <div className="mr-1"> examples </div>
            {/* <Box
            border={"0.7px solid white"}
            h="1rem"
            py="0"
            className="mr-2"
          /> */}
            {/* <Square borderRadius={"md"} bg="tomato" px={2} py={1}> */}
            {/* {project} */}
            {/* <Icon as={CgIcons.CgInternal} boxSize={5} /> */}
            <MIconButton
              aria-label="Search projects"
              variant={"ghost"}
              size="xs"
              pb={1.5}
              colorScheme="tomato"
              icon={
                <AnchorLink href={"#projects"}>
                  <Icon as={FcIcons.FcInternal} boxSize={6} color="tomato" />
                </AnchorLink>
              }
              // whileHover={{ scale: 1.2 }}
              // whileTap={{ scale: 0.9 }}
              // transition={{ type: "spring", stiffness: 300, damping: 17 }}
            />
            {/* <Icon as={FcIcons.FcInternal} boxSize={5} /> */}
            {/* </Square> */}
          </Box>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
    // </motion>
  );
};

export default TickerStackCard;
