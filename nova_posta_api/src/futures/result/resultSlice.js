import { createSlice } from "@reduxjs/toolkit";

const initialState = { result: [] };

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

export const { addResult } = resultSlice.actions;
export default resultSlice.reducer;
