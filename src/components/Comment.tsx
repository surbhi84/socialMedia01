import { commentsType } from "appRedux/postSlice";
import { Link } from "react-router-dom";

export const Comment = ({ comment }: { comment: commentsType }) => {
  return (
    <div className="flex flex-row items-center gap-3 rounded-lg p-2 dark:bg-darkLight ">
      <Link to={`/profile/${comment.username}`}>
        <img
          src={
            comment.userAvatar !== undefined
              ? comment.userAvatar
              : "/assets/bunny1.jpg"
          }
          alt="avatar image"
          className=" w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
      </Link>

      <div>
        <span className="flex gap-1 flex-wrap text-primaryDark dark:text-primary">
          <Link to={`/profile/${comment.username}`} className="flex gap-1">
            <h5>{comment.firstName + " " + comment.lastName}</h5>
            <span className=" text-primaryDark "> @{comment.username}</span>
          </Link>
          <span className="text-sm dark:text-white self-center">commented</span>
        </span>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
