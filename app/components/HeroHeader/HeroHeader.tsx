import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import useForm from "../../customHooks/useForm";
const MotionBox = motion(Box);

const HeroHeader = ({ showSpinningBox }: any) => {
  //   setTimeout(() => {
  //     true;
  //   }, 5000)
  // );
  const { submitted, setSubmitted, formState } = useForm();
  // const [showSpinningBox, setShowSpinningBox] = useState<boolean>(
  //   formState.step === "step3" ? true : false
  // );
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  // useEffect(() => {
  //   console.log("submitted: ", submitted);

  //   // if (submitted) {
  //   setShowSpinningBox(true);
  //   // }
  // }, [formState.step === "step3"]);

  const spinningBoxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      // top: "50%",
      // left: "50%",
      // x: "50%",
      // y: "50%",
      // x: 0,
      // y: 0,
      transition: { duration: 3 },
    },
    final: { scale: 0.5, rotate: 360, transition: { duration: 3 } },
    finalSymetric: {
      scale: 0.5,
      rotate: -360,

      transition: { duration: 3 },
    },
  };
  console.log("submitted: ", submitted);
  console.log("formState.step: ", formState.step);

  return (
    <section
      className="flex flex-col items-center justify-center h-screen border border-indigo-500/100
    "
    >
      <div className="border-2 border-amber-500/100">
        {showSpinningBox && (
          <>
            <MotionBox
              w="100%"
              initial="initial"
              animate="final"
              variants={spinningBoxVariants}
              // position="fixed"
              borderRadius="xl"
              bg="tomato"
              // w="300px"
              h="300%"
              zIndex={100}
              position="sticky"
              // isOpen={isOpen}
            >
              <VStack justifyContent="space-between" height="100%" py={2}>
                <Text fontWeight="bold">Top</Text>
                <Text fontWeight="bold">Bottom</Text>
              </VStack>
            </MotionBox>
            {/* <Spacer border="5px solid red" /> */}
            <MotionBox
              w="100%"
              initial="initial"
              animate="finalSymetric"
              variants={spinningBoxVariants}
              // position="fixed"
              borderRadius="xl"
              bg="green"
              // w="300px"
              h="300%"
              zIndex={99}
              position="sticky"
              // isOpen={isOpen}
            >
              <VStack justifyContent="space-between" height="100%" py={2}>
                <Text fontWeight="bold">Top</Text>
                <Text fontWeight="bold">Bottom</Text>
              </VStack>
            </MotionBox>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroHeader;
