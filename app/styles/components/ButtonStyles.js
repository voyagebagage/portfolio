import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import customTheme from "../theme";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: (
    { oppositeColor, _bg, bg },
    props,
    myColor = customTheme?.semanticTokens?.colors?.primary?._dark
  ) => ({
    _light: {
      bg: oppositeColor
        ? myColor
        : (_bg && bg) || (_bg && !bg)
        ? _bg
        : "transparent",
      opacity: !bg && !_bg && !props?._light?.bg ? 0.75 : null,
      _hover: { bg: "primary" },
    },

    _dark: {
      // bg: bg ? "none" : props?._dark?.bg,
      _hover: { bg: "primary" },
    },
  }),
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    base: (props) => ({
      _hover: {
        bg: mode(
          whiten(props.primary?.default, 40),
          whiten("primary", 40)
        )(props),
      },
    }),

    primary: (props) => ({
      bg: "primary",
      color: "white",
      _hover: {
        bg:
          // whiten(props.primary?.default, 40),
          "primary",
        transform: "scale(1.02)",
        boxShadow: "md",
      },
    }),
    secondary: (props) => ({
      bg: "secondary",
      color: "white",
      _hover: {
        bg: mode(whiten("secondary", 40), whiten("secondary", 75))(props),
        transform: "scale(1.02)",
        boxShadow: "md",
      },
    }),
    outline: (props) => ({
      bg: "transparent",
      border: mode("2px solid", "1px solid")(props),
      fontWeight: mode("normal", "medium")(props),
      borderColor: "secondary",
      color: "secondary",
      _active: {
        bg: mode(darken("secondary", 15), whiten("secondary", 15))(props),
      },
      _hover: {
        bg: mode(darken("secondary", 15), whiten("secondary", 15))(props),
        transform: "scale(1.02)",
        boxShadow: "md",
      },
    }),
    iconButton: (props) => ({
      bg: "transparent",
      border: " 0.5px solid",
      // fontWeight: mode("normal", "medium")(props),
      borderColor: mode("modeDarkBg", "modeDarkText")(props),
      color: mode("modeDarkBg", "modeDarkText")(props),
      _active: {
        bg: mode(darken("modeDarkText", 15), whiten("modeDarkText", 15))(props),
      },
      _hover: {
        bg: mode(darken("modeDarkText", 15), whiten("modeDarkText", 15))(props),
        transform: "scale(1.02)",
        boxShadow: "md",
      },
    }),
    tertiary: (props) => ({
      bg: "tertiary",
      color: "white",
      _hover: {
        bg: mode(darken("tertiary", 15), whiten("tertiary", 15))(props),
        transform: "scale(1.02)",
      },
    }),
    fave4: (props) => ({
      bg: "fave4",
      color: "white",
      _hover: {
        bg: mode(darken("fave4", 15), whiten("fave4", 15))(props),
        transform: "scale(1.02)",
      },
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
  // (props) => ({
  //   _hover: {
  //     bg: mode("tertiary", whiten("primary", 40))(props),
  //   },
  // }),
  // { ...props }
};
