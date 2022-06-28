import { setPopup } from "appRedux/miscSlice";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Popup = () => {
  const msg = useAppSelector((state) => state.misc.popupMsg);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      setShow(false);
      dispatch(setPopup(""));
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  });
  return (
    <>
      {show ? (
        <div className=" fixed top-16 left-auto flex flex-col justify-center gap-2 p-4 rounded-xl border-2 border-primaryDark bg-white dark:bg-darkCol dark:text-white ">
          {msg}
          <div className="bg-primary h-1 w-0 animate-loading duration-300"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
