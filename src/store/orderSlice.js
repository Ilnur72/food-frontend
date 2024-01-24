import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: { data: [] },

  reducers: {
    addOrder: (state, action) => {
      const { id, bowls } = action.payload;
      const newData = state.data.map((item) =>
        item.id === id
          ? { ...item, count: Math.min(item.count + 1, bowls) }
          : item
      );

      if (!newData.some((item) => item.id === id)) {
        newData.unshift({ ...action.payload, count: 1 });
      }

      state.data = newData;
    },
    removeOrder: (state, action) => {
      const idToRemove = action.payload;
      state.data = state.data
        .map((item) =>
          item.id === idToRemove
            ? { ...item, count: Math.max(item.count - 1, 0) }
            : item
        )
        .filter((item) => item.count > 0);
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
