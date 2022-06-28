import { postType } from "appRedux/postSlice";
import {
  Createpost,
  DisplayPosts,
  Loader,
  Searchbar,
  SuggestionBox,
} from "components";
import { ScrollFeedLayout } from "components/ScrollFeedLayout";
import { useAppSelector } from "hooks";

export const Home = () => {
  const postsData = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.userData.user);

  const posts = postsData.filter(
    (post) =>
      user.following.some(({ username }) => username === post.username) ||
      user.username === post.username
  );

  return (
    <ScrollFeedLayout
      feedContent={
        <>
          <Createpost post={{} as postType} />{" "}
          <DisplayPosts postsData={posts} />
        </>
      }
      secondSidebar={
        <>
          <Searchbar />
          <SuggestionBox />
        </>
      }
    />
  );
};
