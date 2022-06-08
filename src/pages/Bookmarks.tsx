import { getBookmarks } from "apiCalls";
import { postType } from "appRedux/postSlice";

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

  return (
    <>
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        {bookmarks?.length > 0 &&
          bookmarks.map((bookmark: postType) => (
            <PostCard post={bookmark} key={bookmark._id} />
          ))}
      </div>
    </>
  );
};
