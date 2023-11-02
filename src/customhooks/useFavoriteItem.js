function useAddFavoriteItem(id) {
  function addItemHandler() {
    const items = JSON.parse(localStorage.getItem("favorite"));

    const existingItem = items?.find((item) => item === id);
    if (existingItem) {
      console.log("a");
      const filteredItems = items.filter((item) => item !== id);
      localStorage.setItem("favorite", JSON.stringify(filteredItems));
    } else {
      console.log("b");
      if (items === null) {
        localStorage.setItem("favorite", JSON.stringify([id]));
      } else {
        localStorage.setItem("favorite", JSON.stringify([...items, id]));
      }
    }
  }

  return { addItemHandler };
}

export default useAddFavoriteItem;
