"use client";
import { IconButton, Icon, IconButtonProps, IconProps } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import React from "react";

// type MIconButtonProp = {
//   // rest:  Object;
//   children?: React.ReactNode;
// };
const MotionIconButton = motion(IconButton);

const MIconButton = (
  // children,
  { ...rest }: IconButtonProps & MotionProps
): JSX.Element => {
  return (
    <MotionIconButton
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.85 }}
      // transition={{ type: "spring", stiffness: 200, damping: 20 }}
      {...rest}
    />
  );
};

export default MIconButton;
