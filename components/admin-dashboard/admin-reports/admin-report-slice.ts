import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    users: 0,
    actives: 0,
    critics: 0,
    tickets: 0,
  },
};

export const adminReportSlice = createSlice({
  name: "adminReport",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = adminReportSlice.actions;
export default adminReportSlice.reducer;
