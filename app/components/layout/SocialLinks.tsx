// components/SocialLinks.tsx
import { Box, Link, VStack, Icon, useMediaQuery } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import MIconButton from "../MIconButton";

const SocialLinks = () => {
  const [isLargerThan1150] = useMediaQuery("(min-width: 1150px)");
  const [isLargerThan1050] = useMediaQuery("(min-width: 800px)");
  return isLargerThan1050 ? (
    <VStack
      spacing={2}
      position="fixed"
      bottom="0"
      left="0"
      px={isLargerThan1150 ? "3rem" : "1rem"}
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
          size="sm"
          icon={<Icon as={FaLinkedin} boxSize={5} />}
        />
      </Link>
      <Link href="https://www.instagram.com/voyage_bagage/" isExternal>
        <MIconButton
          aria-label="FaInstagram"
          size="sm"
          icon={<Icon as={FaInstagram} boxSize={5} />}
        />
      </Link>
      <Link href="https://www.youtube.com/@VoyageBagage" isExternal>
        <MIconButton
          aria-label="FaYoutube"
          size="sm"
          icon={<Icon as={FaYoutube} boxSize={5} />}
        />
      </Link>
      <Box border={"0.7px solid"} h="10rem" />
    </VStack>
  ) : null;
};

export default SocialLinks;
