import { useState, useEffect } from "react";

// custom hook dùng để cuộn trang
// có sử dụng hook useState và useEffect
export function UseScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const handleScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollY);
  };

  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  return [scrollY];
}
