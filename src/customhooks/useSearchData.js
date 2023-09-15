import { useEffect, useState } from "react";

export function useLoader(query) {
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

        const filteredData = await data.Restoraunts.filter((item) => {
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
          console.log(filteredArray);
          return filteredArray;
        });

        setExportData(filteredData);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    const handler = setTimeout(() => {
      loadData();
    }, 2000);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  return { isLoading, exportData };
}
