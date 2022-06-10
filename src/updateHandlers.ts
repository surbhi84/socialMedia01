import { followUser, unfollowUser } from "apiCalls";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { setUser } from "appRedux/userSlice";

export async function followHandler(
  username: string,
  token: string,
  dispatch: Dispatch<AnyAction>
) {
  const response = await followUser(username, token);
  dispatch(setUser(response.data.user));
}

export async function unFollowHandler(
  username: string,
  token: string,
  dispatch: Dispatch<AnyAction>
) {
  const response = await unfollowUser(username, token);
  dispatch(setUser(response.data.user));
}
