// components/SocialLinks.tsx
import {
  Box,
  Link,
  VStack,
  Icon,
  Text,
  Spacer,
  Stack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import MIconButton from "../MIconButton";

const variants = {
  expand: { scale: 2, display: "inline-block" },
  shrink: { scale: 1 },
};

const EmailDisplay = () => {
  const [isSelected, setIsSelected] = useState(false);
  const toggleOpen = () => setIsSelected(!isSelected);
  console.log(isSelected);
  return (
    <VStack
      spacing={4}
      position="fixed"
      bottom="0"
      right="0"
      px="3rem"
      zIndex={20}
    >
      <MIconButton
        aria-label="telegram"
        icon={<Icon as={FaTelegramPlane} boxSize={6} />}
        size="xs"
        colorScheme=""
        boxSize={6}
      />
      <Box border={"0.8px solid white"} w="1rem" m={0} p={0} />

      <MIconButton
        aria-label="whatsapp"
        // variant={"ghost"}
        size="xs"
        colorScheme=""
        icon={<Icon as={FaWhatsapp} boxSize={6} />}
        boxSize={6}
      />
      {/* <Text style={{ writingMode: "vertical-rl" }} fontSize="0.75rem" mb="-3">
        +33-7-69-65-43-61
      </Text> */}

      <Box border={"0.8px solid white"} w="1rem" />
      <Text
        style={{
          writingMode: "vertical-lr",
          marginTop: "12px",
        }}
        fontSize="sm"
      >
        idevandyou@gmail.com
      </Text>
      <Box border={"0.7px solid white"} h="7rem" />
    </VStack>
  );
};

export default EmailDisplay;
