import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filters: [],
    commonItems: [],
    itemsToBeFiltered: [],
    sort: "Recommended",
    show: false,
  },
  reducers: {
    showFilter: (state, action) => {
      state.show = action.payload;
    },
    setFilter: (state) => {
      const items = state.filters;
      const newItems = state.itemsToBeFiltered;
      const commonItems = items.filter((item) => newItems.includes(item));
      state.commonItems = commonItems;
      state.filters = newItems;
      state.itemsToBeFiltered = newItems;
      //
    },
    setItemsForFilter: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemsToBeFiltered.find(
        (item) => item === newItem
      );
      if (!existingItem) {
        state.itemsToBeFiltered.push(newItem);
      } else {
        state.itemsToBeFiltered = state.itemsToBeFiltered.filter(
          (item) => item !== newItem
        );
      }
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
