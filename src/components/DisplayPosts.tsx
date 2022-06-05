import { getPosts } from "apiCalls";
import { setPosts } from "appRedux/postSlice";
import { postType } from "backend/db/posts";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { PostCard } from "./PostCard";

export const DisplayPosts = () => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      const response = await getPosts().then((res) => res.data.posts);
      dispatch(setPosts(response));
    })();
  }, []);

  return (
    <>
      {postsData.map((post: postType) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </>
  );
};
