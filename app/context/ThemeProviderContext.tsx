// context/RootLayoutContext.tsx
// context/ThemeProviderContext.tsx
import { createContext, useContext } from "react";

export interface ThemeProviderContextProps {
  // exampleProp?: string;
  showSpinningBox?: boolean;
  setShowSpinningBox?: (value: boolean) => void;
  index: number;
  // visitingName: string;
  // setIndex: (value: number) => void;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ThemeProviderContext =
  createContext<ThemeProviderContextProps | null>(null);
// export default ThemeProviderContext;

export interface AnimationContextProps {
  arrowPointingAt: string;
  setArrowPointingAt: React.Dispatch<React.SetStateAction<string>>;
  // setArrowPointingAt: (value: number) => void;
}

export const AnimationContext = createContext<AnimationContextProps | null>(
  null
);
// export const useThemeProviderContext = () => {
//   const context = useContext(ThemeProviderContext);

//   if (context === undefined) {
//     throw new Error(
//       "useThemeProviderContext must be used within a ThemeProviderContextProvider"
//     );
//   }
//   return context;
// };
