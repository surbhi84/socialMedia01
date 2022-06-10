import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import { useAppSelector } from "hooks";

export const Sidebar = () => {
  const user = useAppSelector((state) => state.userData.user);

  return (
    <div className=" flex flex-row md:flex-col text-lg sm:text-xl shrink-0 sm:shrink md:w-52 md:gap-2 rounded-md sticky z-10 top-0 overflow-x-scroll sm:overflow-hidden scrollbar-hide bg-white dark:text-primary dark:bg-darker ">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight "
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 hover:bg-primaryLight dark:hover:bg-darkLight rounded-md"
        }
      >
        <AiOutlineHome />
        Home
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center  md:gap-3 gap-1  px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight "
            : " flex flex-row items-center  md:gap-3 gap-1  px-3 py-2 hover:bg-primaryLight dark:hover:bg-darkLight rounded-md"
        }
      >
        <MdOutlineScreenSearchDesktop /> Explore
      </NavLink>
      <NavLink
        to={`/profile/${user.username}`}
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight "
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2  hover:bg-primaryLight dark:hover:bg-darkLight rounded-md"
        }
      >
        <AiOutlineUser /> Profile
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight "
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2  hover:bg-primaryLight dark:hover:bg-darkLight rounded-md "
        }
      >
        <IoNotificationsOutline /> Notifications
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight "
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 hover:bg-primaryLight dark:hover:bg-darkLight rounded-md "
        }
      >
        <HiOutlineBookmark /> Bookmarks
      </NavLink>
    </div>
  );
};
