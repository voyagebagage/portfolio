// components/SocialLinks.tsx
import { Box, Link, VStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import MIconButton from "../MIconButton";
import { useLayoutMediaQuery } from "@/app/utils/useLayoutMediaQuery";

const SocialLinks = () => {
  //~~~~~~~~~~~~~~~MediaQueries~~~~~~~~~~~~~~~~~~~~~
  const myIsLargerThan1150 = useLayoutMediaQuery("(min-width: 1150px)");
  const myIsLargerThan800 = useLayoutMediaQuery("(min-width: 800px)");
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return myIsLargerThan800 ? (
    <VStack
      spacing={2}
      position="fixed"
      bottom="0"
      left="0"
      bg={myIsLargerThan800 && !myIsLargerThan1150 ? "#30373d" : "transparent"}
      h={myIsLargerThan800 && !myIsLargerThan1150 ? "100%" : "transparent"}
      justifyContent={
        myIsLargerThan800 && !myIsLargerThan1150 ? "flex-end" : "unset"
      }
      px={myIsLargerThan1150 ? "3rem" : "1rem"}
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
