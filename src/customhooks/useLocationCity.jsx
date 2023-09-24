import React, { useEffect, useState } from "react";

const useLocationCity = () => {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          getCityFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getCityFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://eu1.locationiq.com/v1/reverse?key=pk.838fc0e07bae0ae3f17fb1605d4f0f1a&lat=${latitude}&lon=${longitude}&format=json`
      );

      if (!response.ok) throw new Error();

      const data = await response.json();

      setCity(data.address);
    } catch (error) {
      console.error("Error getting city:", error);
    }
  };

  return city;
};

export default useLocationCity;
