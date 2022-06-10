import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface miscTypes {
  error: string;
  isAuth: boolean;
}
const initialState: miscTypes = {
  error: "",
  isAuth: false,
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      return state;
    },
    updateIsAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { setError, updateIsAuth } = miscSlice.actions;
export default miscSlice.reducer;
