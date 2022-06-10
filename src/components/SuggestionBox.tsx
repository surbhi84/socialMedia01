import { followUser, getUsers } from "apiCalls";
import { setUser, userType } from "appRedux/userSlice";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SuggestionBox = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<Array<any>>([]);
  const userData = useAppSelector((state) => state.userData);

  useEffect(() => {
    (async function () {
      let allUsers = await getUsers().then((res) => res.data.users);
      const filteredUsers = allUsers.filter(
        (user: userType) =>
          user.username !== userData.user.username &&
          userData.user.following.every((followedUser) => {
            return followedUser.username !== user.username;
          })
      );
      console.log(filteredUsers);
      setSuggestedUsers(filteredUsers);
    })();
  }, []);

  async function followHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    suggestedUsername: string
  ) {
    e.stopPropagation();
    const response = await followUser(suggestedUsername, userData.encodedToken);
    setUser(response.data.user);
    console.log(response.data.user);
  }

  return (
    <div>
      <h3 className=" my-4 ">Follow more users</h3>

      <div className=" flex flex-col gap-2 ">
        {suggestedUsers.map((suggestedUser) => {
          return (
            <div className="flex " key={suggestedUser.id}>
              <Link
                to={`/profile/${suggestedUser.username}`}
                className=" flex flex-row items-center gap-1 md:gap-2 "
              >
                <img
                  src={
                    suggestedUser.userAvatar !== undefined
                      ? suggestedUser.userAvatar
                      : "/assets/bunny1.jpg"
                  }
                  alt="avatar image"
                  className=" w-10 h-10 rounded-full "
                />
                <div className=" flex flex-col ">
                  {suggestedUser.firstName + " " + suggestedUser.lastName}
                  <div className=" text-darkCol dark:text-slate-200 ">
                    @{suggestedUser.username}
                  </div>
                </div>
              </Link>
              <button
                className=" text-primaryDark ml-auto hover:scale-105 duration-75 "
                onClick={(e) => followHandler(e, suggestedUser.username)}
              >
                Follow+
              </button>
            </div>
          );
        })}
        <button className="bg-primaryLight px-2 py-1 w-full rounded-md dark:bg-darkLight hover:scale-105 duration-100 ml-auto">
          Show more{" "}
        </button>
      </div>
    </div>
  );
};
