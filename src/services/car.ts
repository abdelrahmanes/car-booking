import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:3004/";
// Define the API slice using createApi
export const carApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "specs",
    }),
  }),
});

// Export the endpoint and hooks generated by createApi
export const { useGetItemsQuery } = carApiSlice;
