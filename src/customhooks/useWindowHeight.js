import { useEffect, useState } from "react";

export function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState({
    first: 1000,
    second: [1500, 1800],
    third: [1800, 2100],
    close: 2250,
  });

  useEffect(function () {
    if (window.innerHeight >= 950) {
      setWindowHeight((state) => {
        return {
          ...state,
        };
      });
    }
    if (window.innerHeight <= 900 && window.innerHeight >= 800) {
      setWindowHeight((state) => {
        return {
          ...state,
          second: [1200, 1500],
          third: [1500, 1800],
          close: 1850,
        };
      });
    }
  }, []);
  return { windowHeight };
}
