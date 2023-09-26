import { useErrorBoundary } from "react-error-boundary";
import { itemToBeAdded } from "./AllItems";

function AddItems() {
  const { showBoundary } = useErrorBoundary();
  async function addItemsHandler() {
    try {
      const res = await fetch(
        `https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data/Discount.json`,
        {
          method: "PUT",
          body: JSON.stringify(itemToBeAdded),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Error");
      // const data = await res.json();
    } catch (error) {
      showBoundary(error);
    }
  }
  function throwAnError() {
    throw new Error("ERROR");
  }
  return (
    <>
      <button onClick={addItemsHandler}>ADD</button>
      <button onClick={throwAnError}>Throw Error</button>
    </>
  );
}

export default AddItems;
