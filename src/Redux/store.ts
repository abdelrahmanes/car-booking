import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carApiSlice } from "../services/car";
import carSlice from "./features/carSlice";

export const store = configureStore({
  reducer: {
    [carApiSlice.reducerPath]: carApiSlice.reducer,
    car: carSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApiSlice.middleware),
});

setupListeners(store.dispatch);
