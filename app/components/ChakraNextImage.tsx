import * as React from "react";
import { Box, BoxProps, chakra } from "@chakra-ui/react";
import Image, { ImageProps as NextImageProps } from "next/image";

export const BoxForNextImage = ({ ...rest }: BoxProps) => {
  return (
    <Box position="relative" overflow="hidden" {...rest}>
      {rest.children}
    </Box>
  );
};
interface ChakraNextImageProps {
  imageBorderRadius?: string;
  imageObjectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}
export const ChakraNextImage = chakra(
  ({
    src,
    alt,
    imageObjectFit,
    imageBorderRadius,
    ...rest
  }: NextImageProps & BoxProps & ChakraNextImageProps) => {
    return (
      <Box position="relative" overflow="hidden" {...rest}>
        <Image
          src={src}
          alt={alt}
          fill
          // {...rest}
          style={{ objectFit: imageObjectFit, borderRadius: imageBorderRadius }}
        />
      </Box>
    );
  }
);
