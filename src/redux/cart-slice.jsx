import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    secondItems: [],
    totalQuantity: 0,
    totalQuantitySecond: 0,
    totalPrice: 0,
    totalPriceSecond: 0,
    selected: "first",
    changed: false,
    discount: 1,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload.item;
      const type = action.payload.type;
      if (type !== "Market") {
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
            type: newItem.type,
            delivery: newItem.delivery,
            company: newItem.company,
          });
        } else {
          state.totalPrice =
            state.totalPrice - existingItem.totalPrice + newItem.totalPrice;
          state.totalQuantity =
            state.totalQuantity + newItem.quantity - existingItem.quantity;
          existingItem.quantity = newItem.quantity;
          existingItem.totalPrice = newItem.totalPrice;
        }
      } else {
        const existingItem = state.secondItems.find(
          (items) => items.name === newItem.name
        );

        state.changed = true;
        if (!existingItem) {
          state.totalQuantitySecond =
            state.totalQuantitySecond + newItem.quantity;
          state.totalPriceSecond = state.totalPriceSecond + newItem.totalPrice;
          state.secondItems.push({
            name: newItem.name,
            price: newItem.price,
            quantity: newItem.quantity,
            totalPrice: newItem.totalPrice,
            image: newItem.image,
            ingredients: newItem.ingredients,
            type: newItem.type,
            delivery: newItem.delivery,
            company: newItem.company,
          });
        } else {
          state.totalPriceSecond =
            state.totalPriceSecond -
            existingItem.totalPrice +
            newItem.totalPrice;
          state.totalQuantitySecond =
            state.totalQuantitySecond +
            newItem.quantity -
            existingItem.quantity;
          existingItem.quantity = newItem.quantity;
          existingItem.totalPrice = newItem.totalPrice;
        }
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
      if (item.type !== "Market") {
        const existingItem = state.items.find(
          (items) => items.name === item.name
        );

        if (type === "lowerQuantity") {
          state.totalPrice = state.totalPrice - item.price;
          state.totalQuantity = state.totalQuantity - 1;
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.totalPrice = existingItem.totalPrice - item.price;

          if (existingItem.quantity === 0) {
            state.items = state.items.filter(
              (items) => items.name !== item.name
            );
          }
        } else {
          state.totalPrice = state.totalPrice + item.price;
          state.totalQuantity = state.totalQuantity + 1;
          existingItem.quantity = existingItem.quantity + 1;
          existingItem.totalPrice = existingItem.totalPrice + item.price;
        }
      } else {
        const existingItem = state.secondItems.find(
          (items) => items.name === item.name
        );

        if (type === "lowerQuantity") {
          state.totalPriceSecond = state.totalPriceSecond - item.price;
          state.totalQuantitySecond = state.totalQuantitySecond - 1;
          existingItem.quantity = existingItem.quantity - 1;
          existingItem.totalPrice = existingItem.totalPrice - item.price;

          if (existingItem.quantity === 0) {
            state.secondItems = state.secondItems.filter(
              (items) => items.name !== item.name
            );
          }
        } else {
          state.totalPriceSecond = state.totalPriceSecond + item.price;
          state.totalQuantitySecond = state.totalQuantitySecond + 1;
          existingItem.quantity = existingItem.quantity + 1;
          existingItem.totalPrice = existingItem.totalPrice + item.price;
        }
      }
    },
    removeAllItems: (state) => {
      state.selected === "first";
      if (state.selected === "first") {
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
        state.changed = false;
      }
      if (state.selected === "second") {
        state.secondItems = [];
        state.totalQuantitySecond = 0;
        state.totalPriceSecond = 0;
        state.changed = false;
      }
      if (state.selected === "both") {
        state.items = [];
        state.secondItems = [];
        state.totalQuantity = 0;
        state.totalQuantitySecond = 0;
        state.totalPrice = 0;
        state.totalPriceSecond = 0;
        state.changed = false;
      }
    },
    setSelectedCart: (state, action) => {
      state.selected = action.payload;
    },
    setDiscountPercent: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
