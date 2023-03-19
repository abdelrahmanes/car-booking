import { carType } from "./../../types.d";
import { createSlice } from "@reduxjs/toolkit";

interface CarState {
  cars: carType[];
  query: string;
}

const initialState: CarState = {
  cars: [],
  query: "",
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setCars, setQuery } = carSlice.actions;

export default carSlice.reducer;
