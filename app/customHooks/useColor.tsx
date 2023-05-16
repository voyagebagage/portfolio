import { useContext } from "react";
import { ColorContext, ColorContextType } from "../context/colorContext";

//useColor gives an index that allows to change color and
//especially allows to pass props from main Layout to its children
//colors array is located in data.tsx of ProfileHeader
export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
