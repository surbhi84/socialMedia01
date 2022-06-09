import { setError } from "appRedux/miscSlice";
import { signupCall } from "apiCalls";
import { initialState } from "./signupReducer";
import { NavigateFunction } from "react-router-dom";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

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
    dispatch(setError("Please fill all the fields!"));
    return;
  }
  if (signupInputs.pwd !== signupInputs.confirmPwd) {
    dispatch(setError("Passwords don't match!"));
    return;
  }
  try {
    const response = await signupCall(
      signupInputs.username,
      signupInputs.pwd,
      signupInputs.email
    ).then((res) => res.data);
    navigate("/home");
    localStorage.setItem("token", response.encodedtoken);
  } catch (err) {
    console.error(err);
  }
}
