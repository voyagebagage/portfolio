// components/SocialLinks.tsx
import { Box, VStack, Icon, Text, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";

// import { AnimateSharedLayout, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MIconButton from "../MIconButton";
import { ChevronUpIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLayoutMediaQuery } from "@/app/utils/useLayoutMediaQuery";

const EmailDisplay = () => {
  const [positionFromTop, setPositionFromTop] = useState<Boolean>(false);
  const [likeButton, setLikeButton] = useState<Boolean>(false);
  //~~~~~~~~~~~~~~~MediaQueries~~~~~~~~~~~~~~~~~~~~~
  const myIsLargerThan1150 = useLayoutMediaQuery("(min-width: 1150px)");
  const myIsLargerThan800 = useLayoutMediaQuery("(min-width: 800px)");
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const handleClick = () => setLikeButton(!likeButton);
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
  console.log("likeButton", likeButton);

  return myIsLargerThan800 ? (
    <VStack
      spacing={4}
      position="fixed"
      bottom="0"
      right="0"
      bg={myIsLargerThan800 && !myIsLargerThan1150 ? "#30373d" : "transparent"}
      h={myIsLargerThan800 && !myIsLargerThan1150 ? "100%" : "transparent"}
      justifyContent={
        myIsLargerThan800 && !myIsLargerThan1150 ? "flex-end" : "unset"
      }
      px={myIsLargerThan1150 ? "2.8rem" : "1rem"}
      zIndex={20}>
      {positionFromTop && (
        <>
          <AnchorLink href="#home">
            <MIconButton
              aria-label="top"
              icon={<Icon as={ChevronUpIcon} boxSize={5} />}
              size="sm"
              bg="teal"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            />
          </AnchorLink>

          <Box border={"0.8px solid"} w="1rem" m={0} p={0} />
        </>
      )}
      <MIconButton
        aria-label="like"
        size="sm"
        icon={
          <Icon
            as={likeButton ? AiTwotoneLike : AiOutlineLike}
            boxSize={5}
            onClick={handleClick}
          />
        }
      />
      <Box border={"0.8px solid"} w="1rem" m={0} p={0} />
      <Link href="https://t.me/oliFantazor" isExternal>
        <MIconButton
          aria-label="telegram"
          size="sm"
          icon={<Icon as={FaTelegramPlane} boxSize={5} />}
        />
      </Link>
      <Box border={"0.8px solid"} w="1rem" m={0} p={0} />
      <Link
        href="https://wa.me/33769654361?message=urlencodedtext I have a 10k job for you."
        isExternal>
        <MIconButton
          aria-label="whatsapp"
          size="sm"
          icon={<Icon as={FaWhatsapp} boxSize={5} />}
        />
      </Link>

      <Box border={"0.8px solid"} w="1rem" />
      <Link href="mailto:idevandyou@gmail.com">
        <Text
          style={{
            writingMode: "vertical-lr",
            // textOrientation: "upright",
            marginTop: "12px",
          }}
          fontSize="sm">
          @email
        </Text>
      </Link>
      <Box border={"0.7px solid"} h="7rem" />
    </VStack>
  ) : null;
};

export default EmailDisplay;
