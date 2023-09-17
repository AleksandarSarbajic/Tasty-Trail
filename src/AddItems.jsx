import { itemToBeAdded } from "./Items";

function AddItems() {
  async function addItemsHandler() {
    try {
      const res = await fetch(
        `https://tastytrail-cc4bb-default-rtdb.europe-west1.firebasedatabase.app/data/Restoraunts.json`,
        {
          method: "PUT",
          body: JSON.stringify(itemToBeAdded),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if (!res.ok) throw new Error("Error");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return <button onClick={addItemsHandler}>ADD</button>;
}

export default AddItems;
