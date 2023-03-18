import languageReducer from "./features/language";
import searchReducer from "./features/search";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carApiSlice } from "../services/car";

export interface RootState {
  search: {
    query: "";
  };
  language: {
    language: "";
  };
}

export const store = configureStore({
  reducer: {
    search: searchReducer,
    language: languageReducer,
    [carApiSlice.reducerPath]: carApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApiSlice.middleware),
});

setupListeners(store.dispatch);
