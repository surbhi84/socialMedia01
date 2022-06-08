import { userType } from "appRedux/userSlice";
import { DisplayPosts, PostCard } from "components";
import { useAppSelector } from "hooks";

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.userData.user);
  const posts = useAppSelector((state) => state.posts.posts);
  const userPost = posts.filter((post) => post.username === user.username);
  //   const []
  return (
    <div className=" flex flex-col gap-2 w-full md:w-4/6 ">
      {/* avatar and cover image div */}
      <div className=" flex h-36 sm:h-48 bg-darker w-full rounded-md ">
        <img
          src={user.userAvatar}
          alt={`${user.username} avatar`}
          className=" h-32 w-32 sm:h-44 sm:w-44 object-cover rounded-full m-2 "
        />
      </div>

      {/* name and username tile */}
      <span className=" ml-2 text-darker dark:text-primary ">
        <h4 className=" text-lg sm:text-2xl  ">
          {user.firstName + " " + user.lastName}
        </h4>
        <h4 className="  text-base sm:text-xl ">@{user.username}</h4>
      </span>

      {/* user detail block */}
      <div className="flex items-center justify-evenly w-[97%] h-16 rounded-md mx-auto my-3 dark:bg-darker ">
        <div className="flex flex-col items-center sm:text-lg">
          {userPost.length}
          <span>Posts</span>
        </div>

        <div className="flex flex-col items-center sm:text-lg">
          {user.followers.length} <span>Followers</span>
        </div>

        <div className="flex flex-col items-center sm:text-lg">
          {user.following.length} <span>Following</span>
        </div>
        {/* <div>{user..length} Following </div> */}
      </div>
      {userPost.length > 0 ? (
        userPost.map((post) => <PostCard post={post} />)
      ) : (
        <h4>No posts yet! </h4>
      )}
    </div>
  );
};
