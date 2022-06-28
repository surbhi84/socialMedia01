import { getPosts } from "apiCalls";
import { setPosts } from "appRedux/postSlice";
import { PostCard, Searchbar, SuggestionBox } from "components";
import { ScrollFeedLayout } from "components/ScrollFeedLayout";
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
    <ScrollFeedLayout
      feedContent={
        <>
          <div className=" md:hidden">
            <Searchbar />
          </div>
          <div className="flex flex-col gap-6">
            {postsData.map((post) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
        </>
      }
      secondSidebar={
        <>
          <Searchbar />
          <SuggestionBox />
        </>
      }
    />
  );
};
