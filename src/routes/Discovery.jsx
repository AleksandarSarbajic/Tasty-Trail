import Hero from "../components/discovery/Hero";
import SliderItems from "../components/discovery/SliderItems";
import SliderMarkets from "../components/discovery/SliderMarkets";
import StoreTypes from "../components/discovery/StoreTypes";
import { json, useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useDocumentTitle from "../customhooks/useDocumentTitle";
import TypesSlider from "../components/restoraunts/TypesSlider";
export default function Discovery() {
  useDocumentTitle("Discover a Restaurant or Markets | TastyTrail");
  const data = useRouteLoaderData("discovery");

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <LoadingSpinner />

      <StoreTypes />
      <Hero data={data} />
      <SliderItems
        data={data}
        heading={"The most popular food in Belgrade"}
        discount={false}
      />
      <SliderItems
        data={data}
        heading={"Our recommendations!"}
        discount={true}
      />
      <TypesSlider data={data} />
      <SliderMarkets data={data} heading={"Markets"} />
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
