import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [
    {
      country: "china",
      population: 1000,
      province: 20,
      info: "lorem ",
    },
    {
      country: "iran",
      population: 1000,
      province: 20,
      info: "lorem iran ",
    },
    {
      country: "afghanistan",
      population: 1000,
      province: 20,
      info: "lorem afghanistan ",
    },
    {
      country: "usa",
      population: 1000,
      province: 20,
      info: "lorem usa ",
    },
    {
      country: "Tajikistan",
      population: 1000,
      province: 20,
      info: "lorem Tajikistan ",
    },
    {
      country: "pakistan",
      population: 1000,
      province: 20,
      info: "lorem  pakistan",
    },
    {
      country: "india",
      population: 1000,
      province: 20,
      info: "lorem india",
    },
    {
      country: " finland",
      population: 1000,
      province: 20,
      info: "lorem finland",
    },
  ],
};
export const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
});

export const countryReducer = countrySlice.reducer;
