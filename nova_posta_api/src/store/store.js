import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "../futures/title/titleSlice";
import officesSlice from "../futures/offices/officesSlice";
import warehouseTypesSlice from "../futures/warehouseTypes/warehouseTypesSlice"

export const store = configureStore({
  reducer: {
    title: titleSlice,
    offices: officesSlice,
    warehouseTypes: warehouseTypesSlice,
  },
});
