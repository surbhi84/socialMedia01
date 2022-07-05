import { followUser, getUsers } from "apiCalls";
import { setUser, userType } from "appRedux/userSlice";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { followHandler } from "updateHandlers";
import { UserTile } from "./UserTile";

export const SuggestionBox = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<Array<any>>([]);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useDispatch();

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

      setSuggestedUsers(filteredUsers);
    })();
  }, [userData.user]);

  return (
    <div>
      {suggestedUsers.length > 0 ? (
        <h3 className=" my-3 ">Follow more users</h3>
      ) : (
        <h3 className=" my-3 ">Seems like you've followed Everyone!!</h3>
      )}

      <div className=" flex flex-col gap-3 ">
        {suggestedUsers.map((suggestedUser) => {
          return (
            <UserTile user={suggestedUser} key={suggestedUser._id}>
              <button
                className=" text-primaryDark dark:text-primary hover:scale-105 duration-75 hidden lg:flex  self-center"
                onClick={() =>
                  followHandler(
                    suggestedUser.username,
                    userData.encodedToken,
                    dispatch
                  )
                }
              >
                Follow+
              </button>
            </UserTile>
          );
        })}
      </div>
    </div>
  );
};
