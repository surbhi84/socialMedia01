import { getPosts } from "apiCalls";
import { postType, setPosts } from "appRedux/postSlice";

import { useAppDispatch } from "hooks";
import { useEffect } from "react";
import { PostCard } from "./PostCard";

export const DisplayPosts = ({ postsData }: { postsData: Array<postType> }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      const response = await getPosts().then((res) => res.data.posts);
      dispatch(setPosts(response));
    })();
  }, []);

  function sortByTime() {
    return [...postsData].sort((a: postType, b: postType) => {
      let date1 = new Date(a.createdAt);
      let date2 = new Date(b.createdAt);
      return date2.getTime() - date1.getTime();
    });
  }

  return (
    <div className="flex flex-col gap-6 my-2">
      {sortByTime().map((post: postType) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </div>
  );
};
