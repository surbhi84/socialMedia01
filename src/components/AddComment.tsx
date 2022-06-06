import { addPostComment } from "apiCalls";
import { addComment } from "appRedux/postSlice";
import { useAppSelector } from "hooks";
import { useState } from "react";

export const AddComment = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState("");
  const token = useAppSelector((state) => state.userData.encodedToken);

  const addCommentHandler = async () => {
    console.log(postId, comment, token);
    const response = await addPostComment(postId, comment, token).then(
      (res) => res.data.comments
    );
    console.log(response);
    addComment({ postId, comment: response });
    setComment("");
  };

  return (
    <div className="flex flex-col gap-2 mx-3">
      <textarea
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
        placeholder="Add a comment.."
        className={` w-full p-1 px-3 h-12 bg-transparent scrollbar-hide rounded-md outline-none resize-none border border-primaryDark`}
      />
      <button
        className="bg-primaryLight px-4 py-1 rounded-md dark:bg-darkLight dark:text-primary hover:scale-105 duration-100 ml-auto"
        onClick={addCommentHandler}
      >
        comment
      </button>
    </div>
  );
};
