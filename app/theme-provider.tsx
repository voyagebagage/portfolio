"use client";
import "./globals.css";
import { CacheProvider } from "@chakra-ui/next-js";
import useForm from "./customHooks/useForm";
import {
  Button,
  ChakraProvider,
  ColorModeScript,
  createLocalStorageManager,
} from "@chakra-ui/react";
import customTheme from "./styles/theme";
import Header from "./components/layout/header/Header";
import Footer from "./components/landingPage/Footer";
import { useState } from "react";
import {
  AnimationContext,
  ThemeProviderContext,
} from "./context/ThemeProviderContext";
import SocialLinks from "./components/layout/SocialLinks";
import EmailDisplay from "./components/layout/EmailDisplay";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Box, useDisclosure } from "@chakra-ui/react";
import AnimatedModal from "./components/AnimatedModal";
import { getToken } from "./utils/tokenManager";
import { log } from "console";

const manager = createLocalStorageManager("my-key");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //------------------------
  const token = getToken();
  // console.log("token", token);

  //------------------------
  const [arrowPointingAt, setArrowPointingAt] = useState<string>(
    "about" || "work" || "projects" || "contact"
  );
  const [index, setIndex] = useState<number>(0);
  const [visitingName, setVisitingName] = useState<string | undefined>("");

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const contextValues = {
    // exampleProp: "This is an example prop",
    // visitingName: formState.name,
    index,
    setIndex,
    arrowPointingAt,
    setArrowPointingAt,
  };
  const animationContextValues = {
    arrowPointingAt,
    setArrowPointingAt,
  };

  return (
    <CacheProvider>
      <ChakraProvider
        resetCSS
        theme={customTheme}
        // colorModeManager={manager}
        // useSystemColorMode={true}
      >
        <AnimationContext.Provider value={animationContextValues}>
          <ThemeProviderContext.Provider value={contextValues}>
            <SocialLinks />
            <EmailDisplay />
            <Header
              visitingName={visitingName}
              setVisitingName={setVisitingName}
              index={index}
            />
            {/* <FloatingButton /> */}
            {children}
            <Footer />
            {!token ? (
              <AnimatedModal setVisitingName={setVisitingName} />
            ) : null}
          </ThemeProviderContext.Provider>
        </AnimationContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
