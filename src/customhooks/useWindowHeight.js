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
    if (window.innerHeight <= 900 && window.innerHeight >= 750) {
      setWindowHeight((state) => {
        return {
          ...state,
          second: [1200, 1500],
          third: [1500, 1800],
          close: 1850,
        };
      });
    }
    if (window.innerHeight <= 750) {
      setWindowHeight((state) => {
        return {
          ...state,
          first: 950,
          second: [1200, 1450],
          third: [1450, 1750],
          close: 1750,
        };
      });
    }
    if (window.innerHeight <= 700) {
      setWindowHeight((state) => {
        return {
          ...state,
          first: 950,
          second: [1200, 1450],
          third: [1450, 1650],
          close: 1650,
        };
      });
    }
  }, []);
  return { windowHeight };
}
