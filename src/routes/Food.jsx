import FoodContent from "../components/foodmodal/FoodContent";
import FoodModal from "../components/foodmodal/ModalFood";
import { json, useRouteLoaderData, useParams } from "react-router-dom";

export default function Food() {
  const data = useRouteLoaderData("food");
  const params = useParams();

  const filteredRestoraunts = data.Restoraunts.find(
    (food) => food.link === params.id
  );
  const foodItem = filteredRestoraunts.food.find(
    (item) => item.name === params.food
  );

  return (
    <>
      <FoodModal>
        <FoodContent foodItem={foodItem} />
      </FoodModal>
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
