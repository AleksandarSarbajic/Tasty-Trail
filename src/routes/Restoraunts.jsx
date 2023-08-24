import { useLoaderData, json } from "react-router-dom";
import StoreTypes from "../components/discovery/StoreTypes";
import Header from "../components/restoraunts/Header";
import TypesSlider from "../components/restoraunts/TypesSlider";
import TypesAll from "../components/restoraunts/TypesAll";
import Filter from "../components/restoraunts/Filter";
import { useSelector } from "react-redux";

export default function RestorauntsPage() {
  const showFilter = useSelector((state) => state.filter.show);

  const data = useLoaderData("restoraunts");
  return (
    <>
      <StoreTypes />
      <Header />
      <TypesSlider data={data} />
      <TypesAll data={data} />
      {showFilter && <Filter data={data} />}
    </>
  );
}
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
