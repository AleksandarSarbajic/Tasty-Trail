import RestorauntHero from "../components/Restoraunt/Hero";
import { json, useRouteLoaderData, useParams, Outlet } from "react-router-dom";
import useDocumentTitle from "../customhooks/useDocumentTitle";

export default function Restoraunt() {
  const params = useParams();
  const loading = useRouteLoaderData("restoraunt");

  const restoraunt = loading.Restaurants.find((store) => {
    return store.link === params.id;
  });

  useDocumentTitle(`${restoraunt.name} | TastyTrail`);
  return (
    <>
      <RestorauntHero store={restoraunt} />
      <Outlet />
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
