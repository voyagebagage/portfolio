import {
  Wrap,
  WrapItem,
  Icon,
  HStack,
  Tooltip,
  Box,
  calc,
  VStack,
  Button,
  Spacer,
  useBoolean,
  useBreakpointValue,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import useElementSize from "../../../customHooks/useElementSize";

import Feature from "../../Feature";
import { ProjectProps } from "./data";
import * as VscIcons from "react-icons/vsc";

const ProjectCard = ({
  name,
  liveDemo,
  videos,
  tags,
  content,
  img,
  links,
}: ProjectProps) => {
  //~~~~~~~~~~~~Breakpoints~~~~~~~~~~~~~~~~~
  const displayValue = useBreakpointValue({ base: "none", md: "inline" });
  const sizes = useBreakpointValue({ base: "xs", md: "sm" });
  //~~~~~~~~~~~~
  const [textFullWitdh, setTextFullWitdh] = useBoolean(false);
  const [imgFullWitdh, setImgFullWitdh] = useBoolean(false);
  // const [width, height, ref, ref2] = useElementSize();
  const refs = useElementSize();
  //-------------------------------
  const ref1 = refs[0].ref;
  const height1 = refs[0].height;
  const width1 = refs[0].width;
  //-------------------------------
  const ref2 = refs[1].ref;
  const height2 = refs[1].height;
  const width2 = refs[1].width;
  //-------------------------------
  // console.log([ref2, height2]);

  return (
    <>
      <HStack ref={ref1} bg="#66887f" w="100%" borderRadius={"10px"}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~left col */}
        {!imgFullWitdh && (
          <VStack
            w="100%"
            minW={textFullWitdh ? "100%" : "52%"}
            alignItems="flex-start"
            justifyContent="space-between"
            p={2}
            mb={1}
            h={275}
            display="flex"
            // border={"pink solid 1px"}
          >
            <Feature
              // pt={0}
              title={name}
              desc={content}
              w="100%"
              minW={"52%"}
              cursor="pointer"
              onClick={setTextFullWitdh.toggle}
              // _hover={{ caretColor: "red" }}
            />
            <HStack
              spacing={1}
              w="100%"
              justifyContent="space-between"
              alignItems={"center"}
              ref={ref2}
              // border={"1px solid brown"}
              // mr={-2}
              // h="40px"
              // style={{ marginLeft: "-2px", marginBottom: "-1px" }}
            >
              <Box as={HStack} spacing={2} w="100%" ml={1}>
                {tags &&
                  tags.map((tag, i) => (
                    <Box key={i}>
                      <Tooltip
                        hasArrow
                        label={tag.name}
                        fontSize="xs"
                        // h={"full"}
                        // w="full"
                        // bg="gray.400"
                        // borderRadius={"3px"}
                      >
                        <span style={{ display: "flex" }}>
                          <Icon as={tag.icon} boxSize="1.35rem" />
                        </span>
                      </Tooltip>
                    </Box>
                  ))}
              </Box>
              {displayValue === "inline" && (
                <Button
                  as="kbd"
                  colorScheme="teal"
                  // ml={8}
                  py={2}
                  px={8}
                  size={sizes}
                  leftIcon={
                    <Icon as={VscIcons.VscGithub} boxSize={"0.87rem"} />
                  }
                  rightIcon={
                    <Icon
                      as={VscIcons.VscLinkExternal}
                      boxSize={"0.80rem"}
                      display={displayValue}
                    />
                  }
                  onClick={() => window.open(links[0], "_blank")}
                >
                  Readme
                </Button>
              )}
              {displayValue === "none" && (
                <IconButton
                  aria-label="gb-icon-button"
                  colorScheme="teal"
                  py={2}
                  icon={<Icon as={VscIcons.VscGithub} boxSize={"0.87rem"} />}
                  // ref={displayValue === "none" &&ref2}
                />
              )}
            </HStack>
          </VStack>
        )}

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~right col */}
        {!textFullWitdh ? (
          <VStack
            w={"100%"}
            minW={"48%"}
            bg="brown"
            borderRadius={"0 10px 10px 0"}
          >
            <Box
              _hover={{
                filter: "brightness(0.8)",
                cursor: "pointer",
              }}
              w={"100%"}
              minW={imgFullWitdh ? width1 : "100%"}
              h={height1}
              position="relative"
              onClick={setImgFullWitdh.toggle}
              bg="gray.400"
              p={0}
              m={0}
              borderRadius={"0 10px 10px 0"}
              className="aspect-auto"
              // minW={width}
              // minHeight={"100%"}
              // h={`${calc(100 / 4.8)}%`}
              // border="1px solid red"
              // display="flex"
            >
              <Image
                src={"/ninjaGroupMod.png"}
                alt={"fdjsfs"}
                fill
                style={{ borderRadius: "0 10px 10px 0" }}
                // sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
                // loading="lazy"
              />
              <HStack
                pb={3}
                pr={2}
                spacing={"0.7rem"}
                position="absolute"
                w="100%"
                h="100%"
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
              >
                <ButtonGroup size={sizes} h={`${height2}px`} isAttached>
                  <Button
                    disabled={liveDemo}
                    colorScheme="red"
                    _hover={{
                      filter: "brightness(1.1)",
                      cursor: !liveDemo ? "pointer" : "initial",
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    disabled={videos}
                    colorScheme="cyan"
                    _hover={{
                      filter: "brightness(1.1)",
                      cursor: !videos ? "pointer" : "initial",
                    }}
                  >
                    Videos
                  </Button>
                </ButtonGroup>
              </HStack>
            </Box>
          </VStack>
        ) : null}
      </HStack>
    </>
  );
};

export default ProjectCard;
