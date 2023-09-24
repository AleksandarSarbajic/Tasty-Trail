import { useEffect } from "react";
import ContainerCart from "../components/cart/cartpage/Container";
import useDocumentTitle from "../customhooks/useDocumentTitle";
import { useLocation } from "react-router-dom";

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
