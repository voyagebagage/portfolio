import { useRef, useState, useLayoutEffect } from "react";

const useElementSize = (
  heightOffset?: number
): [
  number,
  number,
  React.RefObject<HTMLDivElement>,
  React.RefObject<HTMLDivElement>,
  React.RefObject<HTMLDivElement>
] => {
  const widthRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth || 0);
      }
      if (heightRef.current) {
        setHeight(heightRef.current.offsetHeight || 0);
      }
      if (ref.current) {
        setWidth(ref.current.offsetWidth || 0);
        const offset = heightOffset || 0;
        const offsetHeight = ref.current.offsetHeight || 0;
        const adjustedHeight = offsetHeight + offsetHeight * offset;
        setHeight(adjustedHeight);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return [width, height, ref, widthRef, heightRef];
};

export default useElementSize;
