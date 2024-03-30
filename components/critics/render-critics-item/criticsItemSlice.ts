import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalVisible: false,
};

export const criticsitemSlice = createSlice({
  name: "criticsItem",
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      state.modalVisible = action.payload;
    },
  },
});

export const { setModalVisible } = criticsitemSlice.actions;
export default criticsitemSlice.reducer;
