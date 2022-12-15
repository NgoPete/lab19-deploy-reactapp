import { useEffect } from "react";
import { useState } from "react";

// component này chứa các custome hook

export const useViewPort = () => {
  const [windowWidth, setWindowWith] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWith(width);
    };
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  return [windowWidth];
};
