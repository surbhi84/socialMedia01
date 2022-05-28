import { Link } from "react-router-dom";

export const SuggestionBox = () => {
  return (
    <div>
      <h3 className=" my-4 ">Who to Follow?</h3>

      <div className=" flex flex-col gap-2 ">
        {" "}
        {[0, 1, 2, 3].map((i) => {
          return (
            <div className="flex ">
              <Link to="/home" className=" flex flex-row items-center gap-4 ">
                <img
                  src="/assets/bunny1.jpg"
                  alt="avatar image"
                  className=" w-10 h-10 rounded-full "
                />
                <div className=" flex flex-col ">
                  Surbhi Kukreti
                  <div className=" text-darkCol ">@sskukreti</div>
                </div>
              </Link>
              <button className=" text-primaryDark ml-auto hover:scale-105 duration-75 ">
                Follow+
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
