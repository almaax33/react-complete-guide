import { createSlice } from "@reduxjs/toolkit";

const initialUIStore = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIStore,
  reducers: {
    toggle(state) {
        state.cartIsVisible = !state.cartIsVisible
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
