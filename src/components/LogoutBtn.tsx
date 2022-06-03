import { removeUser } from "appRedux/userSlice";
import { useDispatch } from "react-redux";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className=" border border-primaryDark dark:border-primary h-8 px-2 rounded-full hover:scale-105 "
        onClick={() => {
          dispatch(removeUser());
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
    </>
  );
};
