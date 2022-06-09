import { useReducer } from "react";

export interface initialState {
  email: string;
  username: string;
  pwd: string;
  confirmPwd: string;
}
export const useSignupReducer = () => {
  const initialSignupInputs = {
    email: "",
    username: "",
    pwd: "",
    confirmPwd: "",
  };

  function inputManager(
    state: initialState,
    action: {
      type: "EMAIL" | "USERNAME" | "PWD" | "CONFIRMPWD";
      payload: string;
    }
  ) {
    switch (action.type) {
      case "EMAIL": {
        return { ...state, email: action.payload };
      }
      case "USERNAME": {
        return { ...state, username: action.payload };
      }
      case "PWD": {
        return { ...state, pwd: action.payload };
      }
      case "CONFIRMPWD": {
        return { ...state, confirmPwd: action.payload };
      }
    }
  }

  const [signupInputs, signupInputsDispatch] = useReducer(
    inputManager,
    initialSignupInputs
  );

  return { signupInputs, signupInputsDispatch } as {
    signupInputs: initialState;
    signupInputsDispatch: React.Dispatch<{
      type: "EMAIL" | "USERNAME" | "PWD" | "CONFIRMPWD";
      payload: string;
    }>;
  };
};
