import { BsArrowRightShort } from "react-icons/bs";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginComponent = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className=" flex flex-col items-center justify-center h-full gap-8 dark:text-primary dark:bg-darkCol ">
      {/* EMAIL */}
      <input
        type="text"
        placeholder="Email"
        className=" border-b-2 outline-none border-primary rounded-sm dark:bg-darkCol w-60 "
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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

      <button className=" border border-primaryDark w-60 h-8 rounded-full hover:scale-105 ">
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
            <div className="w-2.5 h-[1.6px] rounded bg-primary origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-primary -translate-x-2 transition duration-300 group-hover:translate-x-0"
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
  );
};
