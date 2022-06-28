import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface miscTypes {
  popupMsg: string;
  isAuth: boolean;
}
const initialState: miscTypes = {
  popupMsg: "",
  isAuth: false,
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<string>) => {
      state.popupMsg = action.payload;
      return state;
    },
    updateIsAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { setPopup, updateIsAuth } = miscSlice.actions;
export default miscSlice.reducer;
