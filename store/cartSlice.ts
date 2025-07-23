import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    added: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
    clearcart: (state) => {
      state.items = [];
    },
    removeitem: (state, action) => {
      state.items.filter((i) => i == action);
    },
    addeditem: (state, action) => {
      if (!state.added.find((i) => i === action.payload)) {
        state.added.push(action.payload);
      }
    },
  },
});
export const { additem, clearcart, removeitem, addeditem } = cart.actions;
export default cart.reducer;
