import { json, useRouteLoaderData } from "react-router-dom";
import Header from "../components/restoraunts/Header";
import LoadingSpinnerSmall from "../components/UI/LoadingSpinnerSmall";
import TypesAll from "../components/restoraunts/TypesAll";
import Filter from "../components/restoraunts/Filter";
import { useSelector } from "react-redux";

function Favorite() {
  const data = useRouteLoaderData("favorite");
  console.log(data);
  const showFilter = useSelector((state) => state.filter.show);

  const items = JSON.parse(localStorage.getItem("favorite"));

  const filteredItems = items.map((item) => {
    const filter = [...data.Markets, ...data.Restaurants].filter(
      (fil) => fil.id === item
    );

    return filter;
  });

  const cutLenghtItems = [].concat(...filteredItems);

  return (
    <div className={"search__container"}>
      <Header heading={"Favorite Stores"} />

      <TypesAll searchData={cutLenghtItems} heading={""} />

      {showFilter && <Filter data={data.types} />}
    </div>
  );
}

export default Favorite;
export async function loader() {
  const response = await fetch(
    "https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data.json"
  );
  if (!response.ok) {
    throw json("Failed to load data");
  } else {
    return response;
  }
}
