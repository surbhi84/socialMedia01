import {
  Createpost,
  PostCard,
  Searchbar,
  Sidebar,
  SuggestionBox,
} from "components";

export const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 w-full sm:justify-center dark:bg-darkCol dark:text-white  ">
      {/* <div className=""> */}
      <Sidebar />
      {/* </div> */}
      <div className="flex flex-col sm:3/5 md:w-2/4 lg:w-2/4 gap-2">
        <Createpost />
        <PostCard />
      </div>
      <div>
        <Searchbar />
        <SuggestionBox />
      </div>
    </div>
  );
};
