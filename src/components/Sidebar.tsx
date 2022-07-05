import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import { useAppSelector } from "hooks";
import { useRef } from "react";

export const Sidebar = () => {
  const user = useAppSelector((state) => state.userData.user);
  const HomeRef = useRef<HTMLAnchorElement>(null);
  const ExpRef = useRef<HTMLAnchorElement>(null);
  const ProfRef = useRef<HTMLAnchorElement>(null);
  const NotiRef = useRef<HTMLAnchorElement>(null);
  const BookRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className=" flex flex-row md:flex-col text-lg sm:text-xl shrink-0 sm:shrinkgap-1 gap-0.5 md:gap-2 md:w-48 md:h-[95vh] rounded-md sticky top-0 md:top-5 z-10 md:z-0 overflow-x-scroll sm:overflow-hidden scrollbar-hide dark:text-primary dark:bg-darker bg-white">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight border-primary border-y dark:border-0"
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 hover:bg-primaryLight dark:hover:bg-darkLight rounded-md border-primary border-y dark:border-0"
        }
        ref={HomeRef}
        onClick={(e) => {
          if (window.innerWidth < 675) {
            HomeRef?.current?.scrollIntoView({
              block: "center",
              inline: "center",
              behavior: "smooth",
            });
          }
        }}
      >
        <AiOutlineHome />
        Home
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center  md:gap-3 gap-1  px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight border-primary border-y dark:border-0"
            : " flex flex-row items-center  md:gap-3 gap-1  px-3 py-2 hover:bg-primaryLight dark:hover:bg-darkLight rounded-md  border-primary border-y dark:border-0"
        }
        ref={ExpRef}
        onClick={(e) => {
          if (window.innerWidth < 675) {
            ExpRef?.current?.scrollIntoView({
              block: "center",
              inline: "center",
              behavior: "smooth",
            });
          }
        }}
      >
        <MdOutlineScreenSearchDesktop /> Explore
      </NavLink>
      <NavLink
        to={`/profile/${user.username}`}
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight border-primary border-y dark:border-0"
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2  hover:bg-primaryLight dark:hover:bg-darkLight rounded-md  border-primary border-y dark:border-0"
        }
        ref={ProfRef}
        onClick={(e) => {
          if (window.innerWidth < 675) {
            ProfRef?.current?.scrollIntoView({
              block: "center",
              inline: "center",
              behavior: "smooth",
            });
          }
        }}
      >
        <AiOutlineUser /> Profile
      </NavLink>
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight border-primary border-y dark:border-0"
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2  hover:bg-primaryLight dark:hover:bg-darkLight rounded-md  border-primary border-y dark:border-0"
        }
        ref={NotiRef}
        onClick={(e) => {
          if (window.innerWidth < 675) {
            NotiRef?.current?.scrollIntoView({
              block: "center",
              inline: "center",
              behavior: "smooth",
            });
          }
        }}
      >
        <IoNotificationsOutline /> Notifications
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive
            ? " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 bg-primaryLight rounded-md dark:bg-darkLight border-primary border-y dark:border-0"
            : " flex flex-row items-center md:gap-3 gap-1 px-3 py-2 hover:bg-primaryLight dark:hover:bg-darkLight rounded-md  border-primary border-y dark:border-0"
        }
        ref={BookRef}
        onClick={(e) => {
          if (window.innerWidth < 675) {
            BookRef?.current?.scrollIntoView({
              block: "center",
              inline: "center",
              behavior: "smooth",
            });
          }
        }}
      >
        <HiOutlineBookmark /> Bookmarks
      </NavLink>
    </div>
  );
};
