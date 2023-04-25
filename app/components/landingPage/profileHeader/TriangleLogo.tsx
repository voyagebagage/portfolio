import { Circle, Stack } from "@chakra-ui/react";
import React from "react";
import { ArrowTriangle, SETriangle } from "../../StyledIcons";

export const TriangleLogo = () => (
  <Circle
    ml={150}
    transform="translate(36%, -7%)"
    borderRadius={"full"}
    position="absolute"
    size={260}
    bg="transparent"
    zIndex={-1}
    // border="1px solid purple"
  >
    <Stack>
      <ArrowTriangle
        position="absolute"
        boxSize={200}
        opacity="0.06"
        transformOrigin="left"
        transform="translate(31%, 75%) rotate(270deg)"
        alignSelf="flex-end"
      />
      <SETriangle
        boxShadow={"md"}
        boxSize={275}
        opacity="0.04"
        alignSelf="flex-end"
      ></SETriangle>
    </Stack>
    <ArrowTriangle
      zIndex={2}
      transformOrigin="left"
      transform="translate(-13%, -228%) rotate(180deg)"
      boxSize={70}
      opacity="0.08"
      alignSelf="flex-end"
    />
  </Circle>
);
