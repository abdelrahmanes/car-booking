import { carType } from "./../../types.d";
import { createSlice } from "@reduxjs/toolkit";

interface CarState {
  cars: carType[];
}

const initialState: CarState = {
  cars: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = carSlice.actions;

export default carSlice.reducer;
