import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    clearcart: (state) => {
      state.items = [];
    },
    removeitem: (state, action) => {
      state.items.filter((i) => i == action);
    },
  },
});
export const { additem, clearcart, removeitem }=cart.actions;
export default cart.reducer;
