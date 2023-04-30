import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { countryReducer } from "./slice/countrySlice";
export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    countryStore: countryReducer,
  },
});
//console.log(store.getState());
// store.dispatch({
//     type:"counter/increment",

// })
