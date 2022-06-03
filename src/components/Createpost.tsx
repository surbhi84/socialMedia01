import { postPost } from "apiCalls";
import { setPosts } from "appRedux/miscSlice";
import { useAppSelector } from "hooks";
import { useEffect, useRef, useState } from "react";
import {
  MdOutlineAddReaction,
  MdOutlineAddPhotoAlternate,
} from "react-icons/md";
import { useDispatch } from "react-redux";

export const Createpost = () => {
  const userData = useAppSelector((state) => state.userData);
  const [uploadedImg, setUploadedImg] = useState<FileList>({} as FileList);
  const [postText, setPostText] = useState("");
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

  async function postHandler() {
    try {
      const response = await postPost(
        postText,
        uploadedImg,
        userData.encodedToken
      ).then((res) => res.data);
      dispatch(setPosts(response));
      setPostText("");
      setUploadedImg({} as FileList);
      imgRef.current.forEach((i) => {
        window.URL.revokeObjectURL(i);
      });
      imgRef.current = [];
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    return () => {
      imgRef.current.forEach((i) => {
        window.URL.revokeObjectURL(i);
      });
      imgRef.current = [];
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 p-3 rounded-lg dark:bg-darker dark:text-primary">
      {/* to hide emojitray upon random click */}
      {showEmoji && (
        <div
          onClick={() => setShowEmoji(false)}
          className="absolute bg-transparent h-full w-full top-0 left-0"
        ></div>
      )}
      <div className=" flex flex-row gap-2 ">
        <img
          src="/assets/bunny1.jpg"
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

          {uploadedImg &&
            Object.values(uploadedImg).map((i) => {
              const localVar = window.URL.createObjectURL(i);
              imgRef.current.push(localVar);
              return (
                <img
                  key={i.name}
                  src={localVar}
                  alt={i.name}
                  className="h-20 w-32 my-1"
                />
              );
            })}

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
                  if (e?.target?.files) setUploadedImg(e.target.files);
                }}
              />
              <span>
                <MdOutlineAddPhotoAlternate className=" text-xl " />
              </span>
            </label>
          </div>
        </div>
      </div>

      <button
        className="bg-primaryLight px-2 py-1 w-44 rounded-md dark:bg-darkLight hover:scale-105 duration-100 ml-auto"
        onClick={postHandler}
      >
        Add post
      </button>
    </div>
  );
};
