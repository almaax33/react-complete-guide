import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;



// code without redux toolkit
// const counterReducer = (state, action) => {
//   if (action.type === "decrement") {
//     return {
//       showCounter: state.showCounter,
//       counter: state.counter - action.amount,
//     };
//   }
//   if (action.type === "increment") {
//     return {
//       showCounter: state.showCounter,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return initialState;
// };
