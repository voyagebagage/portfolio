import * as React from "react";
import { Box, ImageProps } from "@chakra-ui/react";
import NextImage from "next/image";

interface ChakraNextImageProps extends ImageProps {
  width: number;
  height: number;
  src: string;
  alt: string;
  fill: true | false;
}

export const ChakraNextImage = ({
  src,
  alt,
  height,
  width,
  fill,
  ...rest
}: ChakraNextImageProps) => {
  return (
    <Box position="relative" {...rest} overflow="hidden">
      <NextImage
        src={src}
        alt={alt}
        fill={fill}
        height={height}
        width={width}
      />
    </Box>
  );
};

// import * as React from "react";
// import { chakra, Box, Image, useBreakpointValue } from "@chakra-ui/react";
// import NextImage from "next/image";

// export const ChakraNextImage = (props) => {
//   const { src, alt, ...rest } = props;
//   return (
//     <Box position="relative" {...rest} overflow="hidden">
//       <NextImage layout="fill" objectFit="cover" src={src} alt={alt} />
//     </Box>
//   );
// };

// import { Box, BoxProps, chakra } from "@chakra-ui/react";
// import Image, { ImageLoaderProps } from "next/image";
// import { useRouter } from "next/router";
// import { useState } from "react";

// interface ChakraNextImageProps extends BoxProps {
//   src: string;
//   alt?: string;
//   width: number;
//   height: number;
//   priority?: boolean;
//   quality?: number;
//   unsized?: boolean;
// }

// const ChakraNextImage = chakra(
//   ({
//     src,
//     alt,
//     width,
//     height,
//     priority,
//     quality,
//     // unsized = false,
//     ...rest
//   }: ChakraNextImageProps) => {
//     const [hasLoaded, setHasLoaded] = useState(false);
//     // const router = useRouter();

//     const handleOnLoad = () => {
//       setHasLoaded(true);
//     };

//     const loader = ({ src, width, quality }: ImageLoaderProps) => {
//       return `${src}?w=${width}&q=${quality || 75}`;
//     };

//     return (
//       <Box position="relative" {...rest}>
//         <Image
//           loader={loader}
//           src={src}
//           alt={alt || ""}
//           width={width}
//           height={height}
//           priority={priority}
//           quality={quality}
//           //   unsized={unsized}
//           onLoad={handleOnLoad}
//         />
//         {!hasLoaded && (
//           <Box
//             position="absolute"
//             top="0"
//             left="0"
//             w="full"
//             h="full"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             backgroundColor="gray.100"
//           >
//             <Box>Loading...</Box>
//           </Box>
//         )}
//       </Box>
//     );
//   }
// );

// export default ChakraNextImage;
//
