import { followUser, getUsers } from "apiCalls";
import { setUser, userType } from "appRedux/userSlice";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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

  async function followHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    suggestedUsername: string
  ) {
    e.stopPropagation();
    const response = await followUser(suggestedUsername, userData.encodedToken);
    dispatch(setUser(response.data.user));
  }

  return (
    <div>
      {suggestedUsers.length > 0 ? (
        <h3 className=" my-4 ">Follow more users</h3>
      ) : (
        <h3 className=" my-4 ">Seems like you've followed Everyone!!</h3>
      )}

      <div className=" flex flex-col gap-2 ">
        {suggestedUsers.map((suggestedUser) => {
          return (
            <UserTile user={suggestedUser} key={suggestedUser._id}>
              <button
                className=" text-primaryDark ml-auto hover:scale-105 duration-75 "
                onClick={(e) => followHandler(e, suggestedUser.username)}
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
