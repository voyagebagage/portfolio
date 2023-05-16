import { createContext } from "react";

export interface AnimationContextProps {
  arrowPointingAt: string;
  setArrowPointingAt: React.Dispatch<React.SetStateAction<string>>;
  // setArrowPointingAt: (value: number) => void;
}

export const AnimationContext = createContext<AnimationContextProps | null>(
  null
);
