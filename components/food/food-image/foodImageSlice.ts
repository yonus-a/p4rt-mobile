import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentVisible: false,
  isLiked: false,
  countLikes: 0,
};

export const foodImageSlice = createSlice({
  name: "foodImage",
  initialState,
  reducers: {
    setCommentVisible: (state, action) => {
      state.commentVisible = action.payload;
    },
    setCountLikes: (state, action) => {
      state.countLikes = action.payload;
    },
    setIsLiked: (state, action) => {
      state.isLiked = action.payload;
    },
  },
});

export const { setCommentVisible, setCountLikes, setIsLiked } =
  foodImageSlice.actions;
export default foodImageSlice.reducer;
