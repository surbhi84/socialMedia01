import { useAppSelector } from "hooks";
import { IoClose } from "react-icons/io5";
export const Notifications = () => {
  const notificationsArray = useAppSelector(
    (state) => state.misc.notifications
  );
  console.log(notificationsArray, "array");
  let notifications = notificationsArray.reverse();
  console.log(notifications, "noti");

  return (
    <div className="flex flex-col md:w-[72%] gap-3">
      {notifications.length > 0 ? (
        notifications.reverse().map((notification) => (
          <div
            className=" flex flex-row gap-3 rounded-lg p-3 justify-between items-center shadow-sm shadow-slate-400 dark:shadow-none dark:bg-darkLight"
            key={notification.id}
          >
            <span>
              {notification.text}
              <span className="flex-wrap text-primaryDark dark:text-primary m-2">
                {notification.time}
              </span>
            </span>
            <IoClose className="hover:text-primary" />
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-4 items-center w-full md:w-[72%] mt-8">
          <img src="/assets/programming.svg" className="w-3/4 sm:w-2/4" />
          <h4 className="text-base xs:text-lg sm:text-2xl dark:text-primary text-center md:w-[72.5%]">
            No Notifications
          </h4>
        </div>
      )}
    </div>
  );
};
