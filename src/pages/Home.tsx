import {
  AddComment,
  Comment,
  Createpost,
  DisplayPosts,
  Searchbar,
  Sidebar,
  SuggestionBox,
} from "components";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full min-h-screen sm:justify-center dark:bg-darkCol dark:text-white ">
      <Sidebar />
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        <Createpost />
        <DisplayPosts />
        <AddComment />
        <Comment />
      </div>
      <div>
        <Searchbar />
        <SuggestionBox />
      </div>
    </div>
  );
};
