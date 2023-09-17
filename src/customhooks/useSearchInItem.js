import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export function useSearchInItem(
  query,
  time = 1000,
  type = "/Restoraunts",
  name
) {
  const [exportData, setExportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const res = await fetch(
          `https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data${type}.json`
        );
        // if (!res.ok) {
        //   throw new Error("Items could not be fetched");
        // }

        const data = await res.json();
        const restaraunt = await data.find((item) => item.name === name);

        const filteredData = await restaraunt.food.filter((item) => {
          const food = item.ingredients
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(query.replace(/\s+/g, "").toLowerCase());

          const names = item.name
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(query.replace(/\s+/g, "").toLowerCase());

          const filteredArray = food || names;

          return filteredArray;
        });
        if (query.length !== 0) {
          searchParams.set("search", query);
          setSearchParams(searchParams);
        }
        if (query.length === 0 && location.hash === "") {
          console.log(location);
          searchParams.delete("search");
          setSearchParams(searchParams);
        }
        setExportData(filteredData);
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
  }, [name, query, searchParams, searchQuery, setSearchParams, time, type]);

  return { isLoading, exportData };
}
