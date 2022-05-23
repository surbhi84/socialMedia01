import { Link } from "react-router-dom";
import { RiSunFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { isDarkTheme } from "userRedux";
import { useAppSelector } from "hooks";

export const Home = () => {
  const dispatch = useDispatch();
  const darkTheme: boolean = useAppSelector((state) => state.theme);

  const themeSetter = () => {
    dispatch(isDarkTheme());
    localStorage.setItem("darkTheme", (!darkTheme).toString());
  };

  console.log(darkTheme);
  return (
    <div className=" flex flex-col gap-10 h-full dark:bg-darkCol  ">
      <header className=" flex flex-row m-2 ">
        <img src="/assets/pin.svg" alt="logo image" className=" h-8 " />
        <h1 className=" text-2xl self-center dark:text-primary">Social</h1>
        <div className=" ml-auto ">
          {darkTheme ? (
            <RiSunFill
              className=" text-primary text-xl p-4"
              onClick={themeSetter}
            />
          ) : (
            <MdDarkMode className="" onClick={themeSetter} />
          )}
        </div>
      </header>
      <main className=" flex flex-col gap-10 items-center ">
        {/* main image */}
        <img src="/assets/social.svg" alt="texting image" className=" h-48 " />
        {/* main tagline */}
        <div className=" flex flex-col w-72 items-center dark:text-white">
          <p className=" text-lg dark:text-white ">
            Get to know the world around you..
          </p>
          <p className=" text-xl ml-auto ">be a part of it.</p>
        </div>
        {/* login signup links */}
        <div className=" flex flex-col items-center gap-2 ">
          <Link
            to="/login"
            className=" flex flex-row justify-center rounded-lg py-0.5 w-20 bg-primary "
          >
            Login
          </Link>
          <div className="dark:text-white"> or</div>
          <Link
            to="./signup"
            className=" flex flex-row justify-center rounded-lg py-0.5 w-20 bg-primary "
          >
            Signup
          </Link>
        </div>
      </main>
    </div>
  );
};
