import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryAPI = createApi({
  reducerPath: "apiCountry",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["countries"],
  endpoints: (builder) => ({
    //Query ->get
    //Mutation -> post/put/delete
    // getAllCountry: builder.query({
    //   query: () => "country",
    //   providesTags: ["countries"],
    // }),
    getAllCountry: builder.query({
      query: () => ({ url: "country", method: "GET", params: {} }),
      transformErrorResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["countries"],
    }),
    // getAllCountry: builder.query({
    //   query: (id) => `country/${id}`,
    //   providesTags: (id) => {
    //     return [{ type: "countries", id: id }];
    //   },
    // }),
    addCountry: builder.mutation({
      query: (country) => ({
        url: "country",
        method: "POST",
        body: country,
      }),
      invalidatesTags: ["countries"],
    }),

    updateCountry: builder.mutation({
      query: (country) => ({
        url: `country/${country.id}`,
        method: "PUT",
        body: country,
      }),
      invalidatesTags: ["countries"],
    }),

    deleteCountry: builder.mutation({
      query: ({ id }) => ({
        url: `country/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["countries"],
    }),
  }),
});

export const {
  useGetAllCountryQuery,
  useAddCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} = countryAPI;
