import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    theme: darkThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
