import { AnimationContext } from "@/app/context/ThemeProviderContext";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Highlight,
  Input,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { inViewAnimation, outOfViewAnimation } from "../animations/animation";
import { ArrowTriangle } from "../StyledIcons";

const Contact = () => {
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
    if ((!on && arrowPointingAt === "contact") || !inView) {
      animation.start(outOfViewAnimation);
    }
  }, [inView, animation, on, arrowPointingAt]);

  const handleMouseEnter = () => {
    setOn(true);
    setArrowPointingAt("contact");
  };
  const handleMouseLeave = () => {
    setOn(false);
    setArrowPointingAt("");
  };

  //~~~~~~~~~~~~~

  return (
    <section
      id="contact"
      className="bg-red-400 shadow-md pt-32 pb-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Flex justify={"center"} align={"flex-end"}>
        <Heading position={"relative"} ref={ref}>
          <Highlight
            query={["03.", "Contact"]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
          >
            03. Contact me
          </Highlight>
        </Heading>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~Triangle arrowPointingAt */}
        <Box
          as={motion.div}
          animate={
            on && arrowPointingAt === "contact"
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
          w="10rem"
          border={"1px solid"}
          h={0}
        />
      </Flex>
      <Text
        as="kbd"
        fontSize={"md"}
        color="#64ffda"
        mt={4}
        // ml={-150}
      >
        What&apos;s next ?
      </Text>
      <Container textAlign={"center"} fontSize="larger">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Container>
      <Box display={"flex"} flexDirection="column" boxSize={"xl"}>
        <InputGroup gap={"2%"}>
          <Input
            placeholder="Your name"
            variant="filled"
            outline="none"
            type="text"
            name="name"
            id="00"
            mb={3}
          />
          <Input
            placeholder="Your email"
            variant="filled"
            // placeholder="Filled"
            outline={"none"}
            type="email"
            name="email"
            id="01"
            mb={3}
          />
        </InputGroup>
        <Textarea
          placeholder="Your message"
          variant="filled"
          outline={"none"}
          // type="text"
          name="subject"
          id="02"
          mb={3}
        />
        <ButtonGroup w="100%" gap={"1%"}>
          <Button
            px={8}
            fontSize="xl"
            fontWeight={"semibold"}
            w="50%"
            color={"primary"}
            type="submit"
            variant="solid"
            // color="black"
            // justifySelf={"center"}
            rightIcon={
              <EmailIcon
              // isLoading
              // loadingText='Submitting'
              />
            }
          >
            Send
          </Button>
          <Button
            as={Link}
            w="50%"
            px={8}
            color={"primary"}
            fontSize="xl"
            fontWeight={"semibold"}
            variant="outline"
            href="mailto:idevandyou@gmail.com"
          >
            Mail app
          </Button>
        </ButtonGroup>
      </Box>
    </section>
  );
};

export default Contact;
