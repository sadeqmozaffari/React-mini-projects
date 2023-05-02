import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { countryAPI } from "../api/countryAPI";
import { RandomCountryAPI } from "../api/RandomCountryAPI";
const store = configureStore({
  reducer: {
    user: userSlice,
    [countryAPI.reducerPath]: countryAPI.reducer,
    [RandomCountryAPI.reducerPath]: RandomCountryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(countryAPI.middleware)
      .concat(RandomCountryAPI.middleware),
});
export default store;
