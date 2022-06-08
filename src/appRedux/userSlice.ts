import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postType } from "./postSlice";

export interface userTypeRaw {
  bookmarks: Array<any>;
  createdAt: string;
  email: string;
  firstName: string;
  followers: Array<string>;
  following: Array<string>;
  id: string;
  lastName: string;
  password: string;
  updatedAt: string;
  username: string;
  userAvatar: string;
  _id: string;
}

export interface userType {
  bookmarks: Array<any>;
  createdAt: string;
  email: string;
  firstName: string;
  followers: Array<userTypeRaw>;
  following: Array<userTypeRaw>;
  id: string;
  lastName: string;
  password: string;
  updatedAt: string;
  username: string;
  userAvatar: string;
  _id: string;
}

export interface userObjectType {
  encodedToken: string;
  user: userType;
}

const initialState = {
  encodedToken: "",
  user: {
    bookmarks: [] as any[],
    createdAt: "",
    email: "",
    firstName: "",
    followers: [] as userTypeRaw[],
    following: [] as userTypeRaw[],
    id: "",
    lastName: "",
    password: "",
    updatedAt: "",
    username: "",
    userAvatar: "",
    _id: "",
  },
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<userObjectType>) =>
      (state = action.payload),
    setUser: (state, action: PayloadAction<userType>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.encodedToken = action.payload;
    },
    setAsBookmark: (state, action: PayloadAction<postType>) => {
      state.user.bookmarks.push(action.payload);
    },
    removeAsBookmark: (state, action: PayloadAction<postType>) => {
      state.user.bookmarks = state.user.bookmarks.filter(({ _id }) => {
        return _id !== action.payload._id;
      });
    },
    removeUser: () => initialState,
  },
});

export const {
  updateUserState,
  setUser,
  setToken,
  removeUser,
  setAsBookmark,
  removeAsBookmark,
} = userSlice.actions;
export default userSlice.reducer;
