import { followUser, unfollowUser } from "apiCalls";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { setUser } from "appRedux/userSlice";
import { addNotifications, setPopup } from "appRedux/miscSlice";
import { v4 as uuid } from "uuid";

export async function followHandler(
  username: string,
  token: string,
  dispatch: Dispatch<AnyAction>
) {
  const response = await followUser(username, token);
  dispatch(setPopup(`You started following ${username}`));
  dispatch(
    addNotifications({
      id: uuid(),
      text: `You started following ${username}`,
      time: "just now",
    })
  );
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
