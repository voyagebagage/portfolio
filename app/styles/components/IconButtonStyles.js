import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import customTheme from "../theme";

export const IconButtonStyles = {
  // style object for base or default style
  baseStyle: (
    { oppositeColor, bg, _bg, props },
    myColor2 = customTheme?.semanticTokens?.colors?.primary?._dark
  ) => ({
    _ligth: {
      bg: oppositeColor ? myColor2 : (_bg && bg) || (_bg && !bg) ? _bg : null,
      _hover: { bg: "primary" },
    },
    _dark: {
      _hover: { bg: "primary" },
    },
  }),

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // colorScheme: "red.500",
    // colorScheme: "red",
  },
};
