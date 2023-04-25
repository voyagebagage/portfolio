import { useState, useEffect } from "react";

const usePositionFromTop = () => {
  const [positionFromTop, setPositionFromTop] = useState<boolean>(false);
  const [scrollSup850, setScrollSup850] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setPositionFromTop(true);
      }
      if (window.scrollY >= 860) {
        setScrollSup850(true);
      }
      if (window.scrollY <= 550) {
        setPositionFromTop(false);
        setScrollSup850(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { positionFromTop, scrollSup850 };
};

export default usePositionFromTop;
