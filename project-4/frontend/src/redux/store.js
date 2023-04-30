import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { createLogger } from "redux-logger";
const logger = createLogger({
  duration: true,
  collapsed: true,
  diff: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#1C5FAF",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005",
  },
});
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //add logger middleware to middlewares
  devTools: process.env.NODE_ENV !== "production", //show if the enviroment
});

export default store;
