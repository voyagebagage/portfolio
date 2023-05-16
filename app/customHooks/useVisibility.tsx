// hooks/useVisibility.tsx
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export const useVisibility = (threshold: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return { isVisible, ref };
};
