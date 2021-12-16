import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;
