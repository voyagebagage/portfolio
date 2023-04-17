"use client";
import "./globals.css";
import { CacheProvider } from "@chakra-ui/next-js";
import useForm from "./customHooks/useForm";
import {
  ChakraProvider,
  ColorModeScript,
  createLocalStorageManager,
} from "@chakra-ui/react";
import customTheme from "./styles/theme";
import Header from "./components/layout/Header";
import Footer from "./components/landingPage/Footer";
import { useState } from "react";
import ThemeProviderContext from "./context/ThemeProviderContext.tsx";
import SocialLinks from "./components/layout/SocialLinks";
import EmailDisplay from "./components/layout/EmailDisplay";

const manager = createLocalStorageManager("my-key");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //------------------------
  const [showSpinningBox, setShowSpinningBox] = useState<boolean>(true);
  const { formState } = useForm();
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const contextValue = {
    exampleProp: "This is an example prop",
    showSpinningBox,
    setShowSpinningBox,
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
          <Header visitingName={formState.name || "No name"} />
          {children}
          <Footer />
        </ThemeProviderContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}