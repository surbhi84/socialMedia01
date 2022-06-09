import { setError } from "appRedux/miscSlice";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Error = () => {
  const error = useAppSelector((state) => state.misc.error);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  console.log(error);
  useEffect(() => {
    let id = setTimeout(() => {
      setShow(false);
      dispatch(setError(""));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  });
  return <div className="absolute">{show ? <div>{error} </div> : ""}</div>;
};
