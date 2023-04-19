// context/RootLayoutContext.tsx
// context/ThemeProviderContext.tsx
import { createContext, useContext } from "react";

export interface ThemeProviderContextProps {
  exampleProp?: string;
  showSpinningBox?: boolean;
  setShowSpinningBox?: (value: boolean) => void;
  index: number;
  // setIndex: (value: number) => void;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ThemeProviderContext = createContext<ThemeProviderContextProps | null>(
  null
);

export default ThemeProviderContext;

// export const useThemeProviderContext = () => {
//   const context = useContext(ThemeProviderContext);
//   console.log("HERE CONT", context);

//   if (context === undefined) {
//     throw new Error(
//       "useThemeProviderContext must be used within a ThemeProviderContextProvider"
//     );
//   }
//   return context;
// };
