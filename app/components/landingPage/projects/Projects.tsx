import {
  AbsoluteCenter,
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  calc,
  Flex,
  Heading,
  Highlight,
  useControllableState,
  Button,
  HStack,
  Wrap,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { projects, ProjectProps } from "./data";
import ProjectCard from "./ProjectCard";

const tags = [
  "React",
  "React Native",
  "NodeJs",
  "Express",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Bootstrap",
  "Chakra UI",
  "Semantic UI",
  "Framer Motion",
  "GraphQL",
  "AWS",
  "Amplify",
  "NextJs",
  "API calls",
];
interface TagListProps {
  id: string;
  name: string;
  index: number;
}

const Projects = () => {
  const [tagList, setTagList] = useState<TagListProps[]>([]);
  const [tagNames, setTagNames] = useState<string[]>(tags);
  const [results, setResults] = useState<ProjectProps[]>([]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Solid~~~~~~~~
  const handleOnClickSolid = (e: any) => {
    const newArr = [...tagList];
    const newResults = [...results];
    const tagNameIndex: number = Number(e.currentTarget.dataset.index);
    const name = tagList[tagNameIndex].name;
    const tagNameOldIndex = tagList[tagNameIndex].index;

    tagNames.splice(tagNameOldIndex, 1, name);
    newArr.splice(tagNameIndex, 1);

    setTagList(() => [...newArr]);
    setTagNames(() => [...tagNames]);
    ///==================================================FilteredResults=====

    const filteredResults = newResults.filter(
      (result) =>
        !result.tags.some((tag) => tag.name.includes(e.target.innerText))
    );
    setResults(() => [...filteredResults]);
  };
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Outlined~~~~~~
  const handleOnClickOutlined = (e: any) => {
    const newArrProject = [...projects];
    const tagNameIndex: number = Number(e.currentTarget.dataset.index);

    setTagList((prev) => [
      ...prev,
      {
        id: `${e.target.innerText}-${
          Math.floor(Math.random() * tagNameIndex * 1000000) + 1
        }`,
        name: e.target.innerText,
        index: tagNameIndex,
      },
    ]);
    tagNames[tagNameIndex] = "";
    setTagNames(() => [...tagNames]);
    ///==============================================FilteredResults=====

    const filteredResults = newArrProject.filter((project) =>
      project.tags.some((tag) => tag.name.includes(e.target.innerText))
    );

    setResults((prev) => [...prev, ...filteredResults]);
  };
  // console.log("results", results);

  return (
    <section id="projects" className="shadow-lg mt-10 rounded-t-3xl">
      {/* <Box h={`${100 + heigthRes * 10}%`}> */}
      <Flex justify={"center"} align={"flex-end"}>
        <Heading>
          <Highlight
            query={["02.", "built ..."]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
          >
            02. What I've built ...
          </Highlight>
        </Heading>
        <Box
          w="10rem"
          // border={"1px solid white"}
          h={0}
        />
      </Flex>
      <Box w="70%" as={Wrap}>
        {tagNames.map((tag, index: number) =>
          tag !== "" ? (
            <Tag
              // as={Button}
              key={index}
              data-index={`${index}`}
              size="lg"
              colorScheme="teal"
              variant="outline"
              // border={"0.8px solid"}
              m={1}
              onClick={handleOnClickOutlined}
              cursor="pointer"
              boxShadow={"xs"}
            >
              {tag}
            </Tag>
          ) : (
            <Tag
              key={index}
              minW={70}
              bg="transparent"
              color={"transparent"}
            ></Tag>
          )
        )}
      </Box>
      <Box
        border="2px solid "
        borderRadius={5}
        w="70%"
        h="fit-content"
        minH="50px"
        className=""
        pt={2}
        display="flex"
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        // pl={15}
        boxShadow={"lg"}
      >
        <InputGroup>
          <InputLeftElement
            borderRight={"1px white solid"}
            // h={tagList.length > 0 ? "full" : "0px"}
            h={"full"}
            // minH="50px"
          >
            <AbsoluteCenter h="full">
              <PlusSquareIcon />
            </AbsoluteCenter>
          </InputLeftElement>
          <Box
            ml={12}
            display="flex"
            alignItems={"center"}
            flexWrap="wrap"
            w="100%"
            boxSizing="border-box"
          >
            {tagList.map((tag, index) => (
              <Tag
                key={tag.id}
                data-index={`${index}`}
                size="lg"
                colorScheme="teal"
                variant="solid"
                cursor="pointer"
                display="flex"
                w="fit-content"
                mr={2}
                mb={2}
                boxShadow={"xs"}
                onClick={handleOnClickSolid}
              >
                {tag.name}
              </Tag>
            ))}
          </Box>
        </InputGroup>
      </Box>
      {/* ///========================================Carousel================== */}
      <Box
        as={Flex}
        // border={"1px solid yellow"}
        overflowX="scroll"
        w="70%"
        // h={250}
        // h="fit-content"
        // h="fill"
        // pb={100}
        // zIndex={1000}
        // bg="blue.300"
        // p={10}
        // className="bg-blue-300"
      >
        {results &&
          results.map((project, index) => (
            <Box
              key={index}
              borderRadius="10px"
              // border={"2px solid olive"}
              // display=
              minW={"90%"}
              w="fit-content"
              display="flex"
              alignItems={"center"}
              // w="fit-content"
              // h={250}
              // h="fit-content"
              // p={2}
              m={4}
              // my={4}
              boxShadow={"lg"}
              // className="w-96 h-auto"
            >
              <ProjectCard
                name={project.name}
                links={project.links}
                tags={project.tags}
                content={project.content}
                img={project.img}
              />
            </Box>
          ))}
      </Box>
    </section>
  );
};

export default Projects;
