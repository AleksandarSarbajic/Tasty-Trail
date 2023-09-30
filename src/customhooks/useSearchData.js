import { useEffect, useState } from "react";

export function useLoader(query, time = 1000) {
  const [exportData, setExportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const res = await fetch(
          `https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data.json`
        );
        if (!res.ok) {
          throw new Error("Items could not be fetched");
        }
        const data = await res.json();

        const filteredRestaurants = await data.Restaurants.filter((item) => {
          const types = item.types
            .map((item) => item.replace(/\s+/g, "").toLowerCase())
            .some((item) =>
              item.includes(query.replace(/\s+/g, "").toLowerCase())
            );
          const food = item.food
            .map((item) => item.name.replace(/\s+/g, "").toLowerCase())
            .some((item) =>
              item.includes(query.replace(/\s+/g, "").toLowerCase())
            );

          const names = item.name
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(query.replace(/\s+/g, "").toLowerCase());

          const filteredArray = food || types || names;

          return filteredArray;
        });

        const filteredMarkers = await data.Markets.filter((item) => {
          const types = item.types
            .map((item) => item.replace(/\s+/g, "").toLowerCase())
            .some((item) =>
              item.includes(query.replace(/\s+/g, "").toLowerCase())
            );
          const food = item.food
            .map((item) => item.name.replace(/\s+/g, "").toLowerCase())
            .some((item) =>
              item.includes(query.replace(/\s+/g, "").toLowerCase())
            );

          const names = item.name
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(query.replace(/\s+/g, "").toLowerCase());

          const filteredArray = food || types || names;

          return filteredArray;
        });

        const filteredItems = await filteredRestaurants.concat(filteredMarkers);

        setExportData(filteredItems);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    const handler = setTimeout(() => {
      loadData();
    }, time);
    return () => {
      clearTimeout(handler);
    };
  }, [query, time]);

  return { isLoading, exportData };
}
