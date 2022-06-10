import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = true;

const themeSlice = createSlice({
  name: "darkTheme",
  initialState,
  reducers: {
    isDarkTheme: (state) => !state,
    setDarkTheme: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});

export const { isDarkTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
