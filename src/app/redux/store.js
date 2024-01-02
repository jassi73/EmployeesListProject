import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeSlice";
export const store = configureStore({
  reducer: employeesReducer,
});
