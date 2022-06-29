import { editPost, postPost } from "apiCalls";
import { setPopup } from "appRedux/miscSlice";
import { postType, setPosts } from "appRedux/postSlice";
import { useAppSelector } from "hooks";
import { useEffect, useRef, useState } from "react";
import {
  MdOutlineAddReaction,
  MdOutlineAddPhotoAlternate,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

export const Createpost = ({
  post,
  setIsEditPost,
}: {
  post: postType;
  setIsEditPost?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const userData = useAppSelector((state) => state.userData);
  // filelist is used here so in future multiple images can be added as well
  const [uploadedImg, setUploadedImg] = useState<FileList | string>(
    post.img !== undefined ? post.img : ({} as FileList)
  );
  const [postText, setPostText] = useState(
    post.content !== undefined ? post.content : ""
  );
  const [showEmoji, setShowEmoji] = useState(false);
  const heightRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<Array<string>>([]);
  const dispatch = useDispatch();

  const emojiArray = [
    "😅",
    "😁",
    "😆",
    "😂",
    "😎",
    "😔",
    "🤗",
    "👍",
    "❤",
    "💜",
    "💔",
    "🔥",
    "🙏",
    "👏",
    "✌",
    "♻",
  ];

  async function editPostHandler() {
    if (postText === "") {
      dispatch(setPopup("Please add some text!"));
    } else if (postText.length > 2) {
      try {
        const response = await editPost(
          post._id,
          postText,
          uploadedImg,
          userData.encodedToken
        ).then((res) => res.data.posts);
        dispatch(setPosts(response));
        if (setIsEditPost !== undefined) setIsEditPost(false);
      } catch (err) {
        setPopup("Something went wrong can't edit post!");
      }
    } else dispatch(setPopup("Text is too short!"));
  }

  async function postHandler() {
    if (postText === "") {
      dispatch(setPopup("Please add some text!"));
    } else if (postText.length > 2) {
      try {
        const response = await postPost(
          postText,
          uploadedImg as FileList,
          userData.encodedToken
        );

        dispatch(setPosts(response.data.posts));
        setPostText("");
        setUploadedImg({} as FileList);
        imgRef.current.forEach((i) => {
          window.URL.revokeObjectURL(i);
        });
        imgRef.current = [];
      } catch (err) {
        console.error(err);
      }
    } else dispatch(setPopup("Text is too short !"));
  }

  // The below useEffect releases the created url for the image that is shown inside the createpost component, as it is no longer needed it doesn't serve any purpose to have it in the memory.

  useEffect(() => {
    return () => {
      imgRef.current.forEach((i) => {
        window.URL.revokeObjectURL(i);
      });
      imgRef.current = [];
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 p-3 rounded-lg w-full dark:bg-darker dark:text-primary">
        {/* to hide emojitray upon random click */}
        {showEmoji && (
          <div
            onClick={() => setShowEmoji(false)}
            className="absolute bg-transparent h-full w-full top-0 left-0"
          ></div>
        )}
        <div className=" flex flex-row gap-2 ">
          <img
            src={userData.user.userAvatar}
            alt="avatar"
            className=" w-12 h-12 rounded-full "
          />
          <div className="flex flex-col border border-primaryDark dark:border-primary rounded-xl px-2 py-1 h-fit w-full dark:bg-darkCol dark:hover:bg-darkLight ">
            <textarea
              ref={heightRef}
              value={postText}
              placeholder="Add a post..."
              className={` w-full mb-1 p-1 h-8 bg-transparent scrollbar-hide rounded-md outline-none resize-none `}
              onChange={(e) => setPostText(e.target.value)}
              style={{ height: heightRef.current?.scrollHeight }}
            />

            {typeof uploadedImg === "string" ? (
              <div className="flex">
                <img
                  src={uploadedImg}
                  alt="post image"
                  className="h-20 w-32 my-1"
                />
                <IoClose
                  className="hover:scale-110"
                  onClick={() => setUploadedImg("")}
                />
              </div>
            ) : (
              Object.values(uploadedImg).map((i) => {
                const localVar = window.URL.createObjectURL(i);
                imgRef.current.push(localVar);
                return (
                  <div className="flex" key={i.name}>
                    <img
                      src={localVar}
                      alt={i.name}
                      className="h-20 w-32 my-1"
                    />
                    <IoClose
                      className="hover:scale-110"
                      onClick={() => setUploadedImg({} as FileList)}
                    />
                  </div>
                );
              })
            )}

            <div className=" flex flex-row relative ml-auto mt-auto gap-1 sm:gap-2 text-darkCol dark:text-primary">
              <span
                className=" flex flex-row items-center px-2 py-1 gap-1 w-fit rounded-full dark:bg-darkCol hover:bg-primaryLight dark:hover:bg-darkCol"
                onClick={() => setShowEmoji((p) => !p)}
              >
                <span className=" hidden sm:inline"> Add emoticons</span>
                <MdOutlineAddReaction className=" text-xl" />
              </span>

              {/* Emoji tray */}
              {showEmoji && (
                <div className="flex flex-row flex-wrap justify-center h-fit w-60 mt-2 bg-primaryLight dark:bg-darkLight rounded-md absolute top-full right-[-0.7rem]">
                  {emojiArray.map((emo) => (
                    <span
                      key={emo}
                      className=" m-1"
                      onClick={(event) => {
                        event.stopPropagation();
                        setPostText((p) => p + emo);
                      }}
                    >
                      {emo}
                    </span>
                  ))}
                </div>
              )}

              <label className=" flex flex-row items-center px-3 py-1 gap-1 w-fit rounded-full dark:bg-darkCol hover:bg-primaryLight dark:hover:bg-darkCol">
                <span className=" hidden sm:inline "> Add Images</span>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={(e) => {
                    if (e?.target?.files) {
                      console.log(e.target.files);
                      setUploadedImg(e.target.files);
                    }
                  }}
                />
                <span>
                  <MdOutlineAddPhotoAlternate className=" text-xl " />
                </span>
              </label>
            </div>
          </div>
        </div>
        {post._id !== undefined ? (
          <button
            className="bg-primaryLight px-2 py-1 w-44 rounded-md dark:bg-darkLight hover:scale-105 duration-100 ml-auto"
            onClick={editPostHandler}
          >
            Save changes
          </button>
        ) : (
          <button
            className="bg-primaryLight px-2 py-1 w-44 rounded-md dark:bg-darkLight hover:scale-105 duration-100 ml-auto"
            onClick={postHandler}
          >
            Add post
          </button>
        )}
      </div>
    </>
  );
};
