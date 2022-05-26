import {
  MdOutlineAddReaction,
  MdOutlineAddPhotoAlternate,
} from "react-icons/md";

export const Createpost = () => {
  return (
    <div className="flex flex-col gap-4  h-36 w-96 rounded-lg p-4 dark:bg-darker dark:text-primary">
      <div className=" flex flex-row gap-2 ">
        <img
          src="/assets/bunny1.jpg"
          alt="avatar"
          className=" h-8 rounded-full  "
        />
        <div className=" border border-primaryDark dark:border-primary  rounded-xl px-2 py-1 h-16 w-full dark:bg-darkCol hover:bg-primaryLight">
          Add a post...
        </div>
      </div>
      <div className=" flex flex-row ml-auto gap-2 text-darkCol dark:text-primary">
        <span className=" flex flex-row items-center px-2 py-1  w-fit rounded-full dark:bg-darkCol hover:bg-primaryLight ">
          Add emoticons
          <MdOutlineAddReaction className="dark:text-primary text-xl ml-1" />
        </span>
        <span className=" flex flex-row items-center px-3 py-1  w-fit rounded-full dark:bg-darkCol hover:bg-primaryLight">
          Add emoticons
          <MdOutlineAddPhotoAlternate className="dark:text-primary text-xl ml-1" />
        </span>
      </div>
    </div>
  );
};
