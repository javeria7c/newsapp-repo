import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers";

export const store = configureStore({
  reducer: newsReducer,
});
