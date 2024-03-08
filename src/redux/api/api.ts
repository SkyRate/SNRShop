import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4200/product";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ queryTerm, category, deboucedMinPrice, deboucedMaxPrice }) =>
        `/?q=${queryTerm}${
          deboucedMinPrice > 0 ? `&price_gte=${deboucedMinPrice}` : ""
        }${deboucedMaxPrice > 0 ? `&price_lte=${deboucedMaxPrice}` : ""}${
          category === 0 ? "" : `&category=${category}`
        }`,
      providesTags: (result, error, queryTerm) => [
        {
          id: queryTerm,
        },
      ],
    }),
  }),
});

export const { useGetProductQuery } = api;
