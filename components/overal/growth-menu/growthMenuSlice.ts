import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false,
};

export const growthMenuSlice = createSlice({
  name: "growthMenu",
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { setCollapsed } = growthMenuSlice.actions;
export default growthMenuSlice.reducer;
