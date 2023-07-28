import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi", //check

  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-store2.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "dc2bd8b311msh39bd11cb354b47bp1e3c21jsn7491f5471e76"
      );
      headers.set("X-RapidAPI-Host", "my-store2.p.rapidapi.com");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "catalog/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
