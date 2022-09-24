import { createSlice } from "@reduxjs/toolkit";

const initialState = { offices: [] };

export const officesSlice = createSlice({
  name: "offices",
  initialState,
  reducers: {
    setOffices: (state, action) => {
      state.offices = action.payload;
    },
  },
});

export const { setOffices } = officesSlice.actions;
export default officesSlice.reducer;
