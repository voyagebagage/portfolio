import * as React from "react";
import { Box, BoxProps, chakra } from "@chakra-ui/react";
import Image, { ImageProps as NextImageProps } from "next/image";

interface ChakraNextImageProps {
  imageBorderRadius?: string;
  imageObjectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  width: number;
  height: number;
}
export const ChakraNextImage = chakra(
  ({
    src,
    alt,
    priority,
    loading,
    sizes,
    // onLoadingComplete,
    // height,
    // width,
    imageObjectFit,
    imageBorderRadius,
    ...rest
  }: NextImageProps & BoxProps & ChakraNextImageProps) => {
    return (
      <Box position="relative" overflow="hidden" {...rest}>
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          loading={loading}
          // onLoadingComplete={rest.onLoadingComplete}
          // height={height}
          // width={width}
          fill
          // {...rest}
          style={{ objectFit: imageObjectFit, borderRadius: imageBorderRadius }}
        />
      </Box>
    );
  }
);

export const ChakraNextImage2 = chakra(
  ({
    src,
    alt,
    priority,
    loading,
    sizes,
    // onLoadingComplete,
    height,
    width,
    // fill,
    imageObjectFit,
    imageBorderRadius,
    ...rest
  }: NextImageProps & BoxProps & ChakraNextImageProps) => {
    return (
      <Box position="relative" overflow="hidden" {...rest}>
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          // sizes={sizes}
          // priority={priority}
          loading={loading}
          // onLoadingComplete={rest.onLoadingComplete}
          // fill={fill}
          // {...rest}
          style={{ objectFit: imageObjectFit, borderRadius: imageBorderRadius }}
        />
      </Box>
    );
  }
);
export const BoxForNextImage = ({ ...rest }: BoxProps) => {
  return (
    <Box position="relative" overflow="hidden" {...rest}>
      {rest.children}
    </Box>
  );
};
