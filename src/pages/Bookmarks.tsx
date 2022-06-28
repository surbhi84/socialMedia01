import { getBookmarks } from "apiCalls";
import { postType } from "appRedux/postSlice";

import { PostCard } from "components";
import { useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Array<postType>>();
  const userBookmarks = useAppSelector(
    (state) => state.userData.user.bookmarks
  );
  const token = useAppSelector((state) => state.userData.encodedToken);

  useEffect(() => {
    (async () => {
      const response = await getBookmarks(token).then(
        (res) => res.data.bookmarks
      );
      setBookmarks(response);
    })();
  }, [userBookmarks]);

  return (
    <>
      {bookmarks !== undefined && bookmarks?.length > 0 ? (
        <div className="flex flex-col sm:3/5 md:w-[72%]  gap-2">
          {bookmarks?.map((bookmark: postType) => (
            <PostCard post={bookmark} key={bookmark._id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center w-full  md:w-[72%] mt-8">
          <img src="/assets/bookmarks.svg" className="w-3/4 sm:w-2/4" />
          <Link to="/explore">
            <h4 className="text-base xs:text-lg sm:text-2xl dark:text-primary">
              Start adding Bookmarks
            </h4>
          </Link>
        </div>
      )}
    </>
  );
};
