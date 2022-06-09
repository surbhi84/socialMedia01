import { followUser, getPosts, getUserFromId, unfollowUser } from "apiCalls";
import { setPosts } from "appRedux/postSlice";
import { setUser, userType } from "appRedux/userSlice";
import { Loader, PostCard } from "components";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { followHandler, unFollowHandler } from "updateHandlers";

export const ProfilePage = () => {
  const { username } = useParams();
  const userData = useAppSelector((state) => state.userData);
  const posts = useAppSelector((state) => state.posts.posts);
  const [userProfile, setUserProfile] = useState<userType>();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const response = await getUserFromId(username as string).then(
        (res) => res.data.user
      );

      setUserProfile(response);
      const posts = await getPosts().then((res) => res.data.posts);
      dispatch(setPosts(posts));
    })();
  }, [username, userData.user]);

  const userPost = posts.filter((post) => {
    return post.username === userProfile?.username;
  });

  return (
    <>
      {userProfile !== undefined ? (
        <div className=" flex flex-col gap-2 w-full md:w-4/6 ">
          {/* avatar and cover image div */}
          <div className=" flex h-36 sm:h-48 dark:bg-darker w-full rounded-md shadow-sm shadow-slate-400 dark:shadow-none">
            <img
              src={userProfile.userAvatar}
              alt={`${userProfile.username} avatar`}
              className=" h-32 w-32 sm:h-44 sm:w-44 object-cover rounded-full m-2 "
            />
          </div>

          {/* name and username tile */}
          <div className="flex ">
            <span className=" flex flex-col ml-2 text-darker dark:text-primary ">
              <h4 className=" text-lg sm:text-2xl  ">
                {userProfile.firstName + " " + userProfile.lastName}
              </h4>
              <h4 className="  text-base sm:text-xl ">
                @{userProfile.username}
              </h4>
            </span>
            {userData.user.username !== userProfile.username ? (
              <>
                {userData.user.following.some((followedUser) => {
                  return followedUser.username == userProfile.username;
                }) ? (
                  <button
                    className=" border border-primaryDark dark:border-primary dark:text-primary px-3 py-1 rounded-md text-base hover:scale-105 duration-300 ease-out ml-auto self-center dark:bg-darker bg-primaryLight sm:mr-10"
                    onClick={() =>
                      unFollowHandler(
                        userProfile.username,
                        userData.encodedToken,
                        dispatch
                      )
                    }
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className=" border border-primaryDark dark:border-primary dark:text-primary px-3 py-1 rounded-md text-base  hover:scale-105 duration-75 ease-out ml-auto self-center dark:bg-darker bg-primaryLight sm:mr-10"
                    onClick={() =>
                      followHandler(
                        userProfile.username,
                        userData.encodedToken,
                        dispatch
                      )
                    }
                  >
                    Follow
                  </button>
                )}
              </>
            ) : (
              <></>
            )}
          </div>

          {/* user detail block */}
          <div className="flex items-center justify-evenly w-[97%] h-16 rounded-md mx-auto my-3 dark:bg-darker ">
            <div className="flex flex-col items-center sm:text-lg">
              {userPost.length}
              <span>Posts</span>
            </div>

            <div className="flex flex-col items-center sm:text-lg">
              {userProfile.followers.length} <span>Followers</span>
            </div>

            <div className="flex flex-col items-center sm:text-lg">
              {userProfile.following.length} <span>Following</span>
            </div>
          </div>
          {userPost.length > 0 ? (
            userPost.map((post) => <PostCard post={post} key={post._id} />)
          ) : (
            <h4>No posts yet! </h4>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
