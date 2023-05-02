import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { countryAPI } from "./api/countryAPI";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ApiProvider api={countryAPI}>
  <Provider store={store}>
    <App />
  </Provider>
  // </ApiProvider>
);
