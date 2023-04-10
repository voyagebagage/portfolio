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
import Feature from "../../Feature";
import { ProjectProps } from "./data";
import * as VscIcons from "react-icons/vsc";

const ProjectCard = ({ name, tags, content, img, links }: ProjectProps) => {
  const [textFullWitdh, setTextFullWitdh] = useBoolean(false);
  const [imgFullWitdh, setImgFullWitdh] = useBoolean(false);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, []);
  console.log("width", width);
  console.log("ref.current?.offsetWidth");

  return (
    <>
      <HStack ref={ref}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~left col */}
        {!imgFullWitdh && (
          <VStack
            w="100%"
            minW={textFullWitdh ? "100%" : "52%"}
            alignItems="flex-start"
            justifyContent="space-between"
            border={"pink solid 1px"}
            h={250}
            display="flex"
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
              alignItems={"flex-end"}
              border={"1px solid green"}
              // h="40px"
              style={{ marginBottom: "-1px" }}
            >
              <Box as={HStack} spacing={2} w="100%">
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
                        borderRadius={"3px"}
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
              >
                Readme
              </Button>
            </HStack>
          </VStack>
        )}

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~right col */}
        {!textFullWitdh ? (
          <VStack w={"100%"} minW={"48%"} maxW="100%">
            <Box
              w={"100%"}
              minW={imgFullWitdh ? width : "100%"}
              // minHeight={"100%"}
              // h={`${calc(100 / 3.8)}%`}
              h={250}
              p={0}
              m={0}
              border="1px solid red"
              // className="h-40"
              position="relative"
              onClick={setImgFullWitdh.toggle}
              // display="flex"
            >
              <Image
                src={"/ninjaGroupMod.png"}
                alt={"fdjsfs"}
                fill
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
