import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface notification {
  id: string;
  text: string;
  time: string;
}

interface miscTypes {
  popupMsg: string;
  isAuth: boolean;
  notifications: Array<notification>;
}
const initialState: miscTypes = {
  popupMsg: "",
  isAuth: false,
  notifications: [
    {
      id: "001",
      text: "Avinash Patel commented on your post.",
      time: "on June 5th",
    },
    {
      id: "002",
      text: "Jatin Gupta commented on your post.",
      time: "on June 6th",
    },
  ],
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
    addNotifications: (state, action: PayloadAction<notification>) => {
      state.notifications.push(action.payload);
    },
  },
});

export const { setPopup, updateIsAuth, addNotifications } = miscSlice.actions;
export default miscSlice.reducer;
