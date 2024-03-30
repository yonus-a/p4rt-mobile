import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visits: [],
  views: [],
};

export const monthlyReportSlice = createSlice({
  name: "monthlyReport",
  initialState,
  reducers: {
    setVisits: (state, action) => {
      state.visits = action.payload;
    },
    setViews: (state, action) => {
      state.views = action.payload;
    },
  },
});

export const { setVisits, setViews } = monthlyReportSlice.actions;
export default monthlyReportSlice.reducer;
