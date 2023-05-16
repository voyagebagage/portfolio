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
  Text,
  useMediaQuery,
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
import useFirstLoadMediaBooleans from "@/app/utils/useFirstLoadMediaBooleans";

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
  // const displayValue = useBreakpointValue({ base: "none", md: "inline" });
  const BoxSizes = useBreakpointValue({
    base: "100%",
    sm: `${calc(100 / 1.3)}%`,
    lg: "72%",
  });
  //~~~~~~~~~~~~
  //~~~~~~~~Media queries~~~~~~~~~~~~~~~
  const { screenSizeIsSmallerThan600, screenSizeIsLargerThan1150 } =
    useFirstLoadMediaBooleans();
  const [isSmallerThan600] = useMediaQuery("(max-width:600px)");
  const [isLargerThan1150] = useMediaQuery("min-width:920px");
  const myIsSmallerThan600 = isSmallerThan600 || screenSizeIsSmallerThan600;
  const myIsLargerThan1150 = isLargerThan1150 || screenSizeIsLargerThan1150;
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
  // console.log("ton scroll", inView, scrollSup850, on);

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
  // console.log("results", results);

  return (
    <section
      id="projects"
      className="shadow-lg mt-10 rounded-t-3xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Box h={`${100 + heigthRes * 10}%`}> */}
      <Flex justify={"center"} align={"flex-end"}>
        <Heading
          position={"relative"}
          ref={ref}
          size={{ "3xs": "xs", xxs: "md", xs: "lg", md: "xl", lg: "xl" }}
        >
          <Highlight
            query={["02.", "built ..."]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              color: "#30373D",
              bg: "teal.100",
              filter: "contrast(102%)",
            }}
          >
            02. What I&apos;ve built ...
          </Highlight>
        </Heading>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Triangle arrowPointingAt */}
        <Box
          as={motion.div}
          animate={
            on && arrowPointingAt === "projects"
              ? inViewAnimation
              : outOfViewAnimation
          }
          position={"absolute"}
        >
          <ArrowTriangle position={"absolute"} zIndex={2} boxSize={70} />
        </Box>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={on ? { opacity: 1 } : { opacity: 0 }}
          // transition={{ duration: 0.5 }}
          w="8rem"
          border={"1px solid"}
          h={0}
        />
        <Box w="10rem" h={0} />
      </Flex>
      {/* <HStack gap={5} w="70%"> */}
      <Text
        as="kbd"
        fontSize={"lg"}
        color="#64ffda"
        borderColor="#64ffda"
        mb={-2}
        // ml={-150}
      >
        Pick:
      </Text>
      <Box w={BoxSizes} pr={1} pl={1}>
        <Box w="100%" as={Wrap} mt={-4}>
          {tagNames.map((tag, index: number) =>
            tag !== "" ? (
              <Tag
                // as={Button}
                key={index}
                data-index={`${index}`}
                size="lg"
                color="#CAFFF5"
                variant="outline"
                border={"0.8px solid #64FFDA"}
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
        {/* </HStack> */}
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
              pt={1}
            >
              {tagList.map((tag, index) => (
                <Tag
                  key={tag.id}
                  data-index={`${index}`}
                  size="lg"
                  colorScheme="teal"
                  variant="solid"
                  // _hover={{ variant: "outline" }}
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
          w="100%"
          // h={250}
          h={275}
          // className="bg-blue-300"
        >
          {results &&
            results.map((project, index) => (
              <Box
                key={index}
                borderRadius="10px"
                // border={"2px solid olive"}
                minW={myIsSmallerThan600 ? "80%" : "90%"}
                w="100%"
                display="flex"
                alignItems={"center"}
                m={4}
                boxShadow={"lg"}
                // className="w-96 h-auto"
              >
                <ProjectCard
                  name={project.name}
                  links={project.links}
                  liveDemo={project.liveDemo}
                  videos={project.videos}
                  tags={project.tags}
                  content={project.content}
                  img={project.img}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
