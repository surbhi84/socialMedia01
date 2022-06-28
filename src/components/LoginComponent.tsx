import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginCall } from "apiCalls";
import { useDispatch } from "react-redux";
import { updateUserState } from "appRedux/userSlice";

export const LoginComponent = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("sskukreti");
  const [pwd, setPwd] = useState("collidingatoms");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function loginHandler(username: string, pwd: string) {
    try {
      const response = await loginCall(username, pwd).then((res) => res.data);
      localStorage.setItem("token", response.encodedToken);
      dispatch(updateUserState(response));
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen gap-8 dark:text-primary dark:bg-darkCol ">
      {/* USERNAME */}
      <input
        type="text"
        placeholder="Username"
        className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      {/* PASSWORD */}
      <div className="flex flex-row relative ">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
        />
        <div className="absolute right-0 bottom-1.5">
          {show ? (
            <HiEyeOff onClick={() => setShow(false)} />
          ) : (
            <HiEye onClick={() => setShow(true)} />
          )}
        </div>
      </div>

      <button
        className=" border border-primaryDark dark:border-primary w-60 h-8 rounded-full hover:scale-105 "
        onClick={() => loginHandler(username, pwd)}
      >
        Login
      </button>

      <div className="flex flex-col items-center">
        or
        <Link
          to="/signup"
          className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center "
        >
          <span className="relative text-sm">Create new Account</span>

          <div className="flex items-center -space-x-3 translate-x-3">
            <div className="w-2.5 h-[1.6px] rounded bg-primaryDark dark:bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-primaryDark dark:stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};
