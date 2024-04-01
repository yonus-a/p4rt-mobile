import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: true,
};

export const refahiMenuSlice = createSlice({
  name: "refahiMenu",
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { setCollapsed } = refahiMenuSlice.actions;
export default refahiMenuSlice.reducer;
