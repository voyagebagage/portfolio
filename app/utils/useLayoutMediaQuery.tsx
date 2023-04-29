// utils/useLayoutMediaQuery.ts
import * as React from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
// console.log("useIsomorphicLayoutEffect: ", useIsomorphicLayoutEffect);

export const useLayoutMediaQuery = (query: string) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(query);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};
