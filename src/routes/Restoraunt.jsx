import RestorauntHero from "../components/Restoraunt/Hero";
import { json, useRouteLoaderData, useParams, Outlet } from "react-router-dom";

export default function Restoraunt() {
  const params = useParams();
  const loading = useRouteLoaderData("restoraunt");

  const restoraunt = loading.Restoraunts.find((store) => {
    return store.link === params.id;
  });

  return (
    <>
      <RestorauntHero store={restoraunt}></RestorauntHero>
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
