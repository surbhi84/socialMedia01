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
        <h1 className=" text-2xl self-center text-darkCol dark:text-primary">
          Social
        </h1>
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
      <main className=" flex flex-col sm:flex-row sm:justify-center justify-items-center gap-10 sm:gap-14 items-center ">
        <div className="flex flex-col">
          {/* main image */}
          <img
            src="/assets/social.svg"
            alt="texting image"
            className=" h-48 sm:w-96 sm:h-80"
          />
          {/* main tagline */}
          <div className=" flex flex-col items-center dark:text-white ">
            <h3 className=" text-lg sm:text-xl dark:text-white  ">
              Get to know the world around you..
            </h3>
            <h3 className=" text-xl sm:text-2xl ml-auto ">be a part of it.</h3>
          </div>
        </div>

        {/* login signup links */}
        <div className=" flex flex-col items-center gap-2 ">
          <Link
            to="/login"
            className=" group overflow-hidden px-6 h-10 border border-primary rounded-full  "
          >
            <div className="transition duration-300 group-hover:-translate-y-10">
              <div className="h-10 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary">Login</span>
              </div>
              <div className="h-10 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary">Login</span>
              </div>
            </div>
          </Link>

          <div className="dark:text-white"> or</div>

          <Link
            to="./signup"
            className=" group overflow-hidden px-6 h-10 border border-primary rounded-full "
          >
            <div className="transition duration-300 group-hover:-translate-y-10">
              <div className=" h-10 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary">Signup</span>
              </div>
              <div className=" h-10 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary">Signup</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};
