import { postType } from "appRedux/postSlice";
import {
  Createpost,
  DisplayPosts,
  Loader,
  Searchbar,
  SuggestionBox,
} from "components";
import { useAppSelector } from "hooks";

export const Home = () => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.userData.user);

  const posts = postsData.filter(
    (post) =>
      user.following.some(({ username }) => username === post.username) ||
      user.username === post.username
  );

  return (
    <div className="md:w-[72%] flex flex-row gap-6 sm:3/5">
      {/* Main content, feed */}
      <div className="flex flex-col  gap-2">
        <Createpost post={{} as postType} />
        <DisplayPosts postsData={posts} />
      </div>
      {/* Suggestions */}
      <div className="hidden md:flex flex-col">
        <Searchbar />
        <SuggestionBox />
      </div>
    </div>
  );
};
