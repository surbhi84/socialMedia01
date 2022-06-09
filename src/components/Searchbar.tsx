import { getUsers } from "apiCalls";
import { useCallback, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { search } from "fast-fuzzy";
import { userTypeRaw } from "appRedux/userSlice";
import { time } from "console";
import { UserTile } from "./UserTile";

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<Array<userTypeRaw>>([]);
  const [users, setUsers] = useState<Array<userTypeRaw>>([]);

  useEffect(() => {
    (async function () {
      let allUsers = await getUsers().then((res) => res.data.users);
      setUsers(allUsers);
    })();
  }, []);

  console.log(users, "allUsers");

  function searchInputHandler(
    searchQuery: string,
    users: Array<userTypeRaw>,
    setSearchResult: React.Dispatch<React.SetStateAction<userTypeRaw[]>>
  ) {
    console.log(searchQuery, "searchQyery");
    if (searchQuery.trim() !== "") {
      const searchRes = search(searchQuery.trim(), users, {
        keySelector: (obj) => [obj.username, obj.firstName, obj.lastName],
        threshold: 0.7,
        // ignoreCase: true,
      });
      console.log(searchRes, "searchRes");
      setSearchResult(searchRes);
    } else {
      console.log("else");

      setSearchResult([]);
    }
  }

  const debounceFun = (callbackFun: CallableFunction, timeout = 100) => {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => callbackFun(...args), timeout);
    };
  };

  const debouncedSearch = useCallback(
    debounceFun(
      (
        searchTerms: string,
        users: Array<userTypeRaw>,
        setSearchQuery: React.Dispatch<React.SetStateAction<string>>
      ) => {
        console.log("inside debouncesearch", users);
        searchInputHandler(searchTerms, users, setSearchResult);
      }
    ),
    []
  );

  // console.log(searchQuery,"sea");

  return (
    <div className="flex flex-col gap-2">
      <label className=" flex flex-row border h-8 rounded-md border-primaryDark ">
        <FiSearch className=" text-xl text-primaryDark self-center m-2 " />
        <input
          type="Search"
          placeholder="Search here"
          className=" outline-none m-1 bg-transparent "
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            debouncedSearch(e.target.value, users, setSearchResult);
          }}
        />
      </label>
      {searchResult.length > 0 && (
        <>
          <h4>Search Results</h4>
          {searchResult.map((searchedUser) => (
            <UserTile user={searchedUser} key={searchedUser._id} />
          ))}
        </>
      )}
    </div>
  );
};
