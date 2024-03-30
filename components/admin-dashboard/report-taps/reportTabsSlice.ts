import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [
    { key: "daily", title: "روزانه" },
    { key: "weekly", title: "هفتگی" },
    { key: "monthly", title: "ماهیانه" },
  ],
};

const reportTabsSlice = createSlice({
  name: "reportTab",
  initialState,
  reducers: {},
});

export default reportTabsSlice.reducer;
