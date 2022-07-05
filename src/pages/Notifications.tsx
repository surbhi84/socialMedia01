import { notification, removeNotifications } from "appRedux/miscSlice";
import { useAppSelector } from "hooks";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
export const Notifications = () => {
  const notificationsArray = useAppSelector(
    (state) => state.misc.notifications
  );

  const notifications = [...notificationsArray];

  const Notification = ({ notification }: { notification: notification }) => {
    const dispatch = useDispatch();
    const today = Date.now() / (1000 * 60);
    const timeDifference =
      typeof notification.time !== "string" &&
      Number((today - notification.time / (1000 * 60)).toFixed());

    return (
      <div className=" flex flex-row gap-3 rounded-lg p-3 justify-between items-center shadow-sm shadow-slate-400 dark:shadow-none dark:bg-darkLight">
        <span>
          {notification.text}
          <span className="flex-wrap text-primaryDark dark:text-primary m-2">
            {typeof notification.time !== "string"
              ? timeDifference < 1
                ? "just now"
                : timeDifference < 60
                ? timeDifference + "m ago"
                : Number(timeDifference) / 24 < 24
                ? Number(timeDifference) / 24 + "h ago"
                : ""
              : notification.time}
          </span>
        </span>
        <IoClose
          className="hover:text-primary"
          onClick={() => {
            dispatch(removeNotifications(notification.id));
          }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col md:w-[72%] gap-3">
      {notifications.length > 0 ? (
        notifications
          .reverse()
          .map((notification) => (
            <Notification notification={notification} key={notification.id} />
          ))
      ) : (
        <div className="flex flex-col gap-4 items-center w-full mt-8">
          <img src="/assets/no.svg" className="w-3/4 sm:w-2/4" />
          <h4 className="text-base xs:text-lg sm:text-2xl dark:text-primary text-center md:w-[72.5%]">
            No Notifications
          </h4>
        </div>
      )}
    </div>
  );
};
