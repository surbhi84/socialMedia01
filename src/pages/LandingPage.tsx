import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className=" flex flex-col gap-10 h-full dark:bg-darkCol ">
      <main className=" flex flex-col sm:flex-row sm:justify-center justify-items-center m-6 gap-10 md:gap-28 items-center ">
        <div className="flex flex-col">
          {/* main image */}
          <img
            src="/assets/social.svg"
            alt="texting image"
            className=" h-48 sm:w-96 sm:h-80 "
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
            className=" group overflow-hidden px-6 h-12 w-60 border border-primaryDark dark:border-primary rounded-full  "
          >
            <div className="transition duration-300 group-hover:-translate-y-12">
              <div className="h-12 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary font-medium">
                  Login
                </span>
              </div>
              <div className="h-12 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary font-medium">
                  Login
                </span>
              </div>
            </div>
          </Link>

          <div className="dark:text-white"> or</div>

          <Link
            to="/signup"
            className=" group overflow-hidden px-6 h-12 w-60 border border-primaryDark dark:border-primary rounded-full "
          >
            <div className="transition duration-300 group-hover:-translate-y-12">
              <div className=" h-12 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary font-medium">
                  Signup
                </span>
              </div>
              <div className=" h-12 flex items-center justify-center">
                <span className="text-darkCol dark:text-primary font-medium">
                  Signup
                </span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};
