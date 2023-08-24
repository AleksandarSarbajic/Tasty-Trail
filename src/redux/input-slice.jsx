import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    credientals: {},
  },
  reducers: {
    setCredientals: (state, action) => {
      const newItem = action.payload;
      state.credientals = newItem;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
