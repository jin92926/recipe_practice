import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "Store/counterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
