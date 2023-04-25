// components/Card.tsx
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
  Square,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import React from "react";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";
import MIconButton from "../../MIconButton";

interface TickerStackCardProps {
  title?: string;
  icon: JSX.Element;
  content?: string;
  level?: string;
  orientation?: "top" | "bottom";
  project?: string;
}
// const MIconButton = motion(IconButton);

const TickerStackCard = ({
  title,
  icon,
  content,
  level,
  orientation,
  project,
}: TickerStackCardProps) => {
  const contentPhrases: string[] = content?.split("," || ".") as string[];
  // console.log("contentText", contentPhrases);
  // console.log("contentText", contentText.join("<br />"));

  return (
    <>
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
            // as={Square}
            _hover={{ bg: "teal.300", color: "#8fbaae" }}
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
          <PopoverHeader
            border="0"
            fontWeight="bold"
            fontSize="sm"
            noOfLines={2}
          >
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
                  <Icon as={FcIcons.FcInternal} boxSize={6} color="tomato" />
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
    </>
  );
};

export default TickerStackCard;
{
  /* {content?.split(",")[0]}

{content?.split(",")[1] ? (
  <>
  {","} <br />
  {content?.split(",")[1]}
  </>
  ) : null}
{} */
}
{
  /* <VStack alignContent={"flex-start"}>
<VStack border={"1px red solid"}>
  {title?.length && title?.length > 5 ? (
    <div className="h-2">
      <Text fontWeight="bold" fontSize="sm" textAlign={"center"}>
        {title?.split(" ")[0]}
      </Text>
      <Text fontWeight="bold" fontSize="sm" textAlign={"center"}>
        {title?.split(" ")[1]}
      </Text>
    </div>
  ) : (
    <div className="h-2">
      <Text fontWeight="bold" fontSize="sm" textAlign={"center"}>
        {title}
      </Text>
    </div>
  )}
</VStack>
<div className="justify-self-center h-1">{icon}</div>

</VStack> */
}
