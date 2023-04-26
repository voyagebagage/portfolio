// components/SocialLinks.tsx
import { Box, VStack, Icon, Text, Link, Button } from "@chakra-ui/react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
// import { AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MIconButton from "../MIconButton";
import { ChevronUpIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const variants = {
  expand: { scale: 2, display: "inline-block" },
  shrink: { scale: 1 },
};

const EmailDisplay = () => {
  const [positionFromTop, setPositionFromTop] = useState<Boolean>(false);
  const [isSelected, setIsSelected] = useState(false);
  const toggleOpen = () => setIsSelected(!isSelected);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 700) {
        setPositionFromTop(true);
      }
      if (window.scrollY <= 550) {
        setPositionFromTop(false);
      }
    });
  }, [positionFromTop]);

  return (
    <VStack
      spacing={4}
      position="fixed"
      bottom="0"
      right="0"
      px="2.8rem"
      zIndex={20}
    >
      {positionFromTop && (
        <>
          <AnchorLink href="#home">
            <MIconButton
              aria-label="top"
              icon={<Icon as={ChevronUpIcon} boxSize={6} />}
              size="xs"
              colorScheme="teal"
              borderRadius={"50%"}
              opacity={0.5}
              _hover={{ opacity: 1 }}
              boxSize={6}
            />
          </AnchorLink>

          <Box border={"0.8px solid"} w="1rem" m={0} p={0} />
        </>
      )}
      <Link href="https://t.me/oliFantazor" isExternal>
        <MIconButton
          aria-label="telegram"
          icon={<Icon as={FaTelegramPlane} boxSize={6} />}
          size="xs"
          colorScheme=""
          boxSize={6}
        />
      </Link>
      <Box border={"0.8px solid"} w="1rem" m={0} p={0} />
      <Link
        href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
        isExternal
      >
        <MIconButton
          aria-label="whatsapp"
          // variant={"ghost"}
          size="xs"
          colorScheme=""
          icon={<Icon as={FaWhatsapp} boxSize={6} />}
          boxSize={6}
        />
      </Link>
      {/* <Text style={{ writingMode: "vertical-rl" }} fontSize="0.75rem" mb="-3">
        +33-7-69-65-43-61
      </Text> */}
      <Box border={"0.8px solid"} w="1rem" />
      <Link href="mailto:idevandyou@gmail.com">
        <Text
          style={{
            writingMode: "vertical-lr",
            // textOrientation: "upright",
            marginTop: "12px",
          }}
          fontSize="sm"
        >
          idevandyou@gmail.com
        </Text>
      </Link>
      <Box border={"0.7px solid"} h="7rem" />
    </VStack>
  );
};

export default EmailDisplay;
