"use client";
import "./globals.css";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import customTheme from "./styles/theme";
import Header from "./components/layout/header/Header";
import Footer from "./components/landingPage/Footer";
import { useEffect, useState } from "react";
import {
  AnimationContext,
  ThemeProviderContext,
} from "./context/ThemeProviderContext";
import SocialLinks from "./components/layout/SocialLinks";
import EmailDisplay from "./components/layout/EmailDisplay";
import AnimatedModal from "./components/AnimatedModal";
import { getToken } from "./utils/tokenManager";
import { ColorProvider } from "./context/colorContext";

// const manager = createLocalStorageManager("my-key");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //------------------------
  const [token, setToken] = useState<string | null>(getToken() || null);
  // console.log("token", token);
  const isToken = getToken();
  useEffect(() => {
    // const isToken = getToken();
    if (isToken) {
      setToken(isToken);
    }
  }, [token]);

  //------------------------
  const [arrowPointingAt, setArrowPointingAt] = useState<string>(
    "about" || "work" || "projects" || "contact"
  );
  const [index, setIndex] = useState<number>(0);
  const [visitingName, setVisitingName] = useState<string | undefined>("");

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const contextValues = {
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
      <ChakraProvider resetCSS theme={customTheme}>
        <AnimationContext.Provider value={animationContextValues}>
          <ThemeProviderContext.Provider value={contextValues}>
            <ColorProvider>
              <SocialLinks />
              <EmailDisplay />
              <Header
                visitingName={visitingName}
                setVisitingName={setVisitingName}
                index={index}
              />
              {children}
              <Footer />
              {!token ? (
                <AnimatedModal setVisitingName={setVisitingName} />
              ) : null}
            </ColorProvider>
          </ThemeProviderContext.Provider>
        </AnimationContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
