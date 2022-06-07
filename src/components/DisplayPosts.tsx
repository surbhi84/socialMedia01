import { getPosts } from "apiCalls";
import { setPosts } from "appRedux/postSlice";
import { postType } from "backend/db/posts";
import { useAppDispatch, useAppSelector } from "hooks";
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
    console.log(postsData, [...postsData], "insidefunction");
    return [...postsData].sort((a: postType, b: postType) => {
      let date1 = new Date(a.createdAt);
      let date2 = new Date(b.createdAt);
      console.log(date2.getTime(), date1.getTime(), "dates");
      return date2.getTime() - date1.getTime();
    });
  }

  return (
    <>
      {sortByTime().map((post: postType) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </>
  );
};
