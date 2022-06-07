import { deletePost } from "apiCalls";
import { setError } from "appRedux/miscSlice";
import { setPosts } from "appRedux/postSlice";
import { postType } from "backend/db/posts";
import { useAppSelector } from "hooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DeletePopup = ({
  setShowDeletePopup,
  post,
}: {
  setShowDeletePopup: React.Dispatch<React.SetStateAction<boolean>>;
  post: postType;
}) => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const userData = useAppSelector((state) => state.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // the below code makes use of optimistic approach

  const postDeleteHandler = async () => {
    try {
      if (post._id !== undefined) {
        dispatch(setPosts(postsData.filter((post) => post._id === post._id)));
        setShowDeletePopup(false);
        navigate(-1);
        await deletePost(post._id, userData.encodedToken);
      }
    } catch (err) {
      setError("Oops something went wrong couldn't delete post!");
      dispatch(setPosts([...postsData, post]));
    }
  };

  return (
    <div className="fixed h-full w-full flex flex-col items-center justify-center bg-slate-600/40 dark:bg-gray-600/50 z-20 inset-0 ">
      <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-primaryDark bg-white dark:bg-darkCol dark:text-white">
        Are you sure to delete the post ?
        <div className="flex gap-2">
          <button
            className=" border border-primaryDark dark:border-primary dark:text-primary px-3 rounded-full text-base hover:scale-105 "
            onClick={postDeleteHandler}
          >
            Yes
          </button>
          <button
            className=" border border-primaryDark dark:border-primary dark:text-primary px-3 rounded-full text-base hover:scale-105 "
            onClick={() => {
              setShowDeletePopup(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
