// hooks/useInViewThreshold.tsx
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInViewThreshold(
  threshold: number,
  setVisibleWhenInView: () => void
) {
  const [myRef, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      setVisibleWhenInView();
    }
  }, [inView, setVisibleWhenInView]);

  return myRef;
}
