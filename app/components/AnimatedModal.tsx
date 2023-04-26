import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useForm from "../customHooks/useForm";
import emailjs from "emailjs-com";

import {
  Button,
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SlideFade,
  Text,
  useBoolean,
  useDisclosure,
  VStack,
  Box,
} from "@chakra-ui/react";
import { setToken } from "../utils/tokenManager";
import { v4 as uuidv4 } from "uuid";

const MotionModalContent = motion(ModalContent);
const MotionBox = motion(Box);
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const AnimatedModal = () => {
  const { handleChange, handleClick, formState, submitted, setSubmitted } =
    useForm();
  const { step } = formState;
  // const [submitted, setSubmitted] = useState(false);
  // const [showSpinningBox, setShowSpinningBox] = useState(false);
  const delayOnClose = 3000;

  useEffect(() => {
    onOpen();
  }, []);

  // const overlayVariants = {
  //   open: { bg: "teal" },
  //   submitted: { bg: "tranparent", transition: { duration: 1 } },
  // };

  const contentVariants = {
    open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    submitted: {
      opacity: 1,
      scale: 1.5,
      y: 0,
      boxShadow: "none",
      transition: { duration: 3 },
    },
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (
    e: React.SyntheticEvent
    // option: string
  ) => {
    e.preventDefault();
    setSubmitted(true);

    const { name, company, website, email, userType } = formState;
    handleClick("step3", userType);
    if (userType === "HR") {
    }
    if (userType === "want a website") {
    }
    const token = uuidv4();
    setToken(token);
    // console.log("token", token);

    //send an email to me with coordinates collected
    console.log("send an email to me with coordinates collected");
    const templateParams = {
      from_name: name,
      company: company,
      website: website,
      from_email: email,
    };
    await emailjs.send(
      `${serviceId}`,
      `${templateId}`,
      templateParams,
      `${userId}`
    );

    //close modal
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      handleClick("", userType);
    }, delayOnClose);

    try {
    } catch (error) {
      console.log("submit error", error);
    }
  };
  // console.log("submitted:1 ", submitted);

  // console.log("showSpinningBox", showSpinningBox);
  console.log("formSTATE", formState);

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              // initial="open"
              // animate={step === "step3" ? "submitted" : "open"}
              // exit="submitted"
              // variants={overlayVariants}
              bg="none"
              backdropFilter="auto"
              backdropInvert="10%"
              backdropBlur="5px"
            />

            <MotionModalContent
              as={motion.div}
              bg={submitted ? "transparent" : "teal"}
              borderRadius="md"
              initial={{ opacity: 0, y: "50%", scale: 0.5, boxShadow: "lg" }}
              animate={
                submitted ? contentVariants.submitted : contentVariants.open
              }
              exit={{
                opacity: 0,
                scale: 0.9,
                // transition: { duration: delayOnClose, ease: "easeOut" },
              }}
              transition={{ duration: 0.3 }}
              mx={{ base: "1rem", sm: "2rem", lg: "auto" }}
              maxW={{
                base: "calc(100% - 2rem)",
                sm: "calc(100% - 4rem)",
                lg: "34rem",
              }}
              p={{ base: "1rem", sm: "2rem" }}
              overflow="hidden"
            >
              <SlideFade in={isOpen} offsetY="15px">
                {step === "step1" && (
                  <>
                    <ModalHeader color="tomato">Are you a ?</ModalHeader>
                    <ModalBody>
                      <Text color="tomato">Company or want a website</Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        letterSpacing="wider"
                        px="8"
                        onClick={() => handleClick("step2A", "HR")}
                        mr={3}
                      >
                        I&apos;m HR
                      </Button>
                      <Button
                        onClick={() => handleClick("step2B", "want a website")}
                      >
                        Want a website
                      </Button>
                    </ModalFooter>
                  </>
                )}
                {step === "step2A" && (
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <ModalHeader color="tomato">
                      What is your name ? Who do you work for ?
                    </ModalHeader>
                    <ModalBody>
                      <FormControl>
                        <VStack spacing="2">
                          <Input
                            variant="flushed"
                            placeholder="name/nickname"
                            value={formState.name || ""}
                            onChange={handleChange}
                            name="name"
                            isRequired
                          />

                          <Input
                            variant="flushed"
                            placeholder="Company name"
                            value={formState.company || ""}
                            onChange={handleChange}
                            name="company"
                            isRequired
                          />
                          <Input
                            variant="flushed"
                            placeholder="Company Email"
                            value={formState.email || ""}
                            onChange={handleChange}
                            name="email"
                          />

                          <InputGroup>
                            <InputLeftAddon>https://</InputLeftAddon>
                            <Input
                              variant="flushed"
                              placeholder="Website"
                              value={formState.website || ""}
                              onChange={handleChange}
                              name="website"
                              isRequired
                            />
                          </InputGroup>
                        </VStack>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        letterSpacing="wider"
                        onClick={() => handleClick("step1", "")}
                        mr={3}
                      >
                        Back
                      </Button>
                      <VStack>
                        <Button letterSpacing="wider" type="submit" mr={3}>
                          Welcome to my portfolio
                        </Button>
                        <Text as="sub" className="opacity-50">
                          you need a minimum of letters to activate 🙏
                        </Text>
                      </VStack>
                    </ModalFooter>
                  </form>
                )}
                {step === "step2B" && (
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <ModalBody p="1">
                      <Center py="20">
                        <VStack>
                          <FormControl>
                            <Input
                              variant="flushed"
                              placeholder="name"
                              value={formState.name || ""}
                              onChange={handleChange}
                              name="name"
                            />
                            <Input
                              variant="flushed"
                              placeholder="email"
                              value={formState.email || ""}
                              onChange={handleChange}
                              name="email"
                            />
                          </FormControl>
                        </VStack>
                      </Center>
                      <ModalFooter>
                        <Button onClick={() => handleClick("step1", "")}>
                          Back
                        </Button>
                        <Button type="submit">
                          redirect to website portfolio
                        </Button>
                        <Button
                        // onClick={() => redirect}
                        >
                          Skip, redirect to website portfolio
                        </Button>
                      </ModalFooter>
                    </ModalBody>
                  </form>
                )}
                {step === "step3" && (
                  <ModalBody p="1">
                    <Center py="20">
                      <VStack>
                        <Heading size={"4xl"}>🙏</Heading>
                        <Heading size={"3xl"}>KUP</Heading>
                      </VStack>
                    </Center>
                  </ModalBody>
                  // {/* </motion.div>
                )}
              </SlideFade>
            </MotionModalContent>
          </Modal>
        </AnimatePresence>
      )}
    </>
  );
};

export default AnimatedModal;
