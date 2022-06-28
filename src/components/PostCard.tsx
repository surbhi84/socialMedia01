import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

import { addBookmark, dislikePost, likePost, removeBookmark } from "apiCalls";
import { useAppSelector } from "hooks";
import { useDispatch } from "react-redux";
import { addLike, postType, removeLike } from "appRedux/postSlice";
import { removeAsBookmark, setAsBookmark } from "appRedux/userSlice";
import { Link, useNavigate } from "react-router-dom";

export const PostCard = ({ post }: { post: postType }) => {
  const userData = useAppSelector((state) => state.userData);
  const postDate = new Date(post.createdAt);
  const postTime = new Date(post.createdAt).getTime() / (1000 * 60);
  const today = Date.now() / (1000 * 60);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  timeDifference in minutes
  const timeDifference = Number((today - postTime).toFixed());

  const addLikeHandler = async () => {
    dispatch(addLike({ postId: post._id, userId: userData.user._id }));
    await likePost(post._id, userData.encodedToken);
  };

  const removeLikeHandler = async () => {
    dispatch(removeLike({ postId: post._id, userId: userData.user._id }));
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
    <div
      className=" flex flex-row gap-2 dark:bg-darkLight rounded-lg p-3 w-full shadow-sm shadow-slate-400 dark:shadow-none "
      onClick={() => {
        navigate(`/post/${post._id}`);
      }}
    >
      <Link to={`/profile/${post.username}`}>
        <img
          src={
            post.userAvatar !== "" || post.userAvatar !== undefined
              ? post.userAvatar
              : `/assets/bunny1.jpg`
          }
          loading="lazy"
          alt="avatar image"
          className=" w-12 h-12 rounded-full "
          onClick={(e) => e.stopPropagation()}
        />
      </Link>
      <div className=" flex flex-col gap-2 w-full ">
        <div>
          {/* POST DETAILS */}
          <div className="flex items-center flex-wrap gap-1 w-full text-primaryDark dark:text-primary ">
            <Link
              to={`/profile/${post.username}`}
              className="flex gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <h4>{post.firstName + " " + post.lastName} </h4>
              <span className=" text-primaryDark"> @{post.username}</span>
            </Link>

            <span className="h-1 w-1 rounded-full bg-primaryDark "></span>
            <span className=" text-sm self-center">
              {timeDifference < 1
                ? "just now"
                : timeDifference < 60
                ? timeDifference + "m ago"
                : timeDifference / 24 < 24
                ? timeDifference / 24 + "h ago"
                : `${postDate.toString().slice(3, 10)}`}
            </span>
          </div>

          {/* CONTENT DIV */}
          <div className=" flex flex-col mt-2 gap-1 ">
            <p>{post.content}</p>
            {post.img !== undefined && (
              <img
                src={post.img}
                alt="user post"
                className="max-h-72 object-cover mr-1 "
              />
            )}
          </div>
        </div>

        {/* INTERACTION BUTTONS */}
        <div className=" flex flex-row items-center gap-6 ml-auto text-primaryDark dark:text-primary text-2xl ">
          <span
            className=" flex items-center gap-2 "
            onClick={(e) => e.stopPropagation()}
          >
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

          <span
            className=" flex items-center gap-2 "
            onClick={() => navigate(`/post/${post._id}`)}
          >
            <BiCommentDetail className=" hover:scale-110 " />
            <span className=" text-xl ">{post.comments.length}</span>
          </span>

          <span onClick={(e) => e.stopPropagation()}>
            {userData?.user?.bookmarks?.some(
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
          </span>
        </div>
      </div>
    </div>
  );
};
