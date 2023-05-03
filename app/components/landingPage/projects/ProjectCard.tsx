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
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import useElementSize from "../../../customHooks/useElementSize";

import Feature from "../../Feature";
import { ProjectProps } from "./data";
import * as VscIcons from "react-icons/vsc";

const ProjectCard = ({ name, tags, content, img, links }: ProjectProps) => {
  const [textFullWitdh, setTextFullWitdh] = useBoolean(false);
  const [imgFullWitdh, setImgFullWitdh] = useBoolean(false);
  const [width, height, ref] = useElementSize();

  return (
    <>
      <HStack ref={ref} bg="#66887f" w="100%" borderRadius={"10px"}>
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
              <Button
                as="kbd"
                colorScheme="teal"
                // ml={8}
                py={2}
                px={6}
                size="sm"
                leftIcon={<Icon as={VscIcons.VscGithub} boxSize={"0.87rem"} />}
                rightIcon={
                  <Icon as={VscIcons.VscLinkExternal} boxSize={"0.80rem"} />
                }
                onClick={() => window.open(links[0], "_blank")}
              >
                Readme
              </Button>
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
                filter: "brightness(0.3)",
                padding: 6,
                border: "1px solid red",
              }}
              w={"100%"}
              minW={imgFullWitdh ? width : "100%"}
              h={height}
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
            </Box>
          </VStack>
        ) : null}
      </HStack>
    </>
  );
};

export default ProjectCard;
