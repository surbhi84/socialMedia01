import { getUsers } from "apiCalls";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SuggestionBox = () => {
  const [users, setUsers] = useState<Array<any>>([]);

  useEffect(() => {
    (async function () {
      let response = await getUsers().then((res) => res.data.users);
      setUsers(response);
    })();
  }, []);

  return (
    <div>
      <h3 className=" my-4 ">Who to Follow?</h3>

      <div className=" flex flex-col gap-2 ">
        {users.map((user) => {
          return (
            <div className="flex " key={user.id}>
              <Link
                to="/home"
                className=" flex flex-row items-center gap-1 md:gap-2 "
              >
                <img
                  src="/assets/bunny1.jpg"
                  alt="avatar image"
                  className=" w-10 h-10 rounded-full "
                />
                <div className=" flex flex-col ">
                  {user.firstName + " " + user.lastName}
                  <div className=" text-darkCol dark:text-slate-200 ">
                    {user.username}
                  </div>
                </div>
              </Link>
              <button className=" text-primaryDark ml-auto hover:scale-105 duration-75 ">
                Follow+
              </button>
            </div>
          );
        })}
        <button className="bg-primaryLight px-2 py-1 w-full rounded-md dark:bg-darkLight hover:scale-105 duration-100 ml-auto">
          Show more{" "}
        </button>
      </div>
    </div>
  );
};
