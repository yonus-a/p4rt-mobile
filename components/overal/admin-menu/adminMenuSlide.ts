import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: true,
};

export const adminMenuSlice = createSlice({
  name: "adminMenu",
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { setCollapsed } = adminMenuSlice.actions;
export default adminMenuSlice.reducer;
