"use client";
import "./globals.css";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import PortfolioTheme from "./theme/PortfolioTheme";
import Header from "./components/Header";
import Footer from "./components/Footer";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  );
}
