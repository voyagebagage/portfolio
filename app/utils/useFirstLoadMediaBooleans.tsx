"use-client";
// the purpose of that code is to correct the useMediaQuery hook
// from chakra UI which is getting the screen size on the useEffect
// which constantly loading the default values of the conditions
// because the value of the media query of chakra UI
//is unknown before the useEffect
// so this is making sure that there are no mistake on first load
import { useState, useEffect } from "react";

interface ScreenSizeProperties {
  screenSizeIsSmallerThan600?: boolean;
  screenSizeIsSmallerThan700?: boolean;
  screenSizeIsLargerThan600?: boolean;
  screenSizeIsLargerThan800?: boolean;
  screenSizeIsLargerThan850?: boolean;
  screenSizeIsLargerThan920?: boolean;
  screenSizeIsLargerThan1000?: boolean;
  screenSizeIsLargerThan1150?: boolean;
  screenSizeIsLargerThan1280?: boolean;
}

export default (): ScreenSizeProperties => {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    setScreenSize(window.innerWidth || document.documentElement.clientWidth);

    const handleResize = () => {
      setScreenSize(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (typeof screenSize === "undefined") {
    return {};
  }

  const screenSizeIsSmallerThan600 = screenSize < 600;
  const screenSizeIsSmallerThan700 = screenSize < 700;
  const screenSizeIsLargerThan600 = screenSize > 600;
  const screenSizeIsLargerThan800 = screenSize > 800;
  const screenSizeIsLargerThan850 = screenSize > 850;
  const screenSizeIsLargerThan920 = screenSize > 920;
  const screenSizeIsLargerThan1000 = screenSize > 1000;
  const screenSizeIsLargerThan1150 = screenSize > 1150;
  const screenSizeIsLargerThan1280 = screenSize > 1280;

  return {
    screenSizeIsSmallerThan600,
    screenSizeIsSmallerThan700,
    screenSizeIsLargerThan600,
    screenSizeIsLargerThan800,
    screenSizeIsLargerThan850,
    screenSizeIsLargerThan920,
    screenSizeIsLargerThan1000,
    screenSizeIsLargerThan1150,
    screenSizeIsLargerThan1280,
  };
};

// export default useScreenSize;
