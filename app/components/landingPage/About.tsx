import {
  Text,
  VStack,
  Box,
  SimpleGrid,
  Heading,
  Container,
  Highlight,
} from "@chakra-ui/react";
import React from "react";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { type } from "os";
import { items } from "./profileHeader/data";
import { ThemeProviderContextProps } from "@/app/context/ThemeProviderContext";

type Props = {
  index: number;
};
const About = ({ index }: Props) => {
  // const SimpleList = ({ myList, icon, noIcon }: Props) => (
  //   <UnorderedList>
  //     <List>
  //       {myList.map((item, idx) => (
  //         <ListItem
  //           key={idx}
  //           textColor={item.includes("I'm not") ? "tertiary" : "currentColor"}
  //           mt={item.startsWith("important") ? 1 : "current"}
  //           fontWeight={item.startsWith("important") ? "semibold" : "current"}
  //         >
  //           {noIcon || item.startsWith("important") ? null : (
  //             <ListIcon
  //               as={icon || BsIcons.BsPatchCheckFill}
  //               color="secondary"
  //             />
  //           )}
  //           {item}
  //         </ListItem>
  //       ))}
  //     </List>
  //   </UnorderedList>
  // );
  {
    /* <ListIcon as={BsIcons.BsCheck2Circle} color="secondary" /> */
  }
  return (
    <section id="about">
      <VStack
        // pos="relative"
        // top={0}
        display="flex"
        // border="2px solid"
        w="full"
        h="100%"
        pt={100}
        borderRadius="20px 20px 0px 0px"
        textAlign={"center"}

        // pb={0}
        // bg="#2BDEB2"
        // bg="#28D0A9"
      >
        <Container maxW="4xl">
          <Text
            as="kbd"
            fontSize={"md"}
            color="#64ffda"
            // ml={-150}
          >
            Hi, my name is
          </Text>
          <Heading
            letterSpacing={1.8}
            fontSize="5xl"
            pl={39}
            // className="pl-16"
            textAlign={"center"}
            filter="brightness(105%)"
            bgGradient={`linear(to-t, ${
              items[index]?.color || items[0]?.color
            },#CAFFF5)`}
            bgClip="text"
          >
            Olivier Frugier.
          </Heading>
          <Heading
            letterSpacing={1.5}
            fontSize="5xl"
            className="pl-16"
            filter="brightness(75%)"
          >
            I do web and mobile app.
          </Heading>
          <SimpleGrid columns={2} w="100%" spacingX={7} spacingY={2} p={2}>
            <Box>
              <Text wordBreak="break-word" textAlign="right">
                <Highlight
                  query={["front", "full", "Koh Phangan"]}
                  styles={{ color: "#64FFDA" }}
                >
                  I&apos;m front end / full stack developer I started
                  programming during covid time, in Koh Phangan. I studied at
                  &apos;Le Réacteur&apos;, to have more details click on stacks
                  details, or see below.
                </Highlight>
              </Text>
            </Box>
            <Box>
              <Text wordBreak="break-word" textAlign="left">
                <Highlight
                  query={["back to work"]}
                  styles={{ color: "#64FFDA" }}
                >
                  I had my first company experience at &apos;Ninja
                  partners&apos;, and participate to small projects here and
                  there. I had personal life things to deal with and know
                  I&apos;m back to work
                </Highlight>
              </Text>
            </Box>
            <Box>
              <Text wordBreak="break-word" textAlign="right">
                <Highlight
                  query={["youtube link"]}
                  styles={{
                    color: "#64FFDA",
                    textDecoration: "underline",
                    textDecorationSkipInk: "auto",
                  }}
                >
                  We, my wife and I, also produce music and make video clips. We
                  also had a little business designing/selling clothes. I invite
                  the youtube link
                </Highlight>
              </Text>
            </Box>
            <Box>
              <Text wordBreak="break-word" textAlign="left">
                Before Asia, I was in the tourist industry. I was mostly driving
                sled dogs/huskies in the north of Europe
              </Text>
            </Box>
          </SimpleGrid>
        </Container>

        <Box
          position={"absolute"}
          top={"60%"}
          w="85%"
          display="flex"
          // bg={"#303d3d"}
          bg="#5BD6DE"
          // border="3px solid blue"
          borderRadius="40px 40px 0px 0px"
          h="55%"
          // w="100%"
        ></Box>
      </VStack>
    </section>
  );
};

export default About;

// <HStack
//   justify="center"
//   w="100%"
//   h="fit-content"
//   // top={0}
//   // top={"80%"}
// >
//   {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 1 ~~ */}
//   <Card
//     display="flex"
//     // justify="space-between"
//     border="1px solid"
//     borderRadius="40px 5%"
//     boxSize={"md"}
//     m={0}
//     maxH="400px"
//     minW="33%"
//     _hover={{
//       bg: "primary",
//       boxShadow: "dark-lg",
//       transform: "scale(1.02)",
//     }}
//   >
//     <HStack
//       as={CardHeader}
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       w="100%"
//       h="20%"
//       borderRadius=" 30px 20px"
//       borderBottom="1px solid modeDarkBg"
//       bg="modeDarkBg"
//       // gap={5}
//     >
//       <Icon as={SiIcons.SiJavascript} transform="rotate(-10deg)" />
//       <Heading fontSize="xl">Le Réacteur</Heading>
//       BsRocketTakeoff
//       <Icon as={BsIcons.BsRocketTakeoff} />
//       <IconButton
//         aria-label="icon-reacteur"
//         icon={<ExternalLinkIcon />}
//       />
//     </HStack>
//     <Box
//       as={CardBody}
//       flex="1"
//       display="flex"
//       // justify="space-between"
//       // border="1px solid green"
//       alignItems="center"
//       justifyContent="center"
//       // h="80%"
//     >
//       <SimpleList
//         // border="1px solid"
//         icon={BsIcons.BsPatchCheckFill}
//         myList={[
//           "Convert a design to a website or mobile app",
//           "Create servers, APIs and secure data ",
//           "Manage complex database systems",
//           "Use advanced geolocation tools",
//           "Authenticate users, manage online payment",
//           "Create a content upload system on a server",
//           "Automate tasks (scraping with Puppeteer) ",
//           "Deploy the creations to a host",
//         ]}
//       />
//     </Box>
//   </Card>
//   {/* <ArrowForwardIcon boxSize={6} /> */}
//   <Icon as={TbIcons.TbArrowBigRightLinesFilled} boxSize={6} />
//   {/* <Spacer /> */}
//   {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 ~~~~~ */}
//   <Card
//     display="flex"
//     // style={{ marginLeft: 0 }}
//     // justify="space-between"
//     border="1px solid"
//     borderRadius="20px"
//     boxSize={"md"}
//     maxH="400px"
//     minW="33%"
//     _hover={{
//       bg: "primary",
//       boxShadow: "dark-lg",
//       transform: "scale(1.02)",
//     }}
//   >
//     <HStack
//       as={CardHeader}
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       w="100%"
//       h="20%"
//       borderRadius="20px"
//       gap={5}
//       borderBottom="1px solid modeDarkBg"
//       bg="modeDarkBg"
//     >
//       {/* <Icon as={SiIcons.SiJavascript} transform="rotate(-10deg)" /> */}
//       <Heading>Work</Heading>
//     </HStack>

//     <CardBody
//       flex="1"
//       display="flex"
//       // justify="space-between"
//       // border="1px solid green"
//       alignItems="center"
//       justifyContent="center"
//       // h="80%"
//     >
//       <SimpleList
//         // border="1px solid"
//         icon={BsIcons.BsPatchCheckFill}
//         myList={[
//           "Autonomous work",
//           "Learn new technologies",
//           "Work with a designer",
//           "Built a platform from A-Z",
//           // "Amplify (AWS)",
//           // "HTML",
//           // "CSS",
//           // "Chakra UI",
//           // "Semantic UI",
//           // "Material UI",
//         ]}
//       />
//     </CardBody>
//   </Card>
//   {/* <ArrowForwardIcon boxSize={6} /> */}
//   <Icon as={TbIcons.TbArrowBigRightLines} boxSize={6} />

//   {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 ~~~~~~ */}
//   {/* <Spacer /> */}
//   <Card
//     display="flex"
//     border="1px solid"
//     borderRadius="5% 40px"
//     boxSize={"md"}
//     maxH="400px"
//     // style={{ marginLeft: 0 }}
//     _hover={{
//       bg: "primary",
//       boxShadow: "dark-lg",
//       transform: "scale(1.02)",
//     }}
//   >
//     {/* <Flex direction="column" w="100%"> */}
//     <CardHeader
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       w="100%"
//       h="20%"
//       borderRadius="20px 40px"
//       borderBottom="1px solid"
//       bg="modeDarkBg"
//     >
//       <Heading
//       // as={CardHeader}
//       >
//         Now
//       </Heading>
//     </CardHeader>
//     <CardBody
//       flex="1"
//       display="flex"
//       // border="1px solid green"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <SimpleList
//         // border="1px solid blue"
//         icon={BsIcons.BsPatchCheckFill}
//         myList={[
//           "After a good team/project",
//           "important to know:",
//           "I'm not a designer",
//           "I'm not good at UX/UI",
//         ]}
//       />
//     </CardBody>
//   </Card>
// </HStack>
