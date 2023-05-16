// hooks/useLoadOnScroll.ts
import { useState, useEffect } from "react";

export function useLoadOnScroll() {
  const [areComponentsVisible, setAreComponentsVisible] = useState(false);
  const [initialScrollY, setInitialScrollY] = useState<number | null>(null);

  const setVisibleWhenInView = () => {
    if (!areComponentsVisible) {
      setAreComponentsVisible(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (initialScrollY === null) {
        setInitialScrollY(window.scrollY);
      } else if (Math.abs(window.scrollY - initialScrollY) > 50) {
        setVisibleWhenInView();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialScrollY]);

  return areComponentsVisible;
}
