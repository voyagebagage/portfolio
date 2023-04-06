import {
  AbsoluteCenter,
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const tags = [
  "React",
  "React Native",
  "Node",
  "Express",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "M.UI",
  "Chakra",
  "Semantic",
  "Framer",
  "GraphQL",
  "AWS",
  "Heroku",
  "Next.js",
];
interface TagListProps {
  id: string;
  name: string;
  // checked: boolean;
  index: number;
}

const Projects = () => {
  const [tagList, setTagList] = useState<TagListProps[]>([]);
  const [tagNames, setTagNames] = useState<string[]>(tags);
  const handleOnClickSolid = (e: any) => {
    const newArr = [...tagList];
    const tagNameIndex: number = Number(e.currentTarget.dataset.index);

    // tagList[tagNameIndex].checked = false;

    const name = tagList[tagNameIndex].name;
    const tagNameOldIndex = tagList[tagNameIndex].index;

    tagNames.splice(tagNameOldIndex, 1, name);
    newArr.splice(tagNameIndex, 1);
    setTagList(() => [...newArr]);

    setTagNames(() => [...tagNames]);
    // setTagList(() => (...tagList, tagList[tagNameIndex]?.checked = false));
  };

  const handleOnClickOutlined = (e: any) => {
    // console.log("e.target", e.target);
    const tagNameIndex: number = Number(e.currentTarget.dataset.index);

    setTagList((prev) => [
      ...prev,
      {
        id: `${e.target.innerText}-${
          Math.floor(Math.random() * tagNameIndex * 1000000) + 1
        }`,
        name: e.target.innerText,
        index: tagNameIndex,
        // checked: true,
      },
    ]);

    tagNames[tagNameIndex] = "";
    setTagNames(() => [...tagNames]);
    // setTagNames(() => tagNames.filter((tag) => tag !== e.target.innerText));
  };

  console.log("tagList", tagList, " tags: ", tagNames);

  return (
    <section
      id="projects"
      className="bg-blue-400 shadow-lg "
      style={{ border: "2px cyan solid" }}
    >
      {/* <Center> */}
      <Box w="70%" mb={10}>
        {tagNames.map((tag, index: number) =>
          tag !== "" ? (
            <Tag
              key={index}
              data-index={`${index}`}
              size="lg"
              colorScheme="teal"
              variant="outline"
              m={1}
              onClick={handleOnClickOutlined}
              cursor="pointer"
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
        // as="textarea"
        border="2px solid"
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
      >
        {/* <> */}
        <InputGroup>
          <InputLeftElement
            borderRight={"1px white solid"}
            h="full"
            // minH="50px"
            children={
              <AbsoluteCenter>
                <PlusSquareIcon h="full" minH="50px" />
              </AbsoluteCenter>
            }
          />
          <Box
            ml={12}
            display="flex"
            alignItems={"center"}
            flexWrap="wrap"
            w="100%"
            boxSizing="border-box"
          >
            {tagList.map((tag, index) => (
              // tag.checked ? (
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
                onClick={handleOnClickSolid}
              >
                {tag.name}
              </Tag>
            ))}
          </Box>
        </InputGroup>
      </Box>
    </section>
  );
};

export default Projects;
