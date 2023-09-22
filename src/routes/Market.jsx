import { Outlet, json, useParams, useRouteLoaderData } from "react-router-dom";
import useDocumentTitle from "../customhooks/useDocumentTitle";
import RestorauntHero from "../components/Restoraunt/Hero";

function Market() {
  const params = useParams();
  const loading = useRouteLoaderData("market");

  const market = loading.find((store) => {
    return store.link === params.id;
  });
  console.log(market);
  useDocumentTitle(`${market.name} | TastyTrail`);
  return (
    <>
      <RestorauntHero store={market} />
      <Outlet />
    </>
  );
}

export default Market;
export async function loader() {
  const response = await fetch(
    "https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data/Markets.json"
  );
  if (!response.ok) {
    throw json("Failed to load data");
  } else {
    return response;
  }
}
