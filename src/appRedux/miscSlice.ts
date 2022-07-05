import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface notification {
  id: string;
  text: string;
  time: string | number;
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
    removeNotifications: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

export const { setPopup, updateIsAuth, addNotifications, removeNotifications } =
  miscSlice.actions;
export default miscSlice.reducer;
