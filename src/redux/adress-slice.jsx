import { createSlice } from "@reduxjs/toolkit";

const adressSlice = createSlice({
  name: "adress",
  initialState: {
    adress: [],
    isShown: false,
  },
  reducers: {
    setAdress: (state, action) => {
      const newItem = action.payload;
      state.adress.push(newItem);
    },
    toggle: (state, action) => {
      state.isShown = action.payload;
    },
  },
});

export const adressActions = adressSlice.actions;

export default adressSlice;
