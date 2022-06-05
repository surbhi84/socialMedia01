import { postType } from "backend/db/posts";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

import { useParams } from "react-router-dom";
import { AddComment, Sidebar, PostCard, Comment } from "components";
import { deletePost } from "apiCalls";
import { DeletePopup } from "./DeletePopup";

export const PostPage = () => {
  const { postid } = useParams();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const userData = useAppSelector((state) => state.userData);
  const posts = useAppSelector((state) => state.posts.posts);
  const post = posts.find((i) => i._id === postid);
  console.log(
    posts,
    postid,
    posts.find((i) => i._id === postid)
  );

  console.log(post);

  return (
    <>
      {post !== undefined && Object.keys(post).length !== 0 ? (
        <div
          className={`flex flex-col md:flex-row gap-4 p-4 min-h-screen dark:bg-darkCol dark:text-white overflow-hidden ${
            showDeletePopup ? "overscroll-none" : ""
          }`}
        >
          {showDeletePopup && (
            <DeletePopup
              setShowDeletePopup={setShowDeletePopup}
              postId={post._id}
            />
          )}
          <Sidebar />
          <div className="flex flex-col w-full">
            {/* {post?.username === userData.user.username && (
       <BsThreeDots className=" text-primaryDark dark:text-primary text-xl hover:scale-110 ml-auto mx-4" />
     )} */}
            <PostCard post={post as postType} />
            <Comment />
            <AddComment />
            {post?.username === userData.user.username && (
              <div className="flex text-primaryDark dark:text-primary">
                <FiEdit2 className=" text-xl hover:scale-110" />
                <MdDelete
                  className="text-2xl hover:scale-110"
                  onClick={() => setShowDeletePopup(true)}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>no post found </p>
      )}
    </>
  );
};
