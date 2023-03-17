import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carApiSlice } from "../services/car";

export const store = configureStore({
  reducer: {
    [carApiSlice.reducerPath]: carApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApiSlice.middleware),
});

setupListeners(store.dispatch);
