import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expanded: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setExpanded: (state, action) => {
      state.expanded = action.payload;
    },
  },
});

export const { setExpanded } = profileSlice.actions;
export default profileSlice.reducer;
