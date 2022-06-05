import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./themeSlice";
import miscSliceReducer from "./miscSlice";
import userReducer from "./userSlice";
import postsReducer from "./postSlice";

export const store = configureStore({
  reducer: {
    theme: darkThemeReducer,
    misc: miscSliceReducer,
    userData: userReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
