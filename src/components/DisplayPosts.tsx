import { getPosts } from "apiCalls";
import { postType } from "backend/db/posts";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

export const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const postsData = useAppSelector((state) => state.misc.posts);

  useEffect(() => {
    (async function () {
      const response = await getPosts().then((res) => res.data.posts);
      setPosts(response);
    })();
  }, [postsData]);

  return (
    <>
      {posts.map((post: postType) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </>
  );
};
