import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-red-400 shadow-md ">
      <Flex justify={"center"} align={"flex-end"}>
        <Heading>
          <Highlight
            query={["03.", "Contact"]}
            styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
          >
            03. Contact me
          </Highlight>
        </Heading>
        <Box w="10rem" border={"1px solid white"} h={0} />
      </Flex>
      <Box display={"flex"} flexDirection="column" boxSize={"sm"}>
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
        <Textarea
          placeholder="Your message"
          variant="filled"
          outline={"none"}
          // type="text"
          name="subject"
          id="02"
          mb={3}
        />
        <Button
          px={8}
          mx={30}
          type="submit"
          variant="solid"
          color="black"
          bg="blue.400"
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
      </Box>
    </section>
  );
};

export default Contact;
