import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const BoxForNextImage = ({ ...rest }: BoxProps) => {
  return (
    <Box position="relative" overflow="hidden" {...rest}>
      {rest.children}
    </Box>
  );
};
