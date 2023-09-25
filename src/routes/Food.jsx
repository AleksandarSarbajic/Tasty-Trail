import { useErrorBoundary } from "react-error-boundary";
import FoodContent from "../components/foodmodal/FoodContent";
import FoodModal from "../components/foodmodal/ModalFood";
import {
  json,
  useRouteLoaderData,
  useParams,
  useLocation,
} from "react-router-dom";

export default function Food({ type = "food" }) {
  const data = useRouteLoaderData(type);
  const params = useParams();
  const location = useLocation();

  const filteredItem = location.pathname.includes("Market")
    ? data.Markets.find((food) => food.link === params.id)
    : data.Restaurants.find((food) => food.link === params.id);

  const filteredRestoraunts = location.pathname.includes("Market")
    ? data.Markets.find((food) => food.link === params.id).food.find(
        (item) => item.name === params.food
      )
    : data.Restaurants.find((food) => food.link === params.id).food.find(
        (item) => item.name === params.food
      );

  return (
    <FoodModal item={filteredItem}>
      <FoodContent foodItem={filteredRestoraunts} item={filteredItem} />
    </FoodModal>
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
