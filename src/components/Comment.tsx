import { commentsType } from "backend/db/posts";

export const Comment = ({ comment }: { comment: commentsType }) => {
  return (
    <div className="flex flex-col gap-1 rounded-lg p-3 my-3 dark:bg-darkLight ">
      <span className="flex gap-1 flex-wrap text-primaryDark dark:text-primary">
        <h5>{comment.firstName + " " + comment.lastName}</h5>
        <span className=" text-primaryDark "> @{comment.username}</span>
        <span className="text-sm dark:text-white self-center">commented</span>
      </span>
      <p>{comment.text}</p>
    </div>
  );
};
