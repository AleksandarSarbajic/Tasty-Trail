import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    isShown: false,
  },
  reducers: {
    setIsShown: (state, action) => {
      state.isShown = !state.isShown;
    },
  },
});

export const showCartActions = showCartSlice.actions;

export default showCartSlice;
