import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postType } from "backend/db/posts";

interface miscTypes {
  error: string;
  posts: Array<postType>;
}
const initialState: miscTypes = {
  error: "",
  posts: [],
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      return state;
    },
    setPosts: (state, action: PayloadAction<Array<postType>>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<postType>) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { setError, setPosts, addPost } = miscSlice.actions;
export default miscSlice.reducer;
