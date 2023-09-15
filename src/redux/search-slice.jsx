import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "burger",
  },
  reducers: {
    setCredientals: (state, action) => {
      const newItem = action.payload;
      state.credientals = newItem;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
