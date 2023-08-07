"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import useForm from "../customHooks/useForm";
import emailjs from "emailjs-com";

import {
  Button,
  Center,
  FormControl,
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
  useDisclosure,
  VStack,
  ButtonGroup,
} from "@chakra-ui/react";
import { setToken } from "../utils/tokenManager";
import { v4 as uuidv4 } from "uuid";

const MotionModalContent = motion(ModalContent);
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

type Props = {
  setVisitingName: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const AnimatedModal = ({ setVisitingName }: Props) => {
  const {
    handleChange,
    handleClick,
    formState,
    submitted,
    setSubmitted,
    hrValid,
  } = useForm();
  const { step } = formState;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const delayOnClose = 3000;

  useEffect(() => {
    onOpen();
  }, []);

  const contentVariants = {
    open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    submitted: {
      opacity: 1,
      scale: 2,
      y: 0,
      boxShadow: "none",
      transition: { duration: 3 },
    },
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const { name, company, website, email, userType } = formState;
    handleClick("step3", userType);
    setVisitingName(name);
    if (userType === "HR") {
    }
    if (userType === "want a website") {
    }
    const token = uuidv4();
    setToken(`${name}--${token}`);

    //send an email to me with coordinates collected
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

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <Modal
            size="lg"
            isCentered
            isOpen={isOpen}
            closeOnOverlayClick={false}
            onClose={onClose}
          >
            <ModalOverlay
              bg="none"
              backdropFilter="auto"
              backdropInvert="10%"
              backdropBlur="5px"
              h="full"
              w="full"
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
                            type="email"
                          />

                          <InputGroup>
                            {!formState.website && (
                              <InputLeftAddon>https://</InputLeftAddon>
                            )}
                            <Input
                              variant="flushed"
                              placeholder="Website"
                              value={formState.website || ""}
                              onChange={handleChange}
                              name="website"
                              type="url"
                              isRequired
                            />
                          </InputGroup>
                        </VStack>
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <ButtonGroup>
                        <Button
                          letterSpacing="wider"
                          onClick={() => handleClick("step1", "")}
                          // mr={3}
                        >
                          Back
                        </Button>
                        <VStack>
                          <Button
                            letterSpacing="wider"
                            type="submit"
                            mr={3}
                            isDisabled={hrValid}
                          >
                            Welcome to my portfolio
                          </Button>
                          <Text as="sub" className="opacity-50">
                            fill up the form to activate 🙏
                          </Text>
                        </VStack>
                      </ButtonGroup>
                    </ModalFooter>
                  </form>
                )}
                {step === "step2B" && (
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <ModalBody p="1">
                      <Center py="20">
                        <VStack>
                          <Heading size="md">Show Case will come soon</Heading>
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
                        <Button type="submit" isDisabled>
                          redirect to website portfolio
                        </Button>
                        {/* <Button
                        // onClick={() => redirect}
                        >
                          Skip, redirect to website portfolio
                        </Button> */}
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
