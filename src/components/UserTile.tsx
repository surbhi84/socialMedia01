import { followUser } from "apiCalls";
import { setUser, userTypeRaw } from "appRedux/userSlice";
import { useAppSelector } from "hooks";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const UserTile = ({
  user,
  children,
}: {
  user: userTypeRaw;
  children?: React.ReactNode | React.ReactNode[];
}) => {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useDispatch();

  async function followHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    suggestedUsername: string
  ) {
    e.stopPropagation();
    const response = await followUser(suggestedUsername, userData.encodedToken);
    dispatch(setUser(response.data.user));
  }

  return (
    <div className="flex " key={user.id}>
      <Link
        to={`/profile/${user.username}`}
        className=" flex flex-row items-center gap-1 md:gap-2 "
      >
        <img
          src={
            user.userAvatar !== undefined
              ? user.userAvatar
              : "/assets/bunny1.jpg"
          }
          alt="avatar image"
          className=" w-10 h-10 rounded-full object-cover "
        />
        <div className=" flex flex-col ">
          {user.firstName + " " + user.lastName}
          <div className=" text-darkCol dark:text-slate-200 ">
            @{user.username}
          </div>
        </div>
      </Link>
      {children}
    </div>
  );
};
