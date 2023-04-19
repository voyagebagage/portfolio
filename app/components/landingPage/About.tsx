import { ArrowRightIcon } from "@chakra-ui/icons";
import { Center, IconButton, Icon, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="-mt-7 z-100">
      <Center>
        <IconButton aria-label="intro" w="60%" h="100%" p={4} bg="transparent">
          <Text letterSpacing={2} textAlign={"center"}>
            Hi, I&apos;m Oli, web and mobile developer based in Thailand
          </Text>
        </IconButton>
        <IconButton
          pos={"absolute"}
          right={"22%"}
          //   top={1}
          //   zIndex={100}
          aria-label="more-about"
          transform={"rotate(90deg)"}
          icon={<Icon as={ArrowRightIcon} />}
        >
          More
        </IconButton>
      </Center>
    </section>
  );
};

export default About;
