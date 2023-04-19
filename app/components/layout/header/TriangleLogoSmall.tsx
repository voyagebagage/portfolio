import { Circle, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowTriangle, SETriangle } from "../../StyledIcons";

export const TriangleLogoSmall = () => (
  <>
    <Stack style={{ margin: 0 }}>
      <ArrowTriangle
        mt={0}
        position="absolute"
        boxSize={10}
        opacity="0.4"
        transformOrigin="left"
        transform="translate(20%, 85%) rotate(270deg)"
        alignSelf="flex-end"
      />
      <SETriangle
        mt={0}
        // boxShadow={"md"}
        boxSize={16}
        opacity="0.1"
        alignSelf="flex-end"
        style={{ margin: 0 }}
      ></SETriangle>
    </Stack>
  </>
);
// export const TriangleLogoSmall = () => (
//   <>
//     <Stack style={{ margin: 0 }}>
//       <SETriangle
//         mt={0}
//         // boxShadow={"md"}
//         boxSize={16}
//         opacity="0.8"
//         alignSelf="flex-end"
//         style={{ margin: 0 }}
//       ></SETriangle>
//       <ArrowTriangle
//         mt={0}
//         position="absolute"
//         boxSize={10}
//         color="gray.700"
//         // opacity="-0.16"
//         transformOrigin="left"
//         transform="translate(20%, 65%) rotate(270deg)"
//         alignSelf="flex-end"
//       />
//     </Stack>
//   </>
// );
