import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RandomCountryAPI = createApi({
  reducerPath: "apiRandomCountry",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    //Query ->get
    //Mutation -> post/put/delete
    getRandomCountry: builder.query({
      query: () => ({ url: "addresses", method: "GET" }),
    }),
  }),
});

export const { useGetRandomCountryQuery } = RandomCountryAPI;
