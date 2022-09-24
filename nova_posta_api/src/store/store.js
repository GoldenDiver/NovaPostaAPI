import { configureStore } from "@reduxjs/toolkit";
import officesSlice from "../futures/offices/officesSlice";
import resultSlice from "../futures/result/resultSlice";
import titleSlice from "../futures/title/titleSlice";

export const store = configureStore({
  reducer: {
    title: titleSlice,
    result: resultSlice,
    offices: officesSlice,
  },
});
