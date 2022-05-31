import { useState } from "react";
import { postType } from "backend/db/posts";

import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi";

export const PostCard = ({ post }: { post: postType }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  return (
    <div className="flex flex-row gap-2 dark:bg-darkLight rounded-lg p-3 my-3">
      <img
        src="/assets/bunny1.jpg"
        alt="avatar image"
        className=" w-12 h-12 rounded-full "
      />
      <div className=" flex flex-col gap-2 ">
        <div>
          <div className="flex flex-row items-center gap-1 text-primaryDark dark:text-primary ">
            <h4>{post.firstName + " " + post.lastName} </h4>
            <span className=" text-primaryDark"> @{post.username}</span>
            <span className="h-1 w-1 rounded-full bg-primaryDark "></span>
            <span className="text-sm">2m ago</span>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <p>{post.content}</p>
            <img
              src="/assets/hog.png"
              alt="user post"
              className=" h-60 w-full"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-6 ml-auto text-primaryDark dark:text-primary text-2xl">
          <span className="flex items-center gap-2">
            {like ? (
              <RiHeart2Fill
                onClick={() => setLike(false)}
                className="hover:scale-110"
              />
            ) : (
              <RiHeart2Line
                onClick={() => setLike(true)}
                className="hover:scale-110"
              />
            )}{" "}
            <span className="text-xl">{post.likes.likeCount}</span>
          </span>
          <span className="flex items-center gap-2">
            <BiCommentDetail className="hover:scale-110" />

            <span className="text-xl">{post.comments.length}</span>
          </span>
          {bookmark ? (
            <HiBookmark
              onClick={() => setBookmark(false)}
              className="hover:scale-110"
            />
          ) : (
            <HiOutlineBookmark
              onClick={() => setBookmark(true)}
              className="hover:scale-110"
            />
          )}
        </div>
      </div>
    </div>
  );
};
