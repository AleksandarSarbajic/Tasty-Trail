import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.search = action.payload.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
