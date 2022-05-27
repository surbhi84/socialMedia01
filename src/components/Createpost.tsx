import {
  MdOutlineAddReaction,
  MdOutlineAddPhotoAlternate,
} from "react-icons/md";

export const Createpost = () => {
  return (
    <div className="flex flex-col gap-4 p-2 xs:px-8 w-full md:w-3/5 rounded-lg py-4 dark:bg-darker dark:text-primary ">
      <div className=" flex flex-row gap-2 ">
        <img
          src="/assets/bunny1.jpg"
          alt="avatar"
          className="w-12 h-12 rounded-full  "
        />
        <div className="flex flex-col border border-primaryDark dark:border-primary rounded-xl px-2 py-1 h-28 w-full dark:bg-darkCol dark:hover:bg-darkLight ">
          Add a post...
          <div className=" flex flex-row ml-auto mt-auto gap-1 sm:gap-2 text-darkCol dark:text-primary">
            <span className=" flex flex-row items-center px-2 py-1 gap-1 w-fit rounded-full dark:bg-darkCol hover:bg-primaryLight dark:hover:bg-darkCol">
              <span className=" hidden sm:inline "> Add emoticons</span>
              <MdOutlineAddReaction className=" text-xl" />
            </span>
            <span className=" flex flex-row items-center px-3 py-1 gap-1 w-fit rounded-full dark:bg-darkCol hover:bg-primaryLight dark:hover:bg-darkCol">
              <span className=" hidden sm:inline "> Add Images</span>
              <MdOutlineAddPhotoAlternate className=" text-xl " />
            </span>
          </div>
        </div>
      </div>

      <button className="bg-primaryLight px-2 py-1 rounded-md dark:bg-darkLight hover:scale-105 duration-100">
        Add post
      </button>
    </div>
  );
};
