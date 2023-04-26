import {
  Circle,
  Icon,
  Text,
  useColorMode,
  Box,
  IconProps,
  SquareProps,
  ButtonProps,
} from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icons";
import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import Image, { ImageProps } from "next/image";

export interface StyledIconProps extends IconProps {
  to?: string;
  colors?: string;
  content?: React.ReactNode;
}

export const StyledIconGradient = ({
  to,
  colors,
  ...rest
}: StyledIconProps): JSX.Element => {
  let direction_hover = "";
  if (to === "t") direction_hover = "b";
  if (to === "tr") direction_hover = "bl";
  if (to === "tl") direction_hover = "br";
  if (to === "b") direction_hover = "t";
  if (to === "br") direction_hover = "tl";
  if (to === "bl") direction_hover = "tr";
  if (to === "l") direction_hover = "r";
  if (to === "r") direction_hover = "l";

  return (
    <Icon
      borderRadius="20"
      p={1.5}
      bgGradient={`linear(to-${to || "t"},${
        colors || "blue.500,purple.400,pink.200"
      })`}
      boxSize={7}
      _hover={{
        cursor: "pointer",
        bgGradient: `linear(to-${direction_hover || "b"},${
          colors || "blue.500,purple.400,pink.200"
        })`,
        transform: "scale(1.1)",
      }}
      {...rest}
    />
  );
};

// interface StyledIconProps {
//   as: React.ElementType;
// }

export const StyledIcon = ({ ...rest }: StyledIconProps): JSX.Element => {
  // const primaryFontColor = useColorModeValue("gray.700", "gray.200");
  // const { colorMode } = useColorMode();

  // const isButton = props.isButton;
  return (
    <Icon
      borderRadius="20"
      p={1.5}
      boxSize={7}
      _hover={{
        bg: "modeDarkText",
        color: "modeDarkBg",
        cursor: "pointer",
        transform: "scale(1.2)",
        opacity: "1",
      }}
      {...rest}
    />
  );
};

// interface StyledIconSquareProps {
//   as: React.ElementType;
// }

export const StyledIconCircle = ({ children, ...rest }: SquareProps) => {
  // const primaryFontColor = useColorModeValue("gray.700", "gray.200");
  const { colorMode } = useColorMode();
  return (
    <Circle
      borderRadius="20"
      p={1.5}
      size={7}
      _hover={{
        bg: colorMode === "dark" ? "modeDarkText" : whiten("modeDarkBg", 10),
        color: colorMode === "dark" ? "modeDarkBg" : "modeDarkText",
        cursor: "pointer",
        transform: "scale(1.2)",
        opacity: "1",
      }}
      {...rest}
    >
      <Text
        _hover={{
          color: colorMode === "dark" ? "modeDarkBg" : "modeDarkText",
          cursor: "pointer",
          letterSpacing: "wide",
        }}
      >
        {children}
      </Text>
    </Circle>
  );
};

export const ArrowTriangle = createIcon({
  displayName: "ArrowTriangle",
  viewBox: "0 0 490 490",
  d: "M33.299 245v245l423.402-245L33.299 0v245zm157.28 0h202.992L70.27 432.077 190.579 245z",
});

export const SETriangle = ({ ...rest }: StyledIconProps): JSX.Element => (
  <Icon viewBox="0 0 24 24" {...rest}>
    {/* displayName: "SETriangle", */}
    <path
      // className={"chakra-image"}
      fill="currentColor"
      d="m2.095 19.882 9.248-16.5a.753.753 0 0 1 1.313 0l9.248 16.5a.75.75 0 0 1-.656 1.116H2.752a.75.75 0 0 1-.657-1.116z"
    />
  </Icon>
);

export const SETriangleImage = ({ ...rest }: StyledIconProps): JSX.Element => (
  <Icon viewBox="0 0 24 24" {...rest}>
    {/* displayName: "SETriangle", */}
    <path
      // className={"chakra-image"}
      fill="transparent"
      d="m2.095 19.882 9.248-16.5a.753.753 0 0 1 1.313 0l9.248 16.5a.75.75 0 0 1-.656 1.116H2.752a.75.75 0 0 1-.657-1.116z"
    />
  </Icon>
);
export const StyledImage = ({
  ...rest
}: ButtonProps & ImageProps): JSX.Element => (
  <Box
    as="span"
    pos="relative"
    display="inline-block"
    overflow="hidden"
    rounded="md"
    boxShadow="md"
    _hover={{
      transform: "scale(1.05)",
    }}
    {...rest}
  >
    <Image {...rest} />
  </Box>
);
