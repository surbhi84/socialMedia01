import { RiSunFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { isDarkTheme } from "appRedux";
import { useAppSelector } from "hooks";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const darkTheme: boolean = useAppSelector((state) => state.theme);

  const themeSetter = () => {
    dispatch(isDarkTheme());
    localStorage.setItem("darkTheme", (!darkTheme).toString());
  };

  return (
    <header className=" flex flex-row p-2 pb-2 gap-1 dark:bg-darkCol">
      <img src="/assets/pin.svg" alt="logo image" className=" h-8 " />
      <Link to="/">
        <h1 className=" text-2xl self-center text-darkCol dark:text-primary">
          Social
        </h1>
      </Link>
      <div className=" ml-auto ">
        {darkTheme ? (
          <RiSunFill
            className=" text-primary text-xl m-2 hover:animate-pulse "
            onClick={themeSetter}
          />
        ) : (
          <MdDarkMode
            className=" text-darkCol text-xl m-2 hover:animate-pulse "
            onClick={themeSetter}
          />
        )}
      </div>
    </header>
  );
};
