"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

type buttonProp = {
  props: Object;
};

const MyButton = ({ props }: buttonProp): JSX.Element => {
  return <Button {...props}>Button</Button>;
};

export default Button;
