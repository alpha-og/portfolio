import { useState, useEffect } from "react";

const useNavrail = () => {
  const [navrailHidden, setNavrailHidden] = useState(true);
  const toggleNavrail = () => {
    setNavrailHidden(() => !navrailHidden);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setNavrailHidden(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  useEffect(() => {
    const body = document.querySelector("body");
    if (!navrailHidden) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [navrailHidden]);
  return { navrailHidden, toggleNavrail };
};

export default useNavrail;
