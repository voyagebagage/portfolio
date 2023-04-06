"use client";
import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type buttonProp = {
  children?: React.ReactNode;
};
const MotionButton = motion(Button);
{
  /* <motion.div
      className="box"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    /> */
}
const MButton = ({
  children,
  ...rest
}: buttonProp & ButtonProps): JSX.Element => {
  return (
    <MotionButton
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      {...rest}
    >
      {children}
    </MotionButton>
  );
};

export default MButton;
