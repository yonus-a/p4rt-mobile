import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visits: [],
  views: [],
};

export const weeklyReportSlice = createSlice({
  name: "weeklyReport",
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

export const { setVisits, setViews } = weeklyReportSlice.actions;
export default weeklyReportSlice.reducer;
