import { IoClose } from "react-icons/io5";
export const Notifications = () => {
  let notifications: any[] = [1];
  return (
    <>
      {notifications.length > 0 ? (
        <div className=" flex flex-col gap-4 w-full md:w-[72%] mt-8">
          <div className=" flex flex-row gap-3 rounded-lg p-3 my-3 justify-between items-center shadow-sm shadow-slate-400 dark:shadow-none dark:bg-darkLight  ">
            <span>
              Avinash and jatin commented on your post
              <span className="flex-wrap text-primaryDark dark:text-primary m-2">
                a few mins ago
              </span>
            </span>
            <IoClose className="hover:text-primary" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center w-full md:w-[72%] mt-8">
          <img src="/assets/programming.svg" className="w-3/4 sm:w-2/4" />
          <h4 className="text-base xs:text-lg sm:text-2xl dark:text-primary text-center md:w-[72.5%]">
            No Notifications
          </h4>
        </div>
      )}
    </>
  );
};
