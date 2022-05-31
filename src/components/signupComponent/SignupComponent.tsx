import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { Error } from "components";
import { useAppSelector } from "hooks";
import { useSignupReducer } from "./signupReducer";
import { signupHandler } from "./signupHandler";
import { useDispatch } from "react-redux";

export const SignupComponent = () => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { signupInputs, signupInputsDispatch } = useSignupReducer();
  const error = useAppSelector((state) => state.misc.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex flex-col items-center justify-center h-screen gap-8 dark:text-primary dark:bg-darkCol ">
        {/* EMAIL */}
        <input
          type="text"
          placeholder="Email"
          className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
          onChange={(e) =>
            signupInputsDispatch({ type: "EMAIL", payload: e.target.value })
          }
          value={signupInputs.email}
        />

        {/* USERNAME */}
        <input
          type="text"
          placeholder="Username"
          className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
          onChange={(e) =>
            signupInputsDispatch({
              type: "USERNAME",
              payload: e.target.value,
            })
          }
          value={signupInputs.username}
        />

        {/* PASSWORD */}
        <div className="flex flex-row relative ">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
            onChange={(e) =>
              signupInputsDispatch({ type: "PWD", payload: e.target.value })
            }
            value={signupInputs.pwd}
          />
          <div className="absolute right-0 bottom-1.5">
            {show ? (
              <HiEyeOff onClick={() => setShow(false)} />
            ) : (
              <HiEye onClick={() => setShow(true)} />
            )}
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="flex flex-row relative ">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
            onChange={(e) =>
              signupInputsDispatch({
                type: "CONFIRMPWD",
                payload: e.target.value,
              })
            }
            value={signupInputs.confirmPwd}
          />
          <div className="absolute right-0 bottom-1.5">
            {showConfirm ? (
              <HiEyeOff onClick={() => setShowConfirm(false)} />
            ) : (
              <HiEye onClick={() => setShowConfirm(true)} />
            )}
          </div>
        </div>

        <button
          className=" border border-primaryDark dark:border-primary w-60 h-8 rounded-full hover:scale-105 "
          onClick={() => signupHandler(signupInputs, dispatch, navigate)}
        >
          Signup
        </button>
        <div className="flex flex-col items-center">
          or
          <Link
            to="/login"
            className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center "
          >
            <span className="relative text-sm">already have an account</span>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-primaryDark dark:bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-primaryDark dark:stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {error !== "" && <Error />}
    </>
  );
};
