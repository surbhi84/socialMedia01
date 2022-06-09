import { postType } from "appRedux/postSlice";
import {
  Createpost,
  DisplayPosts,
  Loader,
  Searchbar,
  SuggestionBox,
} from "components";
import { useAppSelector } from "hooks";
import { Link } from "react-router-dom";

export const Home = () => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.userData.user);

  const posts = postsData.filter(
    (post) =>
      user.following.some(({ username }) => username === post.username) ||
      user.username === post.username
  );

  return (
    <>
      {/* Main content, feed */}
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        <Createpost post={{} as postType} />
        <DisplayPosts postsData={posts} />
      </div>
      {/* Suggestions */}
      <div className="invisible md:visible">
        <Searchbar />
        <SuggestionBox />
      </div>
    </>
  );
};
