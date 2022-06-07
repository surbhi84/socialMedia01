import { posts, postType } from "backend/db/posts";
import { Createpost, DisplayPosts, Searchbar, SuggestionBox } from "components";
import { useAppSelector } from "hooks";

export const Home = () => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.userData.user);

  const posts = postsData.filter((post) =>
    user.following.includes(post.username)
  );

  // console.log(postsData, user, posts);

  return (
    <>
      {/* {user.following !== undefined ? ( */}
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
      {/* ) : (
        // <Loader />
        <p>LOADING</p> */}
      {/* )} */}
    </>
  );
};
