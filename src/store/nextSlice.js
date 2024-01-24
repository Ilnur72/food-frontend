import { createSlice } from "@reduxjs/toolkit";

const nextSlice = createSlice({
  name: "orderSlice",
  initialState: true,

  reducers: {
    nextPage: (state, action) => {
      state = action.payload
      return state
    },
  },
});

export const { nextPage } = nextSlice.actions;
export default nextSlice.reducer;
