import { useEffect, useState } from "react";

export function useLoader(query) {
  // console.log(data);
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
          const lowercaseTypes = item.types.map((type) => type.toLowerCase());

          return lowercaseTypes.some((type) =>
            type.includes(query.toLowerCase())
          );
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
