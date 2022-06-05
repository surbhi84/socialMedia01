import { postType } from "backend/db/posts";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddComment, Sidebar, PostCard, Comment } from "components";

export const PostPage = () => {
  const { postid } = useParams();
  //   const userData = useAppSelector((state) => state.userData);
  const posts = useAppSelector((state) => state.posts.posts);
  const post = posts.find((i) => i._id === postid);
  console.log(
    posts,
    postid,
    posts.find((i) => i._id === postid)
  );

  console.log(post);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full min-h-screen  dark:bg-darkCol dark:text-white ">
      <Sidebar />
      <PostCard post={post as postType} />
      <Comment />

      <AddComment />
    </div>
  );
};
