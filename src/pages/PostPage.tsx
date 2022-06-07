import { postType } from "backend/db/posts";
import { useAppSelector } from "hooks";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

import { useParams } from "react-router-dom";
import {
  AddComment,
  Sidebar,
  PostCard,
  Comment,
  DeletePopup,
  Createpost,
} from "components";

export const PostPage = () => {
  const { postid } = useParams();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const userData = useAppSelector((state) => state.userData);
  const posts = useAppSelector((state) => state.posts.posts);
  const post = posts.find((i) => i._id === postid);

  const editPostHandler = () => {
    setIsEditPost(true);
    setShowOptions(false);
  };
  console.log(userData, "user from postpage redux");

  return (
    <>
      {post !== undefined && Object.keys(post).length !== 0 ? (
        <div
          className={`flex flex-col md:flex-row gap-4 p-4 min-h-screen dark:bg-darkCol dark:text-white overflow-hidden ${
            showDeletePopup ? "overscroll-none" : ""
          }`}
        >
          {showDeletePopup && (
            <DeletePopup setShowDeletePopup={setShowDeletePopup} post={post} />
          )}

          <div className="flex flex-col ">
            <div className="flex relative">
              {post?.username === userData.user.username && (
                <BsThreeDots
                  className=" text-primaryDark dark:text-primary text-xl hover:scale-110 ml-auto mx-4"
                  onClick={() => setShowOptions((p) => !p)}
                />
              )}
              {showOptions && post?.username === userData.user.username && (
                <div className="flex flex-col dark:text-primary p-1 rounded-md absolute right-0 top-5 dark:bg-darker z-10 bg-primaryLight ">
                  <span
                    className="flex items-center gap-1 mx-1 hover:scale-105 dark:hover:bg-darkCol dark:bg-darker  p-1 rounded-md "
                    onClick={editPostHandler}
                  >
                    Edit
                    <FiEdit2 />
                  </span>
                  <span className="bg-darkCol h-[0.1rem]"></span>
                  <span
                    className="flex items-center mx-1 hover:scale-105 dark:hover:bg-darkCol dark:bg-darker p-1 rounded-md "
                    onClick={() => {
                      setShowOptions(false);
                      setShowDeletePopup(true);
                    }}
                  >
                    Delete
                    <MdDelete className="text-xl text-rp" />
                  </span>
                </div>
              )}
            </div>
            {isEditPost ? (
              <Createpost
                post={post as postType}
                setIsEditPost={setIsEditPost}
              />
            ) : (
              <PostCard post={post as postType} />
            )}
            {posts
              .find((i) => i._id === postid)
              ?.comments.map((comment) => (
                <Comment comment={comment} key={comment._id} />
              ))}
            <AddComment postId={post._id} />
          </div>
        </div>
      ) : (
        <p>no post found </p>
      )}
    </>
  );
};
