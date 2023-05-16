import React, { createContext, useContext, useEffect, useState } from "react";
import { useCycle } from "framer-motion";

// Define the type of the context value
export type ColorContextType = number;

// Create context
export const ColorContext = createContext<ColorContextType>(0);

// Create provider
export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= 5 ? 0 : prevIndex + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ColorContext.Provider value={index}>{children}</ColorContext.Provider>
  );
};
