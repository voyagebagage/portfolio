// components/SocialLinks.tsx
import { Box, Link, VStack, Icon } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import MIconButton from "../MIconButton";

const SocialLinks = () => {
  return (
    <VStack
      spacing={4}
      position="fixed"
      bottom="0"
      left="0"
      px="3rem"
      zIndex={20}
    >
      <Link href="https://github.com/yourusername" isExternal>
        <MIconButton
          aria-label="github"
          // variant={"ghost"}
          size="xs"
          colorScheme=""
          icon={<Icon as={FaGithub} boxSize={6} />}
          boxSize={6}
        />
      </Link>
      <Link href="https://linkedin.com/in/yourusername" isExternal>
        <MIconButton
          aria-label="FaLinkedin"
          // variant={"ghost"}
          size="xs"
          colorScheme=""
          icon={<Icon as={FaLinkedin} boxSize={6} />}
          boxSize={6}
        />
      </Link>
      <Link href="https://twitter.com/yourusername" isExternal>
        <MIconButton
          aria-label="FaInstagram"
          // variant={"ghost"}
          size="xs"
          colorScheme=""
          icon={<Icon as={FaInstagram} boxSize={6} />}
          boxSize={6}
        />
      </Link>
      <Link href="mailto:youremail@example.com" isExternal>
        <MIconButton
          aria-label="FaYoutube"
          // variant={"ghost"}
          size="xs"
          colorScheme=""
          icon={<Icon as={FaYoutube} boxSize={6} />}
          boxSize={6}
        />
      </Link>
      <Box border={"0.7px solid white"} h="10rem" />
    </VStack>
  );
};

export default SocialLinks;
