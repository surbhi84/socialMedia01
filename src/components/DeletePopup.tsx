import { deletePost } from "apiCalls";
import { useAppSelector } from "hooks";
import { useNavigate } from "react-router-dom";

export const DeletePopup = ({
  setShowDeletePopup,
  postId,
}: {
  setShowDeletePopup: React.Dispatch<React.SetStateAction<boolean>>;
  postId: string;
}) => {
  const userData = useAppSelector((state) => state.userData);
  const navigate = useNavigate();

  const postDeleteHandler = async () => {
    if (postId !== undefined) deletePost(postId, userData.encodedToken);
    setShowDeletePopup(false);
    navigate(-1);
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
