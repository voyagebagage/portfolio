// context/RootLayoutContext.tsx
// context/ThemeProviderContext.tsx
import { createContext } from "react";

interface ThemeProviderContextProps {
  exampleProp: string;
  showSpinningBox: boolean;
  setShowSpinningBox: (value: boolean) => void;
}

const ThemeProviderContext = createContext<ThemeProviderContextProps | null>(
  null
);

export default ThemeProviderContext;
