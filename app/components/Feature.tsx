import { Box, BoxProps, Heading, Text, Tooltip } from "@chakra-ui/react";
import { inflateRaw } from "zlib";

interface FeatureProps extends BoxProps {
  title: string;
  desc: string;
  children?: React.ReactNode;
  //   rest:
}
export default function Feature({
  title,
  desc,
  children,
  ...rest
}: FeatureProps) {
  return (
    <Box pt={5} pr={5} pl={3} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl" noOfLines={1} letterSpacing={2}>
        {title}
      </Heading>
      <Text mt={3} textAlign={"justify"} noOfLines={6}>
        {desc}
      </Text>
      {children}
    </Box>
  );
}
