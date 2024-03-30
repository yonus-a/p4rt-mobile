import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visits: [],
  views: [],
};

export const dailyReportSlice = createSlice({
  name: "dailyReport",
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

export const { setVisits, setViews } = dailyReportSlice.actions;
export default dailyReportSlice.reducer;
