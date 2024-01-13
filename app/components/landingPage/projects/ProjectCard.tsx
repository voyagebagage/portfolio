import {
  Icon,
  HStack,
  Tooltip,
  Box,
  VStack,
  Button,
  useBoolean,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
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
  src,
  alt,
  links,
}: ProjectProps) => {
  //~~~~~~~~~~~~Breakpoints~~~~~~~~~~~~~~~~~
  const displayValue = useBreakpointValue({ base: "none", md: "inline" });
  const sizes = useBreakpointValue({ base: "xs", md: "sm" });
  const displayPhoneSize = useBreakpointValue({ base: "flex", md: "none" });
  const displayBiggerSizes = useBreakpointValue({ base: "none", md: "flex" });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

  return (
    <>
      <HStack
        ref={ref1}
        bg="#66887f"
        w="100%"
        borderRadius={"10px"}
        display={displayBiggerSizes}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~left col */}
        {!imgFullWitdh ? (
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
                  onClick={() => window.open(links[0], "_blank")}>
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
        ) : null}

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~right col */}
        {!textFullWitdh ? (
          <VStack
            w={"100%"}
            minW={"48%"}
            bg="brown"
            borderRadius={"0 10px 10px 0"}
            ref={ref2}>
            <Box
              _hover={{
                filter: "brightness(0.8)",
                cursor: "pointer",
              }}
              position="relative"
              w={"100%"}
              minW={imgFullWitdh ? width1 : "100%"}
              h={height1}
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
                src={src}
                alt={alt}
                fill
                object-fit="contain"
                loading="eager"
                // height={100}
                // width={150}
                style={{
                  borderRadius: "0 10px 10px 0",
                  // objectFit: "contain",
                }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                // loading="lazy"
              />
              {/* <HStack
                pb={3}
                pr={2}
                spacing={"0.7rem"}
                position="absolute"
                w="100%"
                h="100%"
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
              >
                <ButtonGroup isAttached size={sizes}>
                  <Button
                    // h={`${height2}px`}
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
                    // h={`${height2}px`}
                    disabled={videos}
                    colorScheme={"cyan"}
                    _hover={{
                      filter: "brightness(1.1)",
                      cursor: !videos ? "pointer" : "initial",
                    }}
                  >
                    Videos
                  </Button>
                </ButtonGroup>
              </HStack> */}
            </Box>
          </VStack>
        ) : null}
      </HStack>
      <VStack display={displayPhoneSize}>
        <Box
          bgImage={`url(${src})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          height="100%"
          position="relative"
          borderRadius={"10px"}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: "10px",
            backgroundColor: "blackAlpha.600",
          }}>
          <VStack
            w="100%"
            minW={textFullWitdh ? "100%" : "52%"}
            alignItems="flex-start"
            justifyContent="space-between"
            p={2}
            mb={1}
            h={275}
            display="flex"
            filter={"brightness(100%)"}
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
              {/* {displayValue === "inline" && (
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
              )} */}
              {/* {displayValue === "none" && (
                <ButtonGroup>
                  <IconButton
                    aria-label="video-icon-button"
                    as={VscIcons.VscDeviceCameraVideo}
                    py={2}
                    onClick={() => window.open(links[0], "_blank")}
                  />
                  <IconButton
                    aria-label="ext-icon-button"
                    as={ExternalLinkIcon}
                    py={2}
                    onClick={() => window.open(links[0], "_blank")}
                  />
                  <IconButton
                    aria-label="gb-icon-button"
                    colorScheme="teal"
                    py={2}
                    icon={<Icon as={VscIcons.VscGithub} boxSize={"0.87rem"} />}
                    // ref={displayValue === "none" &&ref2}
                    onClick={() => window.open(links[0], "_blank")}
                  />
                </ButtonGroup>
              )} */}
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default ProjectCard;
