import { PostCard, Searchbar, SuggestionBox } from "components";
import { useAppSelector } from "hooks";

export const Explore = () => {
  const postsData = useAppSelector((state) => state.posts.posts);

  return (
    <>
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        {postsData.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
      <div className="invisible md:visible">
        <Searchbar />
        <SuggestionBox />
      </div>
    </>
  );
};
