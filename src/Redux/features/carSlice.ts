import { createSlice } from "@reduxjs/toolkit";

export type stateType = {
  data: {
    id: number;
    stars: number;
    brand: string;
    model: string;
    capacity: number;
    price: number;
    image: string;
    type: string;
    state: string;
    favourited: boolean;
    automatic: boolean;
    kilometers: number;
    energy: number;
    range: number;
    brake_fluid: number;
    tire_wear: number;
  }[];
};
const initialState: stateType = {
  data: [],
};
const carSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    setCars: (state, action) => {
      action.payload;
    },
  },
});

export const { setCars } = carSlice.actions;

export default carSlice.reducer;
