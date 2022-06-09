import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className=" flex flex-col w-56">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "flex flex-row items-center gap-3 text-xl p-4 bg-primary"
            : "flex flex-row items-center gap-3 text-xl p-4 "
        }
      >
        <AiOutlineHome />
        Home
      </NavLink>
      <NavLink
        to="/explore"
        className=" flex flex-row items-center gap-3 text-xl p-4   "
      >
        <MdOutlineScreenSearchDesktop /> Explore
      </NavLink>
      <NavLink
        to="/profile"
        className=" flex flex-row items-center gap-3 text-xl p-4   "
      >
        <AiOutlineUser /> Profile
      </NavLink>
      <NavLink
        to="/notification"
        className=" flex flex-row items-center gap-3 text-xl p-4   "
      >
        <IoNotificationsOutline /> Notifications
      </NavLink>
      <NavLink
        to="/bookmarks"
        className=" flex flex-row items-center gap-3 text-xl p-4   "
      >
        <HiOutlineBookmark /> Bookmarks
      </NavLink>
    </div>
  );
};
