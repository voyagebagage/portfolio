import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import React from "react";

type MIconButtonProps = IconButtonProps & MotionProps;

const MotionIconButton = motion(IconButton);

const MIconButton: React.FC<MIconButtonProps> = ({ ...rest }) => {
  return (
    <MotionIconButton
      whileHover={{
        scale: 1.2,
        translateY: -4,
        opacity: 1,
      }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      flexShrink={0}
      bg="transparent"
      borderRadius="full"
      opacity=".9"
      _hover={{
        bg: "modeDarkText",
        color: "modeDarkBg",
        cursor: "pointer",
      }}
      {...rest}
    />
  );
};

export default MIconButton;
