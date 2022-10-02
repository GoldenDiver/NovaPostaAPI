import { createSlice } from "@reduxjs/toolkit";

const initialState = { warehouseTypes: [] };

export const warehouseTypesSlice = createSlice({
  name: "warehouseTypes",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.warehouseTypes.push(action.payload);
    },
  },
});

export const { setWarehouseTypes } = warehouseTypesSlice.actions;
export default warehouseTypesSlice.reducer;
