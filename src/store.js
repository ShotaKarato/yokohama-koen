import { configureStore } from "@reduxjs/toolkit";
// reducers
import contentSlice from "./slice/contentSlice";

export default configureStore({
  reducer: {
    content: contentSlice,
  },
});
