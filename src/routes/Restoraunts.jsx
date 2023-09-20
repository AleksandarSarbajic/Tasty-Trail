import { useLoaderData, json, useLocation } from "react-router-dom";
import StoreTypes from "../components/discovery/StoreTypes";
import Header from "../components/restoraunts/Header";
import TypesSlider from "../components/restoraunts/TypesSlider";
import TypesAll from "../components/restoraunts/TypesAll";
import Filter from "../components/restoraunts/Filter";
import { useSelector } from "react-redux";
import useDocumentTitle from "../customhooks/useDocumentTitle";

export default function RestorauntsPage() {
  const location = useLocation();
  console.log(location);
  useDocumentTitle(
    `${
      location.pathname.includes("markets") ? "All Markets" : "All Restaurants"
    }  | TastyTrail`
  );

  const showFilter = useSelector((state) => state.filter.show);

  const data = useLoaderData("restoraunts");

  return (
    <>
      <StoreTypes />
      <Header />
      {location.search === "" ? <TypesSlider data={data} /> : null}
      <TypesAll allData={data} heading={"Restaraunts"} />
      {showFilter && <Filter data={data.types} />}
    </>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
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
