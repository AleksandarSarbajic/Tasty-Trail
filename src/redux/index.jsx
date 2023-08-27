import { configureStore } from "@reduxjs/toolkit";
import adressSlice from "./adress-slice";
import cartSlice from "./cart-slice";
import inputSlice from "./input-slice";
import filterSlice from "./filter-slice";
import showCartSlice from "./showCart-slice";

const store = configureStore({
  reducer: {
    adress: adressSlice.reducer,
    cart: cartSlice.reducer,
    credentials: inputSlice.reducer,
    filter: filterSlice.reducer,
    showCart: showCartSlice.reducer,
  },
});

export default store;
