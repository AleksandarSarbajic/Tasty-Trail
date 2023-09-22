import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    secondItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    totalPriceSelected: 0,
    changed: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (items) => items.name === newItem.name
      );

      state.changed = true;
      if (!existingItem) {
        state.totalQuantity = state.totalQuantity + newItem.quantity;
        state.totalPrice = state.totalPrice + newItem.totalPrice;
        state.items.push({
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          image: newItem.image,
          ingredients: newItem.ingredients,
        });
      } else {
        state.totalPrice =
          state.totalPrice - existingItem.totalPrice + newItem.totalPrice;
        state.totalQuantity =
          state.totalQuantity + newItem.quantity - existingItem.quantity;
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.totalPrice;
      }
    },
    removeFromCart: (state, action) => {
      const toBeRemovedItem = action.payload;
      const existingItem = state.items.find(
        (items) => items.name === toBeRemovedItem.name
      );
      state.totalPrice = state.totalPrice - existingItem.totalPrice;
      state.totalQuantity = state.totalQuantity - existingItem.quantity;

      state.items = state.items.filter(
        (items) => items.name !== toBeRemovedItem.name
      );
    },
    addOneRemoveOne: (state, action) => {
      const { item, type } = action.payload;
      const existingItem = state.items.find(
        (items) => items.name === item.name
      );
      const existingItemSelected = state.selectedItems.find(
        (items) => items.name === item.name
      );
      console.log(existingItemSelected);
      if (type === "lowerQuantity") {
        state.totalPrice = state.totalPrice - item.price;
        state.totalQuantity = state.totalQuantity - 1;
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - item.price;
        if (existingItemSelected) {
          existingItemSelected.quantity = existingItemSelected.quantity - 1;
          existingItemSelected.totalPrice =
            existingItemSelected.totalPrice - item.price;
        }
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((items) => items.name !== item.name);
          state.selectedItems = state.selectedItems.filter(
            (items) => items.name !== item.name
          );
        }
      } else {
        state.totalPrice = state.totalPrice + item.price;
        state.totalQuantity = state.totalQuantity + 1;
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
        if (existingItemSelected) {
          existingItemSelected.quantity = existingItemSelected.quantity + 1;
          existingItemSelected.totalPrice =
            existingItemSelected.totalPrice + item.price;
        }
      }
    },
    removeAllItems: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.changed = false;
      state.selectedItems = [];
      state.totalPriceSelected = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
