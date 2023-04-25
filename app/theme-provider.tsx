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
import ThemeProviderContext from "./context/ThemeProviderContext";
import SocialLinks from "./components/layout/SocialLinks";
import EmailDisplay from "./components/layout/EmailDisplay";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Box, useDisclosure } from "@chakra-ui/react";

const manager = createLocalStorageManager("my-key");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //------------------------
  const [showSpinningBox, setShowSpinningBox] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const { formState } = useForm();
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const contextValue = {
    exampleProp: "This is an example prop",
    showSpinningBox,
    setShowSpinningBox,
    index,
    setIndex,
  };

  return (
    <CacheProvider>
      <ChakraProvider
        resetCSS
        theme={customTheme}
        // colorModeManager={manager}
        // useSystemColorMode={true}
      >
        <ThemeProviderContext.Provider value={contextValue}>
          <SocialLinks />
          <EmailDisplay />
          {/* <div className="absolute">
            <AnimatedModal setShowSpinningBox={setShowSpinningBox} />
          </div> */}
          <Header visitingName={formState.name || ""} index={index} />
          {/* <FloatingButton /> */}
          {children}
          <Footer />
        </ThemeProviderContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
