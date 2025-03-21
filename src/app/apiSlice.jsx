import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => "products", }),
    getAllPosts: builder.query({ query: () => "posts", }),
    getAllCarts: builder.query({ query: () => "carts", }),
  }),
});

export const { useGetAllProductsQuery, useGetAllPostsQuery, useGetAllCartsQuery } = productsApi;

