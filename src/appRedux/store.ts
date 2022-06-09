import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./themeSlice";
import miscSliceReducer from "./miscSlice";

export const store = configureStore({
  reducer: {
    theme: darkThemeReducer,
    misc: miscSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
