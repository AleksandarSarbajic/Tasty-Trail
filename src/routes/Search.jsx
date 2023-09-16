import { useLoader } from "../customhooks/useSearchData";
import Header from "../components/restoraunts/Header";
import Filter from "../components/restoraunts/Filter";
import { useSelector } from "react-redux";
import { json, useLoaderData, useSearchParams } from "react-router-dom";
import TypesAll from "../components/restoraunts/TypesAll";
import LoadingSpinnerSmall from "../components/UI/LoadingSpinnerSmall";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const showFilter = useSelector((state) => state.filter.show);
  const data = useLoaderData("search");

  const { exportData, isLoading } = useLoader(query, 1000);
  console.log(exportData);

  return (
    <div className={"search__container"}>
      <Header heading={"Search Results"} />

      {isLoading ? (
        <LoadingSpinnerSmall state={isLoading} />
      ) : (
        <TypesAll searchData={exportData} heading={""} />
      )}
      {showFilter && <Filter data={data} />}
    </div>
  );
}

export default Search;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch(
    "https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data/types.json"
  );
  if (!response.ok) {
    throw json("Failed to load data");
  } else {
    return response;
  }
}
