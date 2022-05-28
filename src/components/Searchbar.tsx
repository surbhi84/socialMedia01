import { FiSearch } from "react-icons/fi";
export const Searchbar = () => {
  return (
    <div>
      <label className=" flex flex-row border h-8 rounded-md border-primaryDark ">
        <FiSearch className=" text-xl text-primaryDark self-center m-2 " />
        <input
          type="Search"
          placeholder="Search here"
          className=" outline-none m-1 bg-transparent "
        />
      </label>
    </div>
  );
};
