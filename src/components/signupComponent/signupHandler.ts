import { setPopup } from "appRedux/miscSlice";
import { signupCall } from "apiCalls";
import { initialState } from "./signupReducer";
import { NavigateFunction } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { updateUserState } from "appRedux/userSlice";

export async function signupHandler(
  signupInputs: initialState,
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
) {
  if (
    signupInputs.email === "" ||
    signupInputs.username === "" ||
    signupInputs.pwd === ""
  ) {
    dispatch(setPopup("Please fill all the fields!"));
    return;
  }
  if (signupInputs.pwd !== signupInputs.confirmPwd) {
    dispatch(setPopup("Passwords don't match!"));
    return;
  }
  try {
    const response = await signupCall(
      signupInputs.username,
      signupInputs.pwd,
      signupInputs.email
    ).then((res) => res.data);
    if (
      response.encodedtoken !== "" &&
      response.encodedtoken !== null &&
      response.encodedtoken !== undefined
    ) {
      localStorage.setItem("token", response.encodedtoken);
    }
    dispatch(updateUserState(response));
    navigate("/home");
  } catch (err) {
    console.error(err);
  }
}
