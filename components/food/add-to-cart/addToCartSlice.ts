import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setQuantity } = addToCartSlice.actions;
export default addToCartSlice.reducer;
