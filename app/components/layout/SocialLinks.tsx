// components/SocialLinks.tsx
import { Box, Link, VStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import MIconButton from "../MIconButton";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialLinks = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const toggleOpen = () => setIsSelected(!isSelected);
  return (
    <VStack
      // spacing={2}
      position="fixed"
      bottom="0"
      left="0"
      px="3rem"
      zIndex={20}
    >
      <Link href="https://github.com/voyagebagage" isExternal>
        <MIconButton
          aria-label="github"
          size="sm"
          icon={<Icon as={FaGithub} boxSize={5} />}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/oliv-dev" isExternal>
        <MIconButton
          aria-label="FaLinkedin"
          // variant={"ghost"}
          size="sm"
          // colorScheme="linkedin"
          icon={<Icon as={FaLinkedin} boxSize={5} />}
        />
      </Link>
      <Link href="https://www.instagram.com/voyage_bagage/" isExternal>
        <MIconButton
          aria-label="FaInstagram"
          // variant={"ghost"}
          size="sm"
          // colorScheme="instagram"
          icon={<Icon as={FaInstagram} boxSize={5} />}
        />
      </Link>
      <Link href="https://www.youtube.com/@VoyageBagage" isExternal>
        <MIconButton
          aria-label="FaYoutube"
          // variant={"ghost"}
          size="sm"
          // colorScheme="youtube"
          icon={<Icon as={FaYoutube} boxSize={5} />}
        />
      </Link>
      <Box border={"0.7px solid"} h="10rem" />
    </VStack>
  );
};

export default SocialLinks;
