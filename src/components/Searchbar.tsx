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
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    (async function () {
      let allUsers = await getUsers().then((res) => res.data.users);
      setUsers(allUsers);
    })();
  }, []);

  function searchInputHandler(
    searchQuery: string,
    users: Array<userTypeRaw>,
    setSearchResult: React.Dispatch<React.SetStateAction<userTypeRaw[]>>,
    setShowNotFound: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    if (searchQuery.trim() !== "") {
      const searchRes = search(searchQuery.trim(), users, {
        keySelector: (obj) => [
          obj.username,
          obj.firstName,
          obj.lastName,
          obj.firstName + " " + obj.lastName,
        ],
        threshold: 0.7,
        ignoreCase: true,
      });
      setSearchResult(searchRes);
      if (searchRes.length === 0) {
        setShowNotFound(true);
      }
    } else {
      setSearchResult([]);
    }
  }

  const debounceFun = (callbackFun: CallableFunction, timeout = 1000) => {
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
        setSearchResult: React.Dispatch<React.SetStateAction<userTypeRaw[]>>,
        setShowNotFound: React.Dispatch<React.SetStateAction<boolean>>
      ) => {
        searchInputHandler(
          searchTerms,
          users,
          setSearchResult,
          setShowNotFound
        );
      }
    ),
    []
  );

  return (
    <div className="flex flex-col gap-2 w-full mb-2">
      <label className=" flex flex-row border h-8 rounded-md border-primaryDark ">
        <FiSearch className=" text-xl text-primaryDark self-center ml-2 " />
        <input
          type="Search"
          placeholder="Search here"
          className=" outline-none p-1 bg-transparent w-full"
          value={searchQuery}
          onChange={(e) => {
            setShowNotFound(false);
            setSearchQuery(e.target.value);
            debouncedSearch(
              e.target.value,
              users,
              setSearchResult,
              setShowNotFound
            );
          }}
        />
      </label>
      {searchResult.length > 0 ? (
        <>
          <h4>Search Results</h4>
          {searchResult.map((searchedUser) => (
            <UserTile user={searchedUser} key={searchedUser._id} />
          ))}
        </>
      ) : (
        showNotFound && (
          <div className="dark:bg-darker rounded-lg p-1 text-center">
            No Users Found !
          </div>
        )
      )}
    </div>
  );
};
