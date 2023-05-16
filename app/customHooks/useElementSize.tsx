import { useRef, useState, useLayoutEffect } from "react";

type RefObjectWithSize<T> = {
  ref: React.RefObject<T>;
  height: number;
  width: number;
};

const useElementSize = (
  heightOffset?: number
): RefObjectWithSize<HTMLDivElement>[] => {
  const refs: RefObjectWithSize<HTMLDivElement>[] = [
    {
      ref: useRef<HTMLDivElement>(null),
      height: 0,
      width: 0,
    },
    {
      ref: useRef<HTMLDivElement>(null),
      height: 0,
      width: 0,
    },
    {
      ref: useRef<HTMLDivElement>(null),
      height: 0,
      width: 0,
    },
  ];

  const [state, setState] = useState<RefObjectWithSize<HTMLDivElement>[]>(refs);

  useLayoutEffect(() => {
    const updateSize = () => {
      const updatedRefs = state.map((refObject) => {
        if (refObject.ref.current) {
          const { offsetWidth, offsetHeight } = refObject.ref.current;
          if (
            offsetWidth !== refObject.width ||
            offsetHeight !== refObject.height
          ) {
            const updatedRefObject = {
              ...refObject,
              width: offsetWidth || 0,
              height: offsetHeight || 0,
            };
            return updatedRefObject;
          }
        }
        return refObject;
      });

      setState(updatedRefs);
    };

    let resizeTimer: number = 0;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateSize, 100);
    };

    window.addEventListener("resize", handleResize);
    updateSize();

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state;
};

export default useElementSize;
