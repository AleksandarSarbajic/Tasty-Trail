import { useEffect } from "react";
import ContainerCart from "../components/cart/cartpage/Container";
import useDocumentTitle from "../customhooks/useDocumentTitle";

export default function CartPage() {
  useDocumentTitle("Discover a Restaurant or Markets | TastyTrail");
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <ContainerCart />;
}
