import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commentsType, postType } from "backend/db/posts";

interface postSliceTypes {
  posts: Array<postType>;
}
const initialState: postSliceTypes = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Array<postType>>) => {
      state.posts = action.payload;
    },
    addLike: (
      state: postSliceTypes,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const post = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );
      if (
        !state.posts[post].likes.likedBy.some(
          (id) => id === action.payload.userId
        )
      ) {
        state.posts[post].likes.likeCount += 1;
        state.posts[post].likes.likedBy.push(action.payload.userId);
      }
    },
    removeLike: (
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const post = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );
      if (
        state.posts[post].likes.likedBy.some(
          (id) => id === action.payload.userId
        )
      ) {
        if (state.posts[post].likes.likeCount !== 0) {
          state.posts[post].likes.likeCount += -1;
          state.posts[post].likes.likedBy = state.posts[
            post
          ].likes.likedBy.filter((id) => id !== action.payload.userId);
        }
      }
    },
    addComment: (
      state,
      action: PayloadAction<{ postId: string; comment: [commentsType] }>
    ) => {
      const postIndex = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );
      if (postIndex !== -1) {
        state.posts[postIndex].comments = action.payload.comment;
      }
    },
    addPost: (state, action: PayloadAction<postType>) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { setPosts, addPost, addLike, removeLike, addComment } =
  postSlice.actions;
export default postSlice.reducer;
