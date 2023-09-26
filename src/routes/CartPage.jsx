import { useEffect } from "react";
import ContainerCart from "../components/cart/cartpage/Container";
import useDocumentTitle from "../customhooks/useDocumentTitle";
import { json, useLocation } from "react-router-dom";

export default function CartPage() {
  useDocumentTitle("Order your food! | TastyTrail");

  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.hash]);

  return <ContainerCart />;
}

export async function loader() {
  const response = await fetch(
    "https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data/Discount.json"
  );
  if (!response.ok) {
    throw json("Failed to load data");
  } else {
    return response;
  }
}
