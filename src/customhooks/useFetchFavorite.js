import { useEffect, useState } from "react";

function useFetchFavorite(time = 0) {
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

        setExportData([...data.Markets, ...data.Restaurants]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [time]);

  return { isLoading, exportData };
}

export default useFetchFavorite;
