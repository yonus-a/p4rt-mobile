import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export const { dispatch }: any = store.dispatch;
export default store;
