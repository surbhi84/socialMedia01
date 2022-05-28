import { useState } from "react";

import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi";

export const PostCard = () => {
  const [like, setLike] = useState(false);
  return (
    <div className="flex flex-row gap-2 dark:bg-darkLight rounded-lg p-3 ">
      <img
        src="/assets/bunny1.jpg"
        alt="avatar image"
        className=" w-12 h-12 rounded-full "
      />
      <div className=" flex flex-col gap-2 ">
        <div>
          <div className="flex flex-row items-center gap-1 text-primaryDark dark:text-primary ">
            <h4>Surbhi Kukreti</h4>
            <span className=" text-primaryDark"> @skukreti</span>
            <span className="h-1 w-1 rounded-full bg-primaryDark "></span>
            <span className="text-sm">2m ago</span>
          </div>
          <div className="flex flex-col mt-2 gap-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              quo perferendis, eos impedit laudantium et incidunt officia hic!
              Sunt temporm soluta!
            </p>
            <img
              src="/assets/hog.png"
              alt="user post"
              className=" h-60 w-full"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              molestia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quis, voluptatibus. Eligendi dolorum provident repudiandae sed
              architecto incidunt iste nemo cum ipsam. Eius aperiam distinction.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-6 ml-auto text-primaryDark dark:text-primary text-2xl">
          {like ? (
            <RiHeart2Fill
              onClick={() => setLike(false)}
              className="hover:scale-110"
            />
          ) : (
            <RiHeart2Line
              onClick={() => setLike(true)}
              className="hover:scale-110"
            />
          )}
          <BiCommentDetail className="hover:scale-110" />
          {like ? (
            <HiBookmark
              onClick={() => setLike(false)}
              className="hover:scale-110"
            />
          ) : (
            <HiOutlineBookmark
              onClick={() => setLike(true)}
              className="hover:scale-110"
            />
          )}
        </div>
      </div>
    </div>
  );
};
