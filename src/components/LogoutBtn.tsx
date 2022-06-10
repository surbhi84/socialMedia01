import { removeUser } from "appRedux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <button
        className=" border border-primaryDark dark:border-primary dark:text-primary px-3 rounded-full text-base hover:scale-105 ease-out "
        onClick={() => {
          dispatch(removeUser());
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </button>
    </>
  );
};
