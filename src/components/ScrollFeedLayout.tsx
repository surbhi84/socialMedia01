import { Searchbar } from "./Searchbar";

export const ScrollFeedLayout = ({
  feedContent,
  secondSidebar,
}: {
  feedContent: JSX.Element;
  secondSidebar: JSX.Element;
}) => {
  return (
    <div className=" md:w-[72%] flex flex-row gap-4 lg:gap-6 ">
      {/* Main content, feed */}
      <div className="flex flex-col gap-2 md:min-w-[68%]">{feedContent}</div>
      {/* Suggestions */}
      <div className="hidden md:flex flex-col  md:min-w-[32%]">
        {secondSidebar}
      </div>
    </div>
  );
};
