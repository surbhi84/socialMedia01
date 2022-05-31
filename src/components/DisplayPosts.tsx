import { getPosts } from "apiCalls";
import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";

export const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await getPosts().then((res) => res.data.posts);
      console.log(response);
      setPosts(response);
    })();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
};
