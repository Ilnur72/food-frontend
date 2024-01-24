import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import nextSlice from "./nextSlice";

export const store = configureStore({
  reducer: {
    addOrder: orderSlice,
    nextPage: nextSlice
  },
}); 
