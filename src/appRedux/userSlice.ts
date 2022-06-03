import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userType {
  encodedToken: string;
  user: {
    bookmarks: Array<any>;
    createdAt: string;
    email: string;
    firstName: string;
    followers: Array<any>;
    following: Array<any>;
    id: string;
    lastName: string;
    password: string;
    updatedAt: string;
    username: string;
    _id: string;
  };
}

const initialState = {
  encodedToken: "",
  user: {
    bookmarks: [] as any[],
    createdAt: "",
    email: "",
    firstName: "",
    followers: [] as any[],
    following: [] as any[],
    id: "",
    lastName: "",
    password: "",
    updatedAt: "",
    username: "",
    _id: "",
  },
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userType>) =>
      (state = action.payload),
    setToken: (state, action: PayloadAction<string>) => {
      state.encodedToken = action.payload;
    },
    removeUser: () => initialState,
  },
});

export const { setUser, setToken, removeUser } = userSlice.actions;
export default userSlice.reducer;
