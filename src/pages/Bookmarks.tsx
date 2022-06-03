import { getBookmarks } from "apiCalls";
import { postType } from "backend/db/posts";
import { PostCard, Sidebar } from "components";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";

export const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const token = useAppSelector((state) => state.userData.encodedToken);

  useEffect(() => {
    (async () => {
      const response = await getBookmarks(token).then(
        (res) => res.data.bookmarks
      );
      setBookmarks(response);
    })();
  }, []);

  console.log(bookmarks);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full min-h-screen sm:justify-center dark:bg-darkCol dark:text-white ">
      <Sidebar />
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        {bookmarks?.length > 0 &&
          bookmarks.map((bookmark: postType) => (
            <PostCard post={bookmark} key={bookmark._id} />
          ))}
      </div>
    </div>
  );
};
