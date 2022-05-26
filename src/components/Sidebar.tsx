import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className=" flex flex-col w-48 rounded-lg dark:bg-darker">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-3 text-xl px-3 py-2 bg-primaryLight rounded-lg dark:text-primary dark:bg-darkCol"
            : "flex flex-row items-center gap-3 text-xl p-3 "
        }
      >
        <AiOutlineHome />
        Home
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-3 text-xl p-4 text-primary"
            : "flex flex-row items-center gap-3 text-xl p-4 "
        }
      >
        <MdOutlineScreenSearchDesktop /> Explore
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-3 text-xl p-4 text-primary"
            : "flex flex-row items-center gap-3 text-xl p-4 "
        }
      >
        <AiOutlineUser /> Profile
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-3 text-xl p-4 text-primary"
            : "flex flex-row items-center gap-3 text-xl p-4 "
        }
      >
        <IoNotificationsOutline /> Notifications
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-3 text-xl p-4 text-primary"
            : "flex flex-row items-center gap-3 text-xl p-4 "
        }
      >
        <HiOutlineBookmark /> Bookmarks
      </NavLink>
    </div>
  );
};
