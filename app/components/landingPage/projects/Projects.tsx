import {
  AbsoluteCenter,
  Box,
  InputGroup,
  InputLeftElement,
  Tag,
  calc,
  Flex,
  Heading,
  Highlight,
  Wrap,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { projects, ProjectProps } from "./data";
import ProjectCard from "./ProjectCard";
import { ArrowTriangle } from "../../StyledIcons";
import { AnimationContext } from "@/app/context/ThemeProviderContext";
import {
  inViewAnimation,
  outOfViewAnimation,
} from "../../animations/animation";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useLayoutMediaQuery } from "@/app/utils/useLayoutMediaQuery";

const tags = [
  "React",
  "React Native",
  "NodeJs",
  "Express",
  "MongoDB",
  "NextJs",
  "AWS",
  "GraphQL",
  "Amplify",
  "Bootstrap",
  "Chakra UI",
  "Semantic UI",
  "API calls",
  "Framer Motion",
  "Typescript",
  "Javascript",
];

interface TagListProps {
  id: string;
  name: string;
  index: number;
}

const Projects = () => {
  //~~~~~~~~~~~~Breakpoints~~~~~~~~~~~~~~~~~
  const BoxSizes = useBreakpointValue({
    base: "100%",
    sm: `${calc(100 / 1.3)}%`,
    lg: "72%",
  });
  //~~~~~~~~Media queries~~~~~~~~~~~~~~~
  const myIsSmallerThan600 = useLayoutMediaQuery("(max-width:600px)");
  const isLargerThanLarge = useLayoutMediaQuery("(min-width:1024px)");
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [tagList, setTagList] = useState<TagListProps[]>([]);
  const [tagNames, setTagNames] = useState<string[]>(tags);
  const [results, setResults] = useState<ProjectProps[]>([]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const { arrowPointingAt, setArrowPointingAt } = useContext(AnimationContext)!;
  const [on, setOn] = useState<boolean>(false);
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start(inViewAnimation);
    }
    if ((!on && arrowPointingAt === "projects") || !inView) {
      animation.start(outOfViewAnimation);
    }
  }, [inView, on, arrowPointingAt === "projects"]);

  const handleMouseEnter = () => {
    setOn(true);
    setArrowPointingAt("projects");
  };
  const handleMouseLeave = () => {
    setOn(false);
    setArrowPointingAt("");
  };
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

  return (
    <section
      id="projects"
      className="shadow-lg mt-10 rounded-t-3xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Flex justify={"center"} align={"flex-end"}>
        <Heading
          position={"relative"}
          ref={ref}
          size={{ "3xs": "xs", xxs: "md", xs: "lg", md: "xl", lg: "xl" }}>
          <Highlight
            query={["02.", "built ..."]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              color: "#30373D",
              bg: "teal.100",
              filter: "contrast(102%)",
            }}>
            02. What I&apos;ve built ...
          </Highlight>
        </Heading>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Triangle arrowPointingAt */}
        {isLargerThanLarge ? (
          <>
            <Box
              as={motion.div}
              animate={
                on && arrowPointingAt === "projects"
                  ? inViewAnimation
                  : outOfViewAnimation
              }
              position={"absolute"}>
              <ArrowTriangle position={"absolute"} zIndex={2} boxSize={70} />
            </Box>
            <Box
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={on ? { opacity: 1 } : { opacity: 0 }}
              w="8rem"
              border={"1px solid"}
              h={0}
            />
            <Box w="10rem" h={0} />
          </>
        ) : null}
      </Flex>

      <Text
        as="kbd"
        fontSize={"lg"}
        color="#64ffda"
        borderColor="#64ffda"
        mb={-2}>
        Pick:
      </Text>
      <Box w={BoxSizes} pr={1} pl={1}>
        <Box w="100%" as={Wrap} mt={-4}>
          {tagNames.map((tag, index: number) =>
            tag !== "" ? (
              <Tag
                key={index}
                data-index={`${index}`}
                size="lg"
                color="#CAFFF5"
                variant="outline"
                border={"0.8px solid #64FFDA"}
                m={1}
                onClick={handleOnClickOutlined}
                cursor="pointer"
                boxShadow={"xs"}>
                {tag}
              </Tag>
            ) : (
              <Tag
                key={index}
                minW={70}
                bg="transparent"
                color={"transparent"}></Tag>
            )
          )}
        </Box>
        <Box
          border="2px solid "
          mt={4}
          mb={4}
          borderRadius={5}
          w="100%"
          h="fit-content"
          minH="50px"
          className=""
          pt={1}
          display="flex"
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          boxShadow={"lg"}>
          <InputGroup>
            <InputLeftElement borderRight={"1px white solid"} h={"full"}>
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
              pt={1}>
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
                  onClick={handleOnClickSolid}>
                  {tag.name}
                </Tag>
              ))}
            </Box>
          </InputGroup>
        </Box>
        {/* ///========================================Carousel================== */}
        <Box as={Flex} overflowX="scroll" w="100%" h={275}>
          {results &&
            results.map((project, index) => (
              <Box
                key={index}
                borderRadius="10px"
                minW={myIsSmallerThan600 ? "80%" : "90%"}
                w="100%"
                display="flex"
                alignItems={"center"}
                m={4}
                boxShadow={"lg"}>
                <ProjectCard
                  name={project.name}
                  links={project.links}
                  liveDemo={project.liveDemo}
                  videos={project.videos}
                  tags={project.tags}
                  content={project.content}
                  src={project.src}
                  alt={project.alt}
                  height={project.height}
                  width={project.width}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
