import { carType } from "./../types.d";
import languageReducer from "./features/language";

import carReducer from "./features/car";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carApiSlice } from "../services/car";

export interface RootState {
  language: {
    language: "";
  };
  car: {
    cars: carType[];
    query: string;
  };
}

export const store = configureStore({
  reducer: {
    car: carReducer,
    language: languageReducer,
    [carApiSlice.reducerPath]: carApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApiSlice.middleware),
});

setupListeners(store.dispatch);
