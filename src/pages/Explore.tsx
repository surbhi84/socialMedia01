import { getPosts } from "apiCalls";
import { setPosts } from "appRedux/postSlice";
import { PostCard, Searchbar, SuggestionBox } from "components";
import { useAppSelector } from "hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Explore = () => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const posts = await getPosts().then((res) => res.data.posts);
      dispatch(setPosts(posts));
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        <div className=" sm:hidden">
          <Searchbar />
        </div>
        {postsData.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
      <div className="invisible md:visible">
        <Searchbar />
        <SuggestionBox />
      </div>
    </>
  );
};
