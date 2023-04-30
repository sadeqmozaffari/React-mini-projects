import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //here we define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    customIncrement: (state, actions) => {
      state.count = state.count + parseFloat(actions.payload);
    },
    customDecrement: (state, actions) => {
      state.count = state.count - parseFloat(actions.payload);
    },
  },
});
export const { increment, decrement, customDecrement, customIncrement } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
