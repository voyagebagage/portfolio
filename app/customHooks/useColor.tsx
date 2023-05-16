import { useContext } from "react";
import { ColorContext, ColorContextType } from "../context/colorContext";

// Create hook to use context
export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
