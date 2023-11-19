import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./feateurs/questionSlice/questionSlice";

export const store = configureStore({
  reducer: {
    questionSlice
  },
});
