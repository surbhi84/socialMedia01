import {
  Createpost,
  DisplayPosts,
  Searchbar,
  Sidebar,
  SuggestionBox,
} from "components";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full min-h-screen  dark:bg-darkCol dark:text-white ">
      <Sidebar />

      {/* Main content, feed */}
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        <Createpost />
        <DisplayPosts />
      </div>

      {/* Suggestions */}
      <div className="invisible md:visible">
        <Searchbar />
        <SuggestionBox />
      </div>
    </div>
  );
};
