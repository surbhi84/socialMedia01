import { useEffect, useState } from "react";
import { postType } from "backend/db/posts";

import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

import { addBookmark, dislikePost, likePost, removeBookmark } from "apiCalls";
import { useAppSelector } from "hooks";
import { useDispatch } from "react-redux";
import { addLike, removeLike } from "appRedux/postSlice";
import { removeAsBookmark, setAsBookmark } from "appRedux/userSlice";

export const PostCard = ({ post }: { post: postType }) => {
  const userData = useAppSelector((state) => state.userData);
  const postDate = new Date(post.createdAt);
  const postTime = new Date(post.createdAt).getTime() / (1000 * 60);
  const today = Date.now() / (1000 * 60);
  const dispatch = useDispatch();

  //  timeDifference in minutes
  const timeDifference = Number((today - postTime).toFixed());

  const addLikeHandler = async () => {
    dispatch(addLike({ postId: post._id, like: 1, userId: userData.user._id }));
    await likePost(post._id, userData.encodedToken);
  };

  const removeLikeHandler = async () => {
    dispatch(
      removeLike({ postId: post._id, like: 1, userId: userData.user._id })
    );
    await dislikePost(post._id, userData.encodedToken);
  };

  const addBookmarkHandler = async () => {
    dispatch(setAsBookmark(post));
    const res = await addBookmark(post._id, userData.encodedToken);
  };

  const removeBookmarkHandler = async () => {
    dispatch(removeAsBookmark(post));
    const res = await removeBookmark(post._id, userData.encodedToken);
  };

  return (
    <div className="flex flex-row gap-2 dark:bg-darkLight rounded-lg p-3 my-3 w-full">
      <img
        src="/assets/bunny1.jpg"
        alt="avatar image"
        className=" w-12 h-12 rounded-full "
      />
      <div className=" flex flex-col gap-2 w-full ">
        <div>
          <div className="flex items-center gap-1 w-full text-primaryDark dark:text-primary ">
            <h4>{post.firstName + " " + post.lastName} </h4>
            <span className=" text-primaryDark"> @{post.username}</span>
            <span className="h-1 w-1 rounded-full bg-primaryDark "></span>
            <span className=" text-sm ">
              {timeDifference < 1
                ? "just now"
                : timeDifference < 60
                ? timeDifference + "m ago"
                : timeDifference / 24 < 24
                ? timeDifference / 24 + "h ago"
                : `${postDate.toString().slice(3, 10)}`}
            </span>
          </div>
          <div className=" flex flex-col mt-2 gap-1 ">
            <p>{post.content}</p>

            {post.img !== undefined && (
              <img src={post.img} alt="user post" className=" h-60 " />
            )}
          </div>
        </div>
        <div className=" flex flex-row items-center gap-6 ml-auto text-primaryDark dark:text-primary text-2xl ">
          <span className=" flex items-center gap-2 ">
            {post.likes.likedBy.some((id) => userData.user._id === id) ? (
              <RiHeart2Fill
                onClick={removeLikeHandler}
                className=" hover:scale-110 "
              />
            ) : (
              <RiHeart2Line
                onClick={addLikeHandler}
                className=" hover:scale-110 "
              />
            )}
            <span className=" text-xl ">{post.likes.likeCount}</span>
          </span>
          <span className=" flex items-center gap-2 ">
            <BiCommentDetail className=" hover:scale-110 " />

            <span className=" text-xl ">{post.comments.length}</span>
          </span>
          {userData.user.bookmarks.some(
            (bookmark) => post._id === bookmark._id
          ) ? (
            <MdBookmark
              onClick={removeBookmarkHandler}
              className=" hover:scale-110 "
            />
          ) : (
            <MdBookmarkBorder
              onClick={addBookmarkHandler}
              className=" hover:scale-110 "
            />
          )}
        </div>
      </div>
    </div>
  );
};
