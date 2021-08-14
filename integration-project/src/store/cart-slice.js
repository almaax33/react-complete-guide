import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = {
  addItemToCart(state, action) {
    const newItem = action.payload;
    const existingItem = state.items.find((item) => item.id === newItem.id);
    if (existingItem) {
      existingItem.amount++;
    } else {
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
        amount: 1,
      });
    }
    state.totalAmount++;
  },
  removeItemFromCart(state, action) {
    const id = action.payload;
    const existingItem = state.items.find((item) => item.id === id);
    if (existingItem.amount === 1) {
      state.items = state.items.filter(item => item.id !== id);
    } else {
      existingItem.amount--;
    }
    state.totalAmount--;
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: cartReducer,
});

export const cartActions = cartSlice.actions;
export default cartSlice;
