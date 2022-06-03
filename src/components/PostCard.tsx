import { useState } from "react";
import { postType } from "backend/db/posts";

import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { addBookmark, dislikePost, likePost, removeBookmark } from "apiCalls";
import { useAppSelector } from "hooks";

export const PostCard = ({ post }: { post: postType }) => {
  const userData = useAppSelector((state) => state.userData);
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const postDate = new Date(post.createdAt);
  const postTime = new Date(post.createdAt).getTime() / (1000 * 60);
  const today = Date.now() / (1000 * 60);

  //  timeDifference in minutes
  const timeDifference = Number((today - postTime).toFixed());

  const addLikeHandler = async () => {
    await likePost(post._id, userData.encodedToken);
    setLike(true);
  };

  const removeLikeHandler = async () => {
    await dislikePost(post._id, userData.encodedToken);
    setLike(false);
  };

  const addBookmarkHandler = async () => {
    setBookmark(true);
    const res = await addBookmark(post._id, userData.encodedToken);
    console.log(res);
  };

  const removeBookmarkHandler = async () => {
    setBookmark(false);
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
            {
              post?.img?.length > 0 && (
                //   post.img.map((i) => (
                <img src={post.img} alt="user post" className=" h-60 " />
              )
              //   ))
            }
          </div>
        </div>
        <div className=" flex flex-row items-center gap-6 ml-auto text-primaryDark dark:text-primary text-2xl ">
          <span className=" flex items-center gap-2 ">
            {like ? (
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
          {bookmark ? (
            <BsBookmarkFill
              onClick={removeBookmarkHandler}
              className=" hover:scale-110 "
            />
          ) : (
            <BsBookmark
              onClick={addBookmarkHandler}
              className=" hover:scale-110 "
            />
          )}
        </div>
      </div>
    </div>
  );
};
